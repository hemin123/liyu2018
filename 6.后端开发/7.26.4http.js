
const http = require('http');
const fs=require('fs');
const path=require('path');
const type=require('./7.26.4http.json');

const server =http.createServer((req,res)=>{
	let file=req.url;
	if (file.lastIndexOf('.')==-1) {
		file=file+'index.html';
	}

	name = path.extname(file);// .html
	
	let filepath = path.normalize(__dirname+'/status/'+file);
	console.log(filepath);
	fs.readFile(filepath,(err,data)=>{
		if (!err) {
			res.setHeader('Content-Type', name+';charset=utf-8');
			res.end(data);
		}else{
			res.statusCode = 404;
			res.end('not found ');
		}
	})
	
})


server.listen(3000,'127.0.0.1',()=>{
	console.log('running at 127.0.0.1');
}) 