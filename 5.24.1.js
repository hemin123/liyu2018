
// 不可以返回数据，只可以读出来
// node 5.24.1.js
// 运行起来，然后浏览器打开这个地址http://127.0.0.1:3000/

var http = require('http');


//引入模块，用server方法，创建

var server= http.createServer(function(req,res){
	//请求对象   返回
	// res.setHeader('Content-Type','text/html;charset=UTF-8');
				//返回html代码，指定编码格式utf-8，不指定写中文会乱码
	res.setHeader('Content-Type','text/plain');
				//返回纯文本
	res.statusCode = 404;
	//状态码404，没找到

	console.log(req.url);
	//比如请求127.0.0.1:3000/data.json
	//返回的就是这个地址
		//返回请求的地址，下一个再具体写

	res.end('<h1>00hhhh你好</h1>');


});

server.listen(3000,'127.0.0.1',function(){
	console.log("sever is running at http://127.0.0.1:3000");
});





