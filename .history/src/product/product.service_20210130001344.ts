import { Injectable } from '@nestjs/common';
import { Schema } from 'mongoose';

@Injectable()
export class ProductService {}

export const ProductSchema = new Schema({
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
