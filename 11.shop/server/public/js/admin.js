(function($){
	$('#logout').on('click',function(){
		$.ajax({
			url:"/user/logout",
			dataType:'json',
			type:'get'
		})
		.done(function(result){
			if(result.code == 0){
				// window.location.reload();
				window.location.herf="/";
			}
		})
		.fail(function(err){
			console.log(err)
		})		
	});



})(jQuery)