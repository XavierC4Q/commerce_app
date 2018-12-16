import bcrypt from 'bcryptjs'
import { db } from '../db/db'
import { getUserByUsername } from '../db/queries/user_queries/users'

export const saltAndHashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

export const comparePasswords = async (username, password) => {
    try {
        const user = await db.one(getUserByUsername, [username])
        if(user){
            if (bcrypt.compareSync(password, user.password)){
                return user
            }
            return false
        }
        return false
    }
    catch(err){
        return null
    }
}