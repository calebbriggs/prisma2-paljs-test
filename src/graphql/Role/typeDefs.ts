import gql from 'graphql-tag'

export default gql`
  type Role {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    permissions(
      where: PermissionWhereInput
      orderBy: PermissionOrderByInput
      cursor: PermissionWhereUniqueInput
      take: Int
      skip: Int
      distinct: PermissionScalarFieldEnum
    ): [Permission!]!
    users(
      where: UserWhereInput
      orderBy: UserOrderByInput
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: UserScalarFieldEnum
    ): [User!]!
  }

  type Query {
    findUniqueRole(where: RoleWhereUniqueInput!): Role
    findFirstRole(
      where: RoleWhereInput
      orderBy: [RoleOrderByInput!]
      cursor: RoleWhereUniqueInput
      distinct: RoleScalarFieldEnum
      skip: Int
      take: Int
    ): Role
    findManyRole(
      where: RoleWhereInput
      orderBy: [RoleOrderByInput!]
      cursor: RoleWhereUniqueInput
      distinct: RoleScalarFieldEnum
      skip: Int
      take: Int
    ): [Role!]
    findManyRoleCount(
      where: RoleWhereInput
      orderBy: [RoleOrderByInput!]
      cursor: RoleWhereUniqueInput
      distinct: RoleScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateRole(
      where: RoleWhereInput
      orderBy: [RoleOrderByInput!]
      cursor: RoleWhereUniqueInput
      distinct: RoleScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateRole
  }
  type Mutation {
    createOneRole(data: RoleCreateInput!): Role!
    updateOneRole(where: RoleWhereUniqueInput!, data: RoleUpdateInput!): Role!
    deleteOneRole(where: RoleWhereUniqueInput!): Role
    upsertOneRole(
      where: RoleWhereUniqueInput!
      create: RoleCreateInput!
      update: RoleUpdateInput!
    ): Role
    deleteManyRole(where: RoleWhereInput): BatchPayload
    updateManyRole(
      where: RoleWhereInput
      data: RoleUpdateManyMutationInput
    ): BatchPayload
  }
`
