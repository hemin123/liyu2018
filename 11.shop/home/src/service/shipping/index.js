

var _util = require('util')

var _shipping ={

	addShipping:function(data,success,error){
		_util.request({
			url:'/shipping',
			method:'post',
			data:data,
			success:success,
			error:error
		})
	},

}

module.exports = _shipping;




