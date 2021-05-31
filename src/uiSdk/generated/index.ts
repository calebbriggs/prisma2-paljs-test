import { GraphQLClient } from 'graphql-request';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Json: any;
};

export type AggregateEntityLog = {
  __typename?: 'AggregateEntityLog';
  _count?: Maybe<EntityLogCountAggregateOutputType>;
  count?: Maybe<EntityLogCountAggregateOutputType>;
  _min?: Maybe<EntityLogMinAggregateOutputType>;
  min?: Maybe<EntityLogMinAggregateOutputType>;
  _max?: Maybe<EntityLogMaxAggregateOutputType>;
  max?: Maybe<EntityLogMaxAggregateOutputType>;
};

export type AggregatePermission = {
  __typename?: 'AggregatePermission';
  _count?: Maybe<PermissionCountAggregateOutputType>;
  count?: Maybe<PermissionCountAggregateOutputType>;
  _min?: Maybe<PermissionMinAggregateOutputType>;
  min?: Maybe<PermissionMinAggregateOutputType>;
  _max?: Maybe<PermissionMaxAggregateOutputType>;
  max?: Maybe<PermissionMaxAggregateOutputType>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _count?: Maybe<PostCountAggregateOutputType>;
  count?: Maybe<PostCountAggregateOutputType>;
  _min?: Maybe<PostMinAggregateOutputType>;
  min?: Maybe<PostMinAggregateOutputType>;
  _max?: Maybe<PostMaxAggregateOutputType>;
  max?: Maybe<PostMaxAggregateOutputType>;
};

export type AggregateRole = {
  __typename?: 'AggregateRole';
  _count?: Maybe<RoleCountAggregateOutputType>;
  count?: Maybe<RoleCountAggregateOutputType>;
  _min?: Maybe<RoleMinAggregateOutputType>;
  min?: Maybe<RoleMinAggregateOutputType>;
  _max?: Maybe<RoleMaxAggregateOutputType>;
  max?: Maybe<RoleMaxAggregateOutputType>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregateOutputType>;
  count?: Maybe<UserCountAggregateOutputType>;
  _min?: Maybe<UserMinAggregateOutputType>;
  min?: Maybe<UserMinAggregateOutputType>;
  _max?: Maybe<UserMaxAggregateOutputType>;
  max?: Maybe<UserMaxAggregateOutputType>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  count: Scalars['Int'];
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  _max?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};


export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export enum EntityActionType {
  Create = 'create',
  Update = 'update',
  Delete = 'delete'
}

export type EntityLog = {
  __typename?: 'EntityLog';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  model: Scalars['String'];
  changes: Scalars['Json'];
  action: EntityActionType;
  entityId: Scalars['String'];
};

export type EntityLogCountAggregateOutputType = {
  __typename?: 'EntityLogCountAggregateOutputType';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  model: Scalars['Int'];
  changes: Scalars['Int'];
  action: Scalars['Int'];
  entityId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type EntityLogCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model: Scalars['String'];
  changes: Scalars['Json'];
  action: EntityActionType;
  entityId: Scalars['String'];
};

export type EntityLogCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model: Scalars['String'];
  changes: Scalars['Json'];
  action: EntityActionType;
  entityId: Scalars['String'];
};

export type EntityLogMaxAggregateOutputType = {
  __typename?: 'EntityLogMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model?: Maybe<Scalars['String']>;
  action?: Maybe<EntityActionType>;
  entityId?: Maybe<Scalars['String']>;
};

export type EntityLogMinAggregateOutputType = {
  __typename?: 'EntityLogMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model?: Maybe<Scalars['String']>;
  action?: Maybe<EntityActionType>;
  entityId?: Maybe<Scalars['String']>;
};

export type EntityLogOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  model?: Maybe<SortOrder>;
  changes?: Maybe<SortOrder>;
  action?: Maybe<SortOrder>;
  entityId?: Maybe<SortOrder>;
};

export enum EntityLogScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Model = 'model',
  Changes = 'changes',
  Action = 'action',
  EntityId = 'entityId'
}

export type EntityLogScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<EntityLogScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<EntityLogScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<EntityLogScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  model?: Maybe<StringWithAggregatesFilter>;
  changes?: Maybe<JsonWithAggregatesFilter>;
  action?: Maybe<EnumEntityActionTypeWithAggregatesFilter>;
  entityId?: Maybe<StringWithAggregatesFilter>;
};

export type EntityLogUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model: Scalars['String'];
  changes: Scalars['Json'];
  action: EntityActionType;
  entityId: Scalars['String'];
};

export type EntityLogUncheckedUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model?: Maybe<Scalars['String']>;
  changes?: Maybe<Scalars['Json']>;
  action?: Maybe<EntityActionType>;
  entityId?: Maybe<Scalars['String']>;
};

export type EntityLogUncheckedUpdateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model?: Maybe<Scalars['String']>;
  changes?: Maybe<Scalars['Json']>;
  action?: Maybe<EntityActionType>;
  entityId?: Maybe<Scalars['String']>;
};

export type EntityLogUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model?: Maybe<Scalars['String']>;
  changes?: Maybe<Scalars['Json']>;
  action?: Maybe<EntityActionType>;
  entityId?: Maybe<Scalars['String']>;
};

export type EntityLogUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  model?: Maybe<Scalars['String']>;
  changes?: Maybe<Scalars['Json']>;
  action?: Maybe<EntityActionType>;
  entityId?: Maybe<Scalars['String']>;
};

export type EntityLogWhereInput = {
  AND?: Maybe<Array<EntityLogWhereInput>>;
  OR?: Maybe<Array<EntityLogWhereInput>>;
  NOT?: Maybe<Array<EntityLogWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  model?: Maybe<StringFilter>;
  changes?: Maybe<JsonFilter>;
  action?: Maybe<EnumEntityActionTypeFilter>;
  entityId?: Maybe<StringFilter>;
};

export type EntityLogWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type EnumEntityActionTypeFieldUpdateOperationsInput = {
  set?: Maybe<EntityActionType>;
};

export type EnumEntityActionTypeFilter = {
  equals?: Maybe<EntityActionType>;
  in?: Maybe<Array<EntityActionType>>;
  notIn?: Maybe<Array<EntityActionType>>;
  not?: Maybe<NestedEnumEntityActionTypeFilter>;
};

export type EnumEntityActionTypeWithAggregatesFilter = {
  equals?: Maybe<EntityActionType>;
  in?: Maybe<Array<EntityActionType>>;
  notIn?: Maybe<Array<EntityActionType>>;
  not?: Maybe<NestedEnumEntityActionTypeWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedEnumEntityActionTypeFilter>;
  min?: Maybe<NestedEnumEntityActionTypeFilter>;
  _max?: Maybe<NestedEnumEntityActionTypeFilter>;
  max?: Maybe<NestedEnumEntityActionTypeFilter>;
};

export type EnumPermissionTypeFieldUpdateOperationsInput = {
  set?: Maybe<PermissionType>;
};

export type EnumPermissionTypeFilter = {
  equals?: Maybe<PermissionType>;
  in?: Maybe<Array<PermissionType>>;
  notIn?: Maybe<Array<PermissionType>>;
  not?: Maybe<NestedEnumPermissionTypeFilter>;
};

export type EnumPermissionTypeWithAggregatesFilter = {
  equals?: Maybe<PermissionType>;
  in?: Maybe<Array<PermissionType>>;
  notIn?: Maybe<Array<PermissionType>>;
  not?: Maybe<NestedEnumPermissionTypeWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedEnumPermissionTypeFilter>;
  min?: Maybe<NestedEnumPermissionTypeFilter>;
  _max?: Maybe<NestedEnumPermissionTypeFilter>;
  max?: Maybe<NestedEnumPermissionTypeFilter>;
};


export type JsonFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type JsonWithAggregatesFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedJsonFilter>;
  min?: Maybe<NestedJsonFilter>;
  _max?: Maybe<NestedJsonFilter>;
  max?: Maybe<NestedJsonFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOnePost: Post;
  updateOnePost: Post;
  deleteOnePost?: Maybe<Post>;
  upsertOnePost?: Maybe<Post>;
  deleteManyPost?: Maybe<BatchPayload>;
  updateManyPost?: Maybe<BatchPayload>;
  createOneUser: User;
  updateOneUser: User;
  deleteOneUser?: Maybe<User>;
  upsertOneUser?: Maybe<User>;
  deleteManyUser?: Maybe<BatchPayload>;
  updateManyUser?: Maybe<BatchPayload>;
  createOneRole: Role;
  updateOneRole: Role;
  deleteOneRole?: Maybe<Role>;
  upsertOneRole?: Maybe<Role>;
  deleteManyRole?: Maybe<BatchPayload>;
  updateManyRole?: Maybe<BatchPayload>;
  createOnePermission: Permission;
  updateOnePermission: Permission;
  deleteOnePermission?: Maybe<Permission>;
  upsertOnePermission?: Maybe<Permission>;
  deleteManyPermission?: Maybe<BatchPayload>;
  updateManyPermission?: Maybe<BatchPayload>;
  upsertOneEntityLog?: Maybe<EntityLog>;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
};


