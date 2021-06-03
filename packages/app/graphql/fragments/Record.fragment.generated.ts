// This file was generated using GraphQL Codegen. Command: `yarn generate-graphql-code`
// For more info and docs, visit https://graphql-code-generator.com/
import * as Types from '../types';

import { gql } from '@apollo/client';


export type RecordFragment = { __typename?: 'records', id: any, album?: Types.Maybe<string>, artist?: Types.Maybe<string>, bpm?: Types.Maybe<number>, duration?: Types.Maybe<string>, genre?: Types.Maybe<string>, key?: Types.Maybe<string>, label?: Types.Maybe<string>, mix?: Types.Maybe<string>, name?: Types.Maybe<string>, slug?: Types.Maybe<string>, image?: Types.Maybe<string>, title?: Types.Maybe<string>, youtubeId?: Types.Maybe<string>, beatportId?: Types.Maybe<number>, durationSeconds?: Types.Maybe<number>, openKey?: Types.Maybe<string>, createdAt: any, updatedAt: any };

export const RecordFragmentDoc = gql`
    fragment Record on records {
  id
  youtubeId: youtube_id
  beatportId: beatport_id
  album
  artist
  bpm
  duration
  durationSeconds: duration_seconds
  genre
  key
  openKey: open_key
  label
  mix
  name
  slug
  image
  title
  createdAt: created_at
  updatedAt: updated_at
}
    `;