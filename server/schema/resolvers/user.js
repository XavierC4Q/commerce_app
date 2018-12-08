import { db } from '../../db/db'
import { saltAndHashPassword } from '../../passport/passwordHelpers'
import { authenticateUser } from '../../passport/authenticate'

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
  isLoggedIn: async (_, { req: { session } }) => {
    if(session.passport){
      return true
    }
    return false
  },
  register: async ({ username, password, email }, { req }) => {
    try {
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

      authenticateUser(req, username, password)
    } catch (err) {
      return err;
    }
  }
};
