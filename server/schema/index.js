import path from 'path'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

const productTypesArray = fileLoader(path.join(__dirname, './types/product_types'))
const productResolverArray = fileLoader(path.join(__dirname, './resolvers/product_resolvers'))

const footwearTypesArray = fileLoader(path.join(__dirname, './types/footwear_types'))
const footwearResolverArray = fileLoader(path.join(__dirname, './resolvers/footwear_resolvers'))

const userTypesArray = fileLoader(path.join(__dirname, './types/user_types'))
const userResolverArray = fileLoader(path.join(__dirname, './resolvers/user_resolvers'))

const topsTypesArrays = fileLoader(path.join(__dirname, './types/tops_types'))
const topsResolverArrays = fileLoader(path.join(__dirname, './resolvers/tops_resolvers'))

const allTypes = [
    ...footwearTypesArray, 
    ...userTypesArray,
    ...productTypesArray,
    ...topsTypesArrays
]
const allResolvers = [
    ...footwearResolverArray, 
    ...userResolverArray,
    ...productResolverArray,
    ...topsResolverArrays
]

export const graphqlSchema = {
    types: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
}