require('dotenv').config()

export const config = {
    port: process.env.PORT,
    secret: process.env.SECRET,
    db: process.env.DB,
    jwtSecret: process.env.JWT_SECRET
}