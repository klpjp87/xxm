'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const DictSchema = new Schema({
    code:{type:Number,isRequired: true},
    name:{type:String,isRequired: true},
    child:[
        {
            code:{type:Number},
            name:{type:String},
            child:[
                {
                    code:{type:Number},
                    name:{type:String}, 
                }
            ]
        }
    ]
})
DictSchema.index({id:1});//索引

const Reducer = mongoose.model('Dict', DictSchema);

export default Reducer