export type MutationUpdateOnePostArgs = {
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
};


export type MutationDeleteOnePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  where?: Maybe<PostWhereInput>;
  data?: Maybe<PostUpdateManyMutationInput>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateOneUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  data?: Maybe<UserUpdateManyMutationInput>;
};


export type MutationCreateOneRoleArgs = {
  data: RoleCreateInput;
};


export type MutationUpdateOneRoleArgs = {
  where: RoleWhereUniqueInput;
  data: RoleUpdateInput;
};


export type MutationDeleteOneRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type MutationUpsertOneRoleArgs = {
  where: RoleWhereUniqueInput;
  create: RoleCreateInput;
  update: RoleUpdateInput;
};


export type MutationDeleteManyRoleArgs = {
  where?: Maybe<RoleWhereInput>;
};


export type MutationUpdateManyRoleArgs = {
  where?: Maybe<RoleWhereInput>;
  data?: Maybe<RoleUpdateManyMutationInput>;
};


export type MutationCreateOnePermissionArgs = {
  data: PermissionCreateInput;
};


export type MutationUpdateOnePermissionArgs = {
  where: PermissionWhereUniqueInput;
  data: PermissionUpdateInput;
};


export type MutationDeleteOnePermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type MutationUpsertOnePermissionArgs = {
  where: PermissionWhereUniqueInput;
  create: PermissionCreateInput;
  update: PermissionUpdateInput;
};


export type MutationDeleteManyPermissionArgs = {
  where?: Maybe<PermissionWhereInput>;
};


export type MutationUpdateManyPermissionArgs = {
  where?: Maybe<PermissionWhereInput>;
  data?: Maybe<PermissionUpdateManyMutationInput>;
};


export type MutationUpsertOneEntityLogArgs = {
  where: EntityLogWhereUniqueInput;
  create: EntityLogCreateInput;
  update: EntityLogUpdateInput;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedBoolFilter>;
  min?: Maybe<NestedBoolFilter>;
  _max?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type NestedEnumEntityActionTypeFilter = {
  equals?: Maybe<EntityActionType>;
  in?: Maybe<Array<EntityActionType>>;
  notIn?: Maybe<Array<EntityActionType>>;
  not?: Maybe<NestedEnumEntityActionTypeFilter>;
};

export type NestedEnumEntityActionTypeWithAggregatesFilter = {
  equals?: Maybe<EntityActionType>;
  in?: Maybe<Array<EntityActionType>>;
  notIn?: Maybe<Array<EntityActionType>>;
  not?: Maybe<NestedEnumEntityActionTypeWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedEnumEntityActionTypeFilter>;
  min?: Maybe<NestedEnumEntityActionTypeFilter>;
  _max?: Maybe<NestedEnumEntityActionTypeFilter>;
  max?: Maybe<NestedEnumEntityActionTypeFilter>;
};

export type NestedEnumPermissionTypeFilter = {
  equals?: Maybe<PermissionType>;
  in?: Maybe<Array<PermissionType>>;
  notIn?: Maybe<Array<PermissionType>>;
  not?: Maybe<NestedEnumPermissionTypeFilter>;
};

export type NestedEnumPermissionTypeWithAggregatesFilter = {
  equals?: Maybe<PermissionType>;
  in?: Maybe<Array<PermissionType>>;
  notIn?: Maybe<Array<PermissionType>>;
  not?: Maybe<NestedEnumPermissionTypeWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedEnumPermissionTypeFilter>;
  min?: Maybe<NestedEnumPermissionTypeFilter>;
  _max?: Maybe<NestedEnumPermissionTypeFilter>;
  max?: Maybe<NestedEnumPermissionTypeFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedJsonFilter = {
  equals?: Maybe<Scalars['Json']>;
  not?: Maybe<Scalars['Json']>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: PermissionType;
  roles: Array<Role>;
};


export type PermissionRolesArgs = {
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<RoleOrderByInput>;
  cursor?: Maybe<RoleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<RoleScalarFieldEnum>;
};

export type PermissionCountAggregateOutputType = {
  __typename?: 'PermissionCountAggregateOutputType';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  name: Scalars['Int'];
  _all: Scalars['Int'];
};

export type PermissionCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: PermissionType;
  roles?: Maybe<RoleCreateNestedManyWithoutPermissionsInput>;
};

export type PermissionCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: PermissionType;
};

export type PermissionCreateNestedManyWithoutRolesInput = {
  create?: Maybe<Array<PermissionCreateWithoutRolesInput>>;
  connectOrCreate?: Maybe<Array<PermissionCreateOrConnectWithoutRolesInput>>;
  connect?: Maybe<Array<PermissionWhereUniqueInput>>;
};

export type PermissionCreateOrConnectWithoutRolesInput = {
  where: PermissionWhereUniqueInput;
  create: PermissionUncheckedCreateWithoutRolesInput;
};

export type PermissionCreateWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: PermissionType;
};

export type PermissionListRelationFilter = {
  every?: Maybe<PermissionWhereInput>;
  some?: Maybe<PermissionWhereInput>;
  none?: Maybe<PermissionWhereInput>;
};

export type PermissionMaxAggregateOutputType = {
  __typename?: 'PermissionMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
};

export type PermissionMinAggregateOutputType = {
  __typename?: 'PermissionMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
};

export type PermissionOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export enum PermissionScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name'
}

export type PermissionScalarWhereInput = {
  AND?: Maybe<Array<PermissionScalarWhereInput>>;
  OR?: Maybe<Array<PermissionScalarWhereInput>>;
  NOT?: Maybe<Array<PermissionScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<EnumPermissionTypeFilter>;
};

export type PermissionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PermissionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PermissionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PermissionScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  name?: Maybe<EnumPermissionTypeWithAggregatesFilter>;
};

export enum PermissionType {
  ReadUser = 'ReadUser',
  WriteUser = 'WriteUser',
  ReadPost = 'ReadPost',
  WritePost = 'WritePost',
  ReadRole = 'ReadRole',
  WriteRole = 'WriteRole'
}

export type PermissionUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: PermissionType;
};

export type PermissionUncheckedCreateWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: PermissionType;
};

export type PermissionUncheckedUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
};

export type PermissionUncheckedUpdateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
};

export type PermissionUncheckedUpdateManyWithoutPermissionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
};

export type PermissionUncheckedUpdateWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
};

export type PermissionUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
  roles?: Maybe<RoleUpdateManyWithoutPermissionsInput>;
};

export type PermissionUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
};

export type PermissionUpdateManyWithWhereWithoutRolesInput = {
  where: PermissionScalarWhereInput;
  data: PermissionUncheckedUpdateManyWithoutPermissionsInput;
};

export type PermissionUpdateManyWithoutRolesInput = {
  create?: Maybe<Array<PermissionCreateWithoutRolesInput>>;
  connectOrCreate?: Maybe<Array<PermissionCreateOrConnectWithoutRolesInput>>;
  upsert?: Maybe<Array<PermissionUpsertWithWhereUniqueWithoutRolesInput>>;
  connect?: Maybe<Array<PermissionWhereUniqueInput>>;
  set?: Maybe<Array<PermissionWhereUniqueInput>>;
  disconnect?: Maybe<Array<PermissionWhereUniqueInput>>;
  delete?: Maybe<Array<PermissionWhereUniqueInput>>;
  update?: Maybe<Array<PermissionUpdateWithWhereUniqueWithoutRolesInput>>;
  updateMany?: Maybe<Array<PermissionUpdateManyWithWhereWithoutRolesInput>>;
  deleteMany?: Maybe<Array<PermissionScalarWhereInput>>;
};

export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
  where: PermissionWhereUniqueInput;
  data: PermissionUncheckedUpdateWithoutRolesInput;
};

export type PermissionUpdateWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<PermissionType>;
};

export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
  where: PermissionWhereUniqueInput;
  update: PermissionUncheckedUpdateWithoutRolesInput;
  create: PermissionUncheckedCreateWithoutRolesInput;
};

export type PermissionWhereInput = {
  AND?: Maybe<Array<PermissionWhereInput>>;
  OR?: Maybe<Array<PermissionWhereInput>>;
  NOT?: Maybe<Array<PermissionWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<EnumPermissionTypeFilter>;
  roles?: Maybe<RoleListRelationFilter>;
};

