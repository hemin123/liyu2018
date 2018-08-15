(function($){
	$('#btn-sub').on('click',function(){
	
		var passwordReg = /^\w{3,10}$/;

		var password = $("[name='password']").val();
		var repassword = $("[name='repassword']").val();

		var $errs=$('.err');

		//密码:3-10个字符
		if( !passwordReg.test(password)){
			$errs.eq(0).html('密码为3-10个字符');
			return false;
		}else{
			$errs.eq(0).html('');
		}
		if(password != repassword){
			$errs.eq(1).html('两次密码不一致');
			return false;
		}else{
			$errs.eq(1).html('');
		}
	})

		/*if(errMsg){//验证不通过
			//显示错误信息
			$passwords.find('.err').html(errMsg);
			return;
		}else{
			$register.find('.err').html('');
			//发送数据到后端(ajax)
			$.ajax({
				url:"/admin/password",
				data:{
					id:req.userInfo.id,
					password:password
				},
				type:'post',
				dataType:'json'
			})
			.done(function(result){
				if(result.code === 0){
					$('#go-login').trigger('click')
				}else{
					$register.find('.err').html(result.message)
				}
			})
			.fail(function(err){
				console.log(err)
			})
		}
	})*/



})(jQuery);