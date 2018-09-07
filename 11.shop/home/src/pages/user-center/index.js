
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

var tpl = require('./index.tpl')

var page ={
	init:function(){
		this.onload();
		this.loadUserInfo();	
	},
	onload:function(){
		_side.render('user-center');
	},
	loadUserInfo:function(){
		_user.getUserInfo(function(userInfo){
			var html = _util.render(tpl,userInfo);
			$('.side-content').html(html)
		})
	}

}

$(function(){
	page.init();
})

