module.exports = {
  overwrite: true,
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
          'X-Hasura-Role': 'user',
          'X-Hasura-User-Id': '0cc65efe-d2e7-4529-ae88-265e126149e2'
        }
      }
    }
  ],
  documents: ['**/*.graphql'],
  generates: {
    'graphql/types.ts': {
      plugins: ['typescript']
    },
    'graphql/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts'
      },
      config: {
        withHooks: true,
        withComponent: false,
        withHOC: false,
        withMutationFn: false,
        withRefetchFn: false,
        addDocBlocks: false,
        reactApolloVersion: 3,
        preResolveTypes: true,
        dedupeOperationSuffix: true
      },
      plugins: [
        {
          add: {
            content: [
              '// This file was generated using GraphQL Codegen. Command: `yarn generate-graphql-code`',
              '// For more info and docs, visit https://graphql-code-generator.com/'
            ]
          }
        },
        'typescript-operations',
        'typescript-react-apollo'
      ]
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
};
