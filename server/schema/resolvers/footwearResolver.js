import { db } from "../../db/db";
import * as queries from "../../db/queries/footwear_queries/footwear";

export default {
  allFootwearBySubCategory: async ({ subCategory }) => {
    try {
      return await db.any(
        queries.getFootwearBySubCategory,
        [subCategory]
      );
    } catch (err) {
      return null;
    }
  },
  getFootwearByProductID: async ({ product_id }) => {
    try {
      return await db.one(queries.getFootwearByProductID, [
        product_id
      ]);
    } catch (err) {
      return null;
    }
  }
};
