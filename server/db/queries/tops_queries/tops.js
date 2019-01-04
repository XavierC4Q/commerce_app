const getAllTops = `
SELECT *
FROM tops`

const getAllTopsBySubCategory = `
SELECT *
FROM tops
WHERE sub_category = $1`

export {
    getAllTops,
    getAllTopsBySubCategory
}