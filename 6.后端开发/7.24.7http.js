


const http = require('http');
// http.createServer([options][, requestListener])

const server =http.createServer((req,res)=>{
	//可读流req可写流res   流的通道打开了
	// setheader request.setHeader(name, value)
	//text/plain 文本   text/html 可以写html代码
	res.setHeader('Content-Type', 'text/json;charset=utf-8');
	res.write('hhh哈哈哈哈哈');
	res.end('end');
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('running at 127.0.0.1');
}) 