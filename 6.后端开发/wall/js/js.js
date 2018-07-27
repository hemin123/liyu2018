(function($){
	function getRandom(min,max){
		return Math.round(min+(max-min)*Math.random());
	}
   $('.wish').pep({  constrainTo: '.wall' });
	
   $wish = $('.wish');
   $wall = $('.wall');

   var wallWidth=parseInt($wall.css('width'));
   var wallHeight=parseInt($wall.css('height'));
   var wishWidth=parseInt($wish.css('width'));
   var wishHeight=parseInt($wish.css('height'));

	$('.wish').each(function(){
		 $(this).css({
		 	transform:'matrix(1,0,0,1,'+getRandom(0,wallWidth-wishWidth)+','+getRandom(0,wallHeight-wishHeight)+')'
		 });
	})
	$('.wish').hover(function(){
		console.log(this);
		$(this).css({
			zIndex:55
		})
	},function(){
		$(this).css({
			zIndex:0
		})
	});

	$wall.on('click','.close',function(){
        var $this = $(this);
        $.ajax({
            url:'/del',
            data:'id='+$this.data('id'),
            dataType:'json'
        })
        .done(function(data){
            console.log(data);
        })
 
    });
    $('.submit').on('click',function(){
        let val = $('.text').val();
        $.ajax({
            url:'/add',
            data:{content:val},
            dataType:'json',
            method:'POST'
        })
        .done(function(data){
 
        })      
    });

})(jQuery);

