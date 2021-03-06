
/*const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const publicPath='/';
//生成HtmlWebpackPlugin 配置
const getHtmlConfig = (name,title)=>({
    template:'./src/view/'+name+'.html',
    filename:name+'.html',
    title:title,
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
  'user-center':'./src/pages/user-center/index.js',
   'result':'./src/pages/result/index.js'
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
      },    
      {
        test:/\.tpl$/,
        use: {
            loader: 'html-loader',
            
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
    new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
    new HtmlWebpackPlugin(getHtmlConfig('user-login','用户登录')),    
    new HtmlWebpackPlugin(getHtmlConfig('user-register','用户注册')),    
    new HtmlWebpackPlugin(getHtmlConfig('user-center','用户中心')),    
    new HtmlWebpackPlugin(getHtmlConfig('user-update-password','修改密码')),     
    new HtmlWebpackPlugin(getHtmlConfig('user-update-password')),
  	    new HtmlWebpackPlugin(getHtmlConfig('result','结果提示')),  
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
}*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = "/";

//生成HtmlWebpackPlugin 配置
const getHtmlConfig = (name,title)=>({
    template:'./src/view/'+name+'.html',
    filename:name+'.html',
    title:title,
    inject:true,
    hash:true,
    chunks:['common',name]
})

//导出配置
module.exports = {
  //模式
    mode:'development',
  // mode:'production',
  //指定多入口文件
  entry:{
        'common':'./src/pages/common/index.js',
        'index':'./src/pages/index/index.js',
        'list':'./src/pages/list/index.js',
        'detail':'./src/pages/detail/index.js',
        'cart':'./src/pages/cart/index.js',
        'order-confirm':'./src/pages/order-confirm/index.js',
        'user-login':'./src/pages/user-login/index.js',
        'user-register':'./src/pages/user-register/index.js',
        'user-center':'./src/pages/user-center/index.js',
        'user-update-password':'./src/pages/user-update-password/index.js',
        'result':'./src/pages/result/index.js'
    },
    //配置额外模块
    externals:{
        'jquery':'window.jQuery'
    },        
  //指定多出口
  output:{
    //出口文件名称
    filename:'js/[name].js',
        publicPath: publicPath,
    //出口文件存储路径
    path:path.resolve(__dirname,'dist')
  },
    //配置别名
    resolve:{
        alias:{
            pages:path.resolve(__dirname,'./src/pages'),
            util:path.resolve(__dirname,'./src/util'),
            images:path.resolve(__dirname,'./src/images'),
            service:path.resolve(__dirname,'./src/service'),
            node_modules:path.resolve(__dirname,'./node_modules'),
            common:path.resolve(__dirname,'./src/common')
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
                    options: {
                    }
                  },
                  "css-loader"
                ]
            },
              //处理图片loader
            {
                test: /\.(png|jpg|gif|ttf|woff2|woff|eot|svg)\??.*$/,
                use: [
                  {
                    loader: 'url-loader',
                    options:{
                        limit:100,//图片大小限制,小于该值时打包为base64
                        name:'resource/[name].[ext]'//文件打包后的目录
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
                        presets: ['env','es2015','stage-3'],               
                    }
                }               
            },
            {
                test:/\.tpl$/,
                use: {
                    loader: 'html-loader',
                }               
            }                           
        ]
  },
  plugins: [
    new HtmlWebpackPlugin(getHtmlConfig('index','首页')),
    new HtmlWebpackPlugin(getHtmlConfig('list','列表页')),
    new HtmlWebpackPlugin(getHtmlConfig('detail','商品详情')),
    new HtmlWebpackPlugin(getHtmlConfig('cart','购物车')),
    new HtmlWebpackPlugin(getHtmlConfig('order-confirm','订单详情')),
    new HtmlWebpackPlugin(getHtmlConfig('user-login','用户登录')),    
    new HtmlWebpackPlugin(getHtmlConfig('user-register','用户注册')),    
    new HtmlWebpackPlugin(getHtmlConfig('user-center','用户中心')),    
    new HtmlWebpackPlugin(getHtmlConfig('user-update-password','修改密码')),    
    new HtmlWebpackPlugin(getHtmlConfig('result','结果提示')),    
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
        filename:'css/[name].css'
    })
  ],
  devServer: {
    contentBase: './dist',
    port:3002,
    proxy:{
        "/user":{
            target:"http://127.0.0.1:3000",
            changeOrigin: true
        },
        "/product":{
          target:"http://127.0.0.1:3000",
          changeOrigin:true
        },
        "/cart":{
          target:"http://127.0.0.1:3000",
          changeOrigin:true
        },
        "/shipping":{
          target:"http://127.0.0.1:3000",
          changeOrigin:true
        },
        "/order":{
          target:"http://127.0.0.1:3000",
          changeOrigin:true
        }
    }
  }
}