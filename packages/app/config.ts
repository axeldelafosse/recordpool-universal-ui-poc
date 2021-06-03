import Constants from 'expo-constants';

export const STAGE = (Constants.manifest.extra.STAGE ||
  process.env.STAGE ||
  process.env.NEXT_PUBLIC_STAGE ||
  'development') as 'development' | 'staging' | 'production';

const envConfig = {
  shared: {
    stage: STAGE
  },
  development: {
    website_url: 'http://localhost:3000',
    hasura_graphql_url: 'http://localhost:8080/v1/graphql',
    hasura_url: 'http://localhost:8080',
    hasura_hostname: 'localhost:8080',
    nest_graphql_url: 'http://localhost:4000/graphql',
    nest_url: 'http://localhost:4000',
    session_cookie: 'development_token',
    cookie_domain: 'localhost',
    scheme: 'com.pool.recordpool.development'
  },
  staging: {
    website_url: `https://${
      process.env.VERCEL_URL || 'staging.recordpool.app'
    }`,
    hasura_graphql_url: 'https://hasura.staging.recordpool.app/v1/graphql',
    hasura_url: 'https://hasura.staging.recordpool.app',
    hasura_hostname: 'hasura.staging.recordpool.app',
    nest_graphql_url: 'https://nest.staging.recordpool.app/graphql',
    nest_url: 'https://nest.staging.recordpool.app',
    session_cookie: 'staging_token',
    cookie_domain: '.staging.recordpool.app',
    scheme: 'com.pool.recordpool.staging'
  },
  production: {
    website_url: `https://recordpool.app`,
    hasura_graphql_url: 'https://hasura.recordpool.app/v1/graphql',
    hasura_url: 'https://hasura.recordpool.app',
    hasura_hostname: 'hasura.recordpool.app',
    nest_graphql_url: 'https://nest.recordpool.app/graphql',
    nest_url: 'https://nest.recordpool.app',
    session_cookie: 'production_token',
    cookie_domain: '.recordpool.app',
    scheme: 'com.pool.recordpool'
  }
};

export const config = {
  ...envConfig.shared,
  ...envConfig[STAGE]
};
