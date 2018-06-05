(function(window, undefined){
var 
	//kQuery的构造函数
	kQuery = function(selector){
		return new kQuery.fn.init(selector);
	};

kQuery.fn = kQuery.prototype = {
	constructor:kQuery,
	init:function(selector){
		selector = kQuery.trim(selector);
		//布尔值是假的情况返回空的jquery对象
		if(!selector){
			return this;
		}
		//如是函数的话返回有document的jquery对象,当页面所有的DOM节点加载完毕后执行传入的函数
		else if(kQuery.isFunction(selector)){
			document.addEventListener('DOMContentLoaded',function(){
				selector();
			});
			this[0] = document;
			this.length = 1;
			return this;
		//处理字符串	
		}else if(kQuery.isString(selector)){
			
			if(kQuery.isHTML(selector)){
				var tmpDom = document.createElement('div');
				tmpDom.innerHTML = selector;
				

				[].push.apply(this,tmpDom.children);
				return this;
			//选择器处理	
			}else{
				var doms = document.querySelectorAll(selector);
				// console.log(doms);
				/*
				for(var i = 0;i<doms.length;i++){
					this[i] = doms[i];
				}
				this.length = doms.length;
				*/
				[].push.apply(this,doms);
				return this;
			}	
		}
	

	
	
	}

}

	eq:function(num){
		if (arguments.length == 1) {
			return kQuery(this.get(num));

		}else{
			return new kQuery;
		}
	}
	first:function(){
	
	return this.eq(0);
	
	}
	each:function(arr){
		if (kQuery.isArray(arr)) {
			for (var i = 0; i < arr.length; i++) {
				var arr = fn( i,arr[i]);

				
				
			}else{

			}

		}else{

		}

	}



kQuery.isFunction = function(str){
	return typeof str === 'function';
}

kQuery.isString = function(str){
	return typeof str === 'string';
}
kQuery.isHTML = function(str){
	return str.charAt(0) == '<' && str.charAt(str.length-1) == '>' && str.length >= 3;
}
kQuery.trim = function(str){
	if(kQuery.isString(str)){
		//用正则去掉字符串的前后空格
		return str.replace(/^\s+|\s+$/g,'');
	}else{
		return str;
	}	
}


kQuery.fn.init.prototype = kQuery.fn;


window.kQuery = window.$ = kQuery;

})(window);
