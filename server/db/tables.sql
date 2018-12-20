DROP DATABASE IF EXISTS commerce_app;
CREATE DATABASE commerce_app;

\c commerce_app
--- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL UNIQUE,
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);
--- Products Table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL
);
--- Footwear Table References to Products
--- product_name deferred immediately to allow for potential updates
CREATE TABLE footwear (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products (id) UNIQUE,
    product_name TEXT REFERENCES products (product_name) DEFERRABLE INITIALLY IMMEDIATE UNIQUE,
    sub_category TEXT NOT NULL
);
--- Sneakers Table
--- product_name deferred immediately to allow for potential changes
CREATE TABLE sneakers (
    id SERIAL PRIMARY KEY,
    product_name TEXT REFERENCES footwear (product_name) DEFERRABLE INITIALLY IMMEDIATE UNIQUE,
    product_id INTEGER REFERENCES footwear (product_id),
    male BOOLEAN NOT NULL,
    female BOOLEAN NOT NULL,
    child BOOLEAN NOT NULL,
    sizes FLOAT[],
    colors TEXT[],
    price FLOAT NOT NULL
);
--- Boots Table
--- product_name deferred immediately to allow for potential changes
CREATE TABLE boots (
    id SERIAL PRIMARY KEY,
    product_name TEXT REFERENCES footwear (product_name) DEFERRABLE INITIALLY IMMEDIATE UNIQUE,
    product_id INTEGER REFERENCES footwear (product_id),
    male BOOLEAN NOT NULL,
    female BOOLEAN NOT NULL,
    child BOOLEAN NOT NULL,
    sizes FLOAT[],
    colors TEXT[],
    price FLOAT NOT NULL
);
--- Dress Shoes Table
--- product_name deferred immediately to allow for potential changes
CREATE TABLE dress_shoe (
    id SERIAL PRIMARY KEY,
    product_name TEXT REFERENCES footwear (product_name) DEFERRABLE INITIALLY IMMEDIATE UNIQUE,
    product_id INTEGER REFERENCES footwear (product_id),
    male BOOLEAN NOT NULL,
    female BOOLEAN NOT NULL,
    child BOOLEAN NOT NULL,
    sizes FLOAT[],
    colors TEXT[],
    price FLOAT NOT NULL
);

--- Function for deleting product and all relations
CREATE OR REPLACE FUNCTION product_deleted()
RETURNS trigger
AS $product_delete_func$
DECLARE get_category TEXT; get_sub_category TEXT;
BEGIN

--- Get the category of item to be deleted
    get_category := (SELECT LOWER(category) 
        FROM products 
        WHERE id = OLD.id);

--- Create temporary table to get items sub_category using the category above
    EXECUTE format('CREATE TEMP TABLE findSubCategory
        ON COMMIT DROP 
        AS SELECT sub_category FROM %1$I
        WHERE product_id = CAST(%2$s AS FLOAT)',
        get_category, OLD.id);

--- Get sub_category of item to be deleted
    get_sub_category := (SELECT LOWER(sub_category)
        FROM findSubCategory);

-- Delete items in reverse order.
    EXECUTE format('DELETE FROM %1$I
        WHERE product_id = CAST(%2$s AS FLOAT)',
        get_sub_category, OLD.id);

    EXECUTE format('DELETE FROM %1$I 
        WHERE product_id = CAST(%2$s AS FLOAT)', 
        get_category, OLD.id);

    RETURN OLD;
END;
$product_delete_func$ LANGUAGE plpgsql;

--- Function to update a product/product_name and all relations
CREATE OR REPLACE FUNCTION product_updated()
RETURNS trigger
AS $product_updated_func$
DECLARE update_in_category TEXT; update_in_sub_category TEXT;
BEGIN
--- Defer foreign key constraints to allow for UPDATE
SET CONSTRAINTS ALL DEFERRED;

--- Get category of item to be updated
    update_in_category := (SELECT LOWER(category)
        FROM products
        WHERE id = NEW.id);

--- Create temporary table with the sub_category of the updated item using the category
    EXECUTE format('CREATE TEMP TABLE findSubCategory
        ON COMMIT DROP
        AS SELECT sub_category FROM %1$I
        WHERE product_id = CAST(%2$s AS FLOAT)',
        update_in_category, NEW.id);

--- Get the sub_category from above table
    update_in_sub_category := (SELECT LOWER(sub_category)
        FROM findSubCategory);

--- Update the tables in order
    EXECUTE format('UPDATE %1$I
        SET product_name = %2$L
        WHERE product_id = CAST(%3$s AS FLOAT)',
        update_in_category, NEW.product_name, NEW.id);

    EXECUTE format('UPDATE %1$I
        SET product_name = %2$L
        WHERE product_id = CAST(%3$s AS FLOAT)',
        update_in_sub_category, NEW.product_name, NEW.id);

    RETURN NEW;
END;
$product_updated_func$ LANGUAGE plpgsql;


--- Triggers
CREATE TRIGGER product_deleted_trigger
BEFORE DELETE
ON products
FOR EACH ROW
EXECUTE PROCEDURE product_deleted();

CREATE TRIGGER product_updated_trigger
BEFORE UPDATE
ON products
FOR EACH ROW
EXECUTE PROCEDURE product_updated();

--- Inserts
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
(1, 'Air Jordan 6', 'SNEAKERS'),
(4, 'Snake Leather Boots', 'BOOTS'),
(8, 'Adidas Boost', 'SNEAKERS'),
(12, 'Brogues', 'DRESS_SHOE'),
(17, 'Doc Marten Deluxe', 'BOOTS'),
(18, 'Glass Slippers', 'CASUAL'),
(23, 'Golden Cleats', 'SNEAKERS'),
(25, 'Chelsea Boots', 'BOOTS');

INSERT INTO sneakers (product_name, product_id, male, female, child, sizes, colors, price)
VALUES
('Air Jordan 6', 1, true, true, true, '{2, 2.5, 4.5, 5, 5.5, 8, 9.5, 11}', '{"RED", "BLUE", "YELLOW"}', 200.25),
('Adidas Boost', 8, true, false, false, '{7.5, 8.5, 10, 10.5, 12, 13}', '{"GREEN", "GOLD"}', 85.50),
('Golden Cleats', 23, true, false, false, '{9.5, 10.5, 11, 11.5}', '{"ORANGE", "PURPLE"}', 110.25);

INSERT INTO boots (product_name, product_id, male, female, child, sizes, colors, price)
VALUES 
('Snake Leather Boots', 4, false, true, false, '{5.5, 7.5, 8, 8.5}', '{"BROWN", "RAINFOREST GREEN"}', 350),
('Doc Marten Deluxe', 17, true, true, false, '{6.5, 7, 8, 9, 9.5, 10}', '{"RED", "BROWN", "DUCK YELLOW"}', 175.75),
('Chelsea Boots', 25, true, false, false, '{9.5, 10, 10.5, 12}', '{"DESERT TAN", "GREY"}', 80.50);

INSERT INTO dress_shoe (product_name, product_id, male, female, child, sizes, colors, price)
VALUES
('Brogues', 12, true, false, false, '{9, 9.5, 10, 10.5, 11, 12}', '{"OXFORD RED", "BLACK"}', 120.25);