
'use strict'

import CustomModel from '../../models/custom/custom.js'
import BaseComponent from '../../prototype/baseComponent.js';
class custom extends BaseComponent{
    constructor(props){
		super()
		this.add = this.add.bind(this);
		this.limit = this.limit.bind(this);
	}
    async limit(req,res,next){
		try{
			let count = await CustomModel.count()
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
			let data = await this.modellimit(CustomModel,pageSize,currentPage,{})
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
			let custom = req.body.custom
			let findcustom = await CustomModel.find({name:custom.name})
			if(findcustom.length > 0 ){
				throw new Error( '已有改用户名' );
			}
			let custom_id = await this.getId("Custom_id")
			let newcustom = {
				id:custom_id,
				name:custom.name,
				address:custom.address,
				phone:custom.phone,
				mobilephone:custom.mobilephone,
				Fax:custom.Fax,
			}
			await CustomModel.create(newcustom)
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
			let custom = req.body.custom
			await CustomModel.findOneAndUpdate({id:custom.id},{$set:custom})
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
			console.log(id)
			let result = await CustomModel.remove({id:id})
			console.log(result)
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
export default new custom()