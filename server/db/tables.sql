DROP DATABASE IF EXISTS commerce_app;
CREATE DATABASE commerce_app;

\c commerce_app

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL
);

CREATE TABLE footwear (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products (id) UNIQUE,
    product_name TEXT REFERENCES products (product_name) UNIQUE,
    sub_category TEXT NOT NULL
);

CREATE TABLE sneakers (
    id SERIAL PRIMARY KEY,
    product_name TEXT REFERENCES footwear (product_name) UNIQUE,
    product_id INTEGER REFERENCES footwear (product_id),
    male BOOLEAN NOT NULL,
    female BOOLEAN NOT NULL,
    child BOOLEAN NOT NULL,
    sizes TEXT[],
    colors TEXT[]
);

INSERT INTO users (username, password, email) 
VALUES
('Xavier','$2a$10$cP5yvGxHTDI9SChQinrYBehqMLO8qs.U.3xLuWn5MRX.ZrtbC9CyC','email'),
('Matthew','$2a$10$cP5yvGxHTDI9SChQinrYBehqMLO8qs.U.3xLuWn5MRX.ZrtbC9CyC','messages'),
('Jesus','$2a$10$cP5yvGxHTDI9SChQinrYBehqMLO8qs.U.3xLuWn5MRX.ZrtbC9CyC','church.org'),
('Sally','$2a$10$cP5yvGxHTDI9SChQinrYBehqMLO8qs.U.3xLuWn5MRX.ZrtbC9CyC','watermail');

INSERT INTO products (product_name, category)
VALUES
('Air Jordan 6', 'FOOTWEAR'), 
('Blue Denim Shirt', 'TOP'),
('Black Ripped Jeans', 'BOTTOM'), 
('Snake Leather Boots', 'FOOTWEAR'),
('Trenchcoat by Polo', 'OUTERWEAR'), 
('Gucci Belt', 'ACCESSORY'),
('Rolling Stones T-shirt', 'TOP'), 
('Adidas Boost', 'FOOTWEAR'),
('Camo Joggers', 'BOTTOM'), 
('Raincoat by Eazy', 'OUTERWEAR'),
('Moonstone Ring', 'ACCESSORY'),
('Brogues', 'FOOTWEAR'),
('Beach Shorts', 'BOTTOM'),
('Christmas Sweater', 'TOP'),
('Puffy Coat', 'OUTERWEAR'),
('Boar Tooth Necklace', 'ACCESSORY'),
('Doc Marten Deluxe', 'FOOTWEAR'),
('Glass Slippers', 'FOOTWEAR'),
('Purple Slacks', 'BOTTOM'),
('Banana Tank Top', 'TOP'),
('Pearl Necklace', 'ACCESSORY'),
('Bear Fur Coat', 'OUTERWEAR'),
('Golden Cleats', 'FOOTWEAR'),
('Skinny Biker Jeans', 'BOTTOM'),
('Chelsea Boots', 'FOOTWEAR'),
('Orange Logo V-neck', 'TOP');

INSERT INTO footwear (product_id, product_name, sub_category)
VALUES
(1, 'Air Jordan 6', 'SNEAKER'),
(4, 'Snake Leather Boots', 'BOOT'),
(8, 'Adidas Boost', 'SNEAKER'),
(12, 'Brogues', 'DRESS'),
(17, 'Doc Marten Deluxe', 'BOOT'),
(18, 'Glass Slippers', 'CASUAL'),
(23, 'Golden Cleats', 'SNEAKER'),
(25, 'Chelsea Boots', 'BOOT');

INSERT INTO sneakers (product_name, product_id, male, female, child, sizes, colors)
VALUES
('Air Jordan 6', 1, true, true, true, '{2, 2.5, 4.5, 5, 5.5, 8, 9.5, 11}', '{"RED", "BLUE", "YELLOW"}'),
('Adidas Boost', 8, true, false, false, '{7.5, 8.5, 10, 10.5, 12, 13}', '{"GREEN", "GOLD"}'),
('Golden Cleats', 23, true, false, false, '{9.5, 10.5, 11, 11.5}', '{"ORANGE", "PURPLE"}');