import gql from 'graphql-tag'

export default gql`
  type Post {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    content: String
    published: Boolean!
    author: User
    authorId: String
  }

  type Query {
    findUniquePost(where: PostWhereUniqueInput!): Post
    findFirstPost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): Post
    findManyPost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): [Post!]
    findManyPostCount(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregatePost(
      where: PostWhereInput
      orderBy: [PostOrderByInput!]
      cursor: PostWhereUniqueInput
      distinct: PostScalarFieldEnum
      skip: Int
      take: Int
    ): AggregatePost
  }
  type Mutation {
    createOnePost(data: PostCreateInput!): Post!
    updateOnePost(where: PostWhereUniqueInput!, data: PostUpdateInput!): Post!
    deleteOnePost(where: PostWhereUniqueInput!): Post
    upsertOnePost(
      where: PostWhereUniqueInput!
      create: PostCreateInput!
      update: PostUpdateInput!
    ): Post
    deleteManyPost(where: PostWhereInput): BatchPayload
    updateManyPost(
      where: PostWhereInput
      data: PostUpdateManyMutationInput
    ): BatchPayload
  }
`
