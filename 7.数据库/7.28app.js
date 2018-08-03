const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url,{ useNewUrlParser: true}, function(err, client) {
 
  console.log("Connected successfully to server");
  //如果没有创建返回db对象
  const db = client.db(dbName);

  //集合
 const study = db.collection('study');

  //插入  增
/*   study.insertMany([{"Name":"wang2"},{"age":8}],function(err,result){
  	if (!err) {
  		console.log(result);
  	}else{
  		console.log(err);
  	}
  });*/
  //找   查
  study.find({}).toArray(function(err,result){
  	if (!err) {
  		console.log(result);
  	}else{
  		console.log(err);
  	}
  })

/*    study.find({Name:"wang1"}).toArray(function(err,result){
  	if (!err) {
  		console.log(result);
  	}else{
  		console.log(err);
  	}
  })*/

 //更新   改
/*  study.updateOne({age:"wang2"},{$set:{age:18}},function(err,data){
  	if (!err) {
  		// console.log(data);
  		console.log(data.result);
  	}else{
  		console.log(err);
  	}
  })*/
   study.update({ _id: "5b5fdb9c98815218e806ccf8"},{$set:{age:16}},function(err,data){
  	if (!err) {
  		// console.log(data);
  		console.log(data.result);
  	}else{
  		console.log(err);
  	}
  })

  //删除
/*  study.deleteOne({Name:"wang"},function(err,data){
  	if (!err) {
  		console.log(data);
  	}else{
  		console.log(err);
  	}
  });
*/

  study.find({}).toArray(function(err,result){
  	if (!err) {
  		console.log(result);
  	}else{
  		console.log(err);
  	}
  })

  client.close();
});
