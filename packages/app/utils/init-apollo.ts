import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
  ApolloLink,
  split
} from '@apollo/client';

import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';

import { config } from '../config';
import { typePolicies } from './type-policies';
import { isServer } from './is-server';
// import { getToken } from './token';

let globalApolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const scheme = (proto: string) => {
  return config.stage === 'development' ? proto : `${proto}s`;
};

const wsurl = `${scheme('ws')}://${config.hasura_hostname}/v1/graphql`;
const httpurl = `${scheme('http')}://${config.hasura_hostname}/v1/graphql`;

interface CreateOptions {
  initialState?: NormalizedCacheObject;
  jwt?: string;
}

function createCache(initialState = {}) {
  return new InMemoryCache({
    typePolicies
  }).restore(initialState);
}

function getAuthMiddleware(jwt?: string) {
  return setContext(async (req, { headers }) => {
    const token = jwt; // ?? (await getToken());

    if (!token) return { headers };

    // Add the authorization to the headers
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
  });
}

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, extensions }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Code: ${extensions?.code}`
      )
    );

  if (networkError)
    console.error(
      `[Network error]: ${networkError.name} ${networkError.message}`
    );
});

function createClient({ initialState, jwt }: CreateOptions = {}) {
  // Create an http link
  const httpLink = new HttpLink({
    uri: httpurl
  });

  let link;

  if (!isServer) {
    // Create an upload link
    const multipartLink = createUploadLink({
      uri: config.nest_graphql_url
    });

    // Create a WebSocket link
    const wsLink = new WebSocketLink({
      uri: wsurl,
      options: {
        lazy: true,
        reconnect: true,
        connectionParams: async () => {
          const token = jwt; // ?? (await getToken());

          if (!token) return {};

          return {
            headers: {
              Authorization: token ? `Bearer ${token}` : ''
            }
          };
        }
      }
    });

    const subscriptionOrQueryLink = split(
      // Split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      httpLink
    );

    // We need send multipart GraphQL requests directly to API
    // see: https://github.com/hasura/graphql-engine/issues/2419
    link = split(
      ({ query }) => {
        const definition = getMainDefinition(query);

        const isSingleUpload = definition.variableDefinitions
          ? definition.variableDefinitions.some(
              ({ type }) =>
                type.kind === 'NonNullType' &&
                type.type.kind === 'NamedType' &&
                type.type.name.value === 'Upload'
            )
          : false;

        const isMultiUpload = definition.variableDefinitions
          ? definition.variableDefinitions.some(
              ({ type }) =>
                type.kind === 'ListType' &&
                type.type.kind === 'NonNullType' &&
                type.type.type.kind === 'NamedType' &&
                type.type.type.name.value === 'Upload'
            )
          : false;

        return isSingleUpload || isMultiUpload;
      },
      multipartLink,
      subscriptionOrQueryLink
    );
  }

  const retryLink = new RetryLink();
  const authMiddleware = getAuthMiddleware(jwt);
  const cache = createCache(initialState);

  return new ApolloClient({
    ssrMode: isServer,
    link: ApolloLink.from([
      errorLink,
      retryLink,
      authMiddleware,
      !isServer ? link : httpLink
    ]),
    cache
  });
}

export default function initApollo({ initialState, jwt }: CreateOptions = {}) {
  const _apolloClient =
    globalApolloClient ?? createClient({ initialState, jwt });

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    const previousState = _apolloClient.cache.extract() || {};
    const nextState = {
      ...initialState,
      ...previousState,
      ROOT_QUERY: {
        ...(initialState.ROOT_QUERY || {}),
        ...(previousState.ROOT_QUERY || {})
      }
    };
    _apolloClient.cache.restore(nextState);
  }

  // For Next.js SSG and SSR always create a new Apollo Client
  if (isServer) return _apolloClient;

  // Create the Apollo Client once in the client
  if (!globalApolloClient) globalApolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo({ initialState, jwt }: CreateOptions = {}) {
  const client = jwt
    ? initApollo({ initialState, jwt })
    : initApollo({ initialState });

  return client;
}
