
require('./index.css')


// $('body').html('hhhhhh');
var _util = require('util');

var page ={
	init:function(){
		this.bindEvent();
		this.onload();
	},
	onload:function(){
		var keyword =_util.getParamFromUrl('keyword');

		if (keyword){
			$('#search-input').val(keyword);
		}

		// var keyword =
		// $('search-input').val(keyword);
	},
	bindEvent:function(){
		var _this =this;
		console.log("url");		
		$('#search-btn').on('click',function(){
			console.log('jj');
			_this.submit();
		});
		$('#search-input').on('keyup',function(e){
			if (e.keyCode==13) {
				_this.submit();
			}
		})
	},
	submit:function(){
		var keyword = $.trim($('#search-input').val());
		console.log("hhh");
		window.location.href="./list.html?keyword="+keyword		
		/*if (keyword) {
			window.location.href="./list.html?keyword="+keyword
		}else{
			_util.goHome();
		}*/

		
	},
	
}

$(function(){
	page.init();
})

