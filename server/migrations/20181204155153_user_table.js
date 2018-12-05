exports.up = async (knex) => {
  const userTable = await knex.schema.createTable('user', (t) => {
      t.increments('id').primary()
      t.string('username').notNullable()
      t.string('password').notNullable()
      t.string('city').notNullable()
  })
  return userTable
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('user')
};
