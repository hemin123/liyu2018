

require('pages/common/logo')
require('pages/common/footer')
require('./index.css')

require('pages/common/nav')

require('pages/common/search')
require('pages/common/side')
require('node_modules/font-awesome/css/font-awesome.min.css');

var _util = require('util');
var _product = require('service/product');
var _cart = require('service/cart')
var tpl = require('./index.tpl');

var page={
	params:{
		productId: _util.getParamFromUrl('productId')|| '',

	},
	init:function(){
		this.onload();
		this.bindEvent();
		this.loadProductDetail();
	},
	onload:function(){
		if (this.params.productId) {
			this.loadProductDetail();
		}
	},
	bindEvent:function(){
		var _this =this;
		//切换图片
		$('.detail-box').on('mouseenter','.product-small-img-item',function(){
			var $this = $(this);
			$this.addClass('active')
			.siblings('.product-small-img-item').removeClass('active');
			var imgSrc =$this.find('img').attr('src');
			$('.product-main-img  img').attr('src',imgSrc);
		}),
		//购买数量处理
		$('.detail-box').on('click','.count-btn',function(){
			var $this = $(this);
			var $input = $('.count-input');
			var stock = _this.stock;
			var min = 1;
			var current = parseInt($input.val());
			//增加
			if($this.hasClass('plus')){
				$input.val(current >= stock ? stock : current + 1)
			}else if($this.hasClass('minus')){
				$input.val(current > min ? current - 1 : min);
			}
			

		})

		$('.detail-box').on('click','.add-cart-btn',function(){
			_cart.addCart({
				productId:_this.params.productId,
				count:$('.count-input').val()	
			},function(){
				// console.log(data);
				window.location.href = './result.html?type=addCart'
			},function(msg){
				_util.showErrorMsg(msg)
			})
		})
		
	},
	loadProductDetail:function(){
		var _this =this;
		_product.getProductDetail({productId:this.params.productId},function(product){
			console.log(product);
			if (product) {
				if (product.images) {
					product.images=product.images.split(',');
				}else{
					product.images=[require('images/product-default.jpg')]
				}
				product.mainImg=product.images[0];
				//缓存库存
				_this.stock = product.stock;

				var html=_util.render(tpl,product);
				$('.detail-box').html(html);
			}else{
				$('.detail-box').html('<p>找不到</p>')
			}
			

		},function(msg){
			_util.showErrorMsg(msg)
		})
	}
}

$(function(){
	page.init();
})
