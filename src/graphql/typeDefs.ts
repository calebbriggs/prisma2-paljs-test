import EntityLog from './EntityLog/typeDefs'
import Permission from './Permission/typeDefs'
import Role from './Role/typeDefs'
import User from './User/typeDefs'
import Post from './Post/typeDefs'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { sdlInputs } from '@paljs/plugins'

export default mergeTypeDefs([
  sdlInputs({ doNotUseFieldUpdateOperationsInput: true }),
  Post,
  User,
  Role,
  Permission,
  EntityLog,
])
