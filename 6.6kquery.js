
//kQuery的基本结构是一个闭包
(function(window, undefined){
var 
	//kQuery的构造函数
	kQuery = function(selector){
		return new kQuery.fn.init(selector);
	};
//kQuery的原型对象
kQuery.fn = kQuery.prototype = {
	constructor:kQuery,
	//核心函数
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
		//处理字符串	
		}else if(kQuery.isString(selector)){
			//HTML代码处理
			if(kQuery.isHTML(selector)){
				var tmpDom = document.createElement('div');
				tmpDom.innerHTML = selector;
				// console.log(tmpDom.children);
				/*
				for(var i = 0;i<tmpDom.children.length;i++){
					this[i] =  tmpDom.children[i];
				}
				this.length = tmpDom.children.length;
				*/
				[].push.apply(this,tmpDom.children);
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
			}	
		}
		else if(kQuery.isArray(selector)){
			//由于apply转伪数组有兼容问题(IE8以下不兼容),所以把所有传入的数组转换成真数组
			var tmpArr = [].slice.call(selector);
			
			//把转换后的真数组转换成伪数组
			[].push.apply(this,tmpArr);
		}else{
			this[0] = selector;
			this.length = 1;
		}
		return this;
	},
	selector: "",
	length: 0,
	jquery:'1.0.0',
	//以下方法在调用时是kquery对象调用,所以方法内部的this指向调用的kquery对象
	push: [].push,
	sort: [].sort,
	splice: [].splice,
	toArray:function(){
		return [].slice.call(this);
	},
	get:function(num){
		if(arguments.length == 1){
			//正数
			if(num>=0){
				return this[num];
			//负数	
			}else{
				// -1 4 = 3
				// -2 4 = 2
				return this[this.length + num]
			}
		}else{
			return this.toArray();
		}
	},
	eq:function(num){
		if(arguments.length == 1){
			return kQuery(this.get(num));
		}else{
			return new kQuery();
		}
	},
	first:function(){
		return this.eq(0);
	},
	last:function(){
		return this.eq(-1);
	},
	each:function(fn){
		return kQuery.each(this,fn);
	},
	map:function(fn){
		return kQuery(kQuery.map(this,fn));
	}	
}

kQuery.extend = kQuery.fn.extend  = function(obj){
	for(key in obj){
		this[key] = obj[key];
		//加载到对象上面
	}
}

//kQuery的静态方法
kQuery.extend({
	isFunction:function(str){
		return typeof str === 'function';
	},
	isString:function(str){
		return typeof str === 'string';
	},
	isHTML:function(str){
		return str.charAt(0) == '<' && str.charAt(str.length-1) == '>' && str.length >= 3;
	},
	isArray:function(str){
		return kQuery.isObject(str) && length in str 
	},
	isObject:function(str){
		return typeof str === 'object';
	},
	trim:function(str){
		if(kQuery.isString(str)){
			//用正则去掉字符串的前后空格
			return str.replace(/^\s+|\s+$/g,'');
		}else{
			return str;
		}	
	},
	each:function(arr,fn){
		if(kQuery.isArray(arr)){
			for(var i = 0;i<arr.length;i++){
				// console.log(i,arr[i]);
				var res = fn.call(arr[i],i,arr[i]);
				if(res == false){
					break;
				}else if(res == true){
					continue;
				}
			}
		}else{
			for(key in arr){
				// console.log(key,arr[key]);
				var res = fn.call(arr[key],key,arr[key]);
				if(res == false){
					break;
				}else if(res == true){
					continue;
				}				
			}
		}
		return arr;
	},
	map:function(arr,fn){
		var retArr = [];
		if(kQuery.isArray(arr)){
			for(var i = 0;i<arr.length;i++){
				var res = fn(arr[i],i);
				if(res){
					retArr.push(res);
				}
			}
		}else{
			for(key in arr){
				var res = fn(arr[key],key);
				if(res){
					retArr.push(res);
				}
			}
		}
		return retArr;
	},
	//转化为数组
	toWords:function(str){
		var reg=/\b\w+\b/g;
		// console.log(str);
		return str.match(reg);
	}
});

