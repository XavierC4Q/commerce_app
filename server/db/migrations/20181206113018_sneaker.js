exports.up = function(knex, Promise) {
  return Promise.resolve(
      knex.schema.createTable('sneaker', (t) => {
          t.increments('id').primary()
          t.integer('product_id').unique().notNullable().references('footwear.product_id').unsigned()
          t.string('product_name').unique().notNullable().references('footwear.product_name').unsigned()
          t.boolean('male').notNullable()
          t.boolean('female').notNullable()
          t.boolean('for_children').notNullable()
          t.json('sizes')
          t.json('colors')
      })
  )
};

exports.down = function(knex, Promise) {
  return Promise.resolve(
      knex.schema.dropTable('sneaker')
  )
};
