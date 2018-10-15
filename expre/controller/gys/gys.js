
'use strict'

import GysModel from '../../models/gys/gys.js'
import BaseComponent from '../../prototype/baseComponent.js';
class Gys extends BaseComponent{
    constructor(props){
		super()
		this.add = this.add.bind(this);
		this.limit = this.limit.bind(this);
	}
    async limit(req,res,next){
		try{
			let count = await GysModel.count()
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
			let data = await this.modellimit(GysModel,pageSize,currentPage,{})
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
			let gys = req.body.gys
			let findgys = await GysModel.find({name:gys.name})
			if(findgys.length > 0 ){
				throw new Error( '已有改用户名' );
			}
			let gys_id = await this.getId("Gys_id")
			let newgys = {
				id:gys_id,
				name:gys.name,
				address:gys.address,
				phone:gys.phone,
				mobilephone:gys.mobilephone,
				Fax:gys.Fax,
			}
			await GysModel.create(newgys)
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
			let gys = req.body.gys
			await GysModel.findOneAndUpdate({id:gys.id},{$set:gys})
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
			let result = await GysModel.remove({id:id})
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
export default new Gys()