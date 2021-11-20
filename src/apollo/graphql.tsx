import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
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

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "objectives" */
  delete_objectives?: Maybe<Objectives_Mutation_Response>;
  /** delete single row from the table: "objectives" */
  delete_objectives_by_pk?: Maybe<Objectives>;
  /** insert data into the table: "objectives" */
  insert_objectives?: Maybe<Objectives_Mutation_Response>;
  /** insert a single row into the table: "objectives" */
  insert_objectives_one?: Maybe<Objectives>;
  /** update data of the table: "objectives" */
  update_objectives?: Maybe<Objectives_Mutation_Response>;
  /** update single row of the table: "objectives" */
  update_objectives_by_pk?: Maybe<Objectives>;
};


/** mutation root */
export type Mutation_RootDelete_ObjectivesArgs = {
  where: Objectives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Objectives_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ObjectivesArgs = {
  objects: Array<Objectives_Insert_Input>;
  on_conflict?: Maybe<Objectives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Objectives_OneArgs = {
  object: Objectives_Insert_Input;
  on_conflict?: Maybe<Objectives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ObjectivesArgs = {
  _inc?: Maybe<Objectives_Inc_Input>;
  _set?: Maybe<Objectives_Set_Input>;
  where: Objectives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Objectives_By_PkArgs = {
  _inc?: Maybe<Objectives_Inc_Input>;
  _set?: Maybe<Objectives_Set_Input>;
  pk_columns: Objectives_Pk_Columns_Input;
};

/** columns and relationships of "objectives" */
export type Objectives = {
  __typename?: 'objectives';
  delete_flg?: Maybe<Scalars['Int']>;
  finish_flg?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "objectives" */
export type Objectives_Aggregate = {
  __typename?: 'objectives_aggregate';
  aggregate?: Maybe<Objectives_Aggregate_Fields>;
  nodes: Array<Objectives>;
};

/** aggregate fields of "objectives" */
export type Objectives_Aggregate_Fields = {
  __typename?: 'objectives_aggregate_fields';
  avg?: Maybe<Objectives_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Objectives_Max_Fields>;
  min?: Maybe<Objectives_Min_Fields>;
  stddev?: Maybe<Objectives_Stddev_Fields>;
  stddev_pop?: Maybe<Objectives_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Objectives_Stddev_Samp_Fields>;
  sum?: Maybe<Objectives_Sum_Fields>;
  var_pop?: Maybe<Objectives_Var_Pop_Fields>;
  var_samp?: Maybe<Objectives_Var_Samp_Fields>;
  variance?: Maybe<Objectives_Variance_Fields>;
};


/** aggregate fields of "objectives" */
export type Objectives_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Objectives_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Objectives_Avg_Fields = {
  __typename?: 'objectives_avg_fields';
  delete_flg?: Maybe<Scalars['Float']>;
  finish_flg?: Maybe<Scalars['Float']>;
  sort_order?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "objectives". All fields are combined with a logical 'AND'. */
export type Objectives_Bool_Exp = {
  _and?: Maybe<Array<Objectives_Bool_Exp>>;
  _not?: Maybe<Objectives_Bool_Exp>;
  _or?: Maybe<Array<Objectives_Bool_Exp>>;
  delete_flg?: Maybe<Int_Comparison_Exp>;
  finish_flg?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  sort_order?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "objectives" */
export enum Objectives_Constraint {
  /** unique or primary key constraint */
  ObjectivesPkey = 'objectives_pkey'
}

/** input type for incrementing numeric columns in table "objectives" */
export type Objectives_Inc_Input = {
  delete_flg?: Maybe<Scalars['Int']>;
  finish_flg?: Maybe<Scalars['Int']>;
  sort_order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "objectives" */
export type Objectives_Insert_Input = {
  delete_flg?: Maybe<Scalars['Int']>;
  finish_flg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Objectives_Max_Fields = {
  __typename?: 'objectives_max_fields';
  delete_flg?: Maybe<Scalars['Int']>;
  finish_flg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Objectives_Min_Fields = {
  __typename?: 'objectives_min_fields';
  delete_flg?: Maybe<Scalars['Int']>;
  finish_flg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "objectives" */
export type Objectives_Mutation_Response = {
  __typename?: 'objectives_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Objectives>;
};

/** on conflict condition type for table "objectives" */
export type Objectives_On_Conflict = {
  constraint: Objectives_Constraint;
  update_columns?: Array<Objectives_Update_Column>;
  where?: Maybe<Objectives_Bool_Exp>;
};

/** Ordering options when selecting data from "objectives". */
export type Objectives_Order_By = {
  delete_flg?: Maybe<Order_By>;
  finish_flg?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sort_order?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: objectives */
export type Objectives_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "objectives" */
export enum Objectives_Select_Column {
  /** column name */
  DeleteFlg = 'delete_flg',
  /** column name */
  FinishFlg = 'finish_flg',
  /** column name */
  Id = 'id',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "objectives" */
export type Objectives_Set_Input = {
  delete_flg?: Maybe<Scalars['Int']>;
  finish_flg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  sort_order?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Objectives_Stddev_Fields = {
  __typename?: 'objectives_stddev_fields';
  delete_flg?: Maybe<Scalars['Float']>;
  finish_flg?: Maybe<Scalars['Float']>;
  sort_order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Objectives_Stddev_Pop_Fields = {
  __typename?: 'objectives_stddev_pop_fields';
  delete_flg?: Maybe<Scalars['Float']>;
  finish_flg?: Maybe<Scalars['Float']>;
  sort_order?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Objectives_Stddev_Samp_Fields = {
  __typename?: 'objectives_stddev_samp_fields';
  delete_flg?: Maybe<Scalars['Float']>;
  finish_flg?: Maybe<Scalars['Float']>;
  sort_order?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Objectives_Sum_Fields = {
  __typename?: 'objectives_sum_fields';
  delete_flg?: Maybe<Scalars['Int']>;
  finish_flg?: Maybe<Scalars['Int']>;
  sort_order?: Maybe<Scalars['Int']>;
};

/** update columns of table "objectives" */
export enum Objectives_Update_Column {
  /** column name */
  DeleteFlg = 'delete_flg',
  /** column name */
  FinishFlg = 'finish_flg',
  /** column name */
  Id = 'id',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Objectives_Var_Pop_Fields = {
  __typename?: 'objectives_var_pop_fields';
  delete_flg?: Maybe<Scalars['Float']>;
  finish_flg?: Maybe<Scalars['Float']>;
  sort_order?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Objectives_Var_Samp_Fields = {
  __typename?: 'objectives_var_samp_fields';
  delete_flg?: Maybe<Scalars['Float']>;
  finish_flg?: Maybe<Scalars['Float']>;
  sort_order?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Objectives_Variance_Fields = {
  __typename?: 'objectives_variance_fields';
  delete_flg?: Maybe<Scalars['Float']>;
  finish_flg?: Maybe<Scalars['Float']>;
  sort_order?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "objectives" */
  objectives: Array<Objectives>;
  /** fetch aggregated fields from the table: "objectives" */
  objectives_aggregate: Objectives_Aggregate;
  /** fetch data from the table: "objectives" using primary key columns */
  objectives_by_pk?: Maybe<Objectives>;
};


export type Query_RootObjectivesArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


export type Query_RootObjectives_AggregateArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


export type Query_RootObjectives_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "objectives" */
  objectives: Array<Objectives>;
  /** fetch aggregated fields from the table: "objectives" */
  objectives_aggregate: Objectives_Aggregate;
  /** fetch data from the table: "objectives" using primary key columns */
  objectives_by_pk?: Maybe<Objectives>;
};


export type Subscription_RootObjectivesArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


export type Subscription_RootObjectives_AggregateArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


export type Subscription_RootObjectives_By_PkArgs = {
  id: Scalars['uuid'];
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
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

export type GetObjectiveListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectiveListQuery = (
  { __typename?: 'query_root' }
  & { objectives: Array<(
    { __typename?: 'objectives' }
    & Pick<Objectives, 'id' | 'title' | 'sort_order' | 'finish_flg' | 'delete_flg'>
  )> }
);


export const GetObjectiveListDocument = gql`
    query GetObjectiveList {
  objectives {
    id
    title
    sort_order
    finish_flg
    delete_flg
  }
}
    `;

/**
 * __useGetObjectiveListQuery__
 *
 * To run a query within a React component, call `useGetObjectiveListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetObjectiveListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetObjectiveListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetObjectiveListQuery(baseOptions?: Apollo.QueryHookOptions<GetObjectiveListQuery, GetObjectiveListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetObjectiveListQuery, GetObjectiveListQueryVariables>(GetObjectiveListDocument, options);
      }
export function useGetObjectiveListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetObjectiveListQuery, GetObjectiveListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetObjectiveListQuery, GetObjectiveListQueryVariables>(GetObjectiveListDocument, options);
        }
export type GetObjectiveListQueryHookResult = ReturnType<typeof useGetObjectiveListQuery>;
export type GetObjectiveListLazyQueryHookResult = ReturnType<typeof useGetObjectiveListLazyQuery>;
export type GetObjectiveListQueryResult = Apollo.QueryResult<GetObjectiveListQuery, GetObjectiveListQueryVariables>;