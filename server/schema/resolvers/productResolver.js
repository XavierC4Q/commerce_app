import { db } from "../../db/db";
import * as queries from "../../db/queries/products";

export default {
  allProducts: async () => {
    try {
      return await db.any(queries.getAllProducts);
    } catch (err) {
      return err;
    }
  },
  productsByCategory: async ({ category }) => {
    try {
      return await db.any(
        queries.getProductsByCategory,
        [category]
      );
    } catch (err) {
      return err;
    }
  },
  addProduct: async ({ product_name, category }) => {
    try {
      await db.one(queries.addProduct, [
        product_name,
        category
      ]);
      return true;
    } catch (err) {
      return false;
    }
  }
};
