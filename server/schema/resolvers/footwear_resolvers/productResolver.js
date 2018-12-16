import {
  db
} from "../../../db/db";
import * as queries from "../../../db/queries/footwear_queries/products";

export default {
  allProducts: async () => {
    try {
      return await db.any(queries.getAllProducts);
    } catch (err) {
      return err;
    }
  },
  productsByCategory: async ({
    category
  }) => {
    try {
      return await db.any(
        queries.getProductsByCategory,
        [category]
      );
    } catch (err) {
      return null;
    }
  },
  addProduct: async ({
    product_name,
    category
  }) => {
    try {
      await db.one(queries.addProduct, [
        product_name,
        category
      ]);
      return true;
    } catch (err) {
      return false;
    }
  },
  removeProduct: async ({
    product_id
  }) => {
    try {
      await db.none(queries.deleteProduct, [product_id])
      return true
    } catch (err) {
      return false
    }
  },
  updateProduct: async ({
    product_id,
    product_name
  }) => {
    try {
      await db.none(queries.updateProductName, [product_name, product_id])
      return true
    } catch (err) {
      return false
    }
  }
};