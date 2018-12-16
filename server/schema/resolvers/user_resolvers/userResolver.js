import { db } from "../../../db/db";
import jsonwebtoken from "jsonwebtoken";
import * as queries from "../../../db/queries/user_queries/users";
import { config } from "../../../config";
import {
  saltAndHashPassword,
  comparePasswords
} from "../../../helpers/passwordHelpers";

export default {
  allUsers: async () => {
    try {
      return await db.any(queries.allUsers);
    } catch (err) {
      return err;
    }
  },
  getUser: async ({ username }) => {
    try {
      return await db.one(queries.getUserByUsername, [username]);
    } catch (err) {
      return null;
    }
  },
  register: async ({ username, password, email }) => {
    try {
      const newUser = await db.one(queries.registerUser, [
        username,
        saltAndHashPassword(password),
        email
      ]);
      return jsonwebtoken.sign({ ...newUser }, config.jwtSecret, {
        expiresIn: "1y"
      });
    } catch (err) {
      return "Username or email is taken";
    }
  },
  login: async ({ username, password }) => {
    const validPassword = await comparePasswords(username, password);
    if (validPassword) {
      return jsonwebtoken.sign({ ...validPassword }, config.jwtSecret, {
        expiresIn: "1d"
      });
    }
    return "INVALID USERNAME OR PASSWORD";
  },
  editUser: async ({ id, username, password, email }) => {
    if (password) {
      password = saltAndHashPassword(password);
    }
    try {
      await db.none(queries.editUser, [username, password, email, id]);
      return true;
    } catch (err) {
      return false;
    }
  }
};
