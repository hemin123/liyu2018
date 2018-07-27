/*
* @Author: TomChen
* @Date:   2018-07-27 10:29:02
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-27 10:34:03
*/
const fs = require('fs');
const uuidv1 = require('uuid/v1');

const filePath = './data.json';

	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}
	const colorarr =['#f00','#ff0','red','#ff6700','pink'];

let add = (options,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			options.id = uuidv1();
			options.color=colorarr[getRandom(0,colorarr.length-1)];
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
					callback(null);
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
