npx webpack  -v
查看版本号

src/index.js
npx webpack
dist/main.js


安装
mkdir project && cd project
npm init --yes
npm install webpack webpack-cli --save-dev

最简单的打包


配置entry配置入口文件
在项目目录下配置文件 webpack.config.js
const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
webpack默认的配置文件是webpack.config.js,也可以指定为其他的,如果使用默认的话,--config webpack.config.js可以省略



npm install 会安装package.json里面全部的包

教程
https://www.webpackjs.com/guides/asset-management/#%E5%8A%A0%E8%BD%BD-css

npm run  build

webpack老师学一周讲课半天