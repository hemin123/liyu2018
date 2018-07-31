
// getting-started.js
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{});

var db = mongoose.connection;

db.on('error', (err)=>{
	throw err
});
db.once('open', ()=> {
	console.log("db connecnted")
  // we're connected!
	  var kittySchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  sex:String
	});


	  var Kitten = mongoose.model('Kitten', kittySchema);

	  var silence = new Kitten({ name: 'Silence',age:44,sex:'male' });
	console.log(silence.name); // 'Silence'

});