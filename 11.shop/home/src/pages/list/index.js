

require('pages/common/logo')
require('pages/common/footer')
require('./index.css')

require('pages/common/nav')

require('pages/common/search')
require('pages/common/side')
require('node_modules/font-awesome/css/font-awesome.min.css');

var _util = require('util');

var page={
	init:function(){
		this.bindEvent();
		this.loadProduct();
	},
	bindEvent:function(){

		$('.sort-item').on('click',function(){
			var $this =$(this);
			if ($this.hasClass('default')) {
				alert("2");
				// if ($this.) {}
			}else if ($this.hasClass('price')) {
				alert("2");
				$this.addClass('active')
				.siblings('.sort-item')
				.removeClass('active')
			}
		})
	},
	loadProduct:function(){

	}
}

$(function(){
	page.init();
})
