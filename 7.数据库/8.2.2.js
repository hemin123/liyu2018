
// getting-started.js
var mongoose = require('mongoose');


  // we're connected!
	  var kittySchema = new mongoose.Schema({
	  name:{ type: String,
	  		maxlength:[15,"太长了"],
	  		minlength:[2,"太短了"]
	  },
	  age:{ type: Number,
	  		max:[55,"超出长度"],
	  		min:[2,"长度太短"],
	  },
	  sex:{ type:String,
	  		enum:["male","female"]},  //只能选这个
	  locked:{
	  	type:Boolean    //布尔值
	  },
	  // createdAt:{
	  // 	type:Date,
	  // 	default：Date.now
	  // },
	  friends:{
	  	type:Array
	  }


	  

	});

 	 const UserModel = mongoose.model('kitty',kittySchema);

 	 module.exports = UserModel;




// 	  var Kitten = mongoose.model('Kitten', kittySchema);
// scheria
// 	moment.js  