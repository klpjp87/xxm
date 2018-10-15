'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
//供应商
const GysSchema = new Schema({
    id:{type:Number,isRequired: true},
    name:{type:String,isRequired: true},//姓名
    address:{type:String},//地址
    phone:{type:String},//电话
    mobilephone:{type:String},//手机
    Fax:{type:String},//传真
    wares:[//商品
        {
            id:{type:Number},
            name:{type:String}
        }
    ]
})
GysSchema.index({id:1});//索引

const Reducer = mongoose.model('Gys', GysSchema);

export default Reducer