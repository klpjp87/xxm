'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    id:{type:Number,isRequired: true},
    name:{type:String,isRequired: true},
    adress:{type:String},
    mphone:{type: Number},
    tphone:{type: Number},
    fax:{type: String},
    Material:[{
        id:{type:Number,isRequired: true},
        name:{type:String,isRequired: true},
        price:{type: Number, isRequired: true}
    }]
})
SupplierSchema.index({id:1});//索引

const Supplier = mongoose.model('Supplier', SupplierSchema);

export default Supplier