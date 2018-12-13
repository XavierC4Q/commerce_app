const getFootwearBySubCategory = `
SELECT *
FROM footwear
WHERE sub_category = $1`

const getFootwearByProductID = `
SELECT *
FROM footwear
WHERE product_id = $1`

export {
    getFootwearByProductID,
    getFootwearBySubCategory
}