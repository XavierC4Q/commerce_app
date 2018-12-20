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
INSERT INTO $1~ (product_name, product_id, male, female, child, sizes, colors, price)
VALUES($2, $3, $4, $5, $6, $7, $8, $9)
RETURNING id, product_name`

export {
    getAllProducts,
    getProductsByCategory,
    deleteProduct,
    updateProductName,
    addProduct,
    addFootwear,
    addFootwearSubCategory
}