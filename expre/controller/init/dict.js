'use strict'
var path = require("path");
import BaseComponent from '../../prototype/baseComponent.js';
import {getModel} from '../../config/util.js';
class Dict extends BaseComponent{
    constructor(props){
        super()
    }
    //
    async getdict(req,res,next){
        let dictname = req.body.dictname
        let dictcode = req.body.dictcode
        let childcode = req.body.childcode
        let dictres = await getModel(dictname,dictcode,childcode)
        console.log(JSON.stringify(dictres))
        if(dictres){
            res.send({
                status: 1,
                dict: dictres,
                message: '获取字典成功',
            })   
            return        
        }
        res.send({
            status: 0,
            type: 'GET_ERROR_PARAM',
            message: '未找到字典',
        })
        return
    }
}
export default new Dict()