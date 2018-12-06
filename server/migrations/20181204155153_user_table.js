exports.up = async (knex) => {
  const userTable = await knex.schema.createTable('user', (table) => {
      table.increments('id').primary()
      table.string('username').notNullable().unique()
      table.string('password').notNullable()
      table.string('email').notNullable().unique()
  })
  return userTable
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('user')
};
