import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> }
  Post?: Post
  User?: User
  Role?: Role
  Permission?: Permission
  EntityLog?: EntityLog
  Query?: Query
  Mutation?: Mutation
  AggregatePost?: AggregatePost
  PostGroupByOutputType?: PostGroupByOutputType
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregateRole?: AggregateRole
  RoleGroupByOutputType?: RoleGroupByOutputType
  AggregatePermission?: AggregatePermission
  PermissionGroupByOutputType?: PermissionGroupByOutputType
  AggregateEntityLog?: AggregateEntityLog
  EntityLogGroupByOutputType?: EntityLogGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  PostCountAggregateOutputType?: PostCountAggregateOutputType
  PostMinAggregateOutputType?: PostMinAggregateOutputType
  PostMaxAggregateOutputType?: PostMaxAggregateOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  RoleCountAggregateOutputType?: RoleCountAggregateOutputType
  RoleMinAggregateOutputType?: RoleMinAggregateOutputType
  RoleMaxAggregateOutputType?: RoleMaxAggregateOutputType
  PermissionCountAggregateOutputType?: PermissionCountAggregateOutputType
  PermissionMinAggregateOutputType?: PermissionMinAggregateOutputType
  PermissionMaxAggregateOutputType?: PermissionMaxAggregateOutputType
  EntityLogCountAggregateOutputType?: EntityLogCountAggregateOutputType
  EntityLogMinAggregateOutputType?: EntityLogMinAggregateOutputType
  EntityLogMaxAggregateOutputType?: EntityLogMaxAggregateOutputType
}

export interface Post {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Post, {}, string>
  createdAt?: Resolver<Client.Post, {}, Date>
  updatedAt?: Resolver<Client.Post, {}, Date>
  title?: Resolver<Client.Post, {}, string>
  content?: Resolver<Client.Post, {}, string | null>
  published?: Resolver<Client.Post, {}, boolean>
  author?: Resolver<Client.Post, {}, Client.User | null>
  authorId?: Resolver<Client.Post, {}, string | null>
}

export interface User {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.User, {}, string>
  createdAt?: Resolver<Client.User, {}, Date>
  updatedAt?: Resolver<Client.User, {}, Date>
  email?: Resolver<Client.User, {}, string>
  name?: Resolver<Client.User, {}, string | null>
  posts?: Resolver<Client.User, UserPostsArgs, Client.Post[] | null>
  roles?: Resolver<Client.User, UserRolesArgs, Client.Role[] | null>
}

export interface Role {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Role, {}, string>
  createdAt?: Resolver<Client.Role, {}, Date>
  updatedAt?: Resolver<Client.Role, {}, Date>
  name?: Resolver<Client.Role, {}, string>
  permissions?: Resolver<
    Client.Role,
    RolePermissionsArgs,
    Client.Permission[] | null
  >
  users?: Resolver<Client.Role, RoleUsersArgs, Client.User[] | null>
}

export interface Permission {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Permission, {}, string>
  createdAt?: Resolver<Client.Permission, {}, Date>
  updatedAt?: Resolver<Client.Permission, {}, Date>
  name?: Resolver<Client.Permission, {}, Client.PermissionType>
  roles?: Resolver<Client.Permission, PermissionRolesArgs, Client.Role[] | null>
}

export interface EntityLog {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.EntityLog, {}, string>
  createdAt?: Resolver<Client.EntityLog, {}, Date>
  updatedAt?: Resolver<Client.EntityLog, {}, Date>
  model?: Resolver<Client.EntityLog, {}, string>
  changes?: Resolver<Client.EntityLog, {}, any>
  action?: Resolver<Client.EntityLog, {}, Client.EntityActionType>
  entityId?: Resolver<Client.EntityLog, {}, string>
}

