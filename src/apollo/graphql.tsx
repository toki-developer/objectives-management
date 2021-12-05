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
  /** delete data from the table: "objective_items" */
  deleteObjectiveItems?: Maybe<ObjectiveItems_Mutation_Response>;
  /** delete single row from the table: "objectives" */
  deleteObjectivesByPk?: Maybe<Objectives>;
  /** delete single row from the table: "objective_items" */
  delete_objectiveItems_by_pk?: Maybe<ObjectiveItems>;
  /** delete data from the table: "objectives" */
  delete_objectives?: Maybe<Objectives_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "objective_items" */
  insertObjectiveItems?: Maybe<ObjectiveItems_Mutation_Response>;
  /** insert a single row into the table: "objectives" */
  insertObjectivesOne?: Maybe<Objectives>;
  /** insert a single row into the table: "objective_items" */
  insert_objectiveItems_one?: Maybe<ObjectiveItems>;
  /** insert data into the table: "objectives" */
  insert_objectives?: Maybe<Objectives_Mutation_Response>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update single row of the table: "objectives" */
  updateObjectivesByPk?: Maybe<Objectives>;
  /** update data of the table: "objective_items" */
  update_objectiveItems?: Maybe<ObjectiveItems_Mutation_Response>;
  /** update single row of the table: "objective_items" */
  update_objectiveItems_by_pk?: Maybe<ObjectiveItems>;
  /** update data of the table: "objectives" */
  update_objectives?: Maybe<Objectives_Mutation_Response>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDeleteObjectiveItemsArgs = {
  where: ObjectiveItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteObjectivesByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ObjectiveItems_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ObjectivesArgs = {
  where: Objectives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsertObjectiveItemsArgs = {
  objects: Array<ObjectiveItems_Insert_Input>;
  on_conflict?: Maybe<ObjectiveItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertObjectivesOneArgs = {
  object: Objectives_Insert_Input;
  on_conflict?: Maybe<Objectives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ObjectiveItems_OneArgs = {
  object: ObjectiveItems_Insert_Input;
  on_conflict?: Maybe<ObjectiveItems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ObjectivesArgs = {
  objects: Array<Objectives_Insert_Input>;
  on_conflict?: Maybe<Objectives_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateObjectivesByPkArgs = {
  _inc?: Maybe<Objectives_Inc_Input>;
  _set?: Maybe<Objectives_Set_Input>;
  pk_columns: Objectives_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ObjectiveItemsArgs = {
  _inc?: Maybe<ObjectiveItems_Inc_Input>;
  _set?: Maybe<ObjectiveItems_Set_Input>;
  where: ObjectiveItems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ObjectiveItems_By_PkArgs = {
  _inc?: Maybe<ObjectiveItems_Inc_Input>;
  _set?: Maybe<ObjectiveItems_Set_Input>;
  pk_columns: ObjectiveItems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ObjectivesArgs = {
  _inc?: Maybe<Objectives_Inc_Input>;
  _set?: Maybe<Objectives_Set_Input>;
  where: Objectives_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** columns and relationships of "objective_items" */
export type ObjectiveItems = {
  __typename?: 'objectiveItems';
  evaluationType: Scalars['Int'];
  failureNum?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  itemsType: Scalars['Int'];
  /** An object relationship */
  objective: Objectives;
  objectiveId: Scalars['uuid'];
  successNum?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "objective_items" */
export type ObjectiveItems_Aggregate = {
  __typename?: 'objectiveItems_aggregate';
  aggregate?: Maybe<ObjectiveItems_Aggregate_Fields>;
  nodes: Array<ObjectiveItems>;
};

/** aggregate fields of "objective_items" */
export type ObjectiveItems_Aggregate_Fields = {
  __typename?: 'objectiveItems_aggregate_fields';
  avg?: Maybe<ObjectiveItems_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<ObjectiveItems_Max_Fields>;
  min?: Maybe<ObjectiveItems_Min_Fields>;
  stddev?: Maybe<ObjectiveItems_Stddev_Fields>;
  stddev_pop?: Maybe<ObjectiveItems_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ObjectiveItems_Stddev_Samp_Fields>;
  sum?: Maybe<ObjectiveItems_Sum_Fields>;
  var_pop?: Maybe<ObjectiveItems_Var_Pop_Fields>;
  var_samp?: Maybe<ObjectiveItems_Var_Samp_Fields>;
  variance?: Maybe<ObjectiveItems_Variance_Fields>;
};


/** aggregate fields of "objective_items" */
export type ObjectiveItems_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<ObjectiveItems_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "objective_items" */
export type ObjectiveItems_Aggregate_Order_By = {
  avg?: Maybe<ObjectiveItems_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<ObjectiveItems_Max_Order_By>;
  min?: Maybe<ObjectiveItems_Min_Order_By>;
  stddev?: Maybe<ObjectiveItems_Stddev_Order_By>;
  stddev_pop?: Maybe<ObjectiveItems_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<ObjectiveItems_Stddev_Samp_Order_By>;
  sum?: Maybe<ObjectiveItems_Sum_Order_By>;
  var_pop?: Maybe<ObjectiveItems_Var_Pop_Order_By>;
  var_samp?: Maybe<ObjectiveItems_Var_Samp_Order_By>;
  variance?: Maybe<ObjectiveItems_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "objective_items" */
export type ObjectiveItems_Arr_Rel_Insert_Input = {
  data: Array<ObjectiveItems_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<ObjectiveItems_On_Conflict>;
};

/** aggregate avg on columns */
export type ObjectiveItems_Avg_Fields = {
  __typename?: 'objectiveItems_avg_fields';
  evaluationType?: Maybe<Scalars['Float']>;
  failureNum?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  itemsType?: Maybe<Scalars['Float']>;
  successNum?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "objective_items" */
export type ObjectiveItems_Avg_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "objective_items". All fields are combined with a logical 'AND'. */
export type ObjectiveItems_Bool_Exp = {
  _and?: Maybe<Array<ObjectiveItems_Bool_Exp>>;
  _not?: Maybe<ObjectiveItems_Bool_Exp>;
  _or?: Maybe<Array<ObjectiveItems_Bool_Exp>>;
  evaluationType?: Maybe<Int_Comparison_Exp>;
  failureNum?: Maybe<Int_Comparison_Exp>;
  finishFlg?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  itemsType?: Maybe<Int_Comparison_Exp>;
  objective?: Maybe<Objectives_Bool_Exp>;
  objectiveId?: Maybe<Uuid_Comparison_Exp>;
  successNum?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "objective_items" */
export enum ObjectiveItems_Constraint {
  /** unique or primary key constraint */
  ObjectiveItemsPkey = 'objective_items_pkey'
}

/** input type for incrementing numeric columns in table "objective_items" */
export type ObjectiveItems_Inc_Input = {
  evaluationType?: Maybe<Scalars['Int']>;
  failureNum?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  itemsType?: Maybe<Scalars['Int']>;
  successNum?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "objective_items" */
export type ObjectiveItems_Insert_Input = {
  evaluationType?: Maybe<Scalars['Int']>;
  failureNum?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  itemsType?: Maybe<Scalars['Int']>;
  objective?: Maybe<Objectives_Obj_Rel_Insert_Input>;
  objectiveId?: Maybe<Scalars['uuid']>;
  successNum?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type ObjectiveItems_Max_Fields = {
  __typename?: 'objectiveItems_max_fields';
  evaluationType?: Maybe<Scalars['Int']>;
  failureNum?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  itemsType?: Maybe<Scalars['Int']>;
  objectiveId?: Maybe<Scalars['uuid']>;
  successNum?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "objective_items" */
export type ObjectiveItems_Max_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  objectiveId?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type ObjectiveItems_Min_Fields = {
  __typename?: 'objectiveItems_min_fields';
  evaluationType?: Maybe<Scalars['Int']>;
  failureNum?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  itemsType?: Maybe<Scalars['Int']>;
  objectiveId?: Maybe<Scalars['uuid']>;
  successNum?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "objective_items" */
export type ObjectiveItems_Min_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  objectiveId?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "objective_items" */
export type ObjectiveItems_Mutation_Response = {
  __typename?: 'objectiveItems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ObjectiveItems>;
};

/** on conflict condition type for table "objective_items" */
export type ObjectiveItems_On_Conflict = {
  constraint: ObjectiveItems_Constraint;
  update_columns?: Array<ObjectiveItems_Update_Column>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
};

/** Ordering options when selecting data from "objective_items". */
export type ObjectiveItems_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  objective?: Maybe<Objectives_Order_By>;
  objectiveId?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: objectiveItems */
export type ObjectiveItems_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "objective_items" */
export enum ObjectiveItems_Select_Column {
  /** column name */
  EvaluationType = 'evaluationType',
  /** column name */
  FailureNum = 'failureNum',
  /** column name */
  FinishFlg = 'finishFlg',
  /** column name */
  Id = 'id',
  /** column name */
  ItemsType = 'itemsType',
  /** column name */
  ObjectiveId = 'objectiveId',
  /** column name */
  SuccessNum = 'successNum',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "objective_items" */
export type ObjectiveItems_Set_Input = {
  evaluationType?: Maybe<Scalars['Int']>;
  failureNum?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  itemsType?: Maybe<Scalars['Int']>;
  objectiveId?: Maybe<Scalars['uuid']>;
  successNum?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type ObjectiveItems_Stddev_Fields = {
  __typename?: 'objectiveItems_stddev_fields';
  evaluationType?: Maybe<Scalars['Float']>;
  failureNum?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  itemsType?: Maybe<Scalars['Float']>;
  successNum?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "objective_items" */
export type ObjectiveItems_Stddev_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type ObjectiveItems_Stddev_Pop_Fields = {
  __typename?: 'objectiveItems_stddev_pop_fields';
  evaluationType?: Maybe<Scalars['Float']>;
  failureNum?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  itemsType?: Maybe<Scalars['Float']>;
  successNum?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "objective_items" */
export type ObjectiveItems_Stddev_Pop_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type ObjectiveItems_Stddev_Samp_Fields = {
  __typename?: 'objectiveItems_stddev_samp_fields';
  evaluationType?: Maybe<Scalars['Float']>;
  failureNum?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  itemsType?: Maybe<Scalars['Float']>;
  successNum?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "objective_items" */
export type ObjectiveItems_Stddev_Samp_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type ObjectiveItems_Sum_Fields = {
  __typename?: 'objectiveItems_sum_fields';
  evaluationType?: Maybe<Scalars['Int']>;
  failureNum?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  itemsType?: Maybe<Scalars['Int']>;
  successNum?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "objective_items" */
export type ObjectiveItems_Sum_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
};

/** update columns of table "objective_items" */
export enum ObjectiveItems_Update_Column {
  /** column name */
  EvaluationType = 'evaluationType',
  /** column name */
  FailureNum = 'failureNum',
  /** column name */
  FinishFlg = 'finishFlg',
  /** column name */
  Id = 'id',
  /** column name */
  ItemsType = 'itemsType',
  /** column name */
  ObjectiveId = 'objectiveId',
  /** column name */
  SuccessNum = 'successNum',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type ObjectiveItems_Var_Pop_Fields = {
  __typename?: 'objectiveItems_var_pop_fields';
  evaluationType?: Maybe<Scalars['Float']>;
  failureNum?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  itemsType?: Maybe<Scalars['Float']>;
  successNum?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "objective_items" */
export type ObjectiveItems_Var_Pop_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type ObjectiveItems_Var_Samp_Fields = {
  __typename?: 'objectiveItems_var_samp_fields';
  evaluationType?: Maybe<Scalars['Float']>;
  failureNum?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  itemsType?: Maybe<Scalars['Float']>;
  successNum?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "objective_items" */
export type ObjectiveItems_Var_Samp_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type ObjectiveItems_Variance_Fields = {
  __typename?: 'objectiveItems_variance_fields';
  evaluationType?: Maybe<Scalars['Float']>;
  failureNum?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  itemsType?: Maybe<Scalars['Float']>;
  successNum?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "objective_items" */
export type ObjectiveItems_Variance_Order_By = {
  evaluationType?: Maybe<Order_By>;
  failureNum?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  itemsType?: Maybe<Order_By>;
  successNum?: Maybe<Order_By>;
};

/** columns and relationships of "objectives" */
export type Objectives = {
  __typename?: 'objectives';
  deleteFlg?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id: Scalars['uuid'];
  /** An array relationship */
  objectiveItems: Array<ObjectiveItems>;
  /** An aggregate relationship */
  objectiveItems_aggregate: ObjectiveItems_Aggregate;
  sortOrder?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};


/** columns and relationships of "objectives" */
export type ObjectivesObjectiveItemsArgs = {
  distinct_on?: Maybe<Array<ObjectiveItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ObjectiveItems_Order_By>>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
};


/** columns and relationships of "objectives" */
export type ObjectivesObjectiveItems_AggregateArgs = {
  distinct_on?: Maybe<Array<ObjectiveItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ObjectiveItems_Order_By>>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
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

/** order by aggregate values of table "objectives" */
export type Objectives_Aggregate_Order_By = {
  avg?: Maybe<Objectives_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Objectives_Max_Order_By>;
  min?: Maybe<Objectives_Min_Order_By>;
  stddev?: Maybe<Objectives_Stddev_Order_By>;
  stddev_pop?: Maybe<Objectives_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Objectives_Stddev_Samp_Order_By>;
  sum?: Maybe<Objectives_Sum_Order_By>;
  var_pop?: Maybe<Objectives_Var_Pop_Order_By>;
  var_samp?: Maybe<Objectives_Var_Samp_Order_By>;
  variance?: Maybe<Objectives_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "objectives" */
export type Objectives_Arr_Rel_Insert_Input = {
  data: Array<Objectives_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Objectives_On_Conflict>;
};

/** aggregate avg on columns */
export type Objectives_Avg_Fields = {
  __typename?: 'objectives_avg_fields';
  deleteFlg?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "objectives" */
export type Objectives_Avg_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "objectives". All fields are combined with a logical 'AND'. */
export type Objectives_Bool_Exp = {
  _and?: Maybe<Array<Objectives_Bool_Exp>>;
  _not?: Maybe<Objectives_Bool_Exp>;
  _or?: Maybe<Array<Objectives_Bool_Exp>>;
  deleteFlg?: Maybe<Int_Comparison_Exp>;
  finishFlg?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  objectiveItems?: Maybe<ObjectiveItems_Bool_Exp>;
  sortOrder?: Maybe<Int_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "objectives" */
export enum Objectives_Constraint {
  /** unique or primary key constraint */
  ObjectivesPkey = 'objectives_pkey'
}

/** input type for incrementing numeric columns in table "objectives" */
export type Objectives_Inc_Input = {
  deleteFlg?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "objectives" */
export type Objectives_Insert_Input = {
  deleteFlg?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  objectiveItems?: Maybe<ObjectiveItems_Arr_Rel_Insert_Input>;
  sortOrder?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Objectives_Max_Fields = {
  __typename?: 'objectives_max_fields';
  deleteFlg?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  sortOrder?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "objectives" */
export type Objectives_Max_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Objectives_Min_Fields = {
  __typename?: 'objectives_min_fields';
  deleteFlg?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  sortOrder?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "objectives" */
export type Objectives_Min_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

/** response of any mutation on the table "objectives" */
export type Objectives_Mutation_Response = {
  __typename?: 'objectives_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Objectives>;
};

/** input type for inserting object relation for remote table "objectives" */
export type Objectives_Obj_Rel_Insert_Input = {
  data: Objectives_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Objectives_On_Conflict>;
};

/** on conflict condition type for table "objectives" */
export type Objectives_On_Conflict = {
  constraint: Objectives_Constraint;
  update_columns?: Array<Objectives_Update_Column>;
  where?: Maybe<Objectives_Bool_Exp>;
};

/** Ordering options when selecting data from "objectives". */
export type Objectives_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  objectiveItems_aggregate?: Maybe<ObjectiveItems_Aggregate_Order_By>;
  sortOrder?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: objectives */
export type Objectives_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "objectives" */
export enum Objectives_Select_Column {
  /** column name */
  DeleteFlg = 'deleteFlg',
  /** column name */
  FinishFlg = 'finishFlg',
  /** column name */
  Id = 'id',
  /** column name */
  SortOrder = 'sortOrder',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "objectives" */
export type Objectives_Set_Input = {
  deleteFlg?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  sortOrder?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Objectives_Stddev_Fields = {
  __typename?: 'objectives_stddev_fields';
  deleteFlg?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "objectives" */
export type Objectives_Stddev_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Objectives_Stddev_Pop_Fields = {
  __typename?: 'objectives_stddev_pop_fields';
  deleteFlg?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "objectives" */
export type Objectives_Stddev_Pop_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Objectives_Stddev_Samp_Fields = {
  __typename?: 'objectives_stddev_samp_fields';
  deleteFlg?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "objectives" */
export type Objectives_Stddev_Samp_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Objectives_Sum_Fields = {
  __typename?: 'objectives_sum_fields';
  deleteFlg?: Maybe<Scalars['Int']>;
  finishFlg?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "objectives" */
export type Objectives_Sum_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
};

/** update columns of table "objectives" */
export enum Objectives_Update_Column {
  /** column name */
  DeleteFlg = 'deleteFlg',
  /** column name */
  FinishFlg = 'finishFlg',
  /** column name */
  Id = 'id',
  /** column name */
  SortOrder = 'sortOrder',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

/** aggregate var_pop on columns */
export type Objectives_Var_Pop_Fields = {
  __typename?: 'objectives_var_pop_fields';
  deleteFlg?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "objectives" */
export type Objectives_Var_Pop_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Objectives_Var_Samp_Fields = {
  __typename?: 'objectives_var_samp_fields';
  deleteFlg?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "objectives" */
export type Objectives_Var_Samp_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Objectives_Variance_Fields = {
  __typename?: 'objectives_variance_fields';
  deleteFlg?: Maybe<Scalars['Float']>;
  finishFlg?: Maybe<Scalars['Float']>;
  sortOrder?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "objectives" */
export type Objectives_Variance_Order_By = {
  deleteFlg?: Maybe<Order_By>;
  finishFlg?: Maybe<Order_By>;
  sortOrder?: Maybe<Order_By>;
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
  /** An array relationship */
  objectiveItems: Array<ObjectiveItems>;
  /** An aggregate relationship */
  objectiveItems_aggregate: ObjectiveItems_Aggregate;
  /** fetch data from the table: "objective_items" using primary key columns */
  objectiveItems_by_pk?: Maybe<ObjectiveItems>;
  /** An array relationship */
  objectives: Array<Objectives>;
  /** An aggregate relationship */
  objectives_aggregate: Objectives_Aggregate;
  /** fetch data from the table: "objectives" using primary key columns */
  objectives_by_pk?: Maybe<Objectives>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootObjectiveItemsArgs = {
  distinct_on?: Maybe<Array<ObjectiveItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ObjectiveItems_Order_By>>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
};


export type Query_RootObjectiveItems_AggregateArgs = {
  distinct_on?: Maybe<Array<ObjectiveItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ObjectiveItems_Order_By>>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
};


export type Query_RootObjectiveItems_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  objectiveItems: Array<ObjectiveItems>;
  /** An aggregate relationship */
  objectiveItems_aggregate: ObjectiveItems_Aggregate;
  /** fetch data from the table: "objective_items" using primary key columns */
  objectiveItems_by_pk?: Maybe<ObjectiveItems>;
  /** An array relationship */
  objectives: Array<Objectives>;
  /** An aggregate relationship */
  objectives_aggregate: Objectives_Aggregate;
  /** fetch data from the table: "objectives" using primary key columns */
  objectives_by_pk?: Maybe<Objectives>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootObjectiveItemsArgs = {
  distinct_on?: Maybe<Array<ObjectiveItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ObjectiveItems_Order_By>>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
};


export type Subscription_RootObjectiveItems_AggregateArgs = {
  distinct_on?: Maybe<Array<ObjectiveItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ObjectiveItems_Order_By>>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
};


export type Subscription_RootObjectiveItems_By_PkArgs = {
  id: Scalars['uuid'];
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


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  avatar_url?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  objective_items: Array<ObjectiveItems>;
  /** An aggregate relationship */
  objective_items_aggregate: ObjectiveItems_Aggregate;
  /** An array relationship */
  objectives: Array<Objectives>;
  /** An aggregate relationship */
  objectives_aggregate: Objectives_Aggregate;
};


/** columns and relationships of "users" */
export type UsersObjective_ItemsArgs = {
  distinct_on?: Maybe<Array<ObjectiveItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ObjectiveItems_Order_By>>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersObjective_Items_AggregateArgs = {
  distinct_on?: Maybe<Array<ObjectiveItems_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ObjectiveItems_Order_By>>;
  where?: Maybe<ObjectiveItems_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersObjectivesArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersObjectives_AggregateArgs = {
  distinct_on?: Maybe<Array<Objectives_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objectives_Order_By>>;
  where?: Maybe<Objectives_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  full_name?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  objective_items?: Maybe<ObjectiveItems_Bool_Exp>;
  objectives?: Maybe<Objectives_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  objective_items?: Maybe<ObjectiveItems_Arr_Rel_Insert_Input>;
  objectives?: Maybe<Objectives_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_url?: Maybe<Order_By>;
  full_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  objective_items_aggregate?: Maybe<ObjectiveItems_Aggregate_Order_By>;
  objectives_aggregate?: Maybe<Objectives_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: Maybe<Scalars['String']>;
  full_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id'
}


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

export type AddObjectiveMutationVariables = Exact<{
  title: Scalars['String'];
  objectiveItems?: Maybe<ObjectiveItems_Arr_Rel_Insert_Input>;
}>;


export type AddObjectiveMutation = (
  { __typename?: 'mutation_root' }
  & { insertObjectivesOne?: Maybe<(
    { __typename?: 'objectives' }
    & Pick<Objectives, 'id'>
  )> }
);

export type ObjectiveFieldFragment = (
  { __typename?: 'objectives' }
  & Pick<Objectives, 'id' | 'title' | 'sortOrder' | 'finishFlg' | 'deleteFlg'>
  & { objectiveItems: Array<(
    { __typename?: 'objectiveItems' }
    & Pick<ObjectiveItems, 'id' | 'title' | 'itemsType' | 'evaluationType' | 'successNum' | 'failureNum' | 'finishFlg'>
  )> }
);

export type ObjectiveItemFieldFragment = (
  { __typename?: 'objectiveItems' }
  & Pick<ObjectiveItems, 'id' | 'title' | 'itemsType' | 'evaluationType' | 'successNum' | 'failureNum' | 'finishFlg'>
);

export type DeleteObjectiveMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteObjectiveMutation = (
  { __typename?: 'mutation_root' }
  & { deleteObjectivesByPk?: Maybe<(
    { __typename?: 'objectives' }
    & Pick<Objectives, 'id'>
  )> }
);

export type GetObjectiveListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectiveListQuery = (
  { __typename?: 'query_root' }
  & { objectives: Array<(
    { __typename?: 'objectives' }
    & Pick<Objectives, 'id' | 'title' | 'sortOrder' | 'finishFlg' | 'deleteFlg'>
    & { objectiveItems: Array<(
      { __typename?: 'objectiveItems' }
      & Pick<ObjectiveItems, 'id' | 'title' | 'itemsType' | 'evaluationType' | 'successNum' | 'failureNum' | 'finishFlg'>
    )> }
  )> }
);

export type UpdateObjectiveMutationVariables = Exact<{
  id: Scalars['uuid'];
  title: Scalars['String'];
  objects?: Maybe<Array<ObjectiveItems_Insert_Input> | ObjectiveItems_Insert_Input>;
  deleteId?: Maybe<Array<Scalars['uuid']> | Scalars['uuid']>;
}>;


export type UpdateObjectiveMutation = (
  { __typename?: 'mutation_root' }
  & { updateObjectivesByPk?: Maybe<(
    { __typename?: 'objectives' }
    & Pick<Objectives, 'id' | 'title'>
  )>, insertObjectiveItems?: Maybe<(
    { __typename?: 'objectiveItems_mutation_response' }
    & { returning: Array<(
      { __typename?: 'objectiveItems' }
      & Pick<ObjectiveItems, 'id' | 'title'>
    )> }
  )>, deleteObjectiveItems?: Maybe<(
    { __typename?: 'objectiveItems_mutation_response' }
    & { returning: Array<(
      { __typename?: 'objectiveItems' }
      & Pick<ObjectiveItems, 'id'>
    )> }
  )> }
);

export const ObjectiveItemFieldFragmentDoc = gql`
    fragment ObjectiveItemField on objectiveItems {
  id
  title
  itemsType
  evaluationType
  successNum
  failureNum
  finishFlg
}
    `;
export const ObjectiveFieldFragmentDoc = gql`
    fragment ObjectiveField on objectives {
  id
  title
  sortOrder
  finishFlg
  deleteFlg
  objectiveItems {
    ...ObjectiveItemField
  }
}
    ${ObjectiveItemFieldFragmentDoc}`;
export const AddObjectiveDocument = gql`
    mutation AddObjective($title: String!, $objectiveItems: objectiveItems_arr_rel_insert_input) {
  insertObjectivesOne(object: {title: $title, objectiveItems: $objectiveItems}) {
    id
  }
}
    `;
export type AddObjectiveMutationFn = Apollo.MutationFunction<AddObjectiveMutation, AddObjectiveMutationVariables>;

/**
 * __useAddObjectiveMutation__
 *
 * To run a mutation, you first call `useAddObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addObjectiveMutation, { data, loading, error }] = useAddObjectiveMutation({
 *   variables: {
 *      title: // value for 'title'
 *      objectiveItems: // value for 'objectiveItems'
 *   },
 * });
 */
export function useAddObjectiveMutation(baseOptions?: Apollo.MutationHookOptions<AddObjectiveMutation, AddObjectiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddObjectiveMutation, AddObjectiveMutationVariables>(AddObjectiveDocument, options);
      }
export type AddObjectiveMutationHookResult = ReturnType<typeof useAddObjectiveMutation>;
export type AddObjectiveMutationResult = Apollo.MutationResult<AddObjectiveMutation>;
export type AddObjectiveMutationOptions = Apollo.BaseMutationOptions<AddObjectiveMutation, AddObjectiveMutationVariables>;
export const DeleteObjectiveDocument = gql`
    mutation DeleteObjective($id: uuid!) {
  deleteObjectivesByPk(id: $id) {
    id
  }
}
    `;
export type DeleteObjectiveMutationFn = Apollo.MutationFunction<DeleteObjectiveMutation, DeleteObjectiveMutationVariables>;

/**
 * __useDeleteObjectiveMutation__
 *
 * To run a mutation, you first call `useDeleteObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteObjectiveMutation, { data, loading, error }] = useDeleteObjectiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteObjectiveMutation(baseOptions?: Apollo.MutationHookOptions<DeleteObjectiveMutation, DeleteObjectiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteObjectiveMutation, DeleteObjectiveMutationVariables>(DeleteObjectiveDocument, options);
      }
export type DeleteObjectiveMutationHookResult = ReturnType<typeof useDeleteObjectiveMutation>;
export type DeleteObjectiveMutationResult = Apollo.MutationResult<DeleteObjectiveMutation>;
export type DeleteObjectiveMutationOptions = Apollo.BaseMutationOptions<DeleteObjectiveMutation, DeleteObjectiveMutationVariables>;
export const GetObjectiveListDocument = gql`
    query GetObjectiveList {
  objectives {
    ...ObjectiveField
  }
}
    ${ObjectiveFieldFragmentDoc}`;

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
export const UpdateObjectiveDocument = gql`
    mutation UpdateObjective($id: uuid!, $title: String!, $objects: [objectiveItems_insert_input!] = {}, $deleteId: [uuid!]) {
  updateObjectivesByPk(pk_columns: {id: $id}, _set: {title: $title}) {
    id
    title
  }
  insertObjectiveItems(
    on_conflict: {constraint: objective_items_pkey, update_columns: title}
    objects: $objects
  ) {
    returning {
      id
      title
    }
  }
  deleteObjectiveItems(where: {id: {_in: $deleteId}}) {
    returning {
      id
    }
  }
}
    `;
export type UpdateObjectiveMutationFn = Apollo.MutationFunction<UpdateObjectiveMutation, UpdateObjectiveMutationVariables>;

/**
 * __useUpdateObjectiveMutation__
 *
 * To run a mutation, you first call `useUpdateObjectiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateObjectiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateObjectiveMutation, { data, loading, error }] = useUpdateObjectiveMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      objects: // value for 'objects'
 *      deleteId: // value for 'deleteId'
 *   },
 * });
 */
export function useUpdateObjectiveMutation(baseOptions?: Apollo.MutationHookOptions<UpdateObjectiveMutation, UpdateObjectiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateObjectiveMutation, UpdateObjectiveMutationVariables>(UpdateObjectiveDocument, options);
      }
export type UpdateObjectiveMutationHookResult = ReturnType<typeof useUpdateObjectiveMutation>;
export type UpdateObjectiveMutationResult = Apollo.MutationResult<UpdateObjectiveMutation>;
export type UpdateObjectiveMutationOptions = Apollo.BaseMutationOptions<UpdateObjectiveMutation, UpdateObjectiveMutationVariables>;