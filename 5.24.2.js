//可以返回要请求的对象

// 使用方法
// node 5.24.2.js
// 然后在地址栏输入http://127.0.0.1:3000/5.24.3.json
// 就可以请求回来 5.24.3.json里面的内容了

// 5.24.3ajax.html获取数据
// 5.25.2.html读写文件

//请求的是文件，返回的是文件里面的内容；
var http = require('http');
var fs = require('fs');


//引入模块，用server方法，创建

var server= http.createServer(function(req,res){
	//请求对象   返回
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	console.log(req.url);
	//可以拿到请求的地址  req.url就是请求的地址，

	if (req.url=='/favicon.ico') {
		res.statusCode = 404;
		res.end();
	}

	var Fileload= './'+req.url;
	//必须这样转化一下地址，要不然会用绝对路径去找文件
	fs.readFile(Fileload,function(err,data){
		//文件模块fs里面有个read方法，读文件，
		//读取成功就放到data里面了。
		//异步
		if (err) {
			console.log('read err cuo',err)
			res.statusCode=404;
			res.end('err');
		}else{
			res.statusCode=200;
			res.end(data);
		}
	})
	//js调试不很好调，一般都是这样把错误console出来，找错误改正
});

server.listen(3000,'127.0.0.1',function(){
	console.log("sever is running at http://127.0.0.1:3000");
});







