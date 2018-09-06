
require('./index.css')
require('pages/common/logo')
require('pages/common/footer')
require('node_modules/font-awesome/css/font-awesome.min.css');
console.log("user-login");

/*npm jquery --save  法一
const $ =requrie('jquery');*/

// $('body').html('hhhhhh');
var _util = require('util');
var _user = require('service/user');
var formErr = {
	show:function(msg){
		$('.error-item')
		.show()
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item')
		.hide()
		.find('.error-msg')
		.text('')		
	}
}
var page ={
	init:function(){
		this.bindEvent();
	},
	bindEvent:function(){
		var _this =this;
		$('#btn-submit').on('click',function(){
			_this.submit();
		})
	},
	submit:function(){
		// alert('aa')
		//获取验证提交
		var formData ={
			username:$.trim($('[name="username"]').val()),
			password:$.trim($('[name="password"]').val()),
		}
		var validateResult = this.validate(formData);

		console.log(formData);
		if (validateResult.status) {
			formErr.hide();
			_user.login(formData,function(result){
				_util.goHome();
			},function(msg){
				formErr.show(msg);
			})
		}else{
			// console.log(validateResult)
			formErr.show(validateResult.msg);

			
		}
	},
	validate:function(formData){
		var result ={
			status:false,
			msg:''
		}
		if (!_util.validate(formData.username,'require')) {
			result.msg ='用户名不能为空';
			console.log(result);
			return result;
		}
		if (!_util.validate(formData.username,'username')) {
			result.msg ='用户名格式错误';
			return result;
		}
		if (!_util.validate(formData.password,'require')) {
			result.msg ='密码不能为空';
			return result;
		}
		if (!_util.validate(formData.password,'password')) {
			result.msg ='密码格式错误';
			return result;
		}
		result.status=true;
		return result;
	}
}

$(function(){
	page.init();
})

