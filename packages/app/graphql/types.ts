export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  date: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};


export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  reference: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  url: Scalars['String'];
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  nest_askResetUserPassword: SuccessObjectDto;
  nest_deleteFile: SuccessObjectDto;
  nest_loginUser: SessionObject;
  nest_resetUserPassword: SuccessObjectDto;
  nest_signupUser: SessionObject;
  nest_uploadFile: File;
  nest_userSetPassword: SuccessObjectDto;
  nest_userUploadProfilePicture: SuccessObjectDto;
};


export type MutationNest_AskResetUserPasswordArgs = {
  email: Scalars['String'];
};


export type MutationNest_DeleteFileArgs = {
  fileId: Scalars['String'];
};


export type MutationNest_LoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationNest_ResetUserPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationNest_SignupUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locale: Scalars['String'];
  password: Scalars['String'];
};


export type MutationNest_UploadFileArgs = {
  file: Scalars['Upload'];
  resourceId: Scalars['String'];
  resourceType: Scalars['String'];
};


export type MutationNest_UserSetPasswordArgs = {
  password: Scalars['String'];
};


export type MutationNest_UserUploadProfilePictureArgs = {
  file: Scalars['Upload'];
};

export type Query = {
  __typename?: 'Query';
  nest_checkUser: SuccessObjectDto;
  nest_helloWorld: Scalars['String'];
};


export type QueryNest_CheckUserArgs = {
  email: Scalars['String'];
};