export type PermissionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<PermissionType>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published: Scalars['Boolean'];
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostCountAggregateOutputType = {
  __typename?: 'PostCountAggregateOutputType';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  title: Scalars['Int'];
  content: Scalars['Int'];
  published: Scalars['Int'];
  authorId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type PostCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  author?: Maybe<UserCreateNestedOneWithoutPostsInput>;
};

export type PostCreateManyAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type PostCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  create: PostUncheckedCreateWithoutAuthorInput;
};

export type PostCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type PostMaxAggregateOutputType = {
  __typename?: 'PostMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostMinAggregateOutputType = {
  __typename?: 'PostMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  content?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  authorId?: Maybe<SortOrder>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Title = 'title',
  Content = 'content',
  Published = 'published',
  AuthorId = 'authorId'
}

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  published?: Maybe<BoolFilter>;
  authorId?: Maybe<StringNullableFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<PostScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  title?: Maybe<StringWithAggregatesFilter>;
  content?: Maybe<StringNullableWithAggregatesFilter>;
  published?: Maybe<BoolWithAggregatesFilter>;
  authorId?: Maybe<StringNullableWithAggregatesFilter>;
};

export type PostUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostUncheckedCreateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PostUncheckedUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostUncheckedUpdateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  authorId?: Maybe<Scalars['String']>;
};

export type PostUncheckedUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUncheckedUpdateManyWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PostUncheckedUpdateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PostUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  author?: Maybe<UserUpdateOneWithoutPostsInput>;
};

export type PostUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUncheckedUpdateManyWithoutPostsInput;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  createMany?: Maybe<PostCreateManyAuthorInputEnvelope>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUncheckedUpdateWithoutAuthorInput;
};

export type PostUpdateWithoutAuthorInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUncheckedUpdateWithoutAuthorInput;
  create: PostUncheckedCreateWithoutAuthorInput;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  content?: Maybe<StringNullableFilter>;
  published?: Maybe<BoolFilter>;
  author?: Maybe<UserWhereInput>;
  authorId?: Maybe<StringNullableFilter>;
};

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  findUniquePost?: Maybe<Post>;
  findFirstPost?: Maybe<Post>;
  findManyPost?: Maybe<Array<Post>>;
  findManyPostCount: Scalars['Int'];
  aggregatePost?: Maybe<AggregatePost>;
  findUniqueUser?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  findManyUser?: Maybe<Array<User>>;
  findManyUserCount: Scalars['Int'];
  aggregateUser?: Maybe<AggregateUser>;
  findUniqueRole?: Maybe<Role>;
  findFirstRole?: Maybe<Role>;
  findManyRole?: Maybe<Array<Role>>;
  findManyRoleCount: Scalars['Int'];
  aggregateRole?: Maybe<AggregateRole>;
  findUniquePermission?: Maybe<Permission>;
  findFirstPermission?: Maybe<Permission>;
  findManyPermission?: Maybe<Array<Permission>>;
  findManyPermissionCount: Scalars['Int'];
  aggregatePermission?: Maybe<AggregatePermission>;
  findUniqueEntityLog?: Maybe<EntityLog>;
  findFirstEntityLog?: Maybe<EntityLog>;
  findManyEntityLog?: Maybe<Array<EntityLog>>;
  findManyEntityLogCount: Scalars['Int'];
  aggregateEntityLog?: Maybe<AggregateEntityLog>;
};


export type QueryFindUniquePostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyPostCountArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  distinct?: Maybe<PostScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyUserCountArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<UserScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QueryFindFirstRoleArgs = {
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<Array<RoleOrderByInput>>;
  cursor?: Maybe<RoleWhereUniqueInput>;
  distinct?: Maybe<RoleScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyRoleArgs = {
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<Array<RoleOrderByInput>>;
  cursor?: Maybe<RoleWhereUniqueInput>;
  distinct?: Maybe<RoleScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyRoleCountArgs = {
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<Array<RoleOrderByInput>>;
  cursor?: Maybe<RoleWhereUniqueInput>;
  distinct?: Maybe<RoleScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateRoleArgs = {
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<Array<RoleOrderByInput>>;
  cursor?: Maybe<RoleWhereUniqueInput>;
  distinct?: Maybe<RoleScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniquePermissionArgs = {
  where: PermissionWhereUniqueInput;
};


export type QueryFindFirstPermissionArgs = {
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<Array<PermissionOrderByInput>>;
  cursor?: Maybe<PermissionWhereUniqueInput>;
  distinct?: Maybe<PermissionScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyPermissionArgs = {
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<Array<PermissionOrderByInput>>;
  cursor?: Maybe<PermissionWhereUniqueInput>;
  distinct?: Maybe<PermissionScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyPermissionCountArgs = {
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<Array<PermissionOrderByInput>>;
  cursor?: Maybe<PermissionWhereUniqueInput>;
  distinct?: Maybe<PermissionScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregatePermissionArgs = {
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<Array<PermissionOrderByInput>>;
  cursor?: Maybe<PermissionWhereUniqueInput>;
  distinct?: Maybe<PermissionScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindUniqueEntityLogArgs = {
  where: EntityLogWhereUniqueInput;
};


export type QueryFindFirstEntityLogArgs = {
  where?: Maybe<EntityLogWhereInput>;
  orderBy?: Maybe<Array<EntityLogOrderByInput>>;
  cursor?: Maybe<EntityLogWhereUniqueInput>;
  distinct?: Maybe<EntityLogScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyEntityLogArgs = {
  where?: Maybe<EntityLogWhereInput>;
  orderBy?: Maybe<Array<EntityLogOrderByInput>>;
  cursor?: Maybe<EntityLogWhereUniqueInput>;
  distinct?: Maybe<EntityLogScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryFindManyEntityLogCountArgs = {
  where?: Maybe<EntityLogWhereInput>;
  orderBy?: Maybe<Array<EntityLogOrderByInput>>;
  cursor?: Maybe<EntityLogWhereUniqueInput>;
  distinct?: Maybe<EntityLogScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryAggregateEntityLogArgs = {
  where?: Maybe<EntityLogWhereInput>;
  orderBy?: Maybe<Array<EntityLogOrderByInput>>;
  cursor?: Maybe<EntityLogWhereUniqueInput>;
  distinct?: Maybe<EntityLogScalarFieldEnum>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Role = {
  __typename?: 'Role';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  permissions: Array<Permission>;
  users: Array<User>;
};


export type RolePermissionsArgs = {
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<PermissionOrderByInput>;
  cursor?: Maybe<PermissionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<PermissionScalarFieldEnum>;
};


export type RoleUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<UserScalarFieldEnum>;
};

export type RoleCountAggregateOutputType = {
  __typename?: 'RoleCountAggregateOutputType';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  name: Scalars['Int'];
  _all: Scalars['Int'];
};

export type RoleCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  permissions?: Maybe<PermissionCreateNestedManyWithoutRolesInput>;
  users?: Maybe<UserCreateNestedManyWithoutRolesInput>;
};

export type RoleCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type RoleCreateNestedManyWithoutPermissionsInput = {
  create?: Maybe<Array<RoleCreateWithoutPermissionsInput>>;
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutPermissionsInput>>;
  connect?: Maybe<Array<RoleWhereUniqueInput>>;
};

export type RoleCreateNestedManyWithoutUsersInput = {
  create?: Maybe<Array<RoleCreateWithoutUsersInput>>;
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutUsersInput>>;
  connect?: Maybe<Array<RoleWhereUniqueInput>>;
};

export type RoleCreateOrConnectWithoutPermissionsInput = {
  where: RoleWhereUniqueInput;
  create: RoleUncheckedCreateWithoutPermissionsInput;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  where: RoleWhereUniqueInput;
  create: RoleUncheckedCreateWithoutUsersInput;
};

export type RoleCreateWithoutPermissionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  users?: Maybe<UserCreateNestedManyWithoutRolesInput>;
};

export type RoleCreateWithoutUsersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  permissions?: Maybe<PermissionCreateNestedManyWithoutRolesInput>;
};

export type RoleListRelationFilter = {
  every?: Maybe<RoleWhereInput>;
  some?: Maybe<RoleWhereInput>;
  none?: Maybe<RoleWhereInput>;
};

export type RoleMaxAggregateOutputType = {
  __typename?: 'RoleMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleMinAggregateOutputType = {
  __typename?: 'RoleMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export enum RoleScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name'
}

export type RoleScalarWhereInput = {
  AND?: Maybe<Array<RoleScalarWhereInput>>;
  OR?: Maybe<Array<RoleScalarWhereInput>>;
  NOT?: Maybe<Array<RoleScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
};

export type RoleScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<RoleScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<RoleScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<RoleScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
};

export type RoleUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type RoleUncheckedCreateWithoutPermissionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type RoleUncheckedCreateWithoutUsersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type RoleUncheckedUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleUncheckedUpdateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleUncheckedUpdateManyWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleUncheckedUpdateWithoutPermissionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleUncheckedUpdateWithoutUsersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<PermissionUpdateManyWithoutRolesInput>;
  users?: Maybe<UserUpdateManyWithoutRolesInput>;
};

export type RoleUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
  where: RoleScalarWhereInput;
  data: RoleUncheckedUpdateManyWithoutRolesInput;
};

export type RoleUpdateManyWithWhereWithoutUsersInput = {
  where: RoleScalarWhereInput;
  data: RoleUncheckedUpdateManyWithoutRolesInput;
};

export type RoleUpdateManyWithoutPermissionsInput = {
  create?: Maybe<Array<RoleCreateWithoutPermissionsInput>>;
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutPermissionsInput>>;
  upsert?: Maybe<Array<RoleUpsertWithWhereUniqueWithoutPermissionsInput>>;
  connect?: Maybe<Array<RoleWhereUniqueInput>>;
  set?: Maybe<Array<RoleWhereUniqueInput>>;
  disconnect?: Maybe<Array<RoleWhereUniqueInput>>;
  delete?: Maybe<Array<RoleWhereUniqueInput>>;
  update?: Maybe<Array<RoleUpdateWithWhereUniqueWithoutPermissionsInput>>;
  updateMany?: Maybe<Array<RoleUpdateManyWithWhereWithoutPermissionsInput>>;
  deleteMany?: Maybe<Array<RoleScalarWhereInput>>;
};

export type RoleUpdateManyWithoutUsersInput = {
  create?: Maybe<Array<RoleCreateWithoutUsersInput>>;
  connectOrCreate?: Maybe<Array<RoleCreateOrConnectWithoutUsersInput>>;
  upsert?: Maybe<Array<RoleUpsertWithWhereUniqueWithoutUsersInput>>;
  connect?: Maybe<Array<RoleWhereUniqueInput>>;
  set?: Maybe<Array<RoleWhereUniqueInput>>;
  disconnect?: Maybe<Array<RoleWhereUniqueInput>>;
  delete?: Maybe<Array<RoleWhereUniqueInput>>;
  update?: Maybe<Array<RoleUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: Maybe<Array<RoleUpdateManyWithWhereWithoutUsersInput>>;
  deleteMany?: Maybe<Array<RoleScalarWhereInput>>;
};

export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
  where: RoleWhereUniqueInput;
  data: RoleUncheckedUpdateWithoutPermissionsInput;
};

export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
  where: RoleWhereUniqueInput;
  data: RoleUncheckedUpdateWithoutUsersInput;
};

export type RoleUpdateWithoutPermissionsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  users?: Maybe<UserUpdateManyWithoutRolesInput>;
};

export type RoleUpdateWithoutUsersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<PermissionUpdateManyWithoutRolesInput>;
};

export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
  where: RoleWhereUniqueInput;
  update: RoleUncheckedUpdateWithoutPermissionsInput;
  create: RoleUncheckedCreateWithoutPermissionsInput;
};

