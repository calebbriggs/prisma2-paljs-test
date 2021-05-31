import { Resolvers } from '../../resolversTypes'

const resolvers: Resolvers = {
  Query: {
    findUniquePermission: (_parent, args, { prisma }) => {
      return prisma.permission.findUnique(args)
    },
    findFirstPermission: (_parent, args, { prisma }) => {
      return prisma.permission.findFirst(args)
    },
    findManyPermission: (_parent, args, { prisma }) => {
      return prisma.permission.findMany(args)
    },
    findManyPermissionCount: (_parent, args, { prisma }) => {
      return prisma.permission.count(args)
    },
    aggregatePermission: (_parent, args, { prisma }) => {
      return prisma.permission.aggregate(args)
    },
  },
  Mutation: {
    createOnePermission: (_parent, args, { prisma }) => {
      return prisma.permission.create(args)
    },
    updateOnePermission: (_parent, args, { prisma }) => {
      return prisma.permission.update(args)
    },
    deleteOnePermission: async (_parent, args, { prisma }) => {
      await prisma.onDelete({ model: 'Permission', where: args.where })
      return prisma.permission.delete(args)
    },
    upsertOnePermission: async (_parent, args, { prisma }) => {
      return prisma.permission.upsert(args)
    },
    deleteManyPermission: async (_parent, args, { prisma }) => {
      await prisma.onDelete({ model: 'Permission', where: args.where })
      return prisma.permission.deleteMany(args)
    },
    updateManyPermission: (_parent, args, { prisma }) => {
      return prisma.permission.updateMany(args)
    },
  },
}
export default resolvers