export interface Query {
  [key: string]: Resolver<any, any, any>
  findFirstPost?: Resolver<{}, FindFirstPostArgs, Client.Post | null>
  findManyPost?: Resolver<{}, FindManyPostArgs, Client.Post[]>
  findManyPostCount?: Resolver<{}, FindManyPostArgs, number>
  aggregatePost?: Resolver<
    {},
    AggregatePostArgs,
    Client.Prisma.GetPostAggregateType<AggregatePostArgs>
  >
  groupByPost?: Resolver<
    {},
    GroupByPostArgs,
    Client.Prisma.PostGroupByOutputType[]
  >
  findUniquePost?: Resolver<{}, FindUniquePostArgs, Client.Post | null>
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findFirstRole?: Resolver<{}, FindFirstRoleArgs, Client.Role | null>
  findManyRole?: Resolver<{}, FindManyRoleArgs, Client.Role[]>
  findManyRoleCount?: Resolver<{}, FindManyRoleArgs, number>
  aggregateRole?: Resolver<
    {},
    AggregateRoleArgs,
    Client.Prisma.GetRoleAggregateType<AggregateRoleArgs>
  >
  groupByRole?: Resolver<
    {},
    GroupByRoleArgs,
    Client.Prisma.RoleGroupByOutputType[]
  >
  findUniqueRole?: Resolver<{}, FindUniqueRoleArgs, Client.Role | null>
  findFirstPermission?: Resolver<
    {},
    FindFirstPermissionArgs,
    Client.Permission | null
  >
  findManyPermission?: Resolver<{}, FindManyPermissionArgs, Client.Permission[]>
  findManyPermissionCount?: Resolver<{}, FindManyPermissionArgs, number>
  aggregatePermission?: Resolver<
    {},
    AggregatePermissionArgs,
    Client.Prisma.GetPermissionAggregateType<AggregatePermissionArgs>
  >
  groupByPermission?: Resolver<
    {},
    GroupByPermissionArgs,
    Client.Prisma.PermissionGroupByOutputType[]
  >
  findUniquePermission?: Resolver<
    {},
    FindUniquePermissionArgs,
    Client.Permission | null
  >
  findFirstEntityLog?: Resolver<
    {},
    FindFirstEntityLogArgs,
    Client.EntityLog | null
  >
  findManyEntityLog?: Resolver<{}, FindManyEntityLogArgs, Client.EntityLog[]>
  findManyEntityLogCount?: Resolver<{}, FindManyEntityLogArgs, number>
  aggregateEntityLog?: Resolver<
    {},
    AggregateEntityLogArgs,
    Client.Prisma.GetEntityLogAggregateType<AggregateEntityLogArgs>
  >
  groupByEntityLog?: Resolver<
    {},
    GroupByEntityLogArgs,
    Client.Prisma.EntityLogGroupByOutputType[]
  >
  findUniqueEntityLog?: Resolver<
    {},
    FindUniqueEntityLogArgs,
    Client.EntityLog | null
  >
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>
  createOnePost?: Resolver<{}, CreateOnePostArgs, Client.Post>
  upsertOnePost?: Resolver<{}, UpsertOnePostArgs, Client.Post>
  createManyPost?: Resolver<{}, CreateManyPostArgs, Client.Prisma.BatchPayload>
  deleteOnePost?: Resolver<{}, DeleteOnePostArgs, Client.Post | null>
  updateOnePost?: Resolver<{}, UpdateOnePostArgs, Client.Post | null>
  updateManyPost?: Resolver<{}, UpdateManyPostArgs, Client.Prisma.BatchPayload>
  deleteManyPost?: Resolver<{}, DeleteManyPostArgs, Client.Prisma.BatchPayload>
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOneRole?: Resolver<{}, CreateOneRoleArgs, Client.Role>
  upsertOneRole?: Resolver<{}, UpsertOneRoleArgs, Client.Role>
  createManyRole?: Resolver<{}, CreateManyRoleArgs, Client.Prisma.BatchPayload>
  deleteOneRole?: Resolver<{}, DeleteOneRoleArgs, Client.Role | null>
  updateOneRole?: Resolver<{}, UpdateOneRoleArgs, Client.Role | null>
  updateManyRole?: Resolver<{}, UpdateManyRoleArgs, Client.Prisma.BatchPayload>
  deleteManyRole?: Resolver<{}, DeleteManyRoleArgs, Client.Prisma.BatchPayload>
  createOnePermission?: Resolver<{}, CreateOnePermissionArgs, Client.Permission>
  upsertOnePermission?: Resolver<{}, UpsertOnePermissionArgs, Client.Permission>
  createManyPermission?: Resolver<
    {},
    CreateManyPermissionArgs,
    Client.Prisma.BatchPayload
  >
  deleteOnePermission?: Resolver<
    {},
    DeleteOnePermissionArgs,
    Client.Permission | null
  >
  updateOnePermission?: Resolver<
    {},
    UpdateOnePermissionArgs,
    Client.Permission | null
  >
  updateManyPermission?: Resolver<
    {},
    UpdateManyPermissionArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyPermission?: Resolver<
    {},
    DeleteManyPermissionArgs,
    Client.Prisma.BatchPayload
  >
  createOneEntityLog?: Resolver<{}, CreateOneEntityLogArgs, Client.EntityLog>
  upsertOneEntityLog?: Resolver<{}, UpsertOneEntityLogArgs, Client.EntityLog>
  createManyEntityLog?: Resolver<
    {},
    CreateManyEntityLogArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneEntityLog?: Resolver<
    {},
    DeleteOneEntityLogArgs,
    Client.EntityLog | null
  >
  updateOneEntityLog?: Resolver<
    {},
    UpdateOneEntityLogArgs,
    Client.EntityLog | null
  >
  updateManyEntityLog?: Resolver<
    {},
    UpdateManyEntityLogArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyEntityLog?: Resolver<
    {},
    DeleteManyEntityLogArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export interface AggregatePost {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  count?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregatePost,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export interface PostGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.PostGroupByOutputType, {}, Date>
  title?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string>
  content?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string | null>
  published?: Resolver<Client.Prisma.PostGroupByOutputType, {}, boolean>
  authorId?: Resolver<Client.Prisma.PostGroupByOutputType, {}, string | null>
  _count?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PostGroupByOutputType,
    {},
    Client.Prisma.PostMaxAggregateOutputType | null
  >
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface AggregateRole {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateRole,
    {},
    Client.Prisma.RoleCountAggregateOutputType | null
  >
  count?: Resolver<
    Client.Prisma.AggregateRole,
    {},
    Client.Prisma.RoleCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateRole,
    {},
    Client.Prisma.RoleMinAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregateRole,
    {},
    Client.Prisma.RoleMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateRole,
    {},
    Client.Prisma.RoleMaxAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregateRole,
    {},
    Client.Prisma.RoleMaxAggregateOutputType | null
  >
}

export interface RoleGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.RoleGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.RoleGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.RoleGroupByOutputType, {}, Date>
  name?: Resolver<Client.Prisma.RoleGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.RoleGroupByOutputType,
    {},
    Client.Prisma.RoleCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.RoleGroupByOutputType,
    {},
    Client.Prisma.RoleMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.RoleGroupByOutputType,
    {},
    Client.Prisma.RoleMaxAggregateOutputType | null
  >
}

export interface AggregatePermission {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregatePermission,
    {},
    Client.Prisma.PermissionCountAggregateOutputType | null
  >
  count?: Resolver<
    Client.Prisma.AggregatePermission,
    {},
    Client.Prisma.PermissionCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregatePermission,
    {},
    Client.Prisma.PermissionMinAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregatePermission,
    {},
    Client.Prisma.PermissionMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregatePermission,
    {},
    Client.Prisma.PermissionMaxAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregatePermission,
    {},
    Client.Prisma.PermissionMaxAggregateOutputType | null
  >
}

export interface PermissionGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PermissionGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.PermissionGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.PermissionGroupByOutputType, {}, Date>
  name?: Resolver<
    Client.Prisma.PermissionGroupByOutputType,
    {},
    Client.PermissionType
  >
  _count?: Resolver<
    Client.Prisma.PermissionGroupByOutputType,
    {},
    Client.Prisma.PermissionCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.PermissionGroupByOutputType,
    {},
    Client.Prisma.PermissionMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.PermissionGroupByOutputType,
    {},
    Client.Prisma.PermissionMaxAggregateOutputType | null
  >
}

