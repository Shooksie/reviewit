import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  float8: any;
  json: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

export type SampleInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type SampleOutput = {
  __typename?: 'SampleOutput';
  accessToken: Scalars['String'];
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


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};


/** expression to compare columns of type json. All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>;
  _gt?: Maybe<Scalars['json']>;
  _gte?: Maybe<Scalars['json']>;
  _in?: Maybe<Array<Scalars['json']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['json']>;
  _lte?: Maybe<Scalars['json']>;
  _neq?: Maybe<Scalars['json']>;
  _nin?: Maybe<Array<Scalars['json']>>;
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
  /** perform the action: "actionName" */
  actionName?: Maybe<SampleOutput>;
  /** delete data from the table: "reviews" */
  delete_reviews?: Maybe<Reviews_Mutation_Response>;
  /** delete single row from the table: "reviews" */
  delete_reviews_by_pk?: Maybe<Reviews>;
  /** delete data from the table: "topic" */
  delete_topic?: Maybe<Topic_Mutation_Response>;
  /** delete single row from the table: "topic" */
  delete_topic_by_pk?: Maybe<Topic>;
  /** insert data into the table: "reviews" */
  insert_reviews?: Maybe<Reviews_Mutation_Response>;
  /** insert a single row into the table: "reviews" */
  insert_reviews_one?: Maybe<Reviews>;
  /** insert data into the table: "topic" */
  insert_topic?: Maybe<Topic_Mutation_Response>;
  /** insert a single row into the table: "topic" */
  insert_topic_one?: Maybe<Topic>;
  /** update data of the table: "reviews" */
  update_reviews?: Maybe<Reviews_Mutation_Response>;
  /** update single row of the table: "reviews" */
  update_reviews_by_pk?: Maybe<Reviews>;
  /** update data of the table: "topic" */
  update_topic?: Maybe<Topic_Mutation_Response>;
  /** update single row of the table: "topic" */
  update_topic_by_pk?: Maybe<Topic>;
};


/** mutation root */
export type Mutation_RootActionNameArgs = {
  arg1: SampleInput;
};


