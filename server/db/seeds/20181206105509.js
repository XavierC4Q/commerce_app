exports.seed = (knex, Promise) => {
  return knex('footwear').del()
    .then(() => {
      return knex('footwear').insert([
        {product_id: 1, product_name: 'Air Jordan 6', sub_category: 'SNEAKER'},
        {product_id: 5, product_name: 'Glass Slippers', sub_category: 'CASUAL'},
        {product_id: 10, product_name: 'Air Jordan 13', sub_category: 'SNEAKER'},
        {product_id: 15, product_name: 'Duck Shoes', sub_category: 'CASUAL'},
        {product_id: 18, product_name: 'Adidas Attack 2', sub_category: 'SNEAKER'},
        {product_id: 22, product_name: 'Air Jordan 9', sub_category: 'SNEAKER'}
      ]);
    });
};
