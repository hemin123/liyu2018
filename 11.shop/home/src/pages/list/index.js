

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
	listParams:{
		keyword:_util.getParamFromUrl('keyword')||'',
		categoryId:_util.getParamFromUrl('categoryId')||'',
		page:_util.getParamFromUrl('page')||1,
		orderBy:_util.getParamFromUrl('orderBy')||'default'
	},
	init:function(){
		this.bindEvent();
		this.loadProduct();
	},
	bindEvent:function(){
		var _this =this;
		$('.sort-item').on('click',function(){
			var $this =$(this);
			if ($this.hasClass('default')) {
				// alert("2");
				if ($this.hasClass('active')) {
				 	return ;
				}
				 $this.addClass('active')
				 .siblings('.sort-item')//兄弟元素
				 .removeClass('active');
				 _this.listParams.orderBy='default'
			//价格
			}else if ($this.hasClass('price')) {
				// alert("2");
				$this.addClass('active')
				.siblings('.sort-item')
				.removeClass('active');
				if (!$this.hasClass('asc')) {
					$this.addClass('asc')
					.removeClass('desc');
					 _this.listParams.orderBy='price_asc';
				}else{
					$this.addClass('desc')
					.removeClass('asc');
					_this.listParams.orderBy='price_desc';
				}
			}
			_this.loadProduct();
		})
	},
	loadProduct:function(){
		this.listParams.categoryId
		?(delete this.listParams.keyword)
		:(delete this.listParams.categoryId);
		console.log(this.listParams);
		_product.getProductList(this.listParams ,function(result){
			console.log(result);
			var list =result.list.map(function(product){
				if (product.images) {
					product.image=product.images.split(',')[0];
				}else{
					product.image=require('images/product-default.jpg')
				}
				return product
			})
			var html=_util.render(tpl,{
				list:result.list
			});
			$('.product-list-box').html(html);
		},function(){

		})
	}
}

$(function(){
	page.init();
})
