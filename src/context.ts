import { Context, prisma } from "./prismaClient";

export async function createContext(): Promise<Context> {
  return {
    prisma,
    user: "test",
  };
}
