/*
* @Author: TomChen
* @Date:   2018-07-26 16:08:46
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-27 10:39:44
*/

//$ npm install swig  --save

const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');
const url = require('url');
const WishModel = require('./Model/WishModel.js');
const querystring=require('querystring');
const swig = require('swig');


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test',{});

var db = mongoose.connection;

db.on('error', (err)=>{
	throw err
});
db.once('open', ()=> {
	console.log("db connecnted");
})

const server = http.createServer((req,res)=>{
	console.log("req.url:::",req.url);
	let reqUrl = url.parse(req.url,true);

	let pathname = reqUrl.pathname;

	let fileName = req.url;
	if (pathname.startsWith('/static/')) {
			//静态资源处理
			//如果用户的请求是文件夹的话,就返回文件夹下面的index.html
			if(fileName.lastIndexOf('.') == -1){//文件夹
				fileName = fileName + '/index.html';
			}

			// let filePath = path.normalize(__dirname + '/static/'+fileName);
			let filePath = path.normalize(__dirname +fileName);
			let fileExtName = path.extname(filePath);
			console.log('filePath',filePath)
			fs.readFile(filePath,(err,data)=>{
				if(!err){
					let mimeType = mime[fileExtName] || 'text/plain';
					res.setHeader('Content-Type', mimeType+';charset=UTF-8');
					res.end(data);
				}else{
					res.setHeader('Content-Type', 'text/html;charset=UTF-8');
					res.statusCode = 404;
					res.end('<h1>页面走丢了。。。。</h1>')
				}
			});		
	}else{
		// console.log(pathname);
		let paths=pathname.split('/');
		// console.log(paths);
		let control=paths[1]|| 'wish';
		let action=paths[2]|| 'index';
		let args=paths.slice(3);

		let model;
		try{
			model=require(__dirname+'/control/'+control+'.js');
		}catch(err){
			console.log(err);
			res.setHeader('Content-Type', 'text/html;charset=UTF-8');
			res.statusCode = 404;
			res.end('<h1>页面走丢了。。。。</h1>');
			return;

		}
		if (model[action]) {
			console.log(111);
			model[action].apply(null,[req,res].concat(args));
			console.log(222);//动态传参apply
		}                //apply执行函数

		// apply  call  band面向对象
	}	
/*
	if(pathname === '/index.html' || pathname === '/'){//显示首页
		WishModel.get((err,data)=>{
			if(!err){
				

var template = swig.compileFile(__dirname+'/static/index.html');
var html = template({
   data:data
});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}
			else{
				console.log(err);
			}
		});				
	}else if(pathname==='/add'&&req.method.toUpperCase()=='POST'){
		let body='';
		req.on('data',(chunk)=>{
			body+= chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(body);
			// console.log(obj);//后台可以看到
			WishModel.add(obj,(err,data)=>{
				if(!err){
					let result = {
						status:0,
						data:data
					}
					let resultJson=JSON.stringify(result);
					res.end(resultJson);
				}else{
					let result = {
						status:101,
						data:'err'
					}
					let resultJson=JSON.stringify(result);
					res.end(resultJson);
					console.log(err)
				}
			});

		});
	}else if(pathname==='/del' ){
		console.log(reqUrl);
		// WishModel.remove(reqUrl.querystring.id,(err)=>{
		WishModel.remove(reqUrl.query.id,(err)=>{
			if (!err) {
				let resultJson = JSON.stringify({
						status:0,
				});
				res.end(resultJson);
			}
		})

	}else{
		
	}
	
*/
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1:80');
})