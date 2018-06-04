


(function(window,underfined){
	var kQuery = function(selector){
		return new kQuery.fn.init(selector);
	};

	kQuery.fn= kQuery.prototype = {
		constructor:kQuery,
		init:function(selector){
			console.log(selector);
			selector=kQuery.trim(selector);
			console.log(selector);
			if (!selector) {
				return this;
			}
		}

	}

	kQuery.trim = function(str){
		if(kQuery.isString(str)){
			//用正则去掉字符串的前后空格
			return str.replace(/^\s+|\s+$/g,'');
		}else{
			return str;
		}	
	}


kQuery.fn.init.prototype=kQuery.fn;
window.kQuery=window.$=kQuery;

})(window);
