import { db } from "./db";

export const userQueries = {
  createUser: async (req, res) => {
    try {
      const { username, password, city } = req.body;
      const addUser = await db("user").returning(['id', 'username']).insert({
        username,
        password,
        city
      });
      return res.json(addUser[0]);
    } catch (err) {
      return res.json({
        message: "FAILED TO CREATE USER",
        error: err
      });
    }
  }
};
