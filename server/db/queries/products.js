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

export {
    getAllProducts,
    getProductsByCategory,
    addProduct
}