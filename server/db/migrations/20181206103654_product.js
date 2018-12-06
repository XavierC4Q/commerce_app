exports.up = function(knex, Promise) {
    return Promise.resolve(
        knex.schema.createTable('product', (t) => {
            t.increments('id').primary().unique()
            t.string('product_name').unique().notNullable()
            t.string('category').notNullable()
        })
    )
};

exports.down = function(knex, Promise) {
    return Promise.resolve(
        knex.schema.dropTable('product')
    )
};
