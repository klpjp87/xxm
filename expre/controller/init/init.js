
'use strict'

import BaseComponent from '../../prototype/baseComponent.js';
import {indexMenu} from '../../config/initdata'

var jwt = require('jsonwebtoken');
class Init extends BaseComponent{
    constructor(props){
        super()
    }
    async getindexmenu(req,res,next){
        if(indexMenu){
            res.send(
                {
                    status:1,
                    data:indexMenu,
                }
            )
        }else{
            res.send(
                {
                    status:0,
                    data:"未找到菜单，请配置"
                }
            )
        }
    }
    async gettoken(req,res,next){
        var key = 'teken' //加密token 检验时用
        res.json({
            result: 'ok',
            token: jwt.sign({
                name: "BinMaing",
                data: "============="
            }, key, {
                    expiresIn: 60000 * 1
                })
        })    
    }
}
export default new Init()