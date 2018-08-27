/*
* @Author: TomChen
* @Date:   2018-08-04 17:14:00
* @Last Modified by:   Tom
* @Last Modified time: 2018-08-06 14:40:00
*/
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
    	type:String
    },
    password:{
    	type:String
    },
    isAdmin:{
      type:Boolean,
      default:true//默认是普通用户
    },  
    phone:{
      type:String,
    },  
    email:{
      type:String,
    } 
  },{ 
   timestamps:true//第二个参数

});


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;