const getAllSneakers = `
SELECT *
FROM sneakers`

const getSingleSneaker = `
SELECT *
FROM sneakers
WHERE product_id = $1`

const getSneakersBySize = `
SELECT *
FROM sneakers
WHERE $1 = ANY (sizes)`

const getSneakersByColors = `
SELECT *
FROM sneakers
WHERE $1 = ANY (colors)`

export {
    getAllSneakers,
    getSingleSneaker,
    getSneakersByColors,
    getSneakersBySize
}