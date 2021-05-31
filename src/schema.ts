import { gql, makeExecutableSchema } from "apollo-server";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { mergeTypeDefs } from "@graphql-tools/merge";
const finalTypeDefs = mergeTypeDefs([
  gql`
    scalar Json
  `,
  typeDefs,
]);
export const schema = makeExecutableSchema({
  typeDefs: finalTypeDefs,
  resolvers,
});
