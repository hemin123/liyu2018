/*
* @Author: TomChen
* @Date:   2018-07-27 10:29:02
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-27 10:34:03
*/
const fs = require('fs');
const uuidv1 = require('uuid/v1');

const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'wish1';

let getDB = (callback)=>{
	MongoClient.connect(url,{ useNewUrlParser: true}, function(err, client) {
 
	  console.log("Connected successfully to server");
	  //如果没有创建返回db对象
	  const db = client.db(dbName);

	  callback(db,client)
})
}

const filePath = './data/data.json';

	function getRandom(min,max) {	
		return Math.round(min + (max-min)*Math.random());
	}
	const colorarr =['#f00','#ff0','red','#ff6700','pink'];

let add = (options,callback)=>{
/*	fs.readFile(filePath,(err,data)=>{
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
	})*/
	getDB((db,client)=>{
		const col= db.collection('wish');
		options._id=uuidv1();
		options.color = colorarr[getRandom(0,colorarr.length-1)];
		col.insertOne(options,(err,result)=>{
			if (!err) {
				callback(null,options);
			}else{
				callback(err);
			}
			client.close();
		})
	})
}

let get = (callback)=>{
	/*fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			callback(null,obj);
		}else{
			callback(err);
		}
	});*/
	getDB((db,client)=>{
		const col=db.collection('wish');
		col.find({}).toArray(function(err,docs){
			if (!err) {
				callback(null,docs)
			}else{
				callback(err);
			}
			client.close();
		})
	})
	
}

let remove = (id,callback)=>{
	/*fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			let newObj = obj.filter((val)=>{
				return val['id'] != id
			});
			let str = JSON.stringify(newObj);
			fs.writeFile(filePath,str,(err)=>{
				if(!err){
					callback(null,'sucess');
				}else{
					callback(err);
				}
			})
		
		}else{
			callback(err);
		}
	});*/
	getDB((db,client)=>{
		const col = db.collection('wish');
		col.deleteOne({_id:id},function(err,docs){
			if (!err) {
				callback(null);
			}else{
				callback(err);
			}
			client.close();
		});
	})

	//id需要改两个文件
}

module.exports = {
	get:get,
	add:add,
	remove:remove
}
