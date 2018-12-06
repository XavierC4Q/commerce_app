import knex from 'knex'
import * as knexConfig from '../../knexfile'

const db = knex(knexConfig)

export default {
  allUsers: async () => {
      const allUsersDB = await db.select('*').from('user').then(rows => {
        return rows
      }).catch(err => {
        console.log('ALL USERS ERROR',err)
        return err
      })
      return allUsersDB
  },
  getUser: async ({ username }) => {
    try {
      const singleUser = await db.select('*').from('user').where({ username: username }).then(rows => {
        return rows[0]
      })
      return singleUser
    }
    catch(err){
      return null
    }
  },
  addUser: async ({ username, password, email }) => {
    try {
      const newUser = await db.into('user')
      .returning(['username', 'email'])
      .insert({
        username: username,
        password: password,
        email: email
      })
      .then(rows => {
        return rows[0]
      })
      .catch(err => {
        return err
      })

      return newUser
    }
    catch(err){
      return err
    }
  }
};
