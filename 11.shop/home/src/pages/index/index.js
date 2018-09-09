
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
var carouseltpl =require('./carousel.tpl');
var floortpl =require('./floor.tpl');

var page ={
	keywords:[
		{item:[{name:'手机'},{name:'电脑'}]},
		{item:[{name:'手机'},{name:'电脑'}]},
		{item:[{name:'手机'},{name:'电脑'}]},
		{item:[{name:'手机'},{name:'电脑'}]}
	],
	carousel:[
		{categoryId:'1111',image:require('images/carousel/1.jpg')},
		{categoryId:'2222',image:require('images/carousel/2.jpg')},
		{categoryId:'3333',image:require('images/carousel/3.jpg')}
	],
	floor:[
		{
			title:"f1 家电",
			item:[
					{ image:require('images/floor/floor1-1.jpg'),text:'冰箱',categoryId:'111'},
					{ image:require('images/floor/floor1-1.jpg'),text:'冰箱',categoryId:'222'},
					{ image:require('images/floor/floor1-2.jpg'),text:'冰箱',categoryId:'333'},
					{ image:require('images/floor/floor1-2.jpg'),text:'冰箱',categoryId:'333'},
					{ image:require('images/floor/floor1-2.jpg'),text:'冰箱',categoryId:'444'}
				]

		},	
		{
			title:"f1 家电",
			item:[
					{ image:require('images/floor/floor1-1.jpg'),text:'冰箱',categoryId:'111'},
					{ image:require('images/floor/floor1-1.jpg'),text:'冰箱',categoryId:'222'},
					{ image:require('images/floor/floor1-2.jpg'),text:'冰箱',categoryId:'333'},
					{ image:require('images/floor/floor1-2.jpg'),text:'冰箱',categoryId:'333'},
					{ image:require('images/floor/floor1-2.jpg'),text:'冰箱',categoryId:'444'}
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
		var html=_util.render(carouseltpl,{
			carousel:this.carousel
		})
		$('.carousel').html(html);

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
		var html =_util.render(floortpl,{
			floor:this.floor
		});
		$('.floor-wrap').html(html);
	}

}

$(function(){
	page.init();
})



