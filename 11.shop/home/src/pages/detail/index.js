

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

	},
	init:function(){
		this.onload();
		this.loadProductDetail();
	},
	onload:function(){
		if (this.params.productId) {
			this.loadProductDetail();
		}
	},
	bindEvent:function(){
		var _this =this;
		
	},
	loadProductDetail:function(){
		_product.getProductDetail({productId:this.params.productId},function(product){
			console.log(product);
			if (product.images) {
				product.images=product.images.split(',');
			}
		},function(msg){
			_util.showErrorMsg(msg)
		})
	}
}

$(function(){
	page.init();
})
