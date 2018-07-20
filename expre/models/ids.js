'use strict';

import mongoose from 'mongoose'

const idsSchema = new mongoose.Schema({
	Reducer_id: Number,
	Shop_id: Number,
	Supplier_id:Number,
	Material_id:Number,
});

const Ids = mongoose.model('Ids', idsSchema);

Ids.findOne((err, data) => {
	if (!data) {
		console.log("idsone");
		const newIds = new Ids({
			Reducer_id: 0,
			Shop_id:0
		});
		newIds.save();
	}
})
export default Ids