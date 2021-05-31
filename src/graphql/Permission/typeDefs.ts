import gql from 'graphql-tag'

export default gql`
  type Permission {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: PermissionType!
    roles(
      where: RoleWhereInput
      orderBy: RoleOrderByInput
      cursor: RoleWhereUniqueInput
      take: Int
      skip: Int
      distinct: RoleScalarFieldEnum
    ): [Role!]!
  }

  type Query {
    findUniquePermission(where: PermissionWhereUniqueInput!): Permission
    findFirstPermission(
      where: PermissionWhereInput
      orderBy: [PermissionOrderByInput!]
      cursor: PermissionWhereUniqueInput
      distinct: PermissionScalarFieldEnum
      skip: Int
      take: Int
    ): Permission
    findManyPermission(
      where: PermissionWhereInput
      orderBy: [PermissionOrderByInput!]
      cursor: PermissionWhereUniqueInput
      distinct: PermissionScalarFieldEnum
      skip: Int
      take: Int
    ): [Permission!]
    findManyPermissionCount(
      where: PermissionWhereInput
      orderBy: [PermissionOrderByInput!]
      cursor: PermissionWhereUniqueInput
      distinct: PermissionScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregatePermission(
      where: PermissionWhereInput
      orderBy: [PermissionOrderByInput!]
      cursor: PermissionWhereUniqueInput
      distinct: PermissionScalarFieldEnum
      skip: Int
      take: Int
    ): AggregatePermission
  }
  type Mutation {
    createOnePermission(data: PermissionCreateInput!): Permission!
    updateOnePermission(
      where: PermissionWhereUniqueInput!
      data: PermissionUpdateInput!
    ): Permission!
    deleteOnePermission(where: PermissionWhereUniqueInput!): Permission
    upsertOnePermission(
      where: PermissionWhereUniqueInput!
      create: PermissionCreateInput!
      update: PermissionUpdateInput!
    ): Permission
    deleteManyPermission(where: PermissionWhereInput): BatchPayload
    updateManyPermission(
      where: PermissionWhereInput
      data: PermissionUpdateManyMutationInput
    ): BatchPayload
  }
`
