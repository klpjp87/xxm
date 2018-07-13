import Ids from '../models/ids'

export default class BaseComponent {
	constructor(){
		
	}
	//获取id列表
	async getId(type){
		try{
			const idData = await Ids.findOne();
			if(typeof idData[type] == "undefined"){
				idData[type] = 0;
			}
			idData[type] ++ ;
			await idData.save();
			return idData[type]
		}catch(err){
			console.log('获取ID数据失败');
			throw new Error(err)
		}
	}
	//分页
	async modellimit(model,pageSize,currentPage,rule){
		try{
			let data = await model.find(rule).skip(pageSize*currentPage).limit(pageSize)
			return data
		}catch(err){
			console.log('获取数据失败');
			throw new Error(err)
		}		
	}
}