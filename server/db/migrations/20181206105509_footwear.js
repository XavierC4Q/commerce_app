exports.up = (knex, Promise) => {
  return Promise.resolve(
      knex.schema.createTable('footwear', (t) => {
          t.increments('id').primary()
          t.integer('product_id').unique().notNullable().references('product.id').inTable('product').unsigned().onDelete('cascade')
          t.string('product_name').unique().notNullable().references('product.product_name').unsigned().onDelete('cascade')
          t.string('sub_category').notNullable()
      })
  )
};

exports.down = (knex, Promise) => {
  return Promise.resolve(
      knex.schema.dropTable('footwear')
  )
};
