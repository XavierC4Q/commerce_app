exports.up = async (knex, Promise) => {
  const productTable = await knex.schema.createTable('product', (table) => {
    table.increments('id').primary()
    table.string('category')
  })

  const shoesTable = await knex.schema.createTable('shoe', (table) => {
    table.increments('id').primary()
    table.integer('product_id').references('product.id')
    table.string('name')
    table.string('type')
  })

  const sneakersTable = await knex.schema.createTable('sneaker', (table) => {
    table.increments('id').primary()
    table.integer('product_id').references('product.id')
    table.string('name').references('shoe')
    table.boolean('male')
    table.boolean('female')
    table.boolean('youth')
    table.specificType('sizes', 'jsonb[]')
    table.specificType('colors', 'jsonb[]')
  })

  return Promise.all([productTable, shoesTable, sneakersTable])
};

exports.down = async (knex, Promise) => {
  const dropProduct = await knex.schema.dropTable('product')
  const dropShoes = await knex.schema.dropTable('shoe')
  const dropSneakers = await knex.schema.dropTable('sneaker')

  return Promise.all([dropProduct, dropShoes, dropSneakers])
};
