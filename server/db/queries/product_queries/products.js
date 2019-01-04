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

const updatePrice = `
UPDATE prices
SET price = $1
WHERE product_id = $2`

const updateProductSize = `
UPDATE product_sizes
SET sizes = $1
WHERE product_id = $2`

const updateProductColor = `
UPDATE product_colors
SET colors = $1
WHERE product_id = $2`

export {
    getAllProducts,
    getProductsByCategory,
    deleteProduct,
    updateProductName,
    addProduct,
    removeFromPrices,
    removeFromProductSizes,
    removeFromProductColors,
    insertIntoPrices,
    insertIntoProductColors,
    insertIntoProductSizes,
    updatePrice,
    updateProductSize,
    updateProductColor
}