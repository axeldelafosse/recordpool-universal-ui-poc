import '../styles/fonts.scss';
import '../styles/global.scss';

import 'raf/polyfill';
// @ts-ignore
global.setImmediate = requestAnimationFrame;
import 'setimmediate';

import { ApolloProvider } from '@apollo/client';
import { DripsyProvider } from 'dripsy';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Head from 'next/head';
import { AppProps } from 'next/app';

import Navigation from '../navigation';
import theme from 'app/design-system/theme';
import { useApollo } from 'app/utils/init-apollo';

export default function App({ Component, pageProps }: AppProps) {
  const { initialApolloState } = pageProps;
  const apolloClient = useApollo({ initialState: initialApolloState });

  return (
    <>
      <Head>
        <title>Record Pool</title>
        <meta key="title" name="title" content="Record Pool" />
        <meta
          key="description"
          name="description"
          content="Music discovery and playlist management"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <DripsyProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation />
            <Component {...pageProps} />
          </SafeAreaProvider>
        </DripsyProvider>
      </ApolloProvider>
    </>
  );
}