export interface AggregateEntityLog {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateEntityLog,
    {},
    Client.Prisma.EntityLogCountAggregateOutputType | null
  >
  count?: Resolver<
    Client.Prisma.AggregateEntityLog,
    {},
    Client.Prisma.EntityLogCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateEntityLog,
    {},
    Client.Prisma.EntityLogMinAggregateOutputType | null
  >
  min?: Resolver<
    Client.Prisma.AggregateEntityLog,
    {},
    Client.Prisma.EntityLogMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateEntityLog,
    {},
    Client.Prisma.EntityLogMaxAggregateOutputType | null
  >
  max?: Resolver<
    Client.Prisma.AggregateEntityLog,
    {},
    Client.Prisma.EntityLogMaxAggregateOutputType | null
  >
}

export interface EntityLogGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.EntityLogGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.EntityLogGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.EntityLogGroupByOutputType, {}, Date>
  model?: Resolver<Client.Prisma.EntityLogGroupByOutputType, {}, string>
  changes?: Resolver<Client.Prisma.EntityLogGroupByOutputType, {}, any>
  action?: Resolver<
    Client.Prisma.EntityLogGroupByOutputType,
    {},
    Client.EntityActionType
  >
  entityId?: Resolver<Client.Prisma.EntityLogGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.EntityLogGroupByOutputType,
    {},
    Client.Prisma.EntityLogCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.EntityLogGroupByOutputType,
    {},
    Client.Prisma.EntityLogMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.EntityLogGroupByOutputType,
    {},
    Client.Prisma.EntityLogMaxAggregateOutputType | null
  >
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export interface PostCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  title?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  content?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  published?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  authorId?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.PostCountAggregateOutputType, {}, number>
}

export interface PostMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    Date | null
  >
  title?: Resolver<Client.Prisma.PostMinAggregateOutputType, {}, string | null>
  content?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    string | null
  >
  published?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    boolean | null
  >
  authorId?: Resolver<
    Client.Prisma.PostMinAggregateOutputType,
    {},
    string | null
  >
}

export interface PostMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    Date | null
  >
  title?: Resolver<Client.Prisma.PostMaxAggregateOutputType, {}, string | null>
  content?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    string | null
  >
  published?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    boolean | null
  >
  authorId?: Resolver<
    Client.Prisma.PostMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
}

export interface RoleCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.RoleCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.RoleCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.RoleCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.RoleCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.RoleCountAggregateOutputType, {}, number>
}

export interface RoleMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.RoleMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.RoleMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.RoleMinAggregateOutputType,
    {},
    Date | null
  >
  name?: Resolver<Client.Prisma.RoleMinAggregateOutputType, {}, string | null>
}

export interface RoleMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.RoleMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.RoleMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.RoleMaxAggregateOutputType,
    {},
    Date | null
  >
  name?: Resolver<Client.Prisma.RoleMaxAggregateOutputType, {}, string | null>
}

export interface PermissionCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.PermissionCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.PermissionCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.PermissionCountAggregateOutputType,
    {},
    number
  >
  name?: Resolver<Client.Prisma.PermissionCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.PermissionCountAggregateOutputType, {}, number>
}

export interface PermissionMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.PermissionMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.PermissionMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PermissionMinAggregateOutputType,
    {},
    Date | null
  >
  name?: Resolver<
    Client.Prisma.PermissionMinAggregateOutputType,
    {},
    Client.PermissionType | null
  >
}

export interface PermissionMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.PermissionMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.PermissionMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.PermissionMaxAggregateOutputType,
    {},
    Date | null
  >
  name?: Resolver<
    Client.Prisma.PermissionMaxAggregateOutputType,
    {},
    Client.PermissionType | null
  >
}

export interface EntityLogCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.EntityLogCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.EntityLogCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.EntityLogCountAggregateOutputType,
    {},
    number
  >
  model?: Resolver<Client.Prisma.EntityLogCountAggregateOutputType, {}, number>
  changes?: Resolver<
    Client.Prisma.EntityLogCountAggregateOutputType,
    {},
    number
  >
  action?: Resolver<Client.Prisma.EntityLogCountAggregateOutputType, {}, number>
  entityId?: Resolver<
    Client.Prisma.EntityLogCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.EntityLogCountAggregateOutputType, {}, number>
}

export interface EntityLogMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.EntityLogMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.EntityLogMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.EntityLogMinAggregateOutputType,
    {},
    Date | null
  >
  model?: Resolver<
    Client.Prisma.EntityLogMinAggregateOutputType,
    {},
    string | null
  >
  action?: Resolver<
    Client.Prisma.EntityLogMinAggregateOutputType,
    {},
    Client.EntityActionType | null
  >
  entityId?: Resolver<
    Client.Prisma.EntityLogMinAggregateOutputType,
    {},
    string | null
  >
}

export interface EntityLogMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.EntityLogMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.EntityLogMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.EntityLogMaxAggregateOutputType,
    {},
    Date | null
  >
  model?: Resolver<
    Client.Prisma.EntityLogMaxAggregateOutputType,
    {},
    string | null
  >
  action?: Resolver<
    Client.Prisma.EntityLogMaxAggregateOutputType,
    {},
    Client.EntityActionType | null
  >
  entityId?: Resolver<
    Client.Prisma.EntityLogMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface UserPostsArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface UserRolesArgs {
  where?: RoleWhereInput | null
  orderBy?: RoleOrderByInput[] | null
  cursor?: RoleWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: RoleScalarFieldEnum[] | null
}

export interface RolePermissionsArgs {
  where?: PermissionWhereInput | null
  orderBy?: PermissionOrderByInput[] | null
  cursor?: PermissionWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PermissionScalarFieldEnum[] | null
}

export interface RoleUsersArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface PermissionRolesArgs {
  where?: RoleWhereInput | null
  orderBy?: RoleOrderByInput[] | null
  cursor?: RoleWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: RoleScalarFieldEnum[] | null
}

export interface FindFirstPostArgs {
  where?: PostWhereInput | null
  orderBy?: PostOrderByInput[] | null
  cursor?: PostWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PostScalarFieldEnum[] | null
}

export interface FindManyPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PostScalarFieldEnum[]
}

export interface AggregatePostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByInput[]
  cursor?: PostWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PostCountAggregateInputType
  count?: Client.Prisma.PostCountAggregateInputType
  _min?: Client.Prisma.PostMinAggregateInputType
  min?: Client.Prisma.PostMinAggregateInputType
  _max?: Client.Prisma.PostMaxAggregateInputType
  max?: Client.Prisma.PostMaxAggregateInputType
}

