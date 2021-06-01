import { Prisma, prisma } from "./prismaClient";
export interface Context {
  user: string;
  prisma: Prisma | any;
}
export async function createContext(): Promise<Context> {
  return {
    prisma,
    user: "test",
  };
}
