// 路由
//内容类型
// 找文件类型对应的代码http://www.runoob.com/http/http-content-type.html
const http = require('http');
// http.createServer([options][, requestListener])
const fs=require('fs');
const server =http.createServer((req,res)=>{
	//可读流req可写流res   流的通道打开了

	console.log(req.url);
	let pathName =req.url;
	
	if (pathName=='/index.html') {
	//字符串匹配,路径
		fs.readFile('./index.html',(err,data)=>{
			if (!err) {
				
				res.setHeader('Content-Type', 'text/html;charset=utf-8');
				res.end(data);
			}else{
				res.end('<h1>not found</h1>');
			}
		})
	}else if (pathName=='/index.css') {
	//字符串匹配,路径
		fs.readFile('./index.css',(err,data)=>{
			if (!err) {			
				res.setHeader('Content-Type', 'text/css;charset=utf-8');
				res.end(data);
			}else{
				
	
				res.end('<h1>not found</h1>');
			}
		})
	}else if (pathName=='/index.js') {
	//字符串匹配,路径
		fs.readFile('./index.js',(err,data)=>{
			if (!err) {			
				res.setHeader('Content-Type', 'application/x-javascript;charset=utf-8');
				res.end(data);
			}else{
				
	
				res.end('<h1>not found</h1>');
			}
		})
	}else if (pathName=='/1.jpg') {
	//字符串匹配,路径
		fs.readFile('./1.jpg',(err,data)=>{
			if (!err) {			
				res.setHeader('Content-Type', 'application/x-jpg;charset=utf-8');
				res.end(data);
			}else{
				
	
				res.end('<h1>not found</h1>');
			}
		})
	}else{
		res.statusCode = 404;
		res.write(`<!DOCTYPE html>
		<html>
		<head>
			<title>测试</title>
		</head>
		<body>
		<h1>	测试</h1>
			出错了
		</body>
		</html>`);
		res.end('<h1>not found</h1>');
	
	}
	//text/plain 文本   text/html 可以写html代码

})
// 相应头
//http://10.195.221.101:3000/
server.listen(3000,'127.0.0.1',()=>{
	console.log('running at 127.0.0.1');
})


//curl安装插件 