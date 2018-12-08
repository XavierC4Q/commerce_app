import { passport } from './strategy'

export const authenticateUser = async (req, username, password) => {
    const authUser = new Promise((resolve, reject) => {
        passport.authenticate('local')((username,password, err, user) => {
            if(err) reject(err)
            if(!user) reject(null)

            req.logIn(user, (err) => {
                if(err) reject(err)
                resolve(user)
            })
        })
    })

    try {
        const loggedInUser = await Promise.resolve(authUser()).then(info => {
            return info
        })
        return loggedInUser
    }
    catch(err){
        return err
    }
}