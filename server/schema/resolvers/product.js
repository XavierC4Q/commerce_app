import { db } from '../../db/db'

export default {
    allProducts: async () => {
        const getAllProducts = await db('product')
        .select('*')
        .then(rows => {
            return rows
        }).catch(err => {
            console.log(err)
            return []
        })

        return getAllProducts
    },
    productsByCategory: async ({ category }) => {
        const getProductsByCategory = await db('product')
        .select('*')
        .where('category', category)
        .then(rows => {
            return rows
        })
        .catch(err => {
            console.log(err)
            return []
        })

        return getProductsByCategory
    },
    addProduct: async ({ product_name, category }) => {
        const insertProduct = await db
        .into('product')
        .insert({
            product_name: product_name,
            category: category
        })

         console.log(insertProduct)
         return false
    }
}