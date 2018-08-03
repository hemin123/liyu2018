
// getting-started.js
var mongoose = require('mongoose');
var BlogModel = require('./8.2.3.js');

mongoose.connect('mongodb://localhost/test2',{});

var db = mongoose.connection;

db.on('error', (err)=>{
	throw err
});
db.once('open', ()=> {
	console.log("db connecnted");

	

BlogModel.insertMany({ 
	author: "mi",
  	title:'hhhh',
  	content:"内容2"},(err,result)=>{
	if (!err) {
		console.log(result);
	}else{
		console.log(err);
	}
})


});