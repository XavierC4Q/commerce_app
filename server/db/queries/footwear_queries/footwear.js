const getFootwearBySubCategory = `
SELECT *
FROM footwear
WHERE sub_category = $1`

const getFootwearByProductID = `
SELECT *
FROM footwear
WHERE product_id = $1`

const addFootwear = `
INSERT INTO footwear (product_id, product_name, sub_category)
VALUES($1, $2, $3)
RETURNING product_id, product_name`

const addFootwearSubCategory = `
INSERT INTO $1~ (product_name, product_id, male, female, child)
VALUES($2, $3, $4, $5, $6)
RETURNING id, product_id, product_name`

export {
    getFootwearByProductID,
    getFootwearBySubCategory,
    addFootwear,
    addFootwearSubCategory
}