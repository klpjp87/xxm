'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ReducerSchema = new Schema({
    id:{type:Number,isRequired: true},
    name:{type:String,isRequired: true},
    price:{type: Number, isRequired: true},
})
ReducerSchema.index({id:1});//索引

const Reducer = mongoose.model('Reducer', ReducerSchema);

export default Reducer