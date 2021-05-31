import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { PrismaSelect } from "@paljs/plugins";
import { applyMiddleware } from "graphql-middleware";
import { GraphQLResolveInfo } from "graphql";
import { createContext } from "./context";
import { Context } from "./prismaClient";

const middleware = async (
  resolve: any,
  root: any,
  args: any,
  context: Context,
  info: GraphQLResolveInfo
) => {
  const result = new PrismaSelect(info).value;
  if (Object.keys(result.select).length > 0) {
    args = {
      ...args,
      ...result,
    };
  }
  return resolve(root, args, context, info);
};
const finalSchema = applyMiddleware(schema, middleware);
const server = new ApolloServer({
  schema: finalSchema,
  context: createContext,
});
server.listen(4010).then(({ url }) => {
  console.log(`server listening on ${url}`);
});
