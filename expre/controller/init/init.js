
'use strict'

import BaseComponent from '../../prototype/baseComponent.js';
import {indexMenu} from '../../config/initdata'
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
}
export default new Init()