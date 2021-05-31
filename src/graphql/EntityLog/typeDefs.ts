import gql from 'graphql-tag'

export default gql`
  type EntityLog {
    id: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    model: String!
    changes: Json!
    action: EntityActionType!
    entityId: String!
  }

  type Query {
    findUniqueEntityLog(where: EntityLogWhereUniqueInput!): EntityLog
    findFirstEntityLog(
      where: EntityLogWhereInput
      orderBy: [EntityLogOrderByInput!]
      cursor: EntityLogWhereUniqueInput
      distinct: EntityLogScalarFieldEnum
      skip: Int
      take: Int
    ): EntityLog
    findManyEntityLog(
      where: EntityLogWhereInput
      orderBy: [EntityLogOrderByInput!]
      cursor: EntityLogWhereUniqueInput
      distinct: EntityLogScalarFieldEnum
      skip: Int
      take: Int
    ): [EntityLog!]
    findManyEntityLogCount(
      where: EntityLogWhereInput
      orderBy: [EntityLogOrderByInput!]
      cursor: EntityLogWhereUniqueInput
      distinct: EntityLogScalarFieldEnum
      skip: Int
      take: Int
    ): Int!
    aggregateEntityLog(
      where: EntityLogWhereInput
      orderBy: [EntityLogOrderByInput!]
      cursor: EntityLogWhereUniqueInput
      distinct: EntityLogScalarFieldEnum
      skip: Int
      take: Int
    ): AggregateEntityLog
  }
  type Mutation {
    upsertOneEntityLog(
      where: EntityLogWhereUniqueInput!
      create: EntityLogCreateInput!
      update: EntityLogUpdateInput!
    ): EntityLog
  }
`
