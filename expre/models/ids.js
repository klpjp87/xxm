'use strict';

import mongoose from 'mongoose'

const idsSchema = new mongoose.Schema({
	admin_id: Number,
	Reducer_id: Number,
	Shop_id: Number,
	Supplier_id:Number,
	Material_id:Number,
	Gys_id:Number,
	Custom_id:Number,
	Ware_id:Number,
});

const Ids = mongoose.model('Ids', idsSchema);

Ids.findOne((err, data) => {
	if (!data) {
		console.log("idsone");
		const newIds = new Ids({
			Reducer_id: 0,
			Shop_id:0,
			Supplier_id:0,
			Material_id:0,
			Gys_id:0,
			Custom_id:0,
			WareSchema_id:0,
			Ware_id:0,
			admin_id:0,
		});
		newIds.save();
	}
})
export default Ids