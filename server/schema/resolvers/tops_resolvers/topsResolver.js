import {
    db
} from '../../../db/db'
import * as queries from '../../../db/queries/tops_queries/tops'
import {
    addProduct,
    insertIntoPrices,
    insertIntoProductColors,
    insertIntoProductSizes
} from '../../../db/queries/product_queries/products'

export default {
    getTopsSubCategory: async ({
        sub_category
    }) => {
        try {
            return await db.any(queries.getAllTopsBySubCategory, [sub_category])
        } catch (err) {
            return null
        }
    },
    getAllTopsBySleeve: async ({
        sleeve,
        sub_category
    }) => {
        let query = 'SELECT * FROM tops WHERE sleeve = $1'
        let subQuery = ' AND sub_category = $2'

        try {
            if (sub_category) {
                return await db.any(query + subQuery, [sleeve, sub_category])
            }
            return await db.any(query, [sleeve])
        } catch (err) {
            return null
        }
    },
    addTops: async ({
        product_name,
        sleeve,
        sub_category,
        male,
        female,
        child,
        price,
        sizes,
        colors
    }) => {
        try {
            // ADD NEW TOP PRODUCT
            const addNewProduct = await db.one(addProduct, [product_name, 'TOPS'])
            // ADD TOP TO TOPS TABLE
            const addNewTop = await db.one(queries.addTop, [addNewProduct.id, product_name, sub_category, sleeve])
            // ADD TOP TO APPROPIATE SUB_CATEGORY
            await db.one(queries.addTopsSubCategory, [
                sub_category.toLowerCase(),
                product_name,
                addNewTop.product_id,
                male,
                female,
                child
            ])

            await db.none(insertIntoPrices, [addNewTop.product_id, price])
            await db.none(insertIntoProductColors, [addNewTop.product_id, colors])
            await db.none(insertIntoProductSizes, [addNewTop.product_id, sizes])

            return true
        } catch (err) {
            return false
        }
    }
}