export type SessionObject = {
  __typename?: 'SessionObject';
  token: Scalars['String'];
  type: Scalars['String'];
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type SuccessObjectDto = {
  __typename?: 'SuccessObjectDto';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};



/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "users_records" */
  delete_users_records?: Maybe<Users_Records_Mutation_Response>;
  /** delete single row from the table: "users_records" */
  delete_users_records_by_pk?: Maybe<Users_Records>;
  /** insert data into the table: "playlists" */
  insert_playlists?: Maybe<Playlists_Mutation_Response>;
  /** insert a single row into the table: "playlists" */
  insert_playlists_one?: Maybe<Playlists>;
  /** insert data into the table: "records" */
  insert_records?: Maybe<Records_Mutation_Response>;
  /** insert a single row into the table: "records" */
  insert_records_one?: Maybe<Records>;
  /** insert data into the table: "records_playlists" */
  insert_records_playlists?: Maybe<Records_Playlists_Mutation_Response>;
  /** insert a single row into the table: "records_playlists" */
  insert_records_playlists_one?: Maybe<Records_Playlists>;
  /** insert data into the table: "users_playlists" */
  insert_users_playlists?: Maybe<Users_Playlists_Mutation_Response>;
  /** insert a single row into the table: "users_playlists" */
  insert_users_playlists_one?: Maybe<Users_Playlists>;
  /** insert data into the table: "users_records" */
  insert_users_records?: Maybe<Users_Records_Mutation_Response>;
  /** insert a single row into the table: "users_records" */
  insert_users_records_one?: Maybe<Users_Records>;
  nest_askResetUserPassword: SuccessObjectDto;
  nest_deleteFile: SuccessObjectDto;
  nest_loginUser: SessionObject;
  nest_resetUserPassword: SuccessObjectDto;
  nest_signupUser: SessionObject;
  nest_uploadFile: File;
  nest_userSetPassword: SuccessObjectDto;
  nest_userUploadProfilePicture: SuccessObjectDto;
  /** update data of the table: "records" */
  update_records?: Maybe<Records_Mutation_Response>;
  /** update single row of the table: "records" */
  update_records_by_pk?: Maybe<Records>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_Users_RecordsArgs = {
  where: Users_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Records_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_PlaylistsArgs = {
  objects: Array<Playlists_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Playlists_OneArgs = {
  object: Playlists_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_RecordsArgs = {
  objects: Array<Records_Insert_Input>;
  on_conflict?: Maybe<Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Records_OneArgs = {
  object: Records_Insert_Input;
  on_conflict?: Maybe<Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Records_PlaylistsArgs = {
  objects: Array<Records_Playlists_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Records_Playlists_OneArgs = {
  object: Records_Playlists_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Users_PlaylistsArgs = {
  objects: Array<Users_Playlists_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Playlists_OneArgs = {
  object: Users_Playlists_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Users_RecordsArgs = {
  objects: Array<Users_Records_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Records_OneArgs = {
  object: Users_Records_Insert_Input;
};


/** mutation root */
export type Mutation_RootNest_AskResetUserPasswordArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootNest_DeleteFileArgs = {
  fileId: Scalars['String'];
};


/** mutation root */
export type Mutation_RootNest_LoginUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootNest_ResetUserPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootNest_SignupUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  locale: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootNest_UploadFileArgs = {
  file: Scalars['Upload'];
  resourceId: Scalars['String'];
  resourceType: Scalars['String'];
};


/** mutation root */
export type Mutation_RootNest_UserSetPasswordArgs = {
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootNest_UserUploadProfilePictureArgs = {
  file: Scalars['Upload'];
};


/** mutation root */
export type Mutation_RootUpdate_RecordsArgs = {
  _inc?: Maybe<Records_Inc_Input>;
  _set?: Maybe<Records_Set_Input>;
  where: Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Records_By_PkArgs = {
  _inc?: Maybe<Records_Inc_Input>;
  _set?: Maybe<Records_Set_Input>;
  pk_columns: Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: Maybe<Users_Append_Input>;
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Users_Delete_Elem_Input>;
  _delete_key?: Maybe<Users_Delete_Key_Input>;
  _prepend?: Maybe<Users_Prepend_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: Maybe<Users_Append_Input>;
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Users_Delete_Elem_Input>;
  _delete_key?: Maybe<Users_Delete_Key_Input>;
  _prepend?: Maybe<Users_Prepend_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "playlists" */
export type Playlists = {
  __typename?: 'playlists';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by: Scalars['uuid'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  records_playlists: Array<Records_Playlists>;
  type: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  /** An array relationship */
  users_playlists: Array<Users_Playlists>;
};


/** columns and relationships of "playlists" */
export type PlaylistsRecords_PlaylistsArgs = {
  distinct_on?: Maybe<Array<Records_Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Records_Playlists_Order_By>>;
  where?: Maybe<Records_Playlists_Bool_Exp>;
};


/** columns and relationships of "playlists" */
export type PlaylistsUsers_PlaylistsArgs = {
  distinct_on?: Maybe<Array<Users_Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Playlists_Order_By>>;
  where?: Maybe<Users_Playlists_Bool_Exp>;
};

/** input type for inserting array relation for remote table "playlists" */
export type Playlists_Arr_Rel_Insert_Input = {
  data: Array<Playlists_Insert_Input>;
};

/** Boolean expression to filter rows from the table "playlists". All fields are combined with a logical 'AND'. */
export type Playlists_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Playlists_Bool_Exp>>>;
  _not?: Maybe<Playlists_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Playlists_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_by?: Maybe<Uuid_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  records_playlists?: Maybe<Records_Playlists_Bool_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  users_playlists?: Maybe<Users_Playlists_Bool_Exp>;
};

/** input type for inserting data into table "playlists" */
export type Playlists_Insert_Input = {
  created_by?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  records_playlists?: Maybe<Records_Playlists_Arr_Rel_Insert_Input>;
  type?: Maybe<Scalars['String']>;
  users_playlists?: Maybe<Users_Playlists_Arr_Rel_Insert_Input>;
};

/** response of any mutation on the table "playlists" */
export type Playlists_Mutation_Response = {
  __typename?: 'playlists_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Playlists>;
};

/** input type for inserting object relation for remote table "playlists" */
export type Playlists_Obj_Rel_Insert_Input = {
  data: Playlists_Insert_Input;
};

/** ordering options when selecting data from "playlists" */
export type Playlists_Order_By = {
  created_at?: Maybe<Order_By>;
  created_by?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
};

/** primary key columns input for table: "playlists" */
export type Playlists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "playlists" */
export enum Playlists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Picture = 'picture',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  nest_checkUser: SuccessObjectDto;
  nest_helloWorld: Scalars['String'];
  /** fetch data from the table: "playlists" */
  playlists: Array<Playlists>;
  /** fetch data from the table: "playlists" using primary key columns */
  playlists_by_pk?: Maybe<Playlists>;
  /** fetch data from the table: "records" */
  records: Array<Records>;
  /** fetch data from the table: "records" using primary key columns */
  records_by_pk?: Maybe<Records>;
  /** fetch data from the table: "records_playlists" */
  records_playlists: Array<Records_Playlists>;
  /** fetch data from the table: "records_playlists" using primary key columns */
  records_playlists_by_pk?: Maybe<Records_Playlists>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_playlists" */
  users_playlists: Array<Users_Playlists>;
  /** fetch data from the table: "users_playlists" using primary key columns */
  users_playlists_by_pk?: Maybe<Users_Playlists>;
  /** fetch data from the table: "users_records" */
  users_records: Array<Users_Records>;
  /** fetch data from the table: "users_records" using primary key columns */
  users_records_by_pk?: Maybe<Users_Records>;
};


/** query root */
export type Query_RootNest_CheckUserArgs = {
  email: Scalars['String'];
};


/** query root */
export type Query_RootPlaylistsArgs = {
  distinct_on?: Maybe<Array<Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Playlists_Order_By>>;
  where?: Maybe<Playlists_Bool_Exp>;
};


/** query root */
export type Query_RootPlaylists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRecordsArgs = {
  distinct_on?: Maybe<Array<Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Records_Order_By>>;
  where?: Maybe<Records_Bool_Exp>;
};


/** query root */
export type Query_RootRecords_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootRecords_PlaylistsArgs = {
  distinct_on?: Maybe<Array<Records_Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Records_Playlists_Order_By>>;
  where?: Maybe<Records_Playlists_Bool_Exp>;
};


/** query root */
export type Query_RootRecords_Playlists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsers_PlaylistsArgs = {
  distinct_on?: Maybe<Array<Users_Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Playlists_Order_By>>;
  where?: Maybe<Users_Playlists_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_Playlists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootUsers_RecordsArgs = {
  distinct_on?: Maybe<Array<Users_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Records_Order_By>>;
  where?: Maybe<Users_Records_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_Records_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "records" */
export type Records = {
  __typename?: 'records';
  album?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  beatport_id?: Maybe<Scalars['Int']>;
  bpm?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  duration?: Maybe<Scalars['String']>;
  duration_seconds?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mix?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  open_key?: Maybe<Scalars['String']>;
  /** An array relationship */
  records_playlists: Array<Records_Playlists>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users_records: Array<Users_Records>;
  youtube_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "records" */
export type RecordsRecords_PlaylistsArgs = {
  distinct_on?: Maybe<Array<Records_Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Records_Playlists_Order_By>>;
  where?: Maybe<Records_Playlists_Bool_Exp>;
};


/** columns and relationships of "records" */
export type RecordsUsers_RecordsArgs = {
  distinct_on?: Maybe<Array<Users_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Records_Order_By>>;
  where?: Maybe<Users_Records_Bool_Exp>;
};

/** input type for inserting array relation for remote table "records" */
export type Records_Arr_Rel_Insert_Input = {
  data: Array<Records_Insert_Input>;
  on_conflict?: Maybe<Records_On_Conflict>;
};

/** Boolean expression to filter rows from the table "records". All fields are combined with a logical 'AND'. */
export type Records_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Records_Bool_Exp>>>;
  _not?: Maybe<Records_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Records_Bool_Exp>>>;
  album?: Maybe<String_Comparison_Exp>;
  artist?: Maybe<String_Comparison_Exp>;
  beatport_id?: Maybe<Int_Comparison_Exp>;
  bpm?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  duration?: Maybe<String_Comparison_Exp>;
  duration_seconds?: Maybe<Int_Comparison_Exp>;
  genre?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  key?: Maybe<String_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  mix?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  open_key?: Maybe<String_Comparison_Exp>;
  records_playlists?: Maybe<Records_Playlists_Bool_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users_records?: Maybe<Users_Records_Bool_Exp>;
  youtube_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "records" */
export enum Records_Constraint {
  /** unique or primary key constraint */
  RecordsPkey = 'records_pkey',
  /** unique or primary key constraint */
  RecordsYoutubeIdKey = 'records_youtube_id_key'
}

/** input type for incrementing integer column in table "records" */
export type Records_Inc_Input = {
  beatport_id?: Maybe<Scalars['Int']>;
  bpm?: Maybe<Scalars['Int']>;
  duration_seconds?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "records" */
export type Records_Insert_Input = {
  album?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  beatport_id?: Maybe<Scalars['Int']>;
  bpm?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  duration_seconds?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mix?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  open_key?: Maybe<Scalars['String']>;
  records_playlists?: Maybe<Records_Playlists_Arr_Rel_Insert_Input>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  users_records?: Maybe<Users_Records_Arr_Rel_Insert_Input>;
  youtube_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "records" */
export type Records_Mutation_Response = {
  __typename?: 'records_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Records>;
};

/** input type for inserting object relation for remote table "records" */
export type Records_Obj_Rel_Insert_Input = {
  data: Records_Insert_Input;
  on_conflict?: Maybe<Records_On_Conflict>;
};

/** on conflict condition type for table "records" */
export type Records_On_Conflict = {
  constraint: Records_Constraint;
  update_columns: Array<Records_Update_Column>;
  where?: Maybe<Records_Bool_Exp>;
};

/** ordering options when selecting data from "records" */
export type Records_Order_By = {
  album?: Maybe<Order_By>;
  artist?: Maybe<Order_By>;
  beatport_id?: Maybe<Order_By>;
  bpm?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  duration_seconds?: Maybe<Order_By>;
  genre?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  key?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  mix?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  open_key?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  youtube_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "records" */
export type Records_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "records_playlists" */
export type Records_Playlists = {
  __typename?: 'records_playlists';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  /** An object relationship */
  playlist: Playlists;
  playlist_id: Scalars['uuid'];
  position: Scalars['Int'];
  /** An object relationship */
  record: Records;
  record_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** input type for inserting array relation for remote table "records_playlists" */
export type Records_Playlists_Arr_Rel_Insert_Input = {
  data: Array<Records_Playlists_Insert_Input>;
};

/** Boolean expression to filter rows from the table "records_playlists". All fields are combined with a logical 'AND'. */
export type Records_Playlists_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Records_Playlists_Bool_Exp>>>;
  _not?: Maybe<Records_Playlists_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Records_Playlists_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  playlist?: Maybe<Playlists_Bool_Exp>;
  playlist_id?: Maybe<Uuid_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  record?: Maybe<Records_Bool_Exp>;
  record_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** input type for inserting data into table "records_playlists" */
export type Records_Playlists_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  playlist?: Maybe<Playlists_Obj_Rel_Insert_Input>;
  playlist_id?: Maybe<Scalars['uuid']>;
  position?: Maybe<Scalars['Int']>;
  record?: Maybe<Records_Obj_Rel_Insert_Input>;
  record_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "records_playlists" */
export type Records_Playlists_Mutation_Response = {
  __typename?: 'records_playlists_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Records_Playlists>;
};

/** input type for inserting object relation for remote table "records_playlists" */
export type Records_Playlists_Obj_Rel_Insert_Input = {
  data: Records_Playlists_Insert_Input;
};

/** ordering options when selecting data from "records_playlists" */
export type Records_Playlists_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  playlist?: Maybe<Playlists_Order_By>;
  playlist_id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  record?: Maybe<Records_Order_By>;
  record_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "records_playlists" */
export type Records_Playlists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "records_playlists" */
export enum Records_Playlists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlaylistId = 'playlist_id',
  /** column name */
  Position = 'position',
  /** column name */
  RecordId = 'record_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select columns of table "records" */
export enum Records_Select_Column {
  /** column name */
  Album = 'album',
  /** column name */
  Artist = 'artist',
  /** column name */
  BeatportId = 'beatport_id',
  /** column name */
  Bpm = 'bpm',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Duration = 'duration',
  /** column name */
  DurationSeconds = 'duration_seconds',
  /** column name */
  Genre = 'genre',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  Mix = 'mix',
  /** column name */
  Name = 'name',
  /** column name */
  OpenKey = 'open_key',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeId = 'youtube_id'
}

/** input type for updating data in table "records" */
export type Records_Set_Input = {
  album?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  beatport_id?: Maybe<Scalars['Int']>;
  bpm?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['String']>;
  duration_seconds?: Maybe<Scalars['Int']>;
  genre?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mix?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  open_key?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  youtube_id?: Maybe<Scalars['String']>;
};

/** update columns of table "records" */
export enum Records_Update_Column {
  /** column name */
  Album = 'album',
  /** column name */
  Artist = 'artist',
  /** column name */
  BeatportId = 'beatport_id',
  /** column name */
  Bpm = 'bpm',
  /** column name */
  Duration = 'duration',
  /** column name */
  DurationSeconds = 'duration_seconds',
  /** column name */
  Genre = 'genre',
  /** column name */
  Image = 'image',
  /** column name */
  Key = 'key',
  /** column name */
  Label = 'label',
  /** column name */
  Mix = 'mix',
  /** column name */
  Name = 'name',
  /** column name */
  OpenKey = 'open_key',
  /** column name */
  Slug = 'slug',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeId = 'youtube_id'
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "playlists" */
  playlists: Array<Playlists>;
  /** fetch data from the table: "playlists" using primary key columns */
  playlists_by_pk?: Maybe<Playlists>;
  /** fetch data from the table: "records" */
  records: Array<Records>;
  /** fetch data from the table: "records" using primary key columns */
  records_by_pk?: Maybe<Records>;
  /** fetch data from the table: "records_playlists" */
  records_playlists: Array<Records_Playlists>;
  /** fetch data from the table: "records_playlists" using primary key columns */
  records_playlists_by_pk?: Maybe<Records_Playlists>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "users_playlists" */
  users_playlists: Array<Users_Playlists>;
  /** fetch data from the table: "users_playlists" using primary key columns */
  users_playlists_by_pk?: Maybe<Users_Playlists>;
  /** fetch data from the table: "users_records" */
  users_records: Array<Users_Records>;
  /** fetch data from the table: "users_records" using primary key columns */
  users_records_by_pk?: Maybe<Users_Records>;
};


/** subscription root */
export type Subscription_RootPlaylistsArgs = {
  distinct_on?: Maybe<Array<Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Playlists_Order_By>>;
  where?: Maybe<Playlists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootPlaylists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRecordsArgs = {
  distinct_on?: Maybe<Array<Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Records_Order_By>>;
  where?: Maybe<Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecords_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootRecords_PlaylistsArgs = {
  distinct_on?: Maybe<Array<Records_Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Records_Playlists_Order_By>>;
  where?: Maybe<Records_Playlists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRecords_Playlists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsers_PlaylistsArgs = {
  distinct_on?: Maybe<Array<Users_Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Playlists_Order_By>>;
  where?: Maybe<Users_Playlists_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_Playlists_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootUsers_RecordsArgs = {
  distinct_on?: Maybe<Array<Users_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Records_Order_By>>;
  where?: Maybe<Users_Records_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_Records_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  last_seen_at?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  /** An array relationship */
  playlists: Array<Playlists>;
  /** An array relationship */
  users_playlists: Array<Users_Playlists>;
  /** An array relationship */
  users_records: Array<Users_Records>;
};


/** columns and relationships of "users" */
export type UsersPlaylistsArgs = {
  distinct_on?: Maybe<Array<Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Playlists_Order_By>>;
  where?: Maybe<Playlists_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_PlaylistsArgs = {
  distinct_on?: Maybe<Array<Users_Playlists_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Playlists_Order_By>>;
  where?: Maybe<Users_Playlists_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_RecordsArgs = {
  distinct_on?: Maybe<Array<Users_Records_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Records_Order_By>>;
  where?: Maybe<Users_Records_Bool_Exp>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  device_push_token?: Maybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  last_seen_at?: Maybe<Timestamptz_Comparison_Exp>;
  locale?: Maybe<String_Comparison_Exp>;
  picture?: Maybe<String_Comparison_Exp>;
  playlists?: Maybe<Playlists_Bool_Exp>;
  users_playlists?: Maybe<Users_Playlists_Bool_Exp>;
  users_records?: Maybe<Users_Records_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  device_push_token?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  device_push_token?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  device_push_token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  last_seen_at?: Maybe<Order_By>;
  locale?: Maybe<Order_By>;
  picture?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "users_playlists" */
export type Users_Playlists = {
  __typename?: 'users_playlists';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  /** An object relationship */
  playlist: Playlists;
  playlist_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** input type for inserting array relation for remote table "users_playlists" */
export type Users_Playlists_Arr_Rel_Insert_Input = {
  data: Array<Users_Playlists_Insert_Input>;
};

/** Boolean expression to filter rows from the table "users_playlists". All fields are combined with a logical 'AND'. */
export type Users_Playlists_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Playlists_Bool_Exp>>>;
  _not?: Maybe<Users_Playlists_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Playlists_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  playlist?: Maybe<Playlists_Bool_Exp>;
  playlist_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "users_playlists" */
export type Users_Playlists_Insert_Input = {
  playlist?: Maybe<Playlists_Obj_Rel_Insert_Input>;
  playlist_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users_playlists" */
export type Users_Playlists_Mutation_Response = {
  __typename?: 'users_playlists_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users_Playlists>;
};

/** input type for inserting object relation for remote table "users_playlists" */
export type Users_Playlists_Obj_Rel_Insert_Input = {
  data: Users_Playlists_Insert_Input;
};

/** ordering options when selecting data from "users_playlists" */
export type Users_Playlists_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  playlist?: Maybe<Playlists_Order_By>;
  playlist_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "users_playlists" */
export type Users_Playlists_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_playlists" */
export enum Users_Playlists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlaylistId = 'playlist_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  device_push_token?: Maybe<Scalars['jsonb']>;
};

/**
 * crates
 *
 *
 * columns and relationships of "users_records"
 */
export type Users_Records = {
  __typename?: 'users_records';
  created_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['uuid'];
  position: Scalars['Int'];
  /** An object relationship */
  record: Records;
  record_id: Scalars['uuid'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** input type for inserting array relation for remote table "users_records" */
export type Users_Records_Arr_Rel_Insert_Input = {
  data: Array<Users_Records_Insert_Input>;
};

/** Boolean expression to filter rows from the table "users_records". All fields are combined with a logical 'AND'. */
export type Users_Records_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Records_Bool_Exp>>>;
  _not?: Maybe<Users_Records_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Records_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  position?: Maybe<Int_Comparison_Exp>;
  record?: Maybe<Records_Bool_Exp>;
  record_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "users_records" */
export type Users_Records_Insert_Input = {
  position?: Maybe<Scalars['Int']>;
  record?: Maybe<Records_Obj_Rel_Insert_Input>;
  record_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users_records" */
export type Users_Records_Mutation_Response = {
  __typename?: 'users_records_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users_Records>;
};

/** input type for inserting object relation for remote table "users_records" */
export type Users_Records_Obj_Rel_Insert_Input = {
  data: Users_Records_Insert_Input;
};

/** ordering options when selecting data from "users_records" */
export type Users_Records_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  position?: Maybe<Order_By>;
  record?: Maybe<Records_Order_By>;
  record_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "users_records" */
export type Users_Records_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users_records" */
export enum Users_Records_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  RecordId = 'record_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSeenAt = 'last_seen_at',
  /** column name */
  Locale = 'locale',
  /** column name */
  Picture = 'picture'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  birthdate?: Maybe<Scalars['date']>;
  device_push_token?: Maybe<Scalars['jsonb']>;
  email?: Maybe<Scalars['String']>;
  expo_push_token?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  last_seen_at?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Birthdate = 'birthdate',
  /** column name */
  DevicePushToken = 'device_push_token',
  /** column name */
  Email = 'email',
  /** column name */
  ExpoPushToken = 'expo_push_token',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LastSeenAt = 'last_seen_at',
  /** column name */
  Locale = 'locale',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Picture = 'picture',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};
