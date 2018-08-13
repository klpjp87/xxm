
'use strict'

import SupplierModel from '../../models/Supplier/Supplier.js'
import BaseComponent from '../../prototype/baseComponent.js';

class Supplier extends BaseComponent{
    constructor(props){
        super()
        this.add = this.add.bind(this);
    }
    async findByMaterialId(req,res,next){
        let Material_id = req.body.Material_id
        let s = await SupplierModel.findOne({"Material.id":Material_id})
        res.send(
            {
                data:s
            }
        )
    }
    async add(req,res,next){
        let Supplier_id = await this.getId("Supplier_id")
        let Material = []
        console.log(req.body.Material)
        for (var v of req.body.Material) {
            let Material_id = await this.getId("Material_id")
            Material.push({
                id:Material_id,
                name:v.name,
                price:v.price,
            })
          }
        let Supplier = {
            id:Supplier_id,
            name:req.body.name,
            adress:req.body.adress,
            mphone:req.body.mphone,
            tphone:req.body.tphone,
            fax:req.body.fax,
            Material:Material           
        }

        await SupplierModel.create(Supplier)
        res.send(    
            {
                success:true,
                error:""
            }        
        )   
    }
}
export default new Supplier()