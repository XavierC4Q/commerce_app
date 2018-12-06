exports.seed = async (knex, Promise) => {
  const seedProduct = await knex('product').del()
    .then(async () => {
      const productInsert = await knex('product').insert([
        {id: 1, category: 'footwear'},
        {id: 2, category: 'footwear'},
        {id: 3, category: 'top'}
      ]);
      return productInsert
    })

  const seedFootwear = await knex('footwear').del()
    .then(async () => {
      const shoeInsert = await knex('footwear').insert([
        {id: 1, product_id: 1, type: 'sneaker'},
        {id: 2, product_id: 2, type: 'boots'}
      ])
      return shoeInsert
    })

  const seedSneakers = await knex('sneaker').del()
    .then(async () => {
      const sneakerInsert = await knex('sneaker').insert([
        {id: 1, 
          product_id: 1, 
          name: 'Air Jordan 6', 
          male: true, 
          female: false, 
          youth: true, 
          sizes: JSON.stringify([3.5, 7.5, 12]),
          colors: JSON.stringify(['red', 'blue'])
        }
      ])
      return sneakerInsert
    })

    const seedTops = await knex('top').del()
    .then(async () => {
      const topInsert = await knex('top').insert([
        {id: 1, product_id: 3, type: 'shirt'},
      ])
      return topInsert
    })

    const seedShirts = await knex('shirt').del()
    .then(async () => {
      const sneakerInsert = await knex('shirt').insert([
        {id: 1, 
          product_id: 3, 
          name: 'Faded denim shirt', 
          male: true, 
          female: false, 
          youth: false, 
          sizes: JSON.stringify(['large', 'XXLarge']),
          colors: JSON.stringify(['red', 'blue'])
        }
      ])
      return sneakerInsert
    })


  return Promise.all([seedProduct, seedFootwear, seedSneakers, seedTops, seedShirts])
}
