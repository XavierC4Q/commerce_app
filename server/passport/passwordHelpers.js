import bcrypt from 'bcryptjs'

export const saltAndHashPassword = (password) => {
    const salt = bcrypt.genSaltSync(12)
    const hash = bcrypt.hashSync(password, salt)
    return hash
}

export const comparePassword = (password, dbPassword) => {
    return bcrypt.compareSync(password, dbPassword)
}