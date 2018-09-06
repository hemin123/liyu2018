

var _util ={
	request:function(params){
		var _this = this;
	$.ajax({
		url:params.url ||'',
		method:params.method ||'get',
		dataType:params.dataType || 'json',
		data:params.data|| '',
		success:function(result){
			if (result.code==0) {
				params.success && params.success(result.data)
			}
			else if(result.code ==10){
			
				// window.location.herf ='./user-login.html';
				// _this.doLogin();
			}
			else if(result.code ==1){
				params.error && params.error(result.message)
			}
		},
		error:function(err){
			params.error&& params.error(err.statusText)
		}
	})
	},
	showErrorMsg:function(msg){
		alert(msg);
	},
	doLogin:function(){
		window.location.href ='./user-login.html'
	},
	goHome:function(){
		window.location.href ='./user-login.html'
	},
	validate:function(value,type){
		var value = $.trim(value);
		if (type ==='require') {
			return  !!value;
		}
		if (type==='username') {
			return /^[a-zA-Z0-9_]{3,10}$/.test(value)
		}
		if (type==='password') {
			return /^[a-zA-Z0-9_]{3,10}$/.test(value)
		}
		if (type==='phone') {
			return /^1[3568]\d{9}$/.test(value)
		}
		if (type==='email') {
			return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z0-9]{2,6}$/.test(value)
		}
	}
}

module.exports = _util;









