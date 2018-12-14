import { db } from "../../db/db";
import * as queries from "../../db/queries/boots";

export default {
  allBoots: async () => {
    try {
      return await db.any(queries.getAllBoots);
    } catch (err) {
      return err;
    }
  },
  getBoot: async ({ product_id }) => {
    try {
      return await db.one(queries.getSingleBoot, [product_id]);
    } catch (err) {
      return err;
    }
  },
  getBootsBySize: async ({ size }) => {
    try {
      return await db.any(queries.getBootsBySize, [size]);
    } catch (err) {
      return err;
    }
  },
  getBootsByColor: async ({ color }) => {
    try {
      return await db.any(queries.getBootsByColors, [color.toUpperCase()]);
    } catch (err) {
      return err;
    }
  }
};
