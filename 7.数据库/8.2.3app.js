
// getting-started.js
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{});

var db = mongoose.connection;

db.on('error', (err)=>{
	throw err
});
db.once('open', ()=> {
	console.log("db connecnted");

	var Kitten = mongoose.model('Kitten', kittySchema);

BlogModel.insert({})


});