export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
  where: RoleWhereUniqueInput;
  update: RoleUncheckedUpdateWithoutUsersInput;
  create: RoleUncheckedCreateWithoutUsersInput;
};

export type RoleWhereInput = {
  AND?: Maybe<Array<RoleWhereInput>>;
  OR?: Maybe<Array<RoleWhereInput>>;
  NOT?: Maybe<Array<RoleWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringFilter>;
  permissions?: Maybe<PermissionListRelationFilter>;
  users?: Maybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  _count?: Maybe<NestedIntNullableFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  _count?: Maybe<NestedIntFilter>;
  count?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedStringFilter>;
  min?: Maybe<NestedStringFilter>;
  _max?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts: Array<Post>;
  roles: Array<Role>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<PostScalarFieldEnum>;
};


export type UserRolesArgs = {
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<RoleOrderByInput>;
  cursor?: Maybe<RoleWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<RoleScalarFieldEnum>;
};

export type UserCountAggregateOutputType = {
  __typename?: 'UserCountAggregateOutputType';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  email: Scalars['Int'];
  name: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  roles?: Maybe<RoleCreateNestedManyWithoutUsersInput>;
};

export type UserCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UserCreateNestedManyWithoutRolesInput = {
  create?: Maybe<Array<UserCreateWithoutRolesInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutRolesInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  create?: Maybe<UserUncheckedCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutPostsInput;
};

export type UserCreateOrConnectWithoutRolesInput = {
  where: UserWhereUniqueInput;
  create: UserUncheckedCreateWithoutRolesInput;
};

export type UserCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleCreateNestedManyWithoutUsersInput>;
};

export type UserCreateWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserListRelationFilter = {
  every?: Maybe<UserWhereInput>;
  some?: Maybe<UserWhereInput>;
  none?: Maybe<UserWhereInput>;
};

export type UserMaxAggregateOutputType = {
  __typename?: 'UserMaxAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserMinAggregateOutputType = {
  __typename?: 'UserMinAggregateOutputType';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Email = 'email',
  Name = 'name'
}

export type UserScalarWhereInput = {
  AND?: Maybe<Array<UserScalarWhereInput>>;
  OR?: Maybe<Array<UserScalarWhereInput>>;
  NOT?: Maybe<Array<UserScalarWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
};

export type UserUncheckedCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
};

export type UserUncheckedCreateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UserUncheckedCreateWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUncheckedCreateNestedManyWithoutAuthorInput>;
};

export type UserUncheckedUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutAuthorInput>;
};

export type UserUncheckedUpdateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUncheckedUpdateManyWithoutUsersInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUncheckedUpdateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUncheckedUpdateWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUncheckedUpdateManyWithoutAuthorInput>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateManyWithWhereWithoutRolesInput = {
  where: UserScalarWhereInput;
  data: UserUncheckedUpdateManyWithoutUsersInput;
};

export type UserUpdateManyWithoutRolesInput = {
  create?: Maybe<Array<UserCreateWithoutRolesInput>>;
  connectOrCreate?: Maybe<Array<UserCreateOrConnectWithoutRolesInput>>;
  upsert?: Maybe<Array<UserUpsertWithWhereUniqueWithoutRolesInput>>;
  connect?: Maybe<Array<UserWhereUniqueInput>>;
  set?: Maybe<Array<UserWhereUniqueInput>>;
  disconnect?: Maybe<Array<UserWhereUniqueInput>>;
  delete?: Maybe<Array<UserWhereUniqueInput>>;
  update?: Maybe<Array<UserUpdateWithWhereUniqueWithoutRolesInput>>;
  updateMany?: Maybe<Array<UserUpdateManyWithWhereWithoutRolesInput>>;
  deleteMany?: Maybe<Array<UserScalarWhereInput>>;
};

export type UserUpdateOneWithoutPostsInput = {
  create?: Maybe<UserUncheckedCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUncheckedUpdateWithoutPostsInput>;
};

export type UserUpdateWithWhereUniqueWithoutRolesInput = {
  where: UserWhereUniqueInput;
  data: UserUncheckedUpdateWithoutRolesInput;
};

export type UserUpdateWithoutPostsInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleUpdateManyWithoutUsersInput>;
};

export type UserUpdateWithoutRolesInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type UserUpsertWithWhereUniqueWithoutRolesInput = {
  where: UserWhereUniqueInput;
  update: UserUncheckedUpdateWithoutRolesInput;
  create: UserUncheckedCreateWithoutRolesInput;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUncheckedUpdateWithoutPostsInput;
  create: UserUncheckedCreateWithoutPostsInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringNullableFilter>;
  posts?: Maybe<PostListRelationFilter>;
  roles?: Maybe<RoleListRelationFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type EntityLogFieldsFragment = (
  { __typename?: 'EntityLog' }
  & Pick<EntityLog, 'id' | 'createdAt' | 'updatedAt' | 'model' | 'changes' | 'action' | 'entityId'>
);

export type EntityLogFragment = (
  { __typename?: 'EntityLog' }
  & EntityLogFieldsFragment
);

export type FindUniqueEntityLogQueryVariables = Exact<{
  where: EntityLogWhereUniqueInput;
}>;


export type FindUniqueEntityLogQuery = (
  { __typename?: 'Query' }
  & { findUniqueEntityLog?: Maybe<(
    { __typename?: 'EntityLog' }
    & EntityLogFragment
  )> }
);

export type FindManyEntityLogQueryVariables = Exact<{
  where?: Maybe<EntityLogWhereInput>;
  orderBy?: Maybe<Array<EntityLogOrderByInput> | EntityLogOrderByInput>;
  cursor?: Maybe<EntityLogWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyEntityLogQuery = (
  { __typename?: 'Query' }
  & { findManyEntityLog?: Maybe<Array<(
    { __typename?: 'EntityLog' }
    & EntityLogFragment
  )>> }
);

export type FindManyEntityLogCountQueryVariables = Exact<{
  where?: Maybe<EntityLogWhereInput>;
  orderBy?: Maybe<Array<EntityLogOrderByInput> | EntityLogOrderByInput>;
  cursor?: Maybe<EntityLogWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyEntityLogCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyEntityLogCount'>
);

export type PermissionFieldsFragment = (
  { __typename?: 'Permission' }
  & Pick<Permission, 'id' | 'createdAt' | 'updatedAt' | 'name'>
);

export type PermissionFragment = (
  { __typename?: 'Permission' }
  & PermissionFieldsFragment
);

export type FindUniquePermissionQueryVariables = Exact<{
  where: PermissionWhereUniqueInput;
}>;


export type FindUniquePermissionQuery = (
  { __typename?: 'Query' }
  & { findUniquePermission?: Maybe<(
    { __typename?: 'Permission' }
    & PermissionFragment
  )> }
);

export type FindManyPermissionQueryVariables = Exact<{
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<Array<PermissionOrderByInput> | PermissionOrderByInput>;
  cursor?: Maybe<PermissionWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyPermissionQuery = (
  { __typename?: 'Query' }
  & { findManyPermission?: Maybe<Array<(
    { __typename?: 'Permission' }
    & PermissionFragment
  )>> }
);

export type FindManyPermissionCountQueryVariables = Exact<{
  where?: Maybe<PermissionWhereInput>;
  orderBy?: Maybe<Array<PermissionOrderByInput> | PermissionOrderByInput>;
  cursor?: Maybe<PermissionWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyPermissionCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyPermissionCount'>
);

export type CreateOnePermissionMutationVariables = Exact<{
  data: PermissionCreateInput;
}>;


export type CreateOnePermissionMutation = (
  { __typename?: 'Mutation' }
  & { createOnePermission: (
    { __typename?: 'Permission' }
    & PermissionFragment
  ) }
);

export type UpdateOnePermissionMutationVariables = Exact<{
  where: PermissionWhereUniqueInput;
  data: PermissionUpdateInput;
}>;


export type UpdateOnePermissionMutation = (
  { __typename?: 'Mutation' }
  & { updateOnePermission: (
    { __typename?: 'Permission' }
    & PermissionFragment
  ) }
);

export type DeleteOnePermissionMutationVariables = Exact<{
  where: PermissionWhereUniqueInput;
}>;


export type DeleteOnePermissionMutation = (
  { __typename?: 'Mutation' }
  & { deleteOnePermission?: Maybe<(
    { __typename?: 'Permission' }
    & PermissionFragment
  )> }
);

export type DeleteManyPermissionMutationVariables = Exact<{
  where?: Maybe<PermissionWhereInput>;
}>;


export type DeleteManyPermissionMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyPermission?: Maybe<(
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  )> }
);

export type UpdateManyPermissionMutationVariables = Exact<{
  where?: Maybe<PermissionWhereInput>;
  data: PermissionUpdateManyMutationInput;
}>;


export type UpdateManyPermissionMutation = (
  { __typename?: 'Mutation' }
  & { updateManyPermission?: Maybe<(
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  )> }
);

export type PostFieldsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'content' | 'published' | 'authorId'>
);

export type PostFragment = (
  { __typename?: 'Post' }
  & { author?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
  & PostFieldsFragment
);

export type FindUniquePostQueryVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type FindUniquePostQuery = (
  { __typename?: 'Query' }
  & { findUniquePost?: Maybe<(
    { __typename?: 'Post' }
    & PostFragment
  )> }
);

export type FindManyPostQueryVariables = Exact<{
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput> | PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyPostQuery = (
  { __typename?: 'Query' }
  & { findManyPost?: Maybe<Array<(
    { __typename?: 'Post' }
    & PostFragment
  )>> }
);

export type FindManyPostCountQueryVariables = Exact<{
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput> | PostOrderByInput>;
  cursor?: Maybe<PostWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyPostCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyPostCount'>
);

export type CreateOnePostMutationVariables = Exact<{
  data: PostCreateInput;
}>;


export type CreateOnePostMutation = (
  { __typename?: 'Mutation' }
  & { createOnePost: (
    { __typename?: 'Post' }
    & PostFragment
  ) }
);

export type UpdateOnePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
  data: PostUpdateInput;
}>;


export type UpdateOnePostMutation = (
  { __typename?: 'Mutation' }
  & { updateOnePost: (
    { __typename?: 'Post' }
    & PostFragment
  ) }
);

export type DeleteOnePostMutationVariables = Exact<{
  where: PostWhereUniqueInput;
}>;


export type DeleteOnePostMutation = (
  { __typename?: 'Mutation' }
  & { deleteOnePost?: Maybe<(
    { __typename?: 'Post' }
    & PostFragment
  )> }
);

export type DeleteManyPostMutationVariables = Exact<{
  where?: Maybe<PostWhereInput>;
}>;


export type DeleteManyPostMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyPost?: Maybe<(
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  )> }
);

export type UpdateManyPostMutationVariables = Exact<{
  where?: Maybe<PostWhereInput>;
  data: PostUpdateManyMutationInput;
}>;


export type UpdateManyPostMutation = (
  { __typename?: 'Mutation' }
  & { updateManyPost?: Maybe<(
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  )> }
);

export type RoleFieldsFragment = (
  { __typename?: 'Role' }
  & Pick<Role, 'id' | 'createdAt' | 'updatedAt' | 'name'>
);

export type RoleFragment = (
  { __typename?: 'Role' }
  & RoleFieldsFragment
);

export type FindUniqueRoleQueryVariables = Exact<{
  where: RoleWhereUniqueInput;
}>;


export type FindUniqueRoleQuery = (
  { __typename?: 'Query' }
  & { findUniqueRole?: Maybe<(
    { __typename?: 'Role' }
    & RoleFragment
  )> }
);

export type FindManyRoleQueryVariables = Exact<{
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<Array<RoleOrderByInput> | RoleOrderByInput>;
  cursor?: Maybe<RoleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyRoleQuery = (
  { __typename?: 'Query' }
  & { findManyRole?: Maybe<Array<(
    { __typename?: 'Role' }
    & RoleFragment
  )>> }
);

export type FindManyRoleCountQueryVariables = Exact<{
  where?: Maybe<RoleWhereInput>;
  orderBy?: Maybe<Array<RoleOrderByInput> | RoleOrderByInput>;
  cursor?: Maybe<RoleWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyRoleCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyRoleCount'>
);

export type CreateOneRoleMutationVariables = Exact<{
  data: RoleCreateInput;
}>;


export type CreateOneRoleMutation = (
  { __typename?: 'Mutation' }
  & { createOneRole: (
    { __typename?: 'Role' }
    & RoleFragment
  ) }
);

export type UpdateOneRoleMutationVariables = Exact<{
  where: RoleWhereUniqueInput;
  data: RoleUpdateInput;
}>;


export type UpdateOneRoleMutation = (
  { __typename?: 'Mutation' }
  & { updateOneRole: (
    { __typename?: 'Role' }
    & RoleFragment
  ) }
);

export type DeleteOneRoleMutationVariables = Exact<{
  where: RoleWhereUniqueInput;
}>;


export type DeleteOneRoleMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneRole?: Maybe<(
    { __typename?: 'Role' }
    & RoleFragment
  )> }
);

export type DeleteManyRoleMutationVariables = Exact<{
  where?: Maybe<RoleWhereInput>;
}>;


export type DeleteManyRoleMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyRole?: Maybe<(
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  )> }
);

export type UpdateManyRoleMutationVariables = Exact<{
  where?: Maybe<RoleWhereInput>;
  data: RoleUpdateManyMutationInput;
}>;


