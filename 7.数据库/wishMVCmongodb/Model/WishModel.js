
const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';



  //集合
 const study = db.collection('study2');

 
 function getDB(callback){
	// Use connect method to connect to the server
	MongoClient.connect(url,{ useNewUrlParser: true}, function(err, client) {
	 
	  console.log("Connected successfully to server");
	  //如果没有创建返回db对象
	  const db = client.db(dbName);

	  callback(db,client);

 }  



const uuidv1 = require('uuid/v1');

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

		   study.insertMany(str,function(err,result){
		  	if (!err) {
		  		console.log(result);
		  	}else{
		  		console.log(err);
		  	}
			}

		}else{
			callback(err);
		}
	})
	getDB(db,client)=>{
		const col = db.collection('wish');
		options._id = uuidv1();
		options.color=colorarr[getRandom(0,colorarr.length-1)];
		col.insertOne(options,function(err,data){
			if(!err){
				callback(null,options);
			}else{
				callback(err);
			}
			client.close();
		})

	}
}

let get = (callback)=>{

 /* study.find({}).toArray(function(err,data){
  	if (!err) {
  		console.log(result);
  		let obj = JSON.parse(data);
		callback(null,obj);
  	}else{
  		console.log(err);
  	}
  })*/
  getDB((db,client)=>{
  	const col = db.collection('wish');
  	col.find({}).toArray(function(err,docs){
  		if (!err) {
  			// console.log(docs);
  			callback(docs);
  		}else{
  			// console.log('err::',err);
  			callback(err);
  		}
  		client.close();
  	})
  })

}

let remove = (id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if(!err){
			let obj = JSON.parse(data);
			let newObj = obj.filter((val)=>{
				return val['id'] != id
			});
			let str = JSON.stringify(newObj);

		  study.deleteOne(str,function(err,data){
		  	if (!err) {
		  		console.log(data);
		  	}else{
		  		console.log(err);
		  	}
		  });

		
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