export interface GroupByPostArgs {
  where?: PostWhereInput
  orderBy?: PostOrderByInput[]
  by: PostScalarFieldEnum[]
  having?: PostScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniquePostArgs {
  where: PostWhereUniqueInput | null
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  count?: Client.Prisma.UserCountAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
  max?: Client.Prisma.UserMaxAggregateInputType
}

export interface GroupByUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindFirstRoleArgs {
  where?: RoleWhereInput | null
  orderBy?: RoleOrderByInput[] | null
  cursor?: RoleWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: RoleScalarFieldEnum[] | null
}

export interface FindManyRoleArgs {
  where?: RoleWhereInput
  orderBy?: RoleOrderByInput[]
  cursor?: RoleWhereUniqueInput
  take?: number
  skip?: number
  distinct?: RoleScalarFieldEnum[]
}

export interface AggregateRoleArgs {
  where?: RoleWhereInput
  orderBy?: RoleOrderByInput[]
  cursor?: RoleWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.RoleCountAggregateInputType
  count?: Client.Prisma.RoleCountAggregateInputType
  _min?: Client.Prisma.RoleMinAggregateInputType
  min?: Client.Prisma.RoleMinAggregateInputType
  _max?: Client.Prisma.RoleMaxAggregateInputType
  max?: Client.Prisma.RoleMaxAggregateInputType
}

export interface GroupByRoleArgs {
  where?: RoleWhereInput
  orderBy?: RoleOrderByInput[]
  by: RoleScalarFieldEnum[]
  having?: RoleScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueRoleArgs {
  where: RoleWhereUniqueInput | null
}

export interface FindFirstPermissionArgs {
  where?: PermissionWhereInput | null
  orderBy?: PermissionOrderByInput[] | null
  cursor?: PermissionWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: PermissionScalarFieldEnum[] | null
}

export interface FindManyPermissionArgs {
  where?: PermissionWhereInput
  orderBy?: PermissionOrderByInput[]
  cursor?: PermissionWhereUniqueInput
  take?: number
  skip?: number
  distinct?: PermissionScalarFieldEnum[]
}

export interface AggregatePermissionArgs {
  where?: PermissionWhereInput
  orderBy?: PermissionOrderByInput[]
  cursor?: PermissionWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.PermissionCountAggregateInputType
  count?: Client.Prisma.PermissionCountAggregateInputType
  _min?: Client.Prisma.PermissionMinAggregateInputType
  min?: Client.Prisma.PermissionMinAggregateInputType
  _max?: Client.Prisma.PermissionMaxAggregateInputType
  max?: Client.Prisma.PermissionMaxAggregateInputType
}

export interface GroupByPermissionArgs {
  where?: PermissionWhereInput
  orderBy?: PermissionOrderByInput[]
  by: PermissionScalarFieldEnum[]
  having?: PermissionScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniquePermissionArgs {
  where: PermissionWhereUniqueInput | null
}

export interface FindFirstEntityLogArgs {
  where?: EntityLogWhereInput | null
  orderBy?: EntityLogOrderByInput[] | null
  cursor?: EntityLogWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: EntityLogScalarFieldEnum[] | null
}

export interface FindManyEntityLogArgs {
  where?: EntityLogWhereInput
  orderBy?: EntityLogOrderByInput[]
  cursor?: EntityLogWhereUniqueInput
  take?: number
  skip?: number
  distinct?: EntityLogScalarFieldEnum[]
}

export interface AggregateEntityLogArgs {
  where?: EntityLogWhereInput
  orderBy?: EntityLogOrderByInput[]
  cursor?: EntityLogWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.EntityLogCountAggregateInputType
  count?: Client.Prisma.EntityLogCountAggregateInputType
  _min?: Client.Prisma.EntityLogMinAggregateInputType
  min?: Client.Prisma.EntityLogMinAggregateInputType
  _max?: Client.Prisma.EntityLogMaxAggregateInputType
  max?: Client.Prisma.EntityLogMaxAggregateInputType
}

export interface GroupByEntityLogArgs {
  where?: EntityLogWhereInput
  orderBy?: EntityLogOrderByInput[]
  by: EntityLogScalarFieldEnum[]
  having?: EntityLogScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueEntityLogArgs {
  where: EntityLogWhereUniqueInput | null
}

export interface CreateOnePostArgs {
  data: PostCreateInput
}

export interface UpsertOnePostArgs {
  where: PostWhereUniqueInput
  create: PostCreateInput
  update: PostUpdateInput
}

export interface CreateManyPostArgs {
  data: PostCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOnePostArgs {
  where: PostWhereUniqueInput | null
}

export interface UpdateOnePostArgs {
  data: PostUpdateInput | null
  where: PostWhereUniqueInput | null
}

export interface UpdateManyPostArgs {
  data: PostUpdateManyMutationInput
  where?: PostWhereInput
}

export interface DeleteManyPostArgs {
  where?: PostWhereInput
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface CreateManyUserArgs {
  data: UserCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface CreateOneRoleArgs {
  data: RoleCreateInput
}

export interface UpsertOneRoleArgs {
  where: RoleWhereUniqueInput
  create: RoleCreateInput
  update: RoleUpdateInput
}

export interface CreateManyRoleArgs {
  data: RoleCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneRoleArgs {
  where: RoleWhereUniqueInput | null
}

export interface UpdateOneRoleArgs {
  data: RoleUpdateInput | null
  where: RoleWhereUniqueInput | null
}

export interface UpdateManyRoleArgs {
  data: RoleUpdateManyMutationInput
  where?: RoleWhereInput
}

export interface DeleteManyRoleArgs {
  where?: RoleWhereInput
}

export interface CreateOnePermissionArgs {
  data: PermissionCreateInput
}

export interface UpsertOnePermissionArgs {
  where: PermissionWhereUniqueInput
  create: PermissionCreateInput
  update: PermissionUpdateInput
}

export interface CreateManyPermissionArgs {
  data: PermissionCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOnePermissionArgs {
  where: PermissionWhereUniqueInput | null
}

export interface UpdateOnePermissionArgs {
  data: PermissionUpdateInput | null
  where: PermissionWhereUniqueInput | null
}

export interface UpdateManyPermissionArgs {
  data: PermissionUpdateManyMutationInput
  where?: PermissionWhereInput
}

export interface DeleteManyPermissionArgs {
  where?: PermissionWhereInput
}

export interface CreateOneEntityLogArgs {
  data: EntityLogCreateInput
}

export interface UpsertOneEntityLogArgs {
  where: EntityLogWhereUniqueInput
  create: EntityLogCreateInput
  update: EntityLogUpdateInput
}

export interface CreateManyEntityLogArgs {
  data: EntityLogCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneEntityLogArgs {
  where: EntityLogWhereUniqueInput | null
}

export interface UpdateOneEntityLogArgs {
  data: EntityLogUpdateInput | null
  where: EntityLogWhereUniqueInput | null
}

export interface UpdateManyEntityLogArgs {
  data: EntityLogUpdateManyMutationInput
  where?: EntityLogWhereInput
}

export interface DeleteManyEntityLogArgs {
  where?: EntityLogWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface PostWhereInput {
  AND?: PostWhereInput[]
  OR?: PostWhereInput[]
  NOT?: PostWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  title?: StringFilter
  content?: StringNullableFilter | null
  published?: BoolFilter
  author?: UserWhereInput | null
  authorId?: StringNullableFilter | null
}

export interface PostOrderByInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  title?: SortOrder
  content?: SortOrder
  published?: SortOrder
  authorId?: SortOrder
}

export interface PostWhereUniqueInput {
  id?: string
}

export interface PostScalarWhereWithAggregatesInput {
  AND?: PostScalarWhereWithAggregatesInput[]
  OR?: PostScalarWhereWithAggregatesInput[]
  NOT?: PostScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  title?: StringWithAggregatesFilter
  content?: StringNullableWithAggregatesFilter | null
  published?: BoolWithAggregatesFilter
  authorId?: StringNullableWithAggregatesFilter | null
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  email?: StringFilter
  name?: StringNullableFilter | null
  posts?: PostListRelationFilter
  roles?: RoleListRelationFilter
}

export interface UserOrderByInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  email?: SortOrder
  name?: SortOrder
}

export interface UserWhereUniqueInput {
  id?: string
  email?: string
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  email?: StringWithAggregatesFilter
  name?: StringNullableWithAggregatesFilter | null
}

export interface RoleWhereInput {
  AND?: RoleWhereInput[]
  OR?: RoleWhereInput[]
  NOT?: RoleWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  name?: StringFilter
  permissions?: PermissionListRelationFilter
  users?: UserListRelationFilter
}

export interface RoleOrderByInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  name?: SortOrder
}

export interface RoleWhereUniqueInput {
  id?: string
}

export interface RoleScalarWhereWithAggregatesInput {
  AND?: RoleScalarWhereWithAggregatesInput[]
  OR?: RoleScalarWhereWithAggregatesInput[]
  NOT?: RoleScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  name?: StringWithAggregatesFilter
}

export interface PermissionWhereInput {
  AND?: PermissionWhereInput[]
  OR?: PermissionWhereInput[]
  NOT?: PermissionWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  name?: EnumPermissionTypeFilter
  roles?: RoleListRelationFilter
}

export interface PermissionOrderByInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  name?: SortOrder
}

export interface PermissionWhereUniqueInput {
  id?: string
  name?: PermissionType
}

export interface PermissionScalarWhereWithAggregatesInput {
  AND?: PermissionScalarWhereWithAggregatesInput[]
  OR?: PermissionScalarWhereWithAggregatesInput[]
  NOT?: PermissionScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  name?: EnumPermissionTypeWithAggregatesFilter
}

export interface EntityLogWhereInput {
  AND?: EntityLogWhereInput[]
  OR?: EntityLogWhereInput[]
  NOT?: EntityLogWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  model?: StringFilter
  changes?: JsonFilter
  action?: EnumEntityActionTypeFilter
  entityId?: StringFilter
}

export interface EntityLogOrderByInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  model?: SortOrder
  changes?: SortOrder
  action?: SortOrder
  entityId?: SortOrder
}

export interface EntityLogWhereUniqueInput {
  id?: string
}

export interface EntityLogScalarWhereWithAggregatesInput {
  AND?: EntityLogScalarWhereWithAggregatesInput[]
  OR?: EntityLogScalarWhereWithAggregatesInput[]
  NOT?: EntityLogScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  model?: StringWithAggregatesFilter
  changes?: JsonWithAggregatesFilter
  action?: EnumEntityActionTypeWithAggregatesFilter
  entityId?: StringWithAggregatesFilter
}

export interface PostCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  content?: string | null
  published?: boolean
  author?: UserCreateNestedOneWithoutPostsInput
}

export interface PostUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  content?: string | null
  published?: boolean
  authorId?: string | null
}

export interface PostUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
  author?: UserUpdateOneWithoutPostsInput
}

export interface PostUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
  authorId?: NullableStringFieldUpdateOperationsInput | null
}

export interface PostCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  content?: string | null
  published?: boolean
  authorId?: string | null
}

export interface PostUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
  authorId?: NullableStringFieldUpdateOperationsInput | null
}

