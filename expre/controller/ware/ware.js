
'use strict'

import WareModel from '../../models/ware/ware.js'
import BaseComponent from '../../prototype/baseComponent.js';
class Ware extends BaseComponent{
    constructor(props){
		super()
		this.add = this.add.bind(this);
		this.limit = this.limit.bind(this);
	}
    async limit(req,res,next){
		try{
			let count = await WareModel.count()
			if (count <= 0) {
				res.send(   
					{
						status:1,
						data:[],
						count:count,
						message:""
					} 
				)  				
			}
			let pageSize = req.body.pageSize 
			let currentPage = req.body.currentPage - 1
			if(pageSize * currentPage > count){
				throw new Error( '传入的页数不对' );
			}
			let data = await this.modellimit(WareModel,pageSize,currentPage,{})
			res.send(   
				{
					status:1,
					data:data,
					count:count,
					message:""
				} 
			)  
		}catch(err){
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: err.message
			})			
		}     
    }
    async add(req,res,next){
		try{
			let ware = req.body.ware
			let findware = await WareModel.find({name:ware.name})
			if(findware.length > 0 ){
				throw new Error( '已有改用户名' );
			}
			let ware_id = await this.getId("Ware_id")
			let newware = {
				id:ware_id,
				name:ware.name,
                purchase_price:ware.purchase_price,
                price:ware.price,
                custom_id:ware.custom_id,
                company:ware.company
			}
			await WareModel.create(newware)
			res.send({
				status: 1,
				message: "SUCCESS"
			})
			return						
		}catch(err){
			console.log(err.message, err);
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: err.message
			})
			return
		}
	}
	async updateone(req,res,next){
		try{
			let ware = req.body.ware
			await WareModel.findOneAndUpdate({id:ware.id},{$set:ware})
			res.send({
				status: 1,
			})
			return
		}catch(err){
			console.log(err.message, err);
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: err.message
			})
			return
		}
	}
	async deletebyid(req,res,next){
		try{
			let id = req.body.id
			let result = await WareModel.remove({id:id})
			if(result.ok=1 ){
				if(result.n <= 0 ) throw new Error('删除失败：这条数据可能已被删除')
				res.send({
					status: 1,
				})
			}else{
				throw new Error( '删除失败' );
			}
			return
		}catch(err){
			console.log(err.message, err);
			res.send({
				status: 0,
				type: 'ERROR_PARAMS',
				message: err.message
			})
			return
		}
	}
}
export default new ware()