export type UpdateManyRoleMutation = (
  { __typename?: 'Mutation' }
  & { updateManyRole?: Maybe<(
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'createdAt' | 'updatedAt' | 'email' | 'name'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & UserFieldsFragment
);

export type FindUniqueUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type FindUniqueUserQuery = (
  { __typename?: 'Query' }
  & { findUniqueUser?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type FindManyUserQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput> | UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyUserQuery = (
  { __typename?: 'Query' }
  & { findManyUser?: Maybe<Array<(
    { __typename?: 'User' }
    & UserFragment
  )>> }
);

export type FindManyUserCountQueryVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput> | UserOrderByInput>;
  cursor?: Maybe<UserWhereUniqueInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
}>;


export type FindManyUserCountQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'findManyUserCount'>
);

export type CreateOneUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { createOneUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type UpdateOneUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateOneUserMutation = (
  { __typename?: 'Mutation' }
  & { updateOneUser: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type DeleteOneUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type DeleteOneUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneUser?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type DeleteManyUserMutationVariables = Exact<{
  where?: Maybe<UserWhereInput>;
}>;


export type DeleteManyUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteManyUser?: Maybe<(
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  )> }
);

export type UpdateManyUserMutationVariables = Exact<{
  where?: Maybe<UserWhereInput>;
  data: UserUpdateManyMutationInput;
}>;


export type UpdateManyUserMutation = (
  { __typename?: 'Mutation' }
  & { updateManyUser?: Maybe<(
    { __typename?: 'BatchPayload' }
    & Pick<BatchPayload, 'count'>
  )> }
);

export const EntityLogFieldsFragmentDoc = `
    fragment EntityLogFields on EntityLog {
  id
  createdAt
  updatedAt
  model
  changes
  action
  entityId
}
    `;
export const EntityLogFragmentDoc = `
    fragment EntityLog on EntityLog {
  ...EntityLogFields
}
    ${EntityLogFieldsFragmentDoc}`;
export const PermissionFieldsFragmentDoc = `
    fragment PermissionFields on Permission {
  id
  createdAt
  updatedAt
  name
}
    `;
export const PermissionFragmentDoc = `
    fragment Permission on Permission {
  ...PermissionFields
}
    ${PermissionFieldsFragmentDoc}`;
export const PostFieldsFragmentDoc = `
    fragment PostFields on Post {
  id
  createdAt
  updatedAt
  title
  content
  published
  authorId
}
    `;
export const UserFieldsFragmentDoc = `
    fragment UserFields on User {
  id
  createdAt
  updatedAt
  email
  name
}
    `;
export const PostFragmentDoc = `
    fragment Post on Post {
  ...PostFields
  author {
    ...UserFields
  }
}
    ${PostFieldsFragmentDoc}
${UserFieldsFragmentDoc}`;
export const RoleFieldsFragmentDoc = `
    fragment RoleFields on Role {
  id
  createdAt
  updatedAt
  name
}
    `;
export const RoleFragmentDoc = `
    fragment Role on Role {
  ...RoleFields
}
    ${RoleFieldsFragmentDoc}`;
export const UserFragmentDoc = `
    fragment User on User {
  ...UserFields
}
    ${UserFieldsFragmentDoc}`;
export const FindUniqueEntityLogDocument = `
    query findUniqueEntityLog($where: EntityLogWhereUniqueInput!) {
  findUniqueEntityLog(where: $where) {
    ...EntityLog
  }
}
    ${EntityLogFragmentDoc}`;
export const useFindUniqueEntityLogQuery = <
      TData = FindUniqueEntityLogQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: FindUniqueEntityLogQueryVariables, 
      options?: UseQueryOptions<FindUniqueEntityLogQuery, TError, TData>
    ) => 
    useQuery<FindUniqueEntityLogQuery, TError, TData>(
      ['findUniqueEntityLog', variables],
      fetcher<FindUniqueEntityLogQuery, FindUniqueEntityLogQueryVariables>(client, FindUniqueEntityLogDocument, variables),
      options
    );
export const FindManyEntityLogDocument = `
    query findManyEntityLog($where: EntityLogWhereInput, $orderBy: [EntityLogOrderByInput!], $cursor: EntityLogWhereUniqueInput, $skip: Int, $take: Int) {
  findManyEntityLog(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...EntityLog
  }
}
    ${EntityLogFragmentDoc}`;
export const useFindManyEntityLogQuery = <
      TData = FindManyEntityLogQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyEntityLogQueryVariables, 
      options?: UseQueryOptions<FindManyEntityLogQuery, TError, TData>
    ) => 
    useQuery<FindManyEntityLogQuery, TError, TData>(
      ['findManyEntityLog', variables],
      fetcher<FindManyEntityLogQuery, FindManyEntityLogQueryVariables>(client, FindManyEntityLogDocument, variables),
      options
    );
export const FindManyEntityLogCountDocument = `
    query findManyEntityLogCount($where: EntityLogWhereInput, $orderBy: [EntityLogOrderByInput!], $cursor: EntityLogWhereUniqueInput, $skip: Int, $take: Int) {
  findManyEntityLogCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;
export const useFindManyEntityLogCountQuery = <
      TData = FindManyEntityLogCountQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyEntityLogCountQueryVariables, 
      options?: UseQueryOptions<FindManyEntityLogCountQuery, TError, TData>
    ) => 
    useQuery<FindManyEntityLogCountQuery, TError, TData>(
      ['findManyEntityLogCount', variables],
      fetcher<FindManyEntityLogCountQuery, FindManyEntityLogCountQueryVariables>(client, FindManyEntityLogCountDocument, variables),
      options
    );
export const FindUniquePermissionDocument = `
    query findUniquePermission($where: PermissionWhereUniqueInput!) {
  findUniquePermission(where: $where) {
    ...Permission
  }
}
    ${PermissionFragmentDoc}`;
export const useFindUniquePermissionQuery = <
      TData = FindUniquePermissionQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: FindUniquePermissionQueryVariables, 
      options?: UseQueryOptions<FindUniquePermissionQuery, TError, TData>
    ) => 
    useQuery<FindUniquePermissionQuery, TError, TData>(
      ['findUniquePermission', variables],
      fetcher<FindUniquePermissionQuery, FindUniquePermissionQueryVariables>(client, FindUniquePermissionDocument, variables),
      options
    );
export const FindManyPermissionDocument = `
    query findManyPermission($where: PermissionWhereInput, $orderBy: [PermissionOrderByInput!], $cursor: PermissionWhereUniqueInput, $skip: Int, $take: Int) {
  findManyPermission(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Permission
  }
}
    ${PermissionFragmentDoc}`;
export const useFindManyPermissionQuery = <
      TData = FindManyPermissionQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyPermissionQueryVariables, 
      options?: UseQueryOptions<FindManyPermissionQuery, TError, TData>
    ) => 
    useQuery<FindManyPermissionQuery, TError, TData>(
      ['findManyPermission', variables],
      fetcher<FindManyPermissionQuery, FindManyPermissionQueryVariables>(client, FindManyPermissionDocument, variables),
      options
    );
export const FindManyPermissionCountDocument = `
    query findManyPermissionCount($where: PermissionWhereInput, $orderBy: [PermissionOrderByInput!], $cursor: PermissionWhereUniqueInput, $skip: Int, $take: Int) {
  findManyPermissionCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;
export const useFindManyPermissionCountQuery = <
      TData = FindManyPermissionCountQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyPermissionCountQueryVariables, 
      options?: UseQueryOptions<FindManyPermissionCountQuery, TError, TData>
    ) => 
    useQuery<FindManyPermissionCountQuery, TError, TData>(
      ['findManyPermissionCount', variables],
      fetcher<FindManyPermissionCountQuery, FindManyPermissionCountQueryVariables>(client, FindManyPermissionCountDocument, variables),
      options
    );
export const CreateOnePermissionDocument = `
    mutation createOnePermission($data: PermissionCreateInput!) {
  createOnePermission(data: $data) {
    ...Permission
  }
}
    ${PermissionFragmentDoc}`;
export const useCreateOnePermissionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateOnePermissionMutation, TError, CreateOnePermissionMutationVariables, TContext>
    ) => 
    useMutation<CreateOnePermissionMutation, TError, CreateOnePermissionMutationVariables, TContext>(
      (variables?: CreateOnePermissionMutationVariables) => fetcher<CreateOnePermissionMutation, CreateOnePermissionMutationVariables>(client, CreateOnePermissionDocument, variables)(),
      options
    );
export const UpdateOnePermissionDocument = `
    mutation updateOnePermission($where: PermissionWhereUniqueInput!, $data: PermissionUpdateInput!) {
  updateOnePermission(where: $where, data: $data) {
    ...Permission
  }
}
    ${PermissionFragmentDoc}`;
export const useUpdateOnePermissionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateOnePermissionMutation, TError, UpdateOnePermissionMutationVariables, TContext>
    ) => 
    useMutation<UpdateOnePermissionMutation, TError, UpdateOnePermissionMutationVariables, TContext>(
      (variables?: UpdateOnePermissionMutationVariables) => fetcher<UpdateOnePermissionMutation, UpdateOnePermissionMutationVariables>(client, UpdateOnePermissionDocument, variables)(),
      options
    );
