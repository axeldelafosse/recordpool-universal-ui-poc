// This file was generated using GraphQL Codegen. Command: `yarn generate-graphql-code`
// For more info and docs, visit https://graphql-code-generator.com/
import * as Types from '../types';

import { gql } from '@apollo/client';


export type UserFragment = { __typename?: 'users', id: any, picture?: Types.Maybe<string>, locale?: Types.Maybe<string>, firstName?: Types.Maybe<string>, lastName?: Types.Maybe<string>, lastSeenAt?: Types.Maybe<any> };

export const UserFragmentDoc = gql`
    fragment User on users {
  id
  firstName: first_name
  lastName: last_name
  picture
  lastSeenAt: last_seen_at
  locale
}
    `;