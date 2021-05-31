import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniqueEntityLog: (_parent, args, { prisma }) => {
      return prisma.entityLog.findUnique(args)
    },
    findFirstEntityLog: (_parent, args, { prisma }) => {
      return prisma.entityLog.findFirst(args)
    },
    findManyEntityLog: (_parent, args, { prisma }) => {
      return prisma.entityLog.findMany(args)
    },
    findManyEntityLogCount: (_parent, args, { prisma }) => {
      return prisma.entityLog.count(args)
    },
    aggregateEntityLog: (_parent, args, { prisma }) => {
      return prisma.entityLog.aggregate(args)
    },
  },
  Mutation: {
    upsertOneEntityLog: async (_parent, args, { prisma }) => {
      return prisma.entityLog.upsert(args)
    },
  },
}
export default resolvers
