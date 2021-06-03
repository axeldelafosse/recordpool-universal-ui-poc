// This file was generated using GraphQL Codegen. Command: `yarn generate-graphql-code`
// For more info and docs, visit https://graphql-code-generator.com/
import * as Types from '../types';

import { UserFragment } from './User.fragment.generated';
import { RecordFragment } from './Record.fragment.generated';
import { gql } from '@apollo/client';
import { UserFragmentDoc } from './User.fragment.generated';
import { RecordFragmentDoc } from './Record.fragment.generated';


export type CurrentUserFragment = (
  { __typename?: 'users', email: string, records: Array<{ __typename?: 'users_records', position: number, record: (
      { __typename?: 'records' }
      & RecordFragment
    ) }> }
  & UserFragment
);

export const CurrentUserFragmentDoc = gql`
    fragment CurrentUser on users {
  ...User
  email
  records: users_records(order_by: {position: asc}) {
    record {
      ...Record
    }
    position
  }
}
    ${UserFragmentDoc}
${RecordFragmentDoc}`;