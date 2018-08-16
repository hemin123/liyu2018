
const path =require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');
const cleanWebpackPlugin=require('clean-webpack-plugin');
module.exports = {
	mode:'development',
	// entry:{
	// 	app:'./src/index.js',
	// 	print:'./src/print.js'
	// },
	
	// output:{
	// 	filename:'[name]-print.js',
	// 	path:path.resolve(__dirname,'dist')
	// },
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
	},
	// plugins:[new HtmlWebpackPlugin()]
 	/*plugins:[//用模板，生成一个html文件
		new HtmlWebpackPlugin({
			template:'./src/view/index.html',
			inject:'head',
			hash:true
		})
 	]*/
	/*plugins:[ 
		new HtmlWebpackPlugin({ 
			template:'./src/view/index.html',//模板文件 
			filename:'main1.html',//生成的文件名 
			inject:'head',//脚本写在那个标签里,默认是true(在body结束后) 
			hash:true// 
		}), 
		new cleanWebpackPlugin(['dist'])
	]*/


 	devServer:{
 		content:'./dist'
 	}

}
// webpack默认的配置文件是webpack.config.js,也可以指定为其他的,如果使用默认的话,--config webpack.config.js可以省略