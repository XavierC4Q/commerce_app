import {
    db
} from '../../../db/db'
import * as queries from '../../../db/queries/tops_queries/tops'

export default {
    getAllTops: async () => {
        try {
            return await db.any(queries.getAllTops)
        } catch (err) {
            return err
        }
    },
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
    }
}