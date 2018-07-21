//系统模块
const m2 = require('fs');

//自己定义的模块
//const m = require('./7.21.3.js');
// const m = require('./7.21.3');
const m = require('./7.21.4');
//不加后缀的话查找顺序 js   json  node 报错

// console.log(m);

//npm 用来安装一些包
//npmjs
//npm install   -g      (jade)
//npm  uninstall  -g



// console.log(global);
// console.log(__dirname);
// console.log(__filename);
// console.log(process);
// console.log(`This process is pid ${process.pid}`);


//定时器

// setTimeout(()=>{
// 	console.log(0);
// },2000);
console.log(1);

// let t = setTimeout(()=>{
// 	console.log(2);//延时定时器
// },2000);
// clearTimeout(t);

let t = setInterval(()=>{
	console.log(2);//延时定时器
},2000);
// clearInterval(t);

let t2 = setImmediate(()=>{
	console.log('t2');//立即定时器
},2000);

// clearImmediate(t2);



console.log(3);
