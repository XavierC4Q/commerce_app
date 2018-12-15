import { db } from "../../db/db";
import * as queries from "../../db/queries/footwear_queries/sneakers";

export default {
  allSneakers: async () => {
    try {
      return await db.any(queries.getAllSneakers);
    } catch (err) {
      return err;
    }
  },
  getSneaker: async ({ product_id }) => {
    try {
      return await db.one(queries.getSingleSneaker, [product_id]);
    } catch (err) {
      return null;
    }
  },
  getSneakersBySize: async ({ size }) => {
    try {
      return await db.any(queries.getSneakersBySize, [size]);
    } catch (err) {
      return null;
    }
  },
  getSneakersByColor: async ({ color }) => {
    try {
      return await db.any(queries.getSneakersByColors, [color.toUpperCase()]);
    } catch (err) {
      return null;
    }
  }
};