export interface UserCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  email: string
  name?: string | null
  posts?: PostCreateNestedManyWithoutAuthorInput
  roles?: RoleCreateNestedManyWithoutUsersInput
}

export interface UserUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  email: string
  name?: string | null
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  posts?: PostUpdateManyWithoutAuthorInput
  roles?: RoleUpdateManyWithoutUsersInput
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  posts?: PostUncheckedUpdateManyWithoutAuthorInput
}

export interface UserCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  email: string
  name?: string | null
}

export interface UserUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
}

export interface RoleCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: string
  permissions?: PermissionCreateNestedManyWithoutRolesInput
  users?: UserCreateNestedManyWithoutRolesInput
}

export interface RoleUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: string
}

export interface RoleUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  permissions?: PermissionUpdateManyWithoutRolesInput
  users?: UserUpdateManyWithoutRolesInput
}

export interface RoleUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export interface RoleCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: string
}

export interface RoleUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export interface RoleUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export interface PermissionCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: PermissionType
  roles?: RoleCreateNestedManyWithoutPermissionsInput
}

export interface PermissionUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: PermissionType
}

export interface PermissionUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: EnumPermissionTypeFieldUpdateOperationsInput
  roles?: RoleUpdateManyWithoutPermissionsInput
}

export interface PermissionUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: EnumPermissionTypeFieldUpdateOperationsInput
}

