
//在哪执行

require('./index.css')

var _user = require('service/user');
var _cart = require('service/cart');
var _util = require('util');

var nav ={
	init:function(){
		this.bindEvent();
		this.loadUserInfo();
		this.loadUsername();
		this.loadCartCount();
		return this;
	},
	bindEvent:function(){
		$('#logout').on('click',function(){
			// alert('aa');
			_user.logout(function(result){
				window.location.reload();
			},function(message){
				_util.showErrorMsg(message)
			});
		})
	},
	loadUserInfo:function(){
		_user.username(function(userInfo){
			// console.log(userInfo);
			$('.not-login').hide();
			$('.login')
			.show()
			.find('.username')
			.text(userInfo.username)
		})
	},
	loadUsername:function(){
		// _user.getUsername(function(user){
		// 	$('.not-login').hide();
		// 	$('.login')
		// 	.show()
		// 	.find('.username')
		// 	.text(user.username)
		// })
	},
	loadCartCount:function(){
		_cart.getCartCount(function(count){
			$('.nav-list .cart-num').text(count || 0)
		},function(msg){
			$('.nav-list .cat-num').text(0)
		})

	}
}

module.exports =nav.init() ;



