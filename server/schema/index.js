import path from 'path'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

const footwearTypesArray = fileLoader(path.join(__dirname, './types/footwear_types'))
const footwearResolverArray = fileLoader(path.join(__dirname, './resolvers/footwear_resolvers'))
const userTypesArray = fileLoader(path.join(__dirname, './types/user_types'))
const userResolverArray = fileLoader(path.join(__dirname, './resolvers/user_resolvers'))

const allTypes = [...footwearTypesArray, ...userTypesArray]
const allResolvers = [...footwearResolverArray, ...userResolverArray]

export const graphqlSchema = {
    types: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
}