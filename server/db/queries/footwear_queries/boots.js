const getAllBoots = `
SELECT *
FROM boots`

const getSingleBoot = `
SELECT *
FROM boots
WHERE product_id = $1`

const getBootsBySize = `
SELECT *
FROM boots
WHERE $1 = ANY (sizes)`

const getBootsByColors = `
SELECT *
FROM boots
WHERE $1 = ANY (colors)`

export {
    getAllBoots,
    getSingleBoot,
    getBootsByColors,
    getBootsBySize
}