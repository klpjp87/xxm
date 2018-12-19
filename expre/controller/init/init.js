
'use strict'
var path = require("path");
import BaseComponent from '../../prototype/baseComponent.js';
import {indexMenu} from '../../config/initdata'
//import {client} from path.resolve(__dirname)+'/app.js'
var app = require('../../app.js');
import dtime from 'time-formater'
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
        const {user_name} = req.body.custom
        
        const user_token = jwt.sign({
                    name: user_name,
                    date: new Date().toLocaleString()}, 
                    key, {expiresIn: 60000 * 1})
        await app.client.set(user_name,JSON.stringify(user_token) , 'EX', 100)           
        res.json({
            result: 'ok',
            token: user_token
        })    
    }
    async getdict(req,res,next){

    }
}
export default new Init()