/** mutation root */
export type Mutation_RootDelete_ReviewsArgs = {
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Reviews_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TopicArgs = {
  where: Topic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Topic_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_ReviewsArgs = {
  objects: Array<Reviews_Insert_Input>;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Reviews_OneArgs = {
  object: Reviews_Insert_Input;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TopicArgs = {
  objects: Array<Topic_Insert_Input>;
  on_conflict?: Maybe<Topic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topic_OneArgs = {
  object: Topic_Insert_Input;
  on_conflict?: Maybe<Topic_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewsArgs = {
  _inc?: Maybe<Reviews_Inc_Input>;
  _set?: Maybe<Reviews_Set_Input>;
  where: Reviews_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Reviews_By_PkArgs = {
  _inc?: Maybe<Reviews_Inc_Input>;
  _set?: Maybe<Reviews_Set_Input>;
  pk_columns: Reviews_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TopicArgs = {
  _append?: Maybe<Topic_Append_Input>;
  _delete_at_path?: Maybe<Topic_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Topic_Delete_Elem_Input>;
  _delete_key?: Maybe<Topic_Delete_Key_Input>;
  _prepend?: Maybe<Topic_Prepend_Input>;
  _set?: Maybe<Topic_Set_Input>;
  where: Topic_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Topic_By_PkArgs = {
  _append?: Maybe<Topic_Append_Input>;
  _delete_at_path?: Maybe<Topic_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Topic_Delete_Elem_Input>;
  _delete_key?: Maybe<Topic_Delete_Key_Input>;
  _prepend?: Maybe<Topic_Prepend_Input>;
  _set?: Maybe<Topic_Set_Input>;
  pk_columns: Topic_Pk_Columns_Input;
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

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "topic" */
  topic: Array<Topic>;
  /** fetch aggregated fields from the table: "topic" */
  topic_aggregate: Topic_Aggregate;
  /** fetch data from the table: "topic" using primary key columns */
  topic_by_pk?: Maybe<Topic>;
};


/** query root */
export type Query_RootReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** query root */
export type Query_RootReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** query root */
export type Query_RootReviews_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootTopicArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


/** query root */
export type Query_RootTopic_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


/** query root */
export type Query_RootTopic_By_PkArgs = {
  id: Scalars['uuid'];
};

/**
 * reviews table
 * 
 * 
 * columns and relationships of "reviews"
 */
export type Reviews = {
  __typename?: 'reviews';
  created_at: Scalars['timestamptz'];
  for: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  price?: Maybe<Scalars['float8']>;
  rating: Scalars['float8'];
  review: Scalars['String'];
  reviewer?: Maybe<Scalars['uuid']>;
  source?: Maybe<Scalars['String']>;
  /** An object relationship */
  topic: Topic;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "reviews" */
export type Reviews_Aggregate = {
  __typename?: 'reviews_aggregate';
  aggregate?: Maybe<Reviews_Aggregate_Fields>;
  nodes: Array<Reviews>;
};

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_Fields = {
  __typename?: 'reviews_aggregate_fields';
  avg?: Maybe<Reviews_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Reviews_Max_Fields>;
  min?: Maybe<Reviews_Min_Fields>;
  stddev?: Maybe<Reviews_Stddev_Fields>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Fields>;
  sum?: Maybe<Reviews_Sum_Fields>;
  var_pop?: Maybe<Reviews_Var_Pop_Fields>;
  var_samp?: Maybe<Reviews_Var_Samp_Fields>;
  variance?: Maybe<Reviews_Variance_Fields>;
};


/** aggregate fields of "reviews" */
export type Reviews_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reviews_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "reviews" */
export type Reviews_Aggregate_Order_By = {
  avg?: Maybe<Reviews_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Reviews_Max_Order_By>;
  min?: Maybe<Reviews_Min_Order_By>;
  stddev?: Maybe<Reviews_Stddev_Order_By>;
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Order_By>;
  sum?: Maybe<Reviews_Sum_Order_By>;
  var_pop?: Maybe<Reviews_Var_Pop_Order_By>;
  var_samp?: Maybe<Reviews_Var_Samp_Order_By>;
  variance?: Maybe<Reviews_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "reviews" */
export type Reviews_Arr_Rel_Insert_Input = {
  data: Array<Reviews_Insert_Input>;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** aggregate avg on columns */
export type Reviews_Avg_Fields = {
  __typename?: 'reviews_avg_fields';
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "reviews" */
export type Reviews_Avg_Order_By = {
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "reviews". All fields are combined with a logical 'AND'. */
export type Reviews_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reviews_Bool_Exp>>>;
  _not?: Maybe<Reviews_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Reviews_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  for?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Float8_Comparison_Exp>;
  rating?: Maybe<Float8_Comparison_Exp>;
  review?: Maybe<String_Comparison_Exp>;
  reviewer?: Maybe<Uuid_Comparison_Exp>;
  source?: Maybe<String_Comparison_Exp>;
  topic?: Maybe<Topic_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "reviews" */
export enum Reviews_Constraint {
  /** unique or primary key constraint */
  ReviewsPkey = 'reviews_pkey'
}

/** input type for incrementing integer column in table "reviews" */
export type Reviews_Inc_Input = {
  price?: Maybe<Scalars['float8']>;
  rating?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "reviews" */
export type Reviews_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  for?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  rating?: Maybe<Scalars['float8']>;
  review?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['uuid']>;
  source?: Maybe<Scalars['String']>;
  topic?: Maybe<Topic_Obj_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Reviews_Max_Fields = {
  __typename?: 'reviews_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  for?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  rating?: Maybe<Scalars['float8']>;
  review?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['uuid']>;
  source?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "reviews" */
export type Reviews_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  for?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  review?: Maybe<Order_By>;
  reviewer?: Maybe<Order_By>;
  source?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Reviews_Min_Fields = {
  __typename?: 'reviews_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  for?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  rating?: Maybe<Scalars['float8']>;
  review?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['uuid']>;
  source?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "reviews" */
export type Reviews_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  for?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  review?: Maybe<Order_By>;
  reviewer?: Maybe<Order_By>;
  source?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "reviews" */
export type Reviews_Mutation_Response = {
  __typename?: 'reviews_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Reviews>;
};

/** input type for inserting object relation for remote table "reviews" */
export type Reviews_Obj_Rel_Insert_Input = {
  data: Reviews_Insert_Input;
  on_conflict?: Maybe<Reviews_On_Conflict>;
};

/** on conflict condition type for table "reviews" */
export type Reviews_On_Conflict = {
  constraint: Reviews_Constraint;
  update_columns: Array<Reviews_Update_Column>;
  where?: Maybe<Reviews_Bool_Exp>;
};

/** ordering options when selecting data from "reviews" */
export type Reviews_Order_By = {
  created_at?: Maybe<Order_By>;
  for?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  review?: Maybe<Order_By>;
  reviewer?: Maybe<Order_By>;
  source?: Maybe<Order_By>;
  topic?: Maybe<Topic_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "reviews" */
export type Reviews_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "reviews" */
export enum Reviews_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  For = 'for',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  Review = 'review',
  /** column name */
  Reviewer = 'reviewer',
  /** column name */
  Source = 'source',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "reviews" */
export type Reviews_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  for?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['float8']>;
  rating?: Maybe<Scalars['float8']>;
  review?: Maybe<Scalars['String']>;
  reviewer?: Maybe<Scalars['uuid']>;
  source?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Reviews_Stddev_Fields = {
  __typename?: 'reviews_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "reviews" */
export type Reviews_Stddev_Order_By = {
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Reviews_Stddev_Pop_Fields = {
  __typename?: 'reviews_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "reviews" */
export type Reviews_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Reviews_Stddev_Samp_Fields = {
  __typename?: 'reviews_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "reviews" */
export type Reviews_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Reviews_Sum_Fields = {
  __typename?: 'reviews_sum_fields';
  price?: Maybe<Scalars['float8']>;
  rating?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "reviews" */
export type Reviews_Sum_Order_By = {
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** update columns of table "reviews" */
export enum Reviews_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  For = 'for',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  Review = 'review',
  /** column name */
  Reviewer = 'reviewer',
  /** column name */
  Source = 'source',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Reviews_Var_Pop_Fields = {
  __typename?: 'reviews_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "reviews" */
export type Reviews_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Reviews_Var_Samp_Fields = {
  __typename?: 'reviews_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "reviews" */
export type Reviews_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Reviews_Variance_Fields = {
  __typename?: 'reviews_variance_fields';
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "reviews" */
export type Reviews_Variance_Order_By = {
  price?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>;
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate;
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>;
  /** fetch data from the table: "topic" */
  topic: Array<Topic>;
  /** fetch aggregated fields from the table: "topic" */
  topic_aggregate: Topic_Aggregate;
  /** fetch data from the table: "topic" using primary key columns */
  topic_by_pk?: Maybe<Topic>;
};


/** subscription root */
export type Subscription_RootReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootReviews_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootTopicArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTopic_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Order_By>>;
  where?: Maybe<Topic_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTopic_By_PkArgs = {
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

/** columns and relationships of "topic" */
export type Topic = {
  __typename?: 'topic';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  reviews: Array<Reviews>;
  /** An aggregated array relationship */
  reviews_aggregate: Reviews_Aggregate;
  tags?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "topic" */
export type TopicReviewsArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "topic" */
export type TopicReviews_AggregateArgs = {
  distinct_on?: Maybe<Array<Reviews_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Reviews_Order_By>>;
  where?: Maybe<Reviews_Bool_Exp>;
};


/** columns and relationships of "topic" */
export type TopicTagsArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "topic" */
export type Topic_Aggregate = {
  __typename?: 'topic_aggregate';
  aggregate?: Maybe<Topic_Aggregate_Fields>;
  nodes: Array<Topic>;
};

/** aggregate fields of "topic" */
export type Topic_Aggregate_Fields = {
  __typename?: 'topic_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Topic_Max_Fields>;
  min?: Maybe<Topic_Min_Fields>;
};


/** aggregate fields of "topic" */
export type Topic_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Topic_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "topic" */
export type Topic_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Topic_Max_Order_By>;
  min?: Maybe<Topic_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Topic_Append_Input = {
  tags?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "topic" */
export type Topic_Arr_Rel_Insert_Input = {
  data: Array<Topic_Insert_Input>;
  on_conflict?: Maybe<Topic_On_Conflict>;
};

/** Boolean expression to filter rows from the table "topic". All fields are combined with a logical 'AND'. */
export type Topic_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Topic_Bool_Exp>>>;
  _not?: Maybe<Topic_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Topic_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  reviews?: Maybe<Reviews_Bool_Exp>;
  tags?: Maybe<Jsonb_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "topic" */
export enum Topic_Constraint {
  /** unique or primary key constraint */
  TopicNameKey = 'topic_name_key',
  /** unique or primary key constraint */
  TopicPkey = 'topic_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Topic_Delete_At_Path_Input = {
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Topic_Delete_Elem_Input = {
  tags?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Topic_Delete_Key_Input = {
  tags?: Maybe<Scalars['String']>;
};

/** input type for inserting data into table "topic" */
export type Topic_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  reviews?: Maybe<Reviews_Arr_Rel_Insert_Input>;
  tags?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Topic_Max_Fields = {
  __typename?: 'topic_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "topic" */
export type Topic_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Topic_Min_Fields = {
  __typename?: 'topic_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "topic" */
export type Topic_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "topic" */
export type Topic_Mutation_Response = {
  __typename?: 'topic_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Topic>;
};

/** input type for inserting object relation for remote table "topic" */
export type Topic_Obj_Rel_Insert_Input = {
  data: Topic_Insert_Input;
  on_conflict?: Maybe<Topic_On_Conflict>;
};

/** on conflict condition type for table "topic" */
export type Topic_On_Conflict = {
  constraint: Topic_Constraint;
  update_columns: Array<Topic_Update_Column>;
  where?: Maybe<Topic_Bool_Exp>;
};

/** ordering options when selecting data from "topic" */
export type Topic_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  reviews_aggregate?: Maybe<Reviews_Aggregate_Order_By>;
  tags?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "topic" */
export type Topic_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Topic_Prepend_Input = {
  tags?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "topic" */
export enum Topic_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Tags = 'tags',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "topic" */
export type Topic_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "topic" */
export enum Topic_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Tags = 'tags',
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

export type SearchTopicQueryVariables = Exact<{
  match?: Maybe<Scalars['String']>;
}>;


export type SearchTopicQuery = (
  { __typename?: 'query_root' }
  & { topic: Array<(
    { __typename?: 'topic' }
    & Pick<Topic, 'id' | 'name' | 'created_at'>
  )> }
);

export type CreateReviewMutationVariables = Exact<{
  topic?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['float8']>;
  url?: Maybe<Scalars['String']>;
  review?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}>;


export type CreateReviewMutation = (
  { __typename?: 'mutation_root' }
  & { insert_reviews_one?: Maybe<(
    { __typename?: 'reviews' }
    & Pick<Reviews, 'name' | 'id'>
  )> }
);


export const SearchTopicDocument = gql`
    query SearchTopic($match: String = "%%") {
  topic(where: {name: {_ilike: $match}}, limit: 10, order_by: {updated_at: desc}) {
    id
    name
    created_at
  }
}
    `;

/**
 * __useSearchTopicQuery__
 *
 * To run a query within a React component, call `useSearchTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchTopicQuery({
 *   variables: {
 *      match: // value for 'match'
 *   },
 * });
 */
export function useSearchTopicQuery(baseOptions?: Apollo.QueryHookOptions<SearchTopicQuery, SearchTopicQueryVariables>) {
        return Apollo.useQuery<SearchTopicQuery, SearchTopicQueryVariables>(SearchTopicDocument, baseOptions);
      }
export function useSearchTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchTopicQuery, SearchTopicQueryVariables>) {
          return Apollo.useLazyQuery<SearchTopicQuery, SearchTopicQueryVariables>(SearchTopicDocument, baseOptions);
        }
export type SearchTopicQueryHookResult = ReturnType<typeof useSearchTopicQuery>;
export type SearchTopicLazyQueryHookResult = ReturnType<typeof useSearchTopicLazyQuery>;
export type SearchTopicQueryResult = Apollo.QueryResult<SearchTopicQuery, SearchTopicQueryVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($topic: String = "", $rating: float8 = "0", $url: String = "", $review: String = "", $name: String = "") {
  insert_reviews_one(
    object: {name: $name, topic: {data: {name: $topic}, on_conflict: {constraint: topic_name_key, update_columns: name}}, rating: $rating, source: $url, review: $review}
  ) {
    name
    id
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      topic: // value for 'topic'
 *      rating: // value for 'rating'
 *      url: // value for 'url'
 *      review: // value for 'review'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, baseOptions);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;