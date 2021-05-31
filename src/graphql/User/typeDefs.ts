import gql from 'graphql-tag'

export default gql`
  type User {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    email: String!
    name: String
    posts(
      where: PostWhereInput
      orderBy: PostOrderByInput
      cursor: PostWhereUniqueInput
      take: Int
      skip: Int
      distinct: PostScalarFieldEnum
    ): [Post!]!
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
    findUniqueUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): User
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): [User!]
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByInput!]
      cursor: UserWhereUniqueInput
      distinct: UserScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateUser
  }
  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(where: UserWhereUniqueInput!, data: UserUpdateInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      where: UserWhereInput
      data: UserUpdateManyMutationInput
    ): BatchPayload
  }
`
