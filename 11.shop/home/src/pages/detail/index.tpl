


<ul>
	{{#list}}
		<li class="product-item">
			<img class="product-img" src="{{image}}" alt="{{name}}">
			<p class="product-price">￥{{price}}</p>
			<p class="product-name">{{name}}</p>
		</li>
	{{/list}}
</ul>
{{^list}}
	<p class="empty-message">你要找的商品走丢了</p>
{{/list}}
























