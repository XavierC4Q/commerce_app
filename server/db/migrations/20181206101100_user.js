exports.up = function(knex, Promise) {
  return Promise.resolve(
      knex.schema.createTable('user', (t) => {
          t.increments('id').primary()
          t.string('username').notNullable().unique()
          t.string('password').notNullable()
          t.string('email').notNullable().unique()
      })
  )
};

exports.down = function(knex, Promise) {
  return Promise.resolve(
      knex.schema.dropTable('user')
  )
};
