import {
  db
} from "../../../db/db";
import * as queries from "../../../db/queries/product_queries/products";

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
  removeProduct: async ({
    product_id
  }) => {
    try {
      // DELETE FROM PRICES TABLE
      await db.none(queries.removeFromPrices, [product_id])
      // DELETE FROM PRODUCT COLORS TABLE
      await db.none(queries.removeFromProductColors, [product_id])
      // DELETE FROM PRODUCT SIZES TABLE
      await db.none(queries.removeFromProductSizes, [product_id])
      // DELETE FROM PRODUCTS FINALLY
      await db.none(queries.deleteProduct, [product_id])
      return true
    } catch (err) {
      return false
    }
  },
  updateProductName: async ({
    product_id,
    product_name
  }) => {
    try {
      await db.none(queries.updateProductName, [product_name, product_id])
      return true
    } catch (err) {
      return false
    }
  },
  updatePrice: async ({
    price,
    product_id
  }) => {
    try {
      await db.none(queries.updatePrice, [price, product_id])
      return true
    } catch (err) {
      return false
    }
  },
  updateProductSize: async ({
    price,
    product_id
  }) => {
    try {
      await db.none(queries.updateProductSize, [price, product_id])
      return true
    } catch (err) {
      return false
    }
  },
  updateProductColor: async ({
    price,
    product_id
  }) => {
    try {
      await db.none(queries.updateProductColor, [price, product_id])
      return true
    } catch (err) {
      return false
    }
  }
};