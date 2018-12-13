import { db } from "../../db/db";
import * as queries from "../../db/queries/products";

export default {
  allProducts: async () => {
    try {
      const getAllProducts = await db.any(queries.getAllProducts);
      return getAllProducts;
    } catch (err) {
      return err;
    }
  },
  productsByCategory: async ({ category }) => {
    try {
      const allProductsByCategory = await db.any(
        queries.getProductsByCategory,
        [category]
      );
      return allProductsByCategory;
    } catch (err) {
      return err;
    }
  },
  addProduct: async ({ product_name, category }) => {
    try {
      const newProduct = await db.one(queries.addProduct, [
        product_name,
        category
      ]);
      return true;
    } catch (err) {
      return false;
    }
  }
};
