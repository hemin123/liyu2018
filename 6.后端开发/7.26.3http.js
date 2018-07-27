const http = require('http');
// http.createServer([options][, requestListener])
const url=require('url');
const querystring=require('querystring');
var formidable = require('formidable');
var path = require('path');

const server =http.createServer((req,res)=>{
console.log(req.url);
console.log(req.method);
	//if (req.method.toLowerCase()=='POST') {
		  const myurl = new url.parse(req.url);

		 console.log(querystring.parse(myurl));
		var form= new formidable.IncomingForm();
		form.uploadDir ='./updown';
	form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
		/*let body ='';
		res.on('data',(chunk)=>{//按块传送
			body += chunk;
			console.log('chunk');
			console.log(chunk);
		});
		res.on('end',()=>{
			console.log(body);
			console.log(querystring.parse(body));

		});*/
		res.setHeader('Content-Type', 'text/json;charset=utf-8');
		res.write('hhh哈哈哈哈哈');
		res.end('end');
	//}

// Class: URLSearchParams
// url.parse(urlString[, parseQueryString[, slashesDenoteHost]])

})

server.listen(3000,'127.0.0.1',()=>{
	console.log('running at 127.0.0.1');
})