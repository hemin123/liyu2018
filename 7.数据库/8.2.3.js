

const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  // author:{type:mongoose.Schema.Types.ObjectId},
  author: String,
  title:String,
  content:String
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;