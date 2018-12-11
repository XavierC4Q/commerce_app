import {
  db
} from '../../db/db'
import jsonwebtoken from 'jsonwebtoken'
import {
  config
} from '../../config'
import {
  saltAndHashPassword,
  comparePasswords
} from '../../helpers/passwordHelpers'

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
  getUser: async ({
    id
  }) => {
    try {
      const singleUser = await db
        .select("*")
        .from("user")
        .where('id', id)
        .then(rows => {
          return rows[0];
        });
      return singleUser;
    } catch (err) {
      return null;
    }
  },
  register: async ({
    username,
    password,
    email
  }) => {
    const newUser = await db
      .into("user")
      .returning(["username", "email", "id"])
      .insert({
        username: username,
        password: saltAndHashPassword(password),
        email: email
      })
      .then(rows => {
        return jsonwebtoken.sign({ ...rows[0]
        },
        config.jwtSecret, {
          expiresIn: '1y'
        })
      })
      .catch(err => {
        return err;
      });

      return newUser
  },
  login: async ({
    username,
    password
  }) => {
    const validPassword = await comparePasswords(username, password)
    if (validPassword) {
      return jsonwebtoken.sign({ ...validPassword
        },
        config.jwtSecret, {
          expiresIn: '1d'
        }
      )
    }
    return 'INVALID USERNAME OR PASSWORD'
  },
  editUser: async ({
    id,
    username,
    password,
    email
  }) => {
    if (password) {
      password = saltAndHashPassword(password)
    }

    const updatedUser = await db('user')
      .where('id', id)
      .update({
        username,
        password,
        email
      })
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      })

    return updatedUser
  }
};