export const DeleteOnePermissionDocument = `
    mutation deleteOnePermission($where: PermissionWhereUniqueInput!) {
  deleteOnePermission(where: $where) {
    ...Permission
  }
}
    ${PermissionFragmentDoc}`;
export const useDeleteOnePermissionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteOnePermissionMutation, TError, DeleteOnePermissionMutationVariables, TContext>
    ) => 
    useMutation<DeleteOnePermissionMutation, TError, DeleteOnePermissionMutationVariables, TContext>(
      (variables?: DeleteOnePermissionMutationVariables) => fetcher<DeleteOnePermissionMutation, DeleteOnePermissionMutationVariables>(client, DeleteOnePermissionDocument, variables)(),
      options
    );
export const DeleteManyPermissionDocument = `
    mutation deleteManyPermission($where: PermissionWhereInput) {
  deleteManyPermission(where: $where) {
    count
  }
}
    `;
export const useDeleteManyPermissionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteManyPermissionMutation, TError, DeleteManyPermissionMutationVariables, TContext>
    ) => 
    useMutation<DeleteManyPermissionMutation, TError, DeleteManyPermissionMutationVariables, TContext>(
      (variables?: DeleteManyPermissionMutationVariables) => fetcher<DeleteManyPermissionMutation, DeleteManyPermissionMutationVariables>(client, DeleteManyPermissionDocument, variables)(),
      options
    );
export const UpdateManyPermissionDocument = `
    mutation updateManyPermission($where: PermissionWhereInput, $data: PermissionUpdateManyMutationInput!) {
  updateManyPermission(where: $where, data: $data) {
    count
  }
}
    `;
export const useUpdateManyPermissionMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateManyPermissionMutation, TError, UpdateManyPermissionMutationVariables, TContext>
    ) => 
    useMutation<UpdateManyPermissionMutation, TError, UpdateManyPermissionMutationVariables, TContext>(
      (variables?: UpdateManyPermissionMutationVariables) => fetcher<UpdateManyPermissionMutation, UpdateManyPermissionMutationVariables>(client, UpdateManyPermissionDocument, variables)(),
      options
    );
export const FindUniquePostDocument = `
    query findUniquePost($where: PostWhereUniqueInput!) {
  findUniquePost(where: $where) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
export const useFindUniquePostQuery = <
      TData = FindUniquePostQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: FindUniquePostQueryVariables, 
      options?: UseQueryOptions<FindUniquePostQuery, TError, TData>
    ) => 
    useQuery<FindUniquePostQuery, TError, TData>(
      ['findUniquePost', variables],
      fetcher<FindUniquePostQuery, FindUniquePostQueryVariables>(client, FindUniquePostDocument, variables),
      options
    );
export const FindManyPostDocument = `
    query findManyPost($where: PostWhereInput, $orderBy: [PostOrderByInput!], $cursor: PostWhereUniqueInput, $skip: Int, $take: Int) {
  findManyPost(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
export const useFindManyPostQuery = <
      TData = FindManyPostQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyPostQueryVariables, 
      options?: UseQueryOptions<FindManyPostQuery, TError, TData>
    ) => 
    useQuery<FindManyPostQuery, TError, TData>(
      ['findManyPost', variables],
      fetcher<FindManyPostQuery, FindManyPostQueryVariables>(client, FindManyPostDocument, variables),
      options
    );
export const FindManyPostCountDocument = `
    query findManyPostCount($where: PostWhereInput, $orderBy: [PostOrderByInput!], $cursor: PostWhereUniqueInput, $skip: Int, $take: Int) {
  findManyPostCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;
export const useFindManyPostCountQuery = <
      TData = FindManyPostCountQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyPostCountQueryVariables, 
      options?: UseQueryOptions<FindManyPostCountQuery, TError, TData>
    ) => 
    useQuery<FindManyPostCountQuery, TError, TData>(
      ['findManyPostCount', variables],
      fetcher<FindManyPostCountQuery, FindManyPostCountQueryVariables>(client, FindManyPostCountDocument, variables),
      options
    );
export const CreateOnePostDocument = `
    mutation createOnePost($data: PostCreateInput!) {
  createOnePost(data: $data) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
export const useCreateOnePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateOnePostMutation, TError, CreateOnePostMutationVariables, TContext>
    ) => 
    useMutation<CreateOnePostMutation, TError, CreateOnePostMutationVariables, TContext>(
      (variables?: CreateOnePostMutationVariables) => fetcher<CreateOnePostMutation, CreateOnePostMutationVariables>(client, CreateOnePostDocument, variables)(),
      options
    );
export const UpdateOnePostDocument = `
    mutation updateOnePost($where: PostWhereUniqueInput!, $data: PostUpdateInput!) {
  updateOnePost(where: $where, data: $data) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
export const useUpdateOnePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateOnePostMutation, TError, UpdateOnePostMutationVariables, TContext>
    ) => 
    useMutation<UpdateOnePostMutation, TError, UpdateOnePostMutationVariables, TContext>(
      (variables?: UpdateOnePostMutationVariables) => fetcher<UpdateOnePostMutation, UpdateOnePostMutationVariables>(client, UpdateOnePostDocument, variables)(),
      options
    );
export const DeleteOnePostDocument = `
    mutation deleteOnePost($where: PostWhereUniqueInput!) {
  deleteOnePost(where: $where) {
    ...Post
  }
}
    ${PostFragmentDoc}`;
export const useDeleteOnePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteOnePostMutation, TError, DeleteOnePostMutationVariables, TContext>
    ) => 
    useMutation<DeleteOnePostMutation, TError, DeleteOnePostMutationVariables, TContext>(
      (variables?: DeleteOnePostMutationVariables) => fetcher<DeleteOnePostMutation, DeleteOnePostMutationVariables>(client, DeleteOnePostDocument, variables)(),
      options
    );
export const DeleteManyPostDocument = `
    mutation deleteManyPost($where: PostWhereInput) {
  deleteManyPost(where: $where) {
    count
  }
}
    `;
export const useDeleteManyPostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteManyPostMutation, TError, DeleteManyPostMutationVariables, TContext>
    ) => 
    useMutation<DeleteManyPostMutation, TError, DeleteManyPostMutationVariables, TContext>(
      (variables?: DeleteManyPostMutationVariables) => fetcher<DeleteManyPostMutation, DeleteManyPostMutationVariables>(client, DeleteManyPostDocument, variables)(),
      options
    );
export const UpdateManyPostDocument = `
    mutation updateManyPost($where: PostWhereInput, $data: PostUpdateManyMutationInput!) {
  updateManyPost(where: $where, data: $data) {
    count
  }
}
    `;
export const useUpdateManyPostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateManyPostMutation, TError, UpdateManyPostMutationVariables, TContext>
    ) => 
    useMutation<UpdateManyPostMutation, TError, UpdateManyPostMutationVariables, TContext>(
      (variables?: UpdateManyPostMutationVariables) => fetcher<UpdateManyPostMutation, UpdateManyPostMutationVariables>(client, UpdateManyPostDocument, variables)(),
      options
    );
export const FindUniqueRoleDocument = `
    query findUniqueRole($where: RoleWhereUniqueInput!) {
  findUniqueRole(where: $where) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;
export const useFindUniqueRoleQuery = <
      TData = FindUniqueRoleQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: FindUniqueRoleQueryVariables, 
      options?: UseQueryOptions<FindUniqueRoleQuery, TError, TData>
    ) => 
    useQuery<FindUniqueRoleQuery, TError, TData>(
      ['findUniqueRole', variables],
      fetcher<FindUniqueRoleQuery, FindUniqueRoleQueryVariables>(client, FindUniqueRoleDocument, variables),
      options
    );
export const FindManyRoleDocument = `
    query findManyRole($where: RoleWhereInput, $orderBy: [RoleOrderByInput!], $cursor: RoleWhereUniqueInput, $skip: Int, $take: Int) {
  findManyRole(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;
export const useFindManyRoleQuery = <
      TData = FindManyRoleQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyRoleQueryVariables, 
      options?: UseQueryOptions<FindManyRoleQuery, TError, TData>
    ) => 
    useQuery<FindManyRoleQuery, TError, TData>(
      ['findManyRole', variables],
      fetcher<FindManyRoleQuery, FindManyRoleQueryVariables>(client, FindManyRoleDocument, variables),
      options
    );
export const FindManyRoleCountDocument = `
    query findManyRoleCount($where: RoleWhereInput, $orderBy: [RoleOrderByInput!], $cursor: RoleWhereUniqueInput, $skip: Int, $take: Int) {
  findManyRoleCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;
export const useFindManyRoleCountQuery = <
      TData = FindManyRoleCountQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyRoleCountQueryVariables, 
      options?: UseQueryOptions<FindManyRoleCountQuery, TError, TData>
    ) => 
    useQuery<FindManyRoleCountQuery, TError, TData>(
      ['findManyRoleCount', variables],
      fetcher<FindManyRoleCountQuery, FindManyRoleCountQueryVariables>(client, FindManyRoleCountDocument, variables),
      options
    );
export const CreateOneRoleDocument = `
    mutation createOneRole($data: RoleCreateInput!) {
  createOneRole(data: $data) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;
export const useCreateOneRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateOneRoleMutation, TError, CreateOneRoleMutationVariables, TContext>
    ) => 
    useMutation<CreateOneRoleMutation, TError, CreateOneRoleMutationVariables, TContext>(
      (variables?: CreateOneRoleMutationVariables) => fetcher<CreateOneRoleMutation, CreateOneRoleMutationVariables>(client, CreateOneRoleDocument, variables)(),
      options
    );
export const UpdateOneRoleDocument = `
    mutation updateOneRole($where: RoleWhereUniqueInput!, $data: RoleUpdateInput!) {
  updateOneRole(where: $where, data: $data) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;
export const useUpdateOneRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateOneRoleMutation, TError, UpdateOneRoleMutationVariables, TContext>
    ) => 
    useMutation<UpdateOneRoleMutation, TError, UpdateOneRoleMutationVariables, TContext>(
      (variables?: UpdateOneRoleMutationVariables) => fetcher<UpdateOneRoleMutation, UpdateOneRoleMutationVariables>(client, UpdateOneRoleDocument, variables)(),
      options
    );
export const DeleteOneRoleDocument = `
    mutation deleteOneRole($where: RoleWhereUniqueInput!) {
  deleteOneRole(where: $where) {
    ...Role
  }
}
    ${RoleFragmentDoc}`;
export const useDeleteOneRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteOneRoleMutation, TError, DeleteOneRoleMutationVariables, TContext>
    ) => 
    useMutation<DeleteOneRoleMutation, TError, DeleteOneRoleMutationVariables, TContext>(
      (variables?: DeleteOneRoleMutationVariables) => fetcher<DeleteOneRoleMutation, DeleteOneRoleMutationVariables>(client, DeleteOneRoleDocument, variables)(),
      options
    );
