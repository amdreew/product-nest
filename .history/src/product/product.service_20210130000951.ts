import { Schema } from 'mongoose'

export default new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 120,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        maxlength: 120,
        minlength: 3 
    },
    imageURL: {
        type: String,
        default: 'NO-IMAGE',
        minlength: 3
    },
    price: {
        type: Number,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }

})
