
require('./index.css')
require('pages/common/footer')
require('pages/common/nav')
require('pages/common/side')
require('pages/common/search')
require('node_modules/font-awesome/css/font-awesome.min.css');
console.log("user-login");


var _util = require('util');
var _user = require('service/user');
var _side = require('pages/common/side');


var page ={
	init:function(){
		this.onload();
		
	},
	onload:function(){
		_side.render('user-center');
	}

}

$(function(){
	page.init();
})

