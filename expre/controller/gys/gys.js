
'use strict'

import SupplierModel from '../../models/Supplier/Supplier.js'
import BaseComponent from '../../prototype/baseComponent.js';
import formidable from 'formidable'
class Gys extends BaseComponent{
    constructor(props){
        super()
    }
    async add(req,res,next){
        const form = new formidable.IncomingForm();
        form.parse(req, async (err, fields, files) => {
			try{
				if (!fields.name) {
					throw new Error('必须填写供应商名称');
				}
			}catch(err){
				console.log(err.message, err);
				res.send({
					status: 0,
					type: 'ERROR_PARAMS',
					message: err.message
				})
				return
			}
        })
    }
}
export default new Supplier()