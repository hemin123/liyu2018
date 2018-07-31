// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error', (err)=>{
	throw err;
});
db.once('open', ()=> {
	console.log("connected");
  // we're connected!
	var kittySchema = new mongoose.Schema({
	  name: String,
	  age:Number,
	  sex:String
	});

	var Kitten = mongoose.model('Kitten', kittySchema);
	var silence = new Kitten({ name: 'Silence',age:18,sex:"boy" });
	console.log(silence); // 'Silence'
	silence.save((err,doc)=>{
		if(!err){
			console.log(doc.toString());
		}else{
			console.log(err)
		}
	})
	Kitten.find(function(){

	})
});