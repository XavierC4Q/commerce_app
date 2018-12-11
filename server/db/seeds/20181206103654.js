exports.seed = (knex, Promise) => {
  return knex('product').del()
    .then(() => {
      return knex('product').insert([
        {product_name: 'Air Jordan 6', category: 'FOOTWEAR'},
        {product_name: 'Denim Shirt', category: 'TOP'},
        {product_name: 'Gucci Raincoat', category: 'OUTERWEAR'},
        {product_name: 'Bright Orange Pants', category: 'BOTTOM'},
        {product_name: 'Glass Slippers', category: 'FOOTWEAR'},
        {product_name: 'Rolling Stones T-Shirt', category: 'TOP'},
        {product_name: 'Iphone Belt', category: 'ACCESSORY'},
        {product_name: 'Orange Puff Coat', category: 'OUTERWEAR'},
        {product_name: 'Biker Jeans', category: 'BOTTOM'},
        {product_name: 'Air Jordan 13', category: 'FOOTWEAR'},
        {product_name: 'Moonstone Ring', category: 'ACCESSORY'},
        {product_name: 'Christmas Sweater by Zales', category: 'TOP'},
        {product_name: 'White Cashmere Tee', category: 'TOP'},
        {product_name: 'Summer Tank Top', category: 'TOP'},
        {product_name: 'Duck Shoes', category: 'FOOTWEAR'},
        {product_name: 'Ripper Black Jeans', category: 'BOTTOM'},
        {product_name: 'Blazer', category: 'OUTERWEAR'},
        {product_name: 'Adidas Attack 2', category: 'FOOTWEAR'},
        {product_name: 'Beach Shorts', category: 'BOTTOM'},
        {product_name: 'Polo Collared Shirt', category: 'TOP'},
        {product_name: 'Utility Belt By Batman', category: 'ACCESSORY'}
      ]);
    });
};
