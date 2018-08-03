
// getting-started.js
const mongoose = require('mongoose');
const UserModel = require('./8.2.2user.js');
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
	UserModel.insertMany({ 
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
	});


});