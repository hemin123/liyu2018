
// getting-started.js
const mongoose = require('mongoose');
const UserModel = require('./8.3.1user.js');
const  moment =require('moment');

mongoose.connect('mongodb://localhost/test2',{});

const db = mongoose.connection;

db.on('error', (err)=>{
	throw err
});
db.once('open', ()=> {
	console.log("db connecnted");

	//var Kitten = mongoose.model('Kitten', kittySchema);
	//BlogModel.insert({})
	//增加
	/*UserModel.insertMany({ 
		name: "Tom",
		age:'18',
		sex:"female",
		locked:false,
		friends:["Amy","Andy"]
	},(err,docs)=>{
		if(!err){
			console.log(docs)
		}else{
			console.log('insert error::',err)
		}
	});*/

	UserModel.findbyage('18',(err,data)=>{
		if (!err) {
			console.log(data);
		}else{
			console.log(err);
		}
		
	})


});