/*
* @Author: TomChen
* @Date:   2018-08-04 17:14:00
* @Last Modified by:   Tom
* @Last Modified time: 2018-08-06 14:40:00
*/
const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name:{
  	type:String
  },
  path:{
  	type:String
  },
  
});


const ResourceModel = mongoose.model('Resource', ResourceSchema);

module.exports = ResourceModel;