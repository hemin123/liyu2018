/*
* @Author: TomChen
* @Date:   2018-08-16 09:57:02
* @Last Modified by:   TomChen
* @Last Modified time: 2018-08-18 16:40:24
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const publicPath='/';

const getHtmlConfig = (name)=>({
  template:'./src/view/'+name+'.html',
  filename: name +'.html',
  inject:true,
  hash:true,
  chunks:['common',name]

})
//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
  //多入口多出口打包
	entry:{
  'common':'./src/pages/common/index.js',
  'login':'./src/pages/user-login/index.js',
  'index':'./src/pages/index/index.js',
  'user-register':'./src/pages/user-register/index.js',
  'user-update-password':'./src/pages/user-update-password/index.js',
  'user-center':'./src/pages/user-center/index.js'
  },
	//指定出口
	output:{
		//出口文件名称
		filename:'js/[name].js',
    publicPath:publicPath,
		//出口文件存储路径
		path:path.resolve(__dirname,'dist')
	},
  resolve:{
    alias:{
      pages:path.resolve(__dirname,'src/pages'),
      util:path.resolve(__dirname,'src/util'),
      service:path.resolve(__dirname,'src/service'),
      api:path.resolve(__dirname,'./src/api'),
      common:path.resolve(__dirname,'./src/common'),
      node_modules:path.resolve(__dirname,'./node_modules')
    }
  },
	//配置loader
  module: {
    rules: [
    	//处理css文档的loader
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {        }
          },
          "css-loader"
        ]
      },
      //处理图片loader
	    {
        test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg)\??.*$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              limit:100,
              name:'resource/[name].[ext]'//file-loader  --save-dev
            }
          }
        ]
    	},
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env','es2015','react','stage-3'],
                           
            }
        }               
      } ,    
      {
        test:/\.tpl$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env','es2015','react','stage-3'],
                           
            }
        }               
      }            
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin(getHtmlConfig(index)),
  	new HtmlWebpackPlugin({
      template:'./src/view/index.html',
      filename:'index.html',
      inject:true,
      hash:true,
      chunks:['common','index']
    }),
    // new HtmlWebpackPlugin(getHtmlConfig('user-login')),
    new HtmlWebpackPlugin({
      template:'./src/view/user-login.html',
      filename:'user-login.html',
      inject:true,
      hash:true,
      chunks:['common','login']
    }),
    new HtmlWebpackPlugin({
  		template:'./src/view/user-register.html',
  		filename:'user-register.html',
  		inject:true,
  		hash:true,
      chunks:['common','user-register']
  	}),
    new HtmlWebpackPlugin(getHtmlConfig('user-center')),
    new HtmlWebpackPlugin(getHtmlConfig('user-update-password')),
  	new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
    filename:'css/[name].css' })
  ],
  devServer: {
    contentBase: './dist',
    port:3002,
    // historyApiail
    // historyApiFallback:true
    proxy:{
      "/user":{
        target:"http://127.0.0.1:3000",
        changeOrigin:true
      }
    }
  }
}