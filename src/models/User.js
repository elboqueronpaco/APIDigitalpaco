import { Schemam, model, Schema } from 'mongoose'

const UserSchema =  new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        min: '1920-01-01',
        max: new Date()
    },
    rol: {
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    }, 
    active: {
        type: Boolean,
        default: false
    }
})

export default model('User', UserSchema)