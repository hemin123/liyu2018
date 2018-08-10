
// multer    https://github.com/expressjs/multer
(function($){
	ClassicEditor
	.create( document.querySelector('#editor'),{
		language:'zh-cn',
		ckfinder:{
			uploadUrl:'/article/uploadimg'
		}
	} )

	.then(editor=>{
		console.log(editor);
	})
	.catch( error =>{
		console.log( error );
	})


	$('#btn-sub').on('click',function(){
		var title = $("[name='title']").val();
		var intro = $("[name='intro']").val();
		var content = editor.getData();
		var $err = $('.err');	
		if (title.trim()=='') {
			$err.eq(0).html('请输入');
			return false;
		}else{
			$err.eq(0).html('');
		}
		if (intro.trim()=='') {
			$err.eq(1).html('请输入');
		}else{
			$err.eq(1).html('');
		}
		if (content.trim()=='<p>&nbsp;</p>') {
			$err.eq(2).html('请输入');
		}else{
			$err.eq(2).html('');
		}


	});

	







})(jQuery);