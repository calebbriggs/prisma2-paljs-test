import { QueryMode, useFindManyRoleQuery } from "./sdk/generated";
import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("http://localhost:4010");
export default function Test() {
  const { data, isFetched } = useFindManyRoleQuery(client, {
    where: { name: { contains: "tes", mode: QueryMode.Insensitive } },
  });

  return isFetched ? (
    <pre>{JSON.stringify(data?.findManyRole, null, 2)}</pre>
  ) : (
    <div>Loading</div>
  );
}
