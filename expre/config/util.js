import {getAsync,client} from '../app.js'
import DictModel from '../models/dict/dict.js'
export const getModel = async (ModelName,ModelCode,ModelChildCode) =>{
    //字典缓存中查找
    let res = await getAsync(ModelName)
    // if(res){
    //     return res
    // }
    //查出来再存缓存里
    //字典里查
    //if(ModelName.length > 4 && ModelName.substring(0,4).toUpperCase()  == 'INIT'){
        if(ModelCode){
            if(ModelChildCode){
                let s = {"child.code.":ModelChildCode}
                res = await DictModel.find({"child.code":ModelChildCode,"code":ModelCode},{"child.$":1})

                if(res[0] && res[0].child){
                    client.set(ModelName,JSON.stringify(res[0].child[0]),'EX',10000)
                    return res[0].child[0]
                }
                return undefined
            }
            res = await DictModel.find({code:ModelCode})
            if(res[0] && res[0].child){
                client.set(ModelName,JSON.stringify(res[0].child),'EX',10000)
            }            
            return res[0]
        }
       
        // if(res.child){
        //     client.set(ModelName,JSON.stringify(res.child),'EX',10000)
        // }else{
        //     res = await DictModel.find({$or:[{"child.code":ModelCode},{"child.name":ModelName}]},{"child.$":1})
        //     if(res.child && res.child.child){
        //         client.set(ModelName,JSON.stringify(res.child.child),'EX',10000)
        //     }
        // }
        return undefined
    //}
}
