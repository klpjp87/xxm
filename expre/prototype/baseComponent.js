import Ids from '../models/ids'

export default class BaseComponent {
	constructor(){
		
	}
	//发送请求
	async fetch(url = '', data = {}, type = 'GET', resType = 'JSON'){
		type = type.toUpperCase();
		resType = resType.toUpperCase();
		if (type == 'GET') {
			let dataStr = ''; //数据拼接字符串
			Object.keys(data).forEach(key => {
				dataStr += key + '=' + data[key] + '&';
			})

			if (dataStr !== '') {
				dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
				url = url + '?' + dataStr;
			}
		}

		let requestConfig = {
			method: type,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		}

		if (type == 'POST') {
			Object.defineProperty(requestConfig, 'body', {
				value: JSON.stringify(data)
			})
		}
		let responseJson;
		try {
			const response = await fetch(url, requestConfig);
			if (resType === 'TEXT') {
				responseJson = await response.text();
			}else{
				responseJson = await response.json();
			}
		} catch (err) {
			console.log('获取http数据失败', err);
			throw new Error(err)
		}
		return responseJson
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