
'use strict'


import BaseComponent from '../../prototype/baseComponent.js';
class Gys extends BaseComponent{
    constructor(props){
        super()
    }
    async add(req,res,next){
		try{
			let gys = req.body.gys
			let gys_id = await this.getId("Gys_id")
			let newgys = {
				id:gys_id,
				name:gys.name,
				address:gys.address,
				phone:gys.phone,
				mobilephone:gys.mobilephone,
				Fax:gsy.Fax,
			}
			await SupplierModel.create(Supplier)
			res.send({
				status: 1,
				message: ""
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
}
export default new Gys()