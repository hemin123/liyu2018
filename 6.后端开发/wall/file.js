//添加 读 更改删除
/*
	const fs = require('fs');
	const uuidv1 = require('uuid/v1');
	const filePath ='./data.json';


	let add = (id,name,callback)=>{
		fs.readFile(filePath,(err,data)=>{
			if (!err) {
				let obj =JSON.parse(data);
				obj.push({
					'id':id,
					'name':name
				})
				console.log(obj);
				let str = JSON.stringify(obj);
				fs.writeFile(filePath,str,(err)=>{
					if (!err) {
						console.log('data');
					}else{
						callback(err);
					}

				 })
			}else{
				console.log('err');
			}	
		})
	 
	}


	let get =(callback)=>{
		fs.readFile(filePath,(err,data)=>{
			if (!err) {
				let obj =JSON.parse(data);
				
				callback(null,obj);
			}else{
				console.log(err);
			}
		
		})
	}


	let deletes = (id,callback)=>{
		fs.readFile(filePath,(err,data)=>{
				if (!err) {
					let obj =JSON.parse(data);

					let newObj = obj.filter((val)=>{
						return val['id'] != id
					});
					let result = JSON.stringify(newObj);

					console.log(result);
					fs.writeFile(filePath,result,(data,err)=>{
						if (!err) {
							console.log('data');
						}else{
							callback(err);
						}

					 })


				}else{
					callback(err);
				}
		})
	}*/
	/*obj.filter((val)=>{

	})*/


	// deletes('1',(data,err)=>{
	// 	if (!err) {
	// 		console.log(data);
	// 	}else{
	// 		console.log(err);
	// 	}
    //})


const fs = require('fs');
const uuidv1 = require('uuid/v1');
 
const filePath = './data.json';
 
let add = (options,callback)=>{
    fs.readFile(filePath,(err,data)=>{
        if(!err){
            let obj = JSON.parse(data);
            options.id = uuidv1();
            obj.push(options);
            let str = JSON.stringify(obj);
 
            fs.writeFile(filePath,str,(err)=>{
                if(!err){
                    callback(null,options);
                }else{
                    callback(err);
                }
            })
 
        }else{
            callback(err);
        }
    })
}
 
let get = (callback)=>{
    fs.readFile(filePath,(err,data)=>{
        if(!err){
            let obj = JSON.parse(data);
            callback(null,obj);
        }else{
            callback(err);
        }
    });
}
 
let remove = (id,callback)=>{
    fs.readFile(filePath,(err,data)=>{
        if(!err){
            let obj = JSON.parse(data);
            let newObj = obj.filter((val)=>{
                return val['id'] != id
            });
            let str = JSON.stringify(newObj);
            fs.writeFile(filePath,str,(err)=>{
                if(!err){
                    callback(null,newObj);
                }else{
                    callback(err);
                }
            })
         
        }else{
            callback(err);
        }
    });
}
 
module.exports = {
    get:get,
    add:add,
    remove:remove
}