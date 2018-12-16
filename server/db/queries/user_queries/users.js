const allUsers = `
SELECT * 
FROM users`

const getUserByUsername = `
SELECT * 
FROM users 
WHERE username = $1`

const registerUser = `
INSERT INTO users (username, password, email)
VALUES($1, $2, $3)
RETURNING id, username`

const editUser = `
UPDATE users 
SET username = $1, password = $2, email = $3 
WHERE id = $4`

export {
    allUsers,
    getUserByUsername,
    registerUser,
    editUser
}