require('dotenv').config()

module.exports = {
    client: process.env.KNEX_CLIENT,
    connection: process.env.DB,
    migrations: { 
        directory: __dirname + '/db/migrations'
    },
    seeds: { 
        directory: __dirname + '/db/seeds'
    }
}