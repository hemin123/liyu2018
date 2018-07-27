
const http = require('http');
const fs=require('fs');
const path=require('path');
const mime ='./mime.json';
const url =require('url');
const model=require('./file.js');

const server =http.createServer((req,res)=>{
	let requrl = url.parse(req.url,true);
	console.log(requrl);//是个对象有好多属性
	let pathname=requrl.pathname;
	console.log(pathname);//路径
	let fileName =req.url;
	if (pathname=='/'||pathname=='/index.html') {
		model.get((err,data)=>{
			if (!err) {
				let html=`<!DOCTYPE html>
							<html>
							<head>
								<title>h</title>
								<link rel="stylesheet" href="./css/css.css">
							</head>
							<body>
								<div class="wall">`
							data.forEach((val)=>{
								html+=`		<div class="wish" style="background:${val.color}" >
										<a href="javascript:;" class="close" data-id= '${val.id}'>
										</a>	${val.content}
										
									</div>`
							})
						
							
						html+=		`</div>
							<div class="card">
								<textarea class="text"></textarea>
								<input type="submit" value="许愿" class="submit">
							</div>
							</body>
								<script src="jquery-1.12.4.js"></script>
								<script src="./js/jquery.pep.js"></script>
								<script src="./js/js.js"></script>
							</html>
				`;
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);
			}
		})
		
	}else if(pathname=='/add'){
		model.get((err,data)=>{
			if (!err) {
				var body = '';
				req.on(data,(chunk)=>{
					body=body+chunk;
				});
				
				req.on(end,()=>{
					let obj=querystring.parse(body);
					console.log(body)

				})

			}

		})
		
	}else if(pathname=='/remove'){
		model.remove((err,data)=>{
			if (!err) {	
				res.on(end,()=>{

				})

			}

		})
		
	}
	else{
		if (fileName.lastIndexOf('.')==-1) {
			fileName=fileName+'/index.html';
		}
		// name = path.extname(file);// .html
		//console.log(name);
		//console.log(path);
		let filepath = path.normalize(__dirname+fileName);
		console.log(filepath);
		let fileExtname=path.extname(filepath);

		fs.readFile(filepath,(err,data)=>{
			if (!err) {
				let mimeType=mime[fileExtname]||"text/plain";
				res.setHeader('Content-Type', mimeType+';charset=utf-8');
				res.end(data);
			}else{
				res.statusCode = 404;
				res.end('not found ');
			}
		})

	}

	
	
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('running at 127.0.0.1');
}) 