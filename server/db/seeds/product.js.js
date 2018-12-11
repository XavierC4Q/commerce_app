exports.seed = (knex, Promise) => {
  return knex('product').del()
    .then(() => {
      return knex('product').insert([
        {id: 1, product_name: 'Air Jordan 6', category: 'FOOTWEAR'},
        {id: 2, product_name: 'Denim Shirt', category: 'TOP'},
        {id: 3, product_name: 'Gucci Raincoat', category: 'OUTERWEAR'},
        {id: 4, product_name: 'Bright Orange Pants', category: 'BOTTOM'},
        {id: 5, product_name: 'Glass Slippers', category: 'FOOTWEAR'},
        {id: 6, product_name: 'Rolling Stones T-Shirt', category: 'TOP'},
        {id: 7, product_name: 'Iphone Belt', category: 'ACCESSORY'},
        {id: 8, product_name: 'Orange Puff Coat', category: 'OUTERWEAR'},
        {id: 9, product_name: 'Biker Jeans', category: 'BOTTOM'},
        {id: 10, product_name: 'Air Jordan 13', category: 'FOOTWEAR'},
        {id: 11, product_name: 'Moonstone Ring', category: 'ACCESSORY'},
        {id: 12, product_name: 'Christmas Sweater by Zales', category: 'TOP'},
        {id: 13, product_name: 'White Cashmere Tee', category: 'TOP'},
        {id: 14, product_name: 'Summer Tank Top', category: 'TOP'},
        {id: 15, product_name: 'Duck Shoes', category: 'FOOTWEAR'},
        {id: 16, product_name: 'Ripper Black Jeans', category: 'BOTTOM'},
        {id: 17, product_name: 'Blazer', category: 'OUTERWEAR'},
        {id: 18, product_name: 'Adidas Attack 2', category: 'FOOTWEAR'},
        {id: 19, product_name: 'Beach Shorts', category: 'BOTTOM'},
        {id: 20, product_name: 'Polo Collared Shirt', category: 'TOP'},
        {id: 21, product_name: 'Utility Belt By Batman', category: 'ACCESSORY'}
      ]);
    });
};
