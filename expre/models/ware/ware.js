'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
//供应商
const WareSchema = new Schema({
    id:{type:Number,isRequired: true},
    name:{type:String,isRequired: true},//商品名称
    purchase_price:{type: Number, isRequired: true},//进货价
    price:{type: Number,},//预售价
    custom_id:{type:Number,isRequired: true},//供应商id
    company:{type:String},//单位
})
WareSchema.index({id:1});//索引

const Reducer = mongoose.model('Gys', WareSchema);

export default Reducer