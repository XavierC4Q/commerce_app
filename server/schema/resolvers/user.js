import { db } from '../../db/db'
import jsonwebtoken from 'jsonwebtoken'
import { config } from '../../config'
import { saltAndHashPassword, comparePasswords } from '../../helpers/passwordHelpers'

export default {
  allUsers: async () => {
    const allUsersDB = await db
      .select("*")
      .from("user")
      .then(rows => {
        return rows;
      })
      .catch(err => {
        return err;
      });
    return allUsersDB;
  },
  getUser: async ({ username }) => {
    try {
      const singleUser = await db
        .select("*")
        .from("user")
        .where({ username: username })
        .then(rows => {
          return rows[0];
        });
      return singleUser;
    } catch (err) {
      return null;
    }
  },
  isLoggedIn: async (_, context) => {
    console.log(context.user)
    if(context.user){
      return true
    }
    return false
  },
  register: async ({ username, password, email }, context) => {
      const newUser = await db
        .into("user")
        .returning(["username", "email", "id"])
        .insert({
          username: username,
          password: saltAndHashPassword(password),
          email: email
        })
        .then(rows => {
          return rows[0];
        })
        .catch(err => {
          return err;
        });

      return jsonwebtoken.sign(
        {...newUser}, 
        config.jwtSecret, 
        { expiresIn: '1y' })
  },
  login: async ({ username, password }, context) => {
    const validPassword = await comparePasswords(username, password)
    if(validPassword) {
      return jsonwebtoken.sign(
        {...validPassword},
        config.jwtSecret,
        { expiresIn: '1d' }
      )
    }
    return 'INVALID USERNAME OR PASSWORD'
  }
};
