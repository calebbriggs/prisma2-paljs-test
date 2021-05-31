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
    excludeModels: [{ name: "EntityLog", mutations: true }],
  },
  frontend: {
    graphql: {
      output: "ui/src/sdk/src",
      excludeModels: [{ name: "EntityLog", mutations: true }],
    },
  },
};
