import { QueryMode, useFindManyRoleQuery } from "./sdk/generated";
import { GraphQLClient } from "graphql-request";
const client = new GraphQLClient("http://localhost:4010");
export default function Test() {
  const { data, isFetched } = useFindManyRoleQuery(client, {
    where: { name: { contains: "tes", mode: QueryMode.Insensitive } },
  });

  return isFetched ? (
    data?.findManyRole.map(({ name }) => {
      return <div>{name}</div>;
    })
  ) : (
    <div>Loading</div>
  );
}