export interface PermissionCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: PermissionType
}

export interface PermissionUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: EnumPermissionTypeFieldUpdateOperationsInput
}

export interface PermissionUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: EnumPermissionTypeFieldUpdateOperationsInput
}

export interface EntityLogCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  model: string
  changes: any
  action: EntityActionType
  entityId: string
}

export interface EntityLogUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  model: string
  changes: any
  action: EntityActionType
  entityId: string
}

export interface EntityLogUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  model?: StringFieldUpdateOperationsInput
  changes?: any
  action?: EnumEntityActionTypeFieldUpdateOperationsInput
  entityId?: StringFieldUpdateOperationsInput
}

export interface EntityLogUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  model?: StringFieldUpdateOperationsInput
  changes?: any
  action?: EnumEntityActionTypeFieldUpdateOperationsInput
  entityId?: StringFieldUpdateOperationsInput
}

export interface EntityLogCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  model: string
  changes: any
  action: EntityActionType
  entityId: string
}

export interface EntityLogUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  model?: StringFieldUpdateOperationsInput
  changes?: any
  action?: EnumEntityActionTypeFieldUpdateOperationsInput
  entityId?: StringFieldUpdateOperationsInput
}

export interface EntityLogUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  model?: StringFieldUpdateOperationsInput
  changes?: any
  action?: EnumEntityActionTypeFieldUpdateOperationsInput
  entityId?: StringFieldUpdateOperationsInput
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringFilter
}

export interface DateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface StringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableFilter | null
}

export interface BoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface UserRelationFilter {
  is?: UserWhereInput | null
  isNot?: UserWhereInput | null
}

export interface StringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedStringFilter
  min?: NestedStringFilter
  _max?: NestedStringFilter
  max?: NestedStringFilter
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
  max?: NestedDateTimeFilter
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
  max?: NestedStringNullableFilter
}

export interface BoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedBoolFilter
  min?: NestedBoolFilter
  _max?: NestedBoolFilter
  max?: NestedBoolFilter
}

export interface PostListRelationFilter {
  every?: PostWhereInput
  some?: PostWhereInput
  none?: PostWhereInput
}

export interface RoleListRelationFilter {
  every?: RoleWhereInput
  some?: RoleWhereInput
  none?: RoleWhereInput
}

export interface PermissionListRelationFilter {
  every?: PermissionWhereInput
  some?: PermissionWhereInput
  none?: PermissionWhereInput
}

export interface UserListRelationFilter {
  every?: UserWhereInput
  some?: UserWhereInput
  none?: UserWhereInput
}

export interface EnumPermissionTypeFilter {
  equals?: PermissionType
  in?: PermissionType[]
  notIn?: PermissionType[]
  not?: NestedEnumPermissionTypeFilter
}

export interface EnumPermissionTypeWithAggregatesFilter {
  equals?: PermissionType
  in?: PermissionType[]
  notIn?: PermissionType[]
  not?: NestedEnumPermissionTypeWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedEnumPermissionTypeFilter
  min?: NestedEnumPermissionTypeFilter
  _max?: NestedEnumPermissionTypeFilter
  max?: NestedEnumPermissionTypeFilter
}

export interface JsonFilter {
  equals?: any
  not?: any
}

export interface EnumEntityActionTypeFilter {
  equals?: EntityActionType
  in?: EntityActionType[]
  notIn?: EntityActionType[]
  not?: NestedEnumEntityActionTypeFilter
}

export interface JsonWithAggregatesFilter {
  equals?: any
  not?: any
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedJsonFilter
  min?: NestedJsonFilter
  _max?: NestedJsonFilter
  max?: NestedJsonFilter
}

export interface EnumEntityActionTypeWithAggregatesFilter {
  equals?: EntityActionType
  in?: EntityActionType[]
  notIn?: EntityActionType[]
  not?: NestedEnumEntityActionTypeWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedEnumEntityActionTypeFilter
  min?: NestedEnumEntityActionTypeFilter
  _max?: NestedEnumEntityActionTypeFilter
  max?: NestedEnumEntityActionTypeFilter
}

export interface UserCreateNestedOneWithoutPostsInput {
  create?: UserUncheckedCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserUncheckedCreateWithoutPostsInput
  connectOrCreate?: UserCreateOrConnectWithoutPostsInput
  upsert?: UserUpsertWithoutPostsInput
  connect?: UserWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: UserUncheckedUpdateWithoutPostsInput
}

export interface PostCreateNestedManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  createMany?: PostCreateManyAuthorInputEnvelope
  connect?: PostWhereUniqueInput[]
}

export interface RoleCreateNestedManyWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput[]
  connectOrCreate?: RoleCreateOrConnectWithoutUsersInput[]
  connect?: RoleWhereUniqueInput[]
}

export interface PostUncheckedCreateNestedManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  createMany?: PostCreateManyAuthorInputEnvelope
  connect?: PostWhereUniqueInput[]
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  createMany?: PostCreateManyAuthorInputEnvelope
  connect?: PostWhereUniqueInput[]
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface RoleUpdateManyWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput[]
  connectOrCreate?: RoleCreateOrConnectWithoutUsersInput[]
  upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput[]
  connect?: RoleWhereUniqueInput[]
  set?: RoleWhereUniqueInput[]
  disconnect?: RoleWhereUniqueInput[]
  delete?: RoleWhereUniqueInput[]
  update?: RoleUpdateWithWhereUniqueWithoutUsersInput[]
  updateMany?: RoleUpdateManyWithWhereWithoutUsersInput[]
  deleteMany?: RoleScalarWhereInput[]
}

export interface PostUncheckedUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[]
  connectOrCreate?: PostCreateOrConnectWithoutAuthorInput[]
  upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput[]
  createMany?: PostCreateManyAuthorInputEnvelope
  connect?: PostWhereUniqueInput[]
  set?: PostWhereUniqueInput[]
  disconnect?: PostWhereUniqueInput[]
  delete?: PostWhereUniqueInput[]
  update?: PostUpdateWithWhereUniqueWithoutAuthorInput[]
  updateMany?: PostUpdateManyWithWhereWithoutAuthorInput[]
  deleteMany?: PostScalarWhereInput[]
}

