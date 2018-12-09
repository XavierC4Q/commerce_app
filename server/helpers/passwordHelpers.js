import bcrypt from 'bcryptjs'
import { db } from '../db/db'

export const saltAndHashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

export const comparePasswords = async (username, password) => {
    try {
        const user = await db('user').select('*').where('username', username)
        if (bcrypt.compareSync(password, user[0].password)){
            return user[0]
        }
        return false
    }
    catch(err){
        return null
    }
}