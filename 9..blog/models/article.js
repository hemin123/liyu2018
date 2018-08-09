/*const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
  category:{
    type：mongoose.Schema.Types.ObjectId,
  	ref:'Category'
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  }
  title:{
  	type:String,
  },
  intro:{
  	type:String,
  },
  content:{
    type:String,
  }
  click:{
  	type:Number,
    default:0
  },
   createAt:{
  	type:Date,
    default:Date.now
  },
});
const  ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;*/


const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category'
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },  
  title:{
    type:String,
  },
  intro:{
    type:String,
  },
  content:{
    type:String,
  }, 
  click:{
    type:Number,
    default:0
  },
  createdAt:{
    type:Date,
    default:Date.now
  }  
});


const ArticleModel = mongoose.model('Article', ArticleSchema);

module.exports = ArticleModel;