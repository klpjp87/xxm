
'use strict'

import ReducerModel from '../../models/Warehouse/Reducer.js'
import BaseComponent from '../../prototype/baseComponent.js';

class User extends BaseComponent{
    constructor(props){
        super()
        this.us = this.us.bind(this);
        this.save = this.save.bind(this);
        this.limit = this.limit.bind(this);
    }
    async limit(req,res,next){
        
        let pageSize = req.body.pageSize 
        let currentPage = req.body.currentPage - 1
        let data = await this.modellimit(ReducerModel,pageSize,currentPage,{})
        res.send(   
            {
                data:data,
                pageSize:pageSize,
                currentPage:currentPage
            } 
         )       
    }
    async count(req,res,next){
       let count = await ReducerModel.count()
       res.send(   
        {
            count:count,
        } 
     )         
    }
    async us(req,res,next){
        res.send(    
            await ReducerModel.findOne()
         )
        //res.render('index', { title: 'Express' });
    }
    async save(req,res,next){
        let warehouse = req.body.warehouse
        let s = await ReducerModel.find({name:warehouse.name})
        if(s.length > 0 ){
            res.send(    
                {
                    success:false,
                    error:"已有该商品名称"
                }        
            )    
            return 
        }
        try{
            warehouse.id = await this.getId("Reducer_id")
            await ReducerModel.create(req.body.warehouse)
            res.send(    
                {
                    success:true,
                    error:""
                }        
            )   
        }catch(err){
            res.send({
                success:false,
                error:"保存商品信息失败"
			})
			return
        }
    }
}

export default new User()