
require('./index.css');
require('pages/common/nav')
require('pages/common/footer')
require('pages/common/search')
require('pages/common/side')
require('node_modules/font-awesome/css/font-awesome.min.css');

console.log("index");


require('util/carousel');

var _util =require('util');

var keywordstpl =require('./keywords.tpl');

var page ={
	keywords:[
		{item:[{name:'手机'},{name:'电脑'}]},
		{item:[{name:'手机'},{name:'电脑'}]},
		{item:[{name:'手机'},{name:'电脑'}]},
		{item:[{name:'手机'},{name:'电脑'}]}
	],
	floor:[
		{
			floor:"f1 家电",
			item:[
					{ text:'冰箱',categoryId:'111',img:require('images/floor/floor1-1.jpg')},
					{ text:'冰箱',categoryId:'111',img:require('images/floor/floor1-1.jpg')}
				]

		}	
	],
	init:function(){
		this.loadKeywords();
		this.loadCarousel();
		this.loadFloor();
	},
	loadKeywords:function(){
		var html =_util.render(keywordstpl,{
			keywords:this.keywords
		});
		$('#keywords').html(html);
	},
	loadCarousel:function(){
		var $carousel = $('.carousel').unslider({
			keys:true,
			dots:true
		});
		$('.arrow').on('click',function(){
			let direction = $(this).hasClass('next') ?'next': 'prev';
			console.log("direction"+direction);
			$carousel.data('unslider')[direction]();
		})	
		
	},
	loadFloor:function(){
		
	}


}

$(function(){
	page.init();
})



