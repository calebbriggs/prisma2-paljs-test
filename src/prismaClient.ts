import {
  PrismaClient,
  Prisma as PrismaTypes,
  EntityActionType,
} from "@prisma/client";
import { PrismaDelete, onDeleteArgs } from "@paljs/plugins";
export class Prisma extends PrismaClient {
  constructor(options?: PrismaTypes.PrismaClientOptions) {
    super(options);
  }

  async onDelete(args: onDeleteArgs) {
    const prismaDelete = new PrismaDelete(this);
    await prismaDelete.onDelete(args);
  }
}

export const prisma = new Prisma();
const crudOperations: Record<string, boolean> = {
  create: true,
  update: true,
  delete: true,
};
const actionToEnityAction: Record<string, EntityActionType> = {
  create: EntityActionType.create,
  update: EntityActionType.update,
  delete: EntityActionType.delete,
};
prisma.$use(async (params, next) => {
  const { model, action, args } = params;
  if (crudOperations[action] && model && action && model != "EntityLog") {
    console.log(args);
    const result = await next(params);
    console.log(result);
    await prisma.entityLog.create({
      data: {
        changes: args.data || args.where,
        model,
        action: actionToEnityAction[action],
        entityId: result.id,
      },
    });
    return result;
  }
  return next(params);
});
