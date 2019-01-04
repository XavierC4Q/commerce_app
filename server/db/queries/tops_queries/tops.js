const getAllTopsBySubCategory = `
SELECT *
FROM tops
WHERE sub_category = $1`

const addTop = `
INSERT INTO tops (product_id, product_name, sub_category, sleeve)
VALUES($1, $2, $3, $4)
RETURNING product_id, product_name`

const addTopsSubCategory = `
INSERT INTO $1~ (product_name, product_id, male, female, child)
VALUES($2, $3, $4, $5, $6)
RETURNING id, product_id, product_name`


export {
    getAllTopsBySubCategory,
    addTop,
    addTopsSubCategory
}