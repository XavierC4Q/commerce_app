import path from 'path'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

const typesArray = fileLoader(path.join(__dirname, './types'))
const resolverArray = fileLoader(path.join(__dirname, './resolvers'))

export const graphqlSchema = {
    types: mergeTypes(typesArray),
    resolvers: mergeResolvers(resolverArray)
}