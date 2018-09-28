

var _util = require('util')

var _order = {

	getOrderProductList:function(success,error){
		_util.request({
			url:'/order/orderProductList',
			success:success,
			error:error		
		})
	},
	createOrder:function(data,success,error){
		_util.request({
			url:'/order/create',
			method:'post',
			data:data,
			success:success,
			error:error		
		})
	},
}

module.exports = _order;