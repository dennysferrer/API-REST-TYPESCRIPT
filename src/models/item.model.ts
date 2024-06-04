
import { Schema, Types, model, Model } from "mongoose";
import { CarInterface } from "../interfaces/car.interface";


const ItemSchema = new Schema<CarInterface>(
    {
        color: {
            type: String,
            required: true,
        },
        gas: {
            type: String,
            enum: ['gasoline', 'electric'],
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
); 

export const ItemModel = model('items', ItemSchema);   