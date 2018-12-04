require('dotenv').config()

export const config = {
    port: process.env.PORT,
    secret: process.env.SECRET
}