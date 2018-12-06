exports.up = function(knex, Promise) {
  return Promise.resolve(
      knex.schema.createTable('footwear', (t) => {
          t.increments('id').primary()
          t.integer('product_id').unique().notNullable().references('product.id').unsigned()
          t.string('product_name').unique().notNullable().references('product.product_name').unsigned()
          t.string('sub_category').notNullable()
      })
  )
};

exports.down = function(knex, Promise) {
  return Promise.resolve(
      knex.schema.dropTable('footwear')
  )
};
