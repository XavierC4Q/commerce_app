exports.seed = async (knex, Promise) => {
  const seedProduct = await knex('product').del()
    .then(async () => {
      const productInsert = await knex('product').insert([
        {id: 1, category: 'footwear'},
        {id: 2, category: 'top'},
        {id: 3, category: 'bottom'}
      ]);
      return productInsert
    })

  return seedProduct
}
