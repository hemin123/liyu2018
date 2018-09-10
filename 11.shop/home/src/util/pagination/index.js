
require('./index.css')


var _util = require('util');
var tpl = require('./index.tpl');
(function($){
	// console.log($);
	function Pagination($elem){
		this.$elem =$elem;
		this.bindEvent();

	}
	Pagination.prototype ={
		constructor:Pagination,
		bindEvent:function(){
			var _this=this;
			this.$elem.on('click','.page-item',function(){
				var $this=$(this);
				if ($this.hasClass('active'||$this.hasClass('disabled'))) {
					return;
				}
				_this.$elem.trigger('page-change',[$this.data('value')]);
				// console.log($(this).data('value'))//按页码获取数据
			})
		},
		render:function(options){
			// console.log(options);

			var pages=Math.ceil(options.total/options.pageSize);
			if (pages<=1) {
				return;
			}
			var start =options.current - options.range > 1 ? options.current-options.range : 1;
			var end =options.current + options.range < pages ? options.current + options.range :pages;
			
			var prev=options.current-1;
			var next=options.current+1;
			var hasPrev = prev >0 ? true:false;
			var hasNext = next <=pages ? true:false;
			
			var pageArray=[];
			pageArray.push({
				name:'上一页',
				value:prev,
				disabled:!hasPrev
			})
			for (var i = start; i <= end ; i++) {
				pageArray.push({
					name:i,
					value:i,
					active:(i==options.current)
				})
			}

			var pageArray==[];
			pageArray.push({
				name:'下一页',
				value:'next'
			})
			for (var i = start; i <= end; i++) {
				pageArray.push({
					name:i,
					value:i,
					active:(i==options.current)
				})
			}
			pageArray.push({
				name:'下一页',
				value:next,
				disabled:hasNext
			})

			var html =_util.render(tpl,{
				pageArray:pageArray
			});
			this.$elem.html(html);
		}
	};
	Pagination.DEFAULT={
		current:1,
		total:1,
		pagination:1,
		range:3
	}

	$.fn.extend({
		pagination:function(){
			return this.each(function(){
				var $this= $(this);
				var pagination=$this.data('pagination');
				if (!pagination) {
					pagination=new Pagination($this);
					$this.data('pagination',pagination)
				}
				if (typeof pagination[fn]=='function') {
					options=$.extend({},Pagination.DEFAULT,options);
					pagination[fn](options)
				}
			})
		}
	})


})(window.jQuery)





