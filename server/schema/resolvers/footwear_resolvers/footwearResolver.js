import {
  db
} from "../../../db/db";
import * as queries from "../../../db/queries/footwear_queries/footwear";
import {
  addProduct,
  insertIntoPrices,
  insertIntoProductColors,
  insertIntoProductSizes
} from '../../../db/queries/product_queries/products'

export default {
  allFootwearBySubCategory: async ({
    subCategory
  }) => {
    try {
      return await db.any(
        queries.getFootwearBySubCategory,
        [subCategory]
      );
    } catch (err) {
      return null;
    }
  },
  getFootwearByProductID: async ({
    product_id
  }) => {
    try {
      return await db.one(queries.getFootwearByProductID, [
        product_id
      ]);
    } catch (err) {
      return null;
    }
  },
  addFootwearProduct: async ({
    product_name,
    sub_category,
    male,
    female,
    child,
    sizes,
    colors,
    price
  }) => {
    try {
      // ADDS PRODUCT TO PRODUCT TABLE
      const addNewProduct = await db.one(addProduct, [product_name, 'FOOTWEAR'])
      // ADDS PRODUCT TO FOOTWEAR TABLE
      const addFootwear = await db.one(queries.addFootwear, [addNewProduct.id, product_name, sub_category])
      // ADDS PRODUCT TO SUBCATEGORY TABLE OF FOOTWEAR
      await db.one(queries.addFootwearSubCategory,
        [
          sub_category.toLowerCase(),
          product_name,
          addFootwear.product_id,
          male,
          female,
          child
        ])
      // ADDS FOOTWEAR PRICE TO PRICES TABLE
      await db.none(insertIntoPrices, [addFootwear.product_id, price])
      // ADDS FOOTWEAR COLORS TO PRODUCT_COLORS TABLE
      await db.none(insertIntoProductColors, [addFootwear.product_id, colors])
      // ADDS FOOTWEAR SIZE TO PRODUCT_SIZES TABLE
      await db.none(insertIntoProductSizes, [addFootwear.product_id, sizes])

      return true
    } catch (err) {
      return false
    }
  }
};