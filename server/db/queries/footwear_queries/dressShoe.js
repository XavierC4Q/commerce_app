const getAllDressShoes = `
SELECT *
FROM dress_shoe`

const getSingleDressShoe = `
SELECT *
FROM dress_shoe
WHERE product_id = $1`

const getDressShoesBySize = `
SELECT *
FROM dress_shoe
WHERE $1 = ANY (sizes)`

const getDressShoesByColors = `
SELECT *
FROM dress_shoe
WHERE $1 = ANY (colors)`

export {
    getAllDressShoes,
    getSingleDressShoe,
    getDressShoesByColors,
    getDressShoesBySize
}