
require('node_modules/font-awesome/css/font-awesome.min.css');

var _util = require('util');
var _cities = require('util/cities');
var _shipping = require('service/shipping');


var modalTpl = require('./modal.tpl');

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

var _modal = {
	show:function(){
		this.$box = $('.modal-box');
		this.options=options;
		this.lodaModal();
		this.bindEvent();
	},
	bindEvent:function(){
		var _this = this;
		//关闭弹窗
		this.$box.find('.close').on('click',function(){
			_this.hide();
		})
		//省份城市联动
		_this.$box.find('.province-select').on('change',function(){
			_this.loadCities($(this).val())
		})
		//提交事件
		this.$box.find('#btn-submit').on('click',function(){
			_this.submit();
		})
		this.$box.find('input').on('keyup',function(e){
			if (e.keyCode ==13) {
				_this.submit();
			}
		})
	},
	lodaModal:function(){
		var html = _util.render(modalTpl);
		this.$box.html(html);
		this.loadProvinces();
	},
	loadProvinces:function(){
		var provinces = _cities.getProvinces();
		console.log(provinces);
		var provincesSelectOptions = this.getSelectOptions(provinces);
		this.$box.find('.province-select').html(provincesSelectOptions);
	},
	loadCities:function(provinceName){
		var cities = _cities.getCities(provinceName);
		var citiesSelectOptions = this.getSelectOptions(cities);
		this.$box.find('.city-select').html(citiesSelectOptions);
	},
	getSelectOptions:function(arr){
		let html = '<option value ="">请选择</option>';
		for (var i = 0; i < arr.length; i++) {
			html +='<option value="'+arr[i]+'">'+arr[i]+'</option>';
		}
		return html;
	},
	hide:function(){
		this.$box.empty();
	},
	submit:function(){
		var _this = this;
		// alert('aa')
		//获取验证提交
		var formData ={
			name:$.trim($('[name="name"]').val()),
			province:$.trim($('[name="province"]').val()),
			city:$.trim($('[name="city"]').val()),
			address:$.trim($('[name="address"]').val()),
			phone:$.trim($('[name="phone"]').val()),
			zip:$.trim($('[name="zip"]').val()),
		}
		//验证数据
		var validateResult = this.validate(formData);
		//提交
		console.log(formData);
		if (validateResult.status) {
			formErr.hide();
			_shipping.addShipping(formData,function(shippings){
				console.log(shippings);
				_util.showSuccessMsg('添加地址成功');
				_this.hide();
				_this.options.success(shippings);
				// window.location.href='./result.html';
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
		if (!_util.validate(formData.name,'require')) {
			result.msg ='用户名不能为空';
			console.log(result);
			return result;
		}
		if (!_util.validate(formData.city,'require')) {
			result.msg ='地址不能为空';
			console.log(result);
			return result;
		}
		if (!_util.validate(formData.address,'require')) {
			result.msg ='详细地址不能为空';
			console.log(result);
			return result;
		}
		if (!_util.validate(formData.phone,'require')) {
			result.msg ='手机号不能为空';
			console.log(result);
			return result;
		}
		if (!_util.validate(formData.phone,'phone')) {
			result.msg ='手机号格式不正确';
			return result;
		}

		
		result.status=true;
		return result;
	}

}

module.exports =  _modal;



