// npm install --save react react-dom
// https://5abc31d8be40f1556f06c4be--reactjs.netlify.com/docs/add-react-to-an-existing-app.html

/*
	const path =require('path');
	const HtmlWebpackPlugin= require('html-webpack-plugin');
	const cleanWebpackPlugin=require('clean-webpack-plugin');
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
		},
		plugins:[//用模板，生成一个html文件
			new HtmlWebpackPlugin({
				template:'./src/index.html',
				filename:'index.html',
				inject:true,
				hash:true
			}),
			cleanWebpackPlugin(['dist'])
	 	],
	 	devServer:{
	 		contentBase:'./dist',
	 		port:300
	 	}

}*/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
	entry:'./src/index.js',	
	//指定出口
	output:{
		//出口文件名称
		filename:'bundle.js',
		//出口文件存储路径
		path:path.resolve(__dirname,'dist')
	},
	//配置loader
  module: {
    rules: [
    	//处理css文档的loader
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      //处理图片loader
	    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
    	},
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env', 'react']
            }
        }               
      }              
    ]
  },
  plugins: [
  	new HtmlWebpackPlugin({
  		template:'./src/index.html',
  		filename:'index.html',
  		inject:true,
  		hash:true
  	}),
  	new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    contentBase: './dist',
    port:3001
  }
}