export interface PermissionCreateNestedManyWithoutRolesInput {
  create?: PermissionCreateWithoutRolesInput[]
  connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput[]
  connect?: PermissionWhereUniqueInput[]
}

export interface UserCreateNestedManyWithoutRolesInput {
  create?: UserCreateWithoutRolesInput[]
  connectOrCreate?: UserCreateOrConnectWithoutRolesInput[]
  connect?: UserWhereUniqueInput[]
}

export interface PermissionUpdateManyWithoutRolesInput {
  create?: PermissionCreateWithoutRolesInput[]
  connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput[]
  upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput[]
  connect?: PermissionWhereUniqueInput[]
  set?: PermissionWhereUniqueInput[]
  disconnect?: PermissionWhereUniqueInput[]
  delete?: PermissionWhereUniqueInput[]
  update?: PermissionUpdateWithWhereUniqueWithoutRolesInput[]
  updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput[]
  deleteMany?: PermissionScalarWhereInput[]
}

export interface UserUpdateManyWithoutRolesInput {
  create?: UserCreateWithoutRolesInput[]
  connectOrCreate?: UserCreateOrConnectWithoutRolesInput[]
  upsert?: UserUpsertWithWhereUniqueWithoutRolesInput[]
  connect?: UserWhereUniqueInput[]
  set?: UserWhereUniqueInput[]
  disconnect?: UserWhereUniqueInput[]
  delete?: UserWhereUniqueInput[]
  update?: UserUpdateWithWhereUniqueWithoutRolesInput[]
  updateMany?: UserUpdateManyWithWhereWithoutRolesInput[]
  deleteMany?: UserScalarWhereInput[]
}

export interface RoleCreateNestedManyWithoutPermissionsInput {
  create?: RoleCreateWithoutPermissionsInput[]
  connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput[]
  connect?: RoleWhereUniqueInput[]
}

export interface EnumPermissionTypeFieldUpdateOperationsInput {
  set?: PermissionType
}

export interface RoleUpdateManyWithoutPermissionsInput {
  create?: RoleCreateWithoutPermissionsInput[]
  connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput[]
  upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
  connect?: RoleWhereUniqueInput[]
  set?: RoleWhereUniqueInput[]
  disconnect?: RoleWhereUniqueInput[]
  delete?: RoleWhereUniqueInput[]
  update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
  updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput[]
  deleteMany?: RoleScalarWhereInput[]
}

export interface EnumEntityActionTypeFieldUpdateOperationsInput {
  set?: EntityActionType
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedDateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface NestedStringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface NestedBoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface NestedStringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedStringFilter
  min?: NestedStringFilter
  _max?: NestedStringFilter
  max?: NestedStringFilter
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
  max?: NestedDateTimeFilter
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
  max?: NestedStringNullableFilter
}

export interface NestedIntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedBoolFilter
  min?: NestedBoolFilter
  _max?: NestedBoolFilter
  max?: NestedBoolFilter
}

export interface NestedEnumPermissionTypeFilter {
  equals?: PermissionType
  in?: PermissionType[]
  notIn?: PermissionType[]
  not?: NestedEnumPermissionTypeFilter
}

export interface NestedEnumPermissionTypeWithAggregatesFilter {
  equals?: PermissionType
  in?: PermissionType[]
  notIn?: PermissionType[]
  not?: NestedEnumPermissionTypeWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedEnumPermissionTypeFilter
  min?: NestedEnumPermissionTypeFilter
  _max?: NestedEnumPermissionTypeFilter
  max?: NestedEnumPermissionTypeFilter
}

export interface NestedEnumEntityActionTypeFilter {
  equals?: EntityActionType
  in?: EntityActionType[]
  notIn?: EntityActionType[]
  not?: NestedEnumEntityActionTypeFilter
}

export interface NestedJsonFilter {
  equals?: any
  not?: any
}

export interface NestedEnumEntityActionTypeWithAggregatesFilter {
  equals?: EntityActionType
  in?: EntityActionType[]
  notIn?: EntityActionType[]
  not?: NestedEnumEntityActionTypeWithAggregatesFilter
  _count?: NestedIntFilter
  count?: NestedIntFilter
  _min?: NestedEnumEntityActionTypeFilter
  min?: NestedEnumEntityActionTypeFilter
  _max?: NestedEnumEntityActionTypeFilter
  max?: NestedEnumEntityActionTypeFilter
}

export interface UserCreateWithoutPostsInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  email: string
  name?: string | null
  roles?: RoleCreateNestedManyWithoutUsersInput
}

export interface UserUncheckedCreateWithoutPostsInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  email: string
  name?: string | null
}

export interface UserCreateOrConnectWithoutPostsInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutPostsInput
}

export interface UserUpsertWithoutPostsInput {
  update: UserUncheckedUpdateWithoutPostsInput
  create: UserUncheckedCreateWithoutPostsInput
}

export interface UserUpdateWithoutPostsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  roles?: RoleUpdateManyWithoutUsersInput
}

export interface UserUncheckedUpdateWithoutPostsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
}

export interface PostCreateWithoutAuthorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  content?: string | null
  published?: boolean
}

export interface PostUncheckedCreateWithoutAuthorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  content?: string | null
  published?: boolean
}

export interface PostCreateOrConnectWithoutAuthorInput {
  where: PostWhereUniqueInput
  create: PostUncheckedCreateWithoutAuthorInput
}

export interface PostCreateManyAuthorInputEnvelope {
  data: PostCreateManyAuthorInput[]
  skipDuplicates?: boolean
}

export interface RoleCreateWithoutUsersInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: string
  permissions?: PermissionCreateNestedManyWithoutRolesInput
}

export interface RoleUncheckedCreateWithoutUsersInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: string
}

export interface RoleCreateOrConnectWithoutUsersInput {
  where: RoleWhereUniqueInput
  create: RoleUncheckedCreateWithoutUsersInput
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUncheckedUpdateWithoutAuthorInput
  create: PostUncheckedCreateWithoutAuthorInput
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUncheckedUpdateWithoutAuthorInput
}

export interface PostUpdateManyWithWhereWithoutAuthorInput {
  where: PostScalarWhereInput
  data: PostUncheckedUpdateManyWithoutPostsInput
}

