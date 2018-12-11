import { db } from '../../db/db'

export default {
    allFootwearBySubCategory: async (subCategory) => {
        const getFootwear = await db('footwear')
        .select('*')
        .where('sub_category', subCategory)
        .then(rows => {
            return rows
        })
        .catch(err => {
            return err
        })

        return getFootwear
    },
    getFootwearByProductID: async (product_id) => {
        const findFootwear = await db('footwear')
        .select('*')
        .where('product_id', product_id)
        .then(rows => {
            return rows[0]
        })
        .catch(err => {
            return err
        })

        return findFootwear
    }
}