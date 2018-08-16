
const path =require('path');

module.exports = {
	mode:'development',
	entry:'./src/index.js',
	output:{
		filename:'index.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
		  {
		    test:/\.css$/,
		    use: [
		          'style-loader',
		          'css-loader'
		        ]
		  },  
		  {
		    test:/\.(png|jpg|gif)$/,
		    use:[
		      'url-loader'
		    ]
		  }


		  
		]
	}

}
// webpack默认的配置文件是webpack.config.js,也可以指定为其他的,如果使用默认的话,--config webpack.config.js可以省略