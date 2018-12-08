import { db } from '../db/db'
import passport from 'passport'

export const init = () => {
    passport.serializeUser((user, done) => {
        console.log('SERIALIZED USER', user)
        done(null, user.id)
    })

    passport.deserializeUser(async (id, done) => {
        console.log('DESERIALIZED USER ID', id)
        try {
            const user = await db('user').select('*').where('id', id)
            done(null, user[0])
        }
        catch(err){
            done(err, null)
        }
    })
}