export interface PostScalarWhereInput {
  AND?: PostScalarWhereInput[]
  OR?: PostScalarWhereInput[]
  NOT?: PostScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  title?: StringFilter
  content?: StringNullableFilter | null
  published?: BoolFilter
  authorId?: StringNullableFilter | null
}

export interface RoleUpsertWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput
  update: RoleUncheckedUpdateWithoutUsersInput
  create: RoleUncheckedCreateWithoutUsersInput
}

export interface RoleUpdateWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput
  data: RoleUncheckedUpdateWithoutUsersInput
}

export interface RoleUpdateManyWithWhereWithoutUsersInput {
  where: RoleScalarWhereInput
  data: RoleUncheckedUpdateManyWithoutRolesInput
}

export interface RoleScalarWhereInput {
  AND?: RoleScalarWhereInput[]
  OR?: RoleScalarWhereInput[]
  NOT?: RoleScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  name?: StringFilter
}

export interface PermissionCreateWithoutRolesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: PermissionType
}

export interface PermissionUncheckedCreateWithoutRolesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: PermissionType
}

export interface PermissionCreateOrConnectWithoutRolesInput {
  where: PermissionWhereUniqueInput
  create: PermissionUncheckedCreateWithoutRolesInput
}

export interface UserCreateWithoutRolesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  email: string
  name?: string | null
  posts?: PostCreateNestedManyWithoutAuthorInput
}

export interface UserUncheckedCreateWithoutRolesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  email: string
  name?: string | null
  posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
}

export interface UserCreateOrConnectWithoutRolesInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutRolesInput
}

export interface PermissionUpsertWithWhereUniqueWithoutRolesInput {
  where: PermissionWhereUniqueInput
  update: PermissionUncheckedUpdateWithoutRolesInput
  create: PermissionUncheckedCreateWithoutRolesInput
}

export interface PermissionUpdateWithWhereUniqueWithoutRolesInput {
  where: PermissionWhereUniqueInput
  data: PermissionUncheckedUpdateWithoutRolesInput
}

export interface PermissionUpdateManyWithWhereWithoutRolesInput {
  where: PermissionScalarWhereInput
  data: PermissionUncheckedUpdateManyWithoutPermissionsInput
}

export interface PermissionScalarWhereInput {
  AND?: PermissionScalarWhereInput[]
  OR?: PermissionScalarWhereInput[]
  NOT?: PermissionScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  name?: EnumPermissionTypeFilter
}

export interface UserUpsertWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput
  update: UserUncheckedUpdateWithoutRolesInput
  create: UserUncheckedCreateWithoutRolesInput
}

export interface UserUpdateWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput
  data: UserUncheckedUpdateWithoutRolesInput
}

export interface UserUpdateManyWithWhereWithoutRolesInput {
  where: UserScalarWhereInput
  data: UserUncheckedUpdateManyWithoutUsersInput
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[]
  OR?: UserScalarWhereInput[]
  NOT?: UserScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  email?: StringFilter
  name?: StringNullableFilter | null
}

export interface RoleCreateWithoutPermissionsInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: string
  users?: UserCreateNestedManyWithoutRolesInput
}

export interface RoleUncheckedCreateWithoutPermissionsInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  name: string
}

export interface RoleCreateOrConnectWithoutPermissionsInput {
  where: RoleWhereUniqueInput
  create: RoleUncheckedCreateWithoutPermissionsInput
}

export interface RoleUpsertWithWhereUniqueWithoutPermissionsInput {
  where: RoleWhereUniqueInput
  update: RoleUncheckedUpdateWithoutPermissionsInput
  create: RoleUncheckedCreateWithoutPermissionsInput
}

export interface RoleUpdateWithWhereUniqueWithoutPermissionsInput {
  where: RoleWhereUniqueInput
  data: RoleUncheckedUpdateWithoutPermissionsInput
}

export interface RoleUpdateManyWithWhereWithoutPermissionsInput {
  where: RoleScalarWhereInput
  data: RoleUncheckedUpdateManyWithoutRolesInput
}

export interface PostCreateManyAuthorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  content?: string | null
  published?: boolean
}

export interface PostUpdateWithoutAuthorInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateWithoutAuthorInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
}

export interface PostUncheckedUpdateManyWithoutPostsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  content?: NullableStringFieldUpdateOperationsInput | null
  published?: BoolFieldUpdateOperationsInput
}

export interface RoleUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  permissions?: PermissionUpdateManyWithoutRolesInput
}

export interface RoleUncheckedUpdateWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export interface RoleUncheckedUpdateManyWithoutRolesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export interface PermissionUpdateWithoutRolesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: EnumPermissionTypeFieldUpdateOperationsInput
}

export interface PermissionUncheckedUpdateWithoutRolesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: EnumPermissionTypeFieldUpdateOperationsInput
}

export interface PermissionUncheckedUpdateManyWithoutPermissionsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: EnumPermissionTypeFieldUpdateOperationsInput
}

export interface UserUpdateWithoutRolesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface UserUncheckedUpdateWithoutRolesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
  posts?: PostUncheckedUpdateManyWithoutAuthorInput
}

export interface UserUncheckedUpdateManyWithoutUsersInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  email?: StringFieldUpdateOperationsInput
  name?: NullableStringFieldUpdateOperationsInput | null
}

export interface RoleUpdateWithoutPermissionsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
  users?: UserUpdateManyWithoutRolesInput
}

export interface RoleUncheckedUpdateWithoutPermissionsInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  name?: StringFieldUpdateOperationsInput
}

export enum PostScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
  content = 'content',
  published = 'published',
  authorId = 'authorId',
}
export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  email = 'email',
  name = 'name',
}
export enum RoleScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
}
export enum PermissionScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  name = 'name',
}
export enum EntityLogScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  model = 'model',
  changes = 'changes',
  action = 'action',
  entityId = 'entityId',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum PermissionType {
  ReadUser = 'ReadUser',
  WriteUser = 'WriteUser',
  ReadPost = 'ReadPost',
  WritePost = 'WritePost',
  ReadRole = 'ReadRole',
  WriteRole = 'WriteRole',
}
export enum EntityActionType {
  create = 'create',
  update = 'update',
  delete = 'delete',
}
