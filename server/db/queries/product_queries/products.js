const getAllProducts = `
SELECT * 
FROM products`

const getProductsByCategory = `
SELECT *
FROM products
WHERE category = $1`

const deleteProduct = `
DELETE FROM products
WHERE id = $1`

const updateProductName = `
UPDATE products
SET product_name = $1
WHERE id = $2`

const addProduct = `
INSERT INTO products (product_name, category)
VALUES($1, $2)
RETURNING id, product_name`

const addFootwear = `
INSERT INTO footwear (product_id, product_name, sub_category)
VALUES($1, $2, $3)
RETURNING product_id, product_name`

const addFootwearSubCategory = `
INSERT INTO $1~ (product_name, product_id, male, female, child)
VALUES($2, $3, $4, $5, $6)
RETURNING id, product_id, product_name`

const removeFromPrices = `
DELETE FROM prices
WHERE product_id = $1`

const removeFromProductSizes = `
DELETE FROM product_sizes
WHERE product_id = $1`

const removeFromProductColors = `
DELETE FROM product_colors
WHERE product_id = $1`

const insertIntoPrices = `
INSERT INTO prices (product_id, price)
VALUES($1, $2)`

const insertIntoProductColors = `
INSERT INTO product_colors (product_id, colors)
VALUES($1, $2)`

const insertIntoProductSizes = `
INSERT INTO product_sizes (product_id, sizes)
VALUES($1, $2)`

export {
    getAllProducts,
    getProductsByCategory,
    deleteProduct,
    updateProductName,
    addProduct,
    addFootwear,
    addFootwearSubCategory,
    removeFromPrices,
    removeFromProductSizes,
    removeFromProductColors,
    insertIntoPrices,
    insertIntoProductColors,
    insertIntoProductSizes
}