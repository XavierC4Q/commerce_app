import { db } from "../../db/db";
import * as queries from "../../db/queries/footwear_queries/dressShoe";

export default {
  allDressShoes: async () => {
    try {
      return await db.any(queries.getAllDressShoes);
    } catch (err) {
      return err;
    }
  },
  getDressShoe: async ({ product_id }) => {
    try {
      return await db.one(queries.getSingleDressShoe, [product_id]);
    } catch (err) {
      return null;
    }
  },
  getDressShoesBySize: async ({ size }) => {
    try {
      return await db.any(queries.getDressShoesBySize, [size]);
    } catch (err) {
      return null;
    }
  },
  getDressShoesByColor: async ({ color }) => {
    try {
      return await db.any(queries.getDressShoesByColors, [color.toUpperCase()]);
    } catch (err) {
      return null;
    }
  }
};