export const DeleteManyRoleDocument = `
    mutation deleteManyRole($where: RoleWhereInput) {
  deleteManyRole(where: $where) {
    count
  }
}
    `;
export const useDeleteManyRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteManyRoleMutation, TError, DeleteManyRoleMutationVariables, TContext>
    ) => 
    useMutation<DeleteManyRoleMutation, TError, DeleteManyRoleMutationVariables, TContext>(
      (variables?: DeleteManyRoleMutationVariables) => fetcher<DeleteManyRoleMutation, DeleteManyRoleMutationVariables>(client, DeleteManyRoleDocument, variables)(),
      options
    );
export const UpdateManyRoleDocument = `
    mutation updateManyRole($where: RoleWhereInput, $data: RoleUpdateManyMutationInput!) {
  updateManyRole(where: $where, data: $data) {
    count
  }
}
    `;
export const useUpdateManyRoleMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateManyRoleMutation, TError, UpdateManyRoleMutationVariables, TContext>
    ) => 
    useMutation<UpdateManyRoleMutation, TError, UpdateManyRoleMutationVariables, TContext>(
      (variables?: UpdateManyRoleMutationVariables) => fetcher<UpdateManyRoleMutation, UpdateManyRoleMutationVariables>(client, UpdateManyRoleDocument, variables)(),
      options
    );
export const FindUniqueUserDocument = `
    query findUniqueUser($where: UserWhereUniqueInput!) {
  findUniqueUser(where: $where) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const useFindUniqueUserQuery = <
      TData = FindUniqueUserQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables: FindUniqueUserQueryVariables, 
      options?: UseQueryOptions<FindUniqueUserQuery, TError, TData>
    ) => 
    useQuery<FindUniqueUserQuery, TError, TData>(
      ['findUniqueUser', variables],
      fetcher<FindUniqueUserQuery, FindUniqueUserQueryVariables>(client, FindUniqueUserDocument, variables),
      options
    );
export const FindManyUserDocument = `
    query findManyUser($where: UserWhereInput, $orderBy: [UserOrderByInput!], $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUser(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const useFindManyUserQuery = <
      TData = FindManyUserQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyUserQueryVariables, 
      options?: UseQueryOptions<FindManyUserQuery, TError, TData>
    ) => 
    useQuery<FindManyUserQuery, TError, TData>(
      ['findManyUser', variables],
      fetcher<FindManyUserQuery, FindManyUserQueryVariables>(client, FindManyUserDocument, variables),
      options
    );
export const FindManyUserCountDocument = `
    query findManyUserCount($where: UserWhereInput, $orderBy: [UserOrderByInput!], $cursor: UserWhereUniqueInput, $skip: Int, $take: Int) {
  findManyUserCount(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  )
}
    `;
export const useFindManyUserCountQuery = <
      TData = FindManyUserCountQuery,
      TError = unknown
    >(
      client: GraphQLClient, 
      variables?: FindManyUserCountQueryVariables, 
      options?: UseQueryOptions<FindManyUserCountQuery, TError, TData>
    ) => 
    useQuery<FindManyUserCountQuery, TError, TData>(
      ['findManyUserCount', variables],
      fetcher<FindManyUserCountQuery, FindManyUserCountQueryVariables>(client, FindManyUserCountDocument, variables),
      options
    );
export const CreateOneUserDocument = `
    mutation createOneUser($data: UserCreateInput!) {
  createOneUser(data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const useCreateOneUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<CreateOneUserMutation, TError, CreateOneUserMutationVariables, TContext>
    ) => 
    useMutation<CreateOneUserMutation, TError, CreateOneUserMutationVariables, TContext>(
      (variables?: CreateOneUserMutationVariables) => fetcher<CreateOneUserMutation, CreateOneUserMutationVariables>(client, CreateOneUserDocument, variables)(),
      options
    );
export const UpdateOneUserDocument = `
    mutation updateOneUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateOneUser(where: $where, data: $data) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const useUpdateOneUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateOneUserMutation, TError, UpdateOneUserMutationVariables, TContext>
    ) => 
    useMutation<UpdateOneUserMutation, TError, UpdateOneUserMutationVariables, TContext>(
      (variables?: UpdateOneUserMutationVariables) => fetcher<UpdateOneUserMutation, UpdateOneUserMutationVariables>(client, UpdateOneUserDocument, variables)(),
      options
    );
export const DeleteOneUserDocument = `
    mutation deleteOneUser($where: UserWhereUniqueInput!) {
  deleteOneUser(where: $where) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const useDeleteOneUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteOneUserMutation, TError, DeleteOneUserMutationVariables, TContext>
    ) => 
    useMutation<DeleteOneUserMutation, TError, DeleteOneUserMutationVariables, TContext>(
      (variables?: DeleteOneUserMutationVariables) => fetcher<DeleteOneUserMutation, DeleteOneUserMutationVariables>(client, DeleteOneUserDocument, variables)(),
      options
    );
export const DeleteManyUserDocument = `
    mutation deleteManyUser($where: UserWhereInput) {
  deleteManyUser(where: $where) {
    count
  }
}
    `;
export const useDeleteManyUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<DeleteManyUserMutation, TError, DeleteManyUserMutationVariables, TContext>
    ) => 
    useMutation<DeleteManyUserMutation, TError, DeleteManyUserMutationVariables, TContext>(
      (variables?: DeleteManyUserMutationVariables) => fetcher<DeleteManyUserMutation, DeleteManyUserMutationVariables>(client, DeleteManyUserDocument, variables)(),
      options
    );
export const UpdateManyUserDocument = `
    mutation updateManyUser($where: UserWhereInput, $data: UserUpdateManyMutationInput!) {
  updateManyUser(where: $where, data: $data) {
    count
  }
}
    `;
export const useUpdateManyUserMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient, 
      options?: UseMutationOptions<UpdateManyUserMutation, TError, UpdateManyUserMutationVariables, TContext>
    ) => 
    useMutation<UpdateManyUserMutation, TError, UpdateManyUserMutationVariables, TContext>(
      (variables?: UpdateManyUserMutationVariables) => fetcher<UpdateManyUserMutation, UpdateManyUserMutationVariables>(client, UpdateManyUserDocument, variables)(),
      options
    );