//kquery对象属性
kQuery.fn.extend({
	html:function(content){
		console.log('hhh');
		if (content) {
			this.each(function(){
				this.innerHTML = content;
			})
			return this;
			
		}else{
			return this[0].innerHTML;
			//不传返回内容   html类型
		}
	},
	text:function(content){
		if (content) {
			this.each(function(){
				this.innerText=content;
			});
			return this;

		}else{
			var str='';
			this.each(function(){
				str+=this.innerText;
				//文本类型
			});
			return str;

		}

	},
	attr:function(arg1,arg2){
		if (kQuery.isObject(arg1)) {
			//obj类型的话走这里
			this.each(function(){
				var dom = this;
				kQuery.each(arg1,function(attr,val){
					dom.setAttribute(attr,val);
				})
			})
			
		}else{
			if (arguments.length==1) {
				//获取第一个dom节点属性值
				return this[0].getAttribute(arg1);
			}else if(arguments.length==2){
				this.each(function(){
					this.setAttribute(arg1,arg2);
				});

			}
		}
	},
	removeAttr:function(attr){
		if (attr) {
			this.each(function(){
				this.removeAttribute(attr);
			})
			return this;
		}else{
			return this;

		}

	},
	val:function(val){
		if (val) {
			this.each(function(){
				this.value=val;
			});
			return this;

		}else{
			return this[0].value;

		}

	},
	css:function(arg1,arg2){
		if (kQuery.isString(arg1)) {
			if (arguments.length ==1) {
				
				if(this[0].currentStyle){//兼容低级浏览器
					return this[0].currentStyle[arg1];
				}else{
					return getComputedStyle(this[0],false)[arg1];
				}

			}else if (arguments.length ==2) {
				this.each(function(){
					this.style[arg1]=arg2;
				});

			}
		}else if (kQuery.isObject(arg1)) {
			this.each(function(){
				for(key in arg1){
					this.style[key]=arg1[key];
				}
			});
		}
		return this;
	},



	hasClass:function(str){
		var res = false;
		if(str){
			//判断是否存在指定单词的正则
			var reg = eval('/\\b'+str+'\\b/');
			// eval里面放字符串，同时也是js代码
			//eval是
			this.each(function(){
				//判断传入的参数是否存在在DOM节点的className上
				if(reg.test(this.className)){
					res = true;
					return false;
				}
			})
		}
		return res;

	},

	addClass:function(str){
		var reg=/\b\w+\b/g;
				//匹配单词，匹配类
		console.log(str.match(reg));
		       //根据正则的规则把str返回成一个数组
		var names = kQuery.toWords(str);
		this.each(function(){
			//如果有参数对应的class不添加,如果没有就添加
			var $this = kQuery(this);//DOM节点转kquery对象
			for (var i = 0; i < names.length; i++) {
				this.className =this.className + ' ' +names[i];


			}
		/*	if(!$this.hasClass(str)){
				//如果没有的话添加，有的话不添加
				this.className =this.className + ' ' + str;
			}*/
		})
		return this;
	},
	removeClass:function(str){	
		if (str) {
			var names = kQuery.toWords(str);
			this.each(function(){
				//如果有参数对应的class不添加,如果没有就添加
				var $this = kQuery(this);//拿到kquery对象
				for (var i = 0; i < names.length; i++) {
					if ($this.hasClass(names[i])) {//DOM节点转kquery对象
						console.log('把'+this.className+'上的'+names[i]+'删掉')
						var reg= eval('/\\b'+names[i]+'\\b/');
						this.className = this.className.replace(reg,'');

					}
				}
				
			});
		}else{
			this.each(function(){
				this.className = '';
			});
		}
		
		return this;
	},
	toggleClass:function(str){
		if (str) {
			var names=kQuery.toWords(str);
			this.each(function(){
				console.log(this);
				var $this= kQuery(this);
				console.log($this);
				for (var i = 0; i < names.length; i++) {
					if ($this.hasClass(names[i])) {
						//如果有的话，删除
						$this.removeClass(names[i]);
					}else{
						//没有的话添加
						$this.addClass(names[i]);
					}
				}
			});

		}else{
			this.each(function(){
				this.className = '';
			});

		}
		//返回的是对象
		console.log(this);
		return this;

	}
});

//dom
kQuery.fn.extend({
	empty:function(){
		this.each(function(){
			this.innerHTML = '';
		});
		return this;
	},
	remove:function(selector){
		if (selector) {
			//获取所有的dom节点
			var doms=document.querySelectorAll(selector);
			this.each(function(){
				for (var i = 0; i < doms.length; i++) {
					//对象上面的dom节点和取出来的dom节点比较如果一样，就删除
					if(doms[i]==this){
						//删除
					var parentNode = this.parentNode; //父元素
					parentNode.removeChild(this);

					}
				}
			});

		}else{
			//this是一个个dom节点，dom节点不能直接自己删自己
			//需要父元素取出 然后去删除
			this.each(function(){
				var parentNode = this.parentNode; //父元素
				parentNode.removeChild(this);
			});
		}
	},
	append:function(source){
		if(source){//传进来的话
			//source可能是
			//1、kquery对象  2、DOM节点  3、HTML代码片段
			//分情况加到this里面
			var $source = kQuery(source);//转化为jq对象
			this.each(function(index,value){
				
				var parentNode = this;//保存外面的this
				if(index == 0){//第一个DOM元素直接插入
					$source.each(function(){
						//这里面的this是source里面的对象
						parentNode.appendChild(this);
					})
				}else{//第一个DOM元素复制一份再插入
					$source.each(function(){
						//复制一份dom节点
						var dom = this.cloneNode(true);
						//复制一份插入
						parentNode.appendChild(dom);
						// parentNode.appendChild(this);
					})					
				}
			})
		}
		return this;
	},
	append:function(){
		if (source) {
			//var $source=

		}
	}
});

kQuery.fn.extend({
	on:function(eventName,fn){
		this.each(function(){
		
			kQuery.addEvent(this,eventName,fn);


		})	
	}
	off:function(eventName,fnName){
		if (arguments.length == 0) {

		}else if (arguments.length == 1){
			this.each(function(){
				if (this.bucketEvent) {

				}
			});

		}else if (arguments.length == 2){

		}
	}
	clone:function(copy){
		var res=[];
		this.each(function(){
			if (copy) {

			}else{
				var dom = this.cloneNode(true);
				res.push(dom);

			}
		});
		return kQuery(res);
	}
});



kQuery.fn.init.prototype = kQuery.fn;


window.kQuery = window.$ = kQuery;

})(window);

