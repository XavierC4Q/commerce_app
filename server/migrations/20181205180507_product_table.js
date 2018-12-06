exports.up = async (knex, Promise) => {
  const productTable = await knex.schema.createTable('product', (table) => {
    table.increments('id').primary()
    table.string('category')
  })

  const footwearTable = await knex.schema.createTable('footwear', (table) => {
    table.increments('id').primary()
    table.integer('product_id').references('product.id').unique()
    table.string('type')
  })

  const topTable = await knex.schema.createTable('top', (table) => {
    table.increments('id').primary()
    table.integer('product_id').references('product.id').unique()
    table.string('type')
  })

  const sneakersTable = await knex.schema.createTable('sneaker', (table) => {
    table.increments('id').primary()
    table.integer('product_id').references('footwear.product_id').unique()
    table.string('name')
    table.boolean('male')
    table.boolean('female')
    table.boolean('youth')
    table.json('sizes')
    table.json('colors')
  })

  const shirtTable = await knex.schema.createTable('shirt', (table) => {
    table.increments('id').primary()
    table.integer('product_id').references('top.product_id').unique()
    table.string('name')
    table.boolean('male')
    table.boolean('female')
    table.boolean('youth')
    table.json('sizes')
    table.json('colors')
  })

  return Promise.all([productTable, footwearTable, topTable, sneakersTable, shirtTable])
};

exports.down = async (knex, Promise) => {
  const dropShirts = await knex.schema.dropTableIfExists('shirt')
  const dropSneakers = await knex.schema.dropTableIfExists('sneaker')
  const dropTops = await knex.schema.dropTableIfExists('top')
  const dropFootwear = await knex.schema.dropTableIfExists('footwear')
  const dropProduct = await knex.schema.raw(`DROP TABLE product cascade`)

  return Promise.all([dropProduct, dropFootwear, dropTops, dropSneakers, dropShirts])
};
