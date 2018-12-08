import passport from 'passport'
import {
    Strategy as LocalStrategy
} from 'passport-local'
import {
    db
} from '../knexfile'
import {
    init
} from './init'
import {
    comparePassword
} from './passwordHelpers'

init()

passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        const findUser = db('user').select('*').where('username', username)
        if (!findUser) {
            return done(null, false)
        }

        const matchingPassword = comparePassword(password, findUser.password)
        if (matchingPassword) {
            return done(null, {
                findUser: {
                    username,
                    email,
                    id
                }
            })
        } else {
            return done(null, null)
        }
    } catch (err) {
        return done(err)
    }
}))

export {
    passport
}