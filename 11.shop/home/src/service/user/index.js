

var _util = require('util')

var _user ={

	logout :function(success,error){
		// alert('logout')
		/*$.ajax({
			url:'/user/logout',
			success:function(result){
				console.log(result)
			},
			error:function(err){
				console.log(err)
			}
		})*/
		_util.request({
			url:'/user/logout',
			success:success,
			error:error
		})
	},
	login:function(data,success,error){
		_util.request({
			method:'post',
			url:'/user/login',
			data:data,
			success:success,
			error:error

		})
	},	
	getUserInfo:function(success,error){
		_util.request({
			url:'/user/userInfo',
			success:success,
			error:error
		})
	},
	checkUsername:function(username,success,error){
		_util.request({
			url:'/user/checkUsername',
			data:{
				username:username
			},
			success:success,
			error:error
		})
	}
}

module.exports = _user;




