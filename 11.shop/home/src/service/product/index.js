

var _util = require('util')

var _product ={

	getProductList:function(data,success,error){
	
		_util.request({
			url:'/user/productList',
			data:data,
			success:success,
			error:error
		})
	},
	getProductDetail:function(data,success,error){
	
		_util.request({
			url:'/user/productDetail',
			data:data,
			success:success,
			error:error
		})
	}
	
	
}

module.exports = _product;




