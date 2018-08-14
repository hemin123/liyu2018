(function($){
	$('#btn-sub').on('click',function(){
	
		var passwordReg = /^\w{3,10}$/;
		var $passwords = $('#passwords');
		var password = $passwords.find("[name='password']").val();
		var repassword = $passwords.find("[name='repassword']").val();
		var errMsg = '';
		//密码:3-10个字符
		if(!passwordReg.test(password)){
			errMsg = '密码为3-10个字符'
		}
		else if(password != repassword){
			errMsg = '两次密码不一致'
		}

		if(errMsg){//验证不通过
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
	})



})(jQuery);