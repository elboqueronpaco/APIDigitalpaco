import UserModel from '../../models/User'
import crypto from 'crypto'
export default {
    Query: {
        getUsers: (parent, args, { User }) => {
            User = UserModel
            User.findAll()
        }
    },
    Mutation: {
        async signUp(_, { input })  {
            const newUser = new UserModel(input)
            const encriPass = crypto.createHash('sha1').update(`${process.env.KEY_PASSWORD}${newUser.password.toString()}`).digest('hex')
            newUser.password = encriPass
            await newUser.save()
            return newUser
        }
    }
}