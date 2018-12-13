import { db } from "../../db/db";
import * as queries from "../../db/queries/footwear";

export default {
  allFootwearBySubCategory: async ({ subCategory }) => {
    try {
      const getFootwearByCategory = await db.any(
        queries.getFootwearBySubCategory,
        [subCategory]
      );
      return getFootwearByCategory;
    } catch (err) {
      return err;
    }
  },
  getFootwearByProductID: async ({ product_id }) => {
    try {
      const findFootwear = await db.one(queries.getFootwearByProductID, [
        product_id
      ]);
      return findFootwear;

      return findFootwear;
    } catch (err) {
      return null;
    }
  }
};
