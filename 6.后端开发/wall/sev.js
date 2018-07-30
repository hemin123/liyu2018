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
const querystring=require('querystring');
const swig = require('swig');

const server = http.createServer((req,res)=>{
	console.log("req.url:::",req.url);
	let reqUrl = url.parse(req.url,true);

	let pathname = reqUrl.pathname;

	let fileName = req.url;
	
	
		//静态资源处理
		//如果用户的请求是文件夹的话,就返回文件夹下面的index.html
		if(fileName.lastIndexOf('.') == -1){//文件夹
			fileName = fileName + '/index.html';
		}

		let filePath = path.normalize(__dirname + '/static/'+fileName);
		let fileExtName = path.extname(filePath);

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
	
	

});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1:80');
})