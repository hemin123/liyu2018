
// getting-started.js
const mongoose = require('mongoose');
const UserModel = require('./8.3.1user.js');
const blogModel = require('./8.2.3.js');
const  moment =require('moment');


mongoose.connect('mongodb://localhost/test2',{});

const db = mongoose.connection;

db.on('error', (err)=>{
	throw err
});
db.once('open', ()=> {
	console.log("db connecnted");

	blogModel.findOne({title:'jj'} ,(err,blog)=>{
		if (!err) {
			console.log(blog);
			console.log(blog.author);
			UserModel.findById(blog.auther,(err,user)=>{
				if (!err) {
					console.log(user);

				}

			})
		}else{
			console.log(err);
		}
	})

	blogModel
	.findOne('tiele:hhhhh')
	.populate('auther','name -_id age')
	.then((doc)=>{
		if(!err){
			console.log(doc);
		}
	})



})