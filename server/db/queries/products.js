const getAllProducts = `
SELECT * 
FROM products`

const getProductsByCategory = `
SELECT *
FROM products
WHERE category = $1`

const addProduct = `
INSERT INTO products (product_name, category)
VALUES($1, $2)
RETURNING id, product_name`

const deleteProduct = `
DELETE FROM products
WHERE id = $1`

const updateProductName = `
UPDATE products
SET product_name = $1
WHERE id = $2`

export {
    getAllProducts,
    getProductsByCategory,
    addProduct,
    deleteProduct,
    updateProductName
}