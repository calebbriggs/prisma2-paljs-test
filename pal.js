const pageContent = `
import React from 'react';
import PrismaTable from '@paljs/admin/PrismaTable';
const #{id}: React.FC = () => {
  return <PrismaTable model="#{id}" />;
};
export default #{id};
`;

module.exports = {
  // schema name to add for --schema flag is "schema1"

  // path to schema
  schema: "./prisma/schema.prisma",
  doNotUseFieldUpdateOperationsInput: true,
  backend: {
    // prisma client name inside the graphql resolver context to generate for CRUD
    prismaName: "prisma",
    generator: "sdl",
    output: "./src/graphql",
    onDelete: true,
    excludeQueriesAndMutationsByModel: {
      EntityLog: [
        "createOne",
        "updateOne",
        // "upsertOne",
        "deleteOne",
        "updateMany",
        "deleteMany",
      ],
    },
  },
  frontend: {
    graphql: {
      output: "src/uiSdk",
      excludeModels: [{ name: "EntityLog", mutations: true }],
    },
  },
};
