

require('pages/common/logo')
require('pages/common/footer')
require('./index.css')

require('pages/common/nav')

require('pages/common/search')
require('pages/common/side')
require('node_modules/font-awesome/css/font-awesome.min.css');

var _util = require('util');
var _product = require('service/product');
var tpl = require('./index.tpl');

var page={
	params:{
		productId: _util.getParamFromUrl('productId')|| '',

	}
	init:function(){
		this.bindEvent();
		this.loadProductDetail();
	},
	bindEvent:function(){
		var _this =this;
		
	},
	loadProductDetail:function(){
		
	}
}

$(function(){
	page.init();
})
