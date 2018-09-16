

<div class="panel">
	<h2 class="panel-header">送货地址</h2>
	<div class="pandel-body clearfix">
		<div class="shipping-item  active">
			<h3 class="shipping-title">上海浦东（刘女士）</h3>
			<p class="shipping-detail">
				上海浦东（刘女士） 13125554
			</p>
			<div class="shipping-footer">
				<span class="link shipping-edit">编辑</span>
				<span class="link shipping-delete">删除</span>
			</div>
		</div>
		<div class="shipping-item">
			<h3 class="shipping-title">上海浦东（刘女士）</h3>
			<p class="shipping-detail">
				上海浦东（刘女士） 13125554
			</p>
			<div class="shipping-footer">
				<span class="link shipping-edit">编辑</span>
				<span class="link shipping-delete">删除</span>
			</div>
		</div>
		{{#shippings}}
		<div class="shipping-item"  data-shipping-id="{{_id}}">
			<h3 class="shipping-title">{{provice}} {{city}} ({{name}})</h3>
			<p class="shipping-detail">
				{{provice}} {{city}} {{address}} {{phone}}
			</p>
			<div class="shipping-footer">
				<span class="link shipping-edit">编辑</span>
				<span class="link shipping-delete">删除</span>
			</div>
		</div>
		{{/shippings}}
		<div class="shipping-add">
			
			<i class="fa fa-plus"></i>
			<p class="shipping-add-text">添加新地址</p>
		</div>
		
		
	</div>
</div>









