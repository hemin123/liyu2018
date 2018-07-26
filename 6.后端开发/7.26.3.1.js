//上传图片到服务器,7.26.3http.html

// 需要安装包https://github.com/felixge/node-formidable
const http = require('http');

const url=require('url');
const util=require('util');
const querystring=require('querystring');
var formidable = require('formidable');

const server =http.createServer((req,res)=>{
console.log(req.url);
console.log(req.method);
	// if (req.method.toLowerCase()=='POST') {
		 // const myurl = new url.parse(req.url);
		// console.log(querystring.parse(myurl));
	var form= new formidable.IncomingForm();
		 form.uploadDir ='./';
	form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('running at 127.0.0.1');
})