export const loginRequired = ({ req }) => {
    if(!req.user){
        return true
    }
    return false
}