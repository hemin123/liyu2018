<ul class="pagination">
	{{#pageArray}}
		{{#disabled}}
			<li class="page-item active" data-value={{value}}>{{name}}</li>
		{{/disabled}}
		{{^disabled}}
			{{#active}}
				<li class="page-item active" data-value={{value}}>{{name}}</li>
			{{/active}}
			{{^active}}
				<li class="page-item " data-value={{value}}>{{name}}</li>
			{{/active}}
		{{/disabled}}
		
	{{/pageArray}}

</ul>