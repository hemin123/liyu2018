
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')

require('./index.css')
require('node_modules/font-awesome/css/font-awesome.min.css');

var _util = require('util');
var _shipping = require('service/shipping');
var _order = require('service/order');

var _modal = require('./modal.js');

var shippingTpl = require('./shipping.tpl');
var productTpl = require('./product.tpl');

var page = {

	init:function(){
		this.$shippingBox=$('.shipping-box');
		this.onload();
		this.bindEvent();
	},
	onload:function(){
		this.loadShippingList();
		this.loadProductList();
	},
	bindEvent:function(){
		var _this = this;
		//
		this.$shippingBox.on('click','.shipping-add',function(){
			_modal.show({
				success:_this.renderShipping
			})
		})
		//delete
		this.$shippingBox.on('click','.shipping-delete',function(){
			var $this = $(this);
			var shippingId=$this.parents('.shipping-item').data('shipping-id');
			if (_util.confirm("你確定要刪除地址嗎？")) {
				_shipping.deleteShipping({shippingId:shippingId},function(shippings){
					_this.renderShipping(shippings);
				},function(msg){
					_util.showErrorMsg(msg);
				});	
			}
			

		});
		

	},
	//進去時候執行
	loadShippingList:function(){
		var _this = this;
		_shipping.getShippingList(function(shippings){
			_this.renderShipping();
		},function(msg){
			_this.$shippingBox.html('<p class="empty-message">獲取失敗</p>')
		});
	
		
	},
	renderShipping:function(shippings){

		var html = _util.render(shippingTpl,{
			shippings:shippings
		});
		$('.shipping-box').html(html);
		
	},
	loadProductList:function(){
		var _this = this;
		_order.getOrderProductList(function(result){
			console.log(result);
			//购物车数据适配
			result.cartList.forEach(item=>{
				if(item.product.images){
					item.product.image = item.product.images.split(',')[0];
				}else{
					item.product.image = require('images/product-default.jpg');
				}
			})
			result.notEmpty = !!result.cartList.length;

			var html = _util.render(productTpl,result);
			$('.product-box').html(html);	
		},function(){
			$('.product-box').html('<p class="empty-message">获取商品列表哪里错了，刷新试试看</p>')
		})

	},
	
}

$(function(){
	page.init();
})




