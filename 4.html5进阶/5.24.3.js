//可以返回要请求的对象

//如果有参数返回前端界面

//没参数的话，返回文件内容

// 这种玩意解析
// http://127.0.0.1:3000/s?name=tom&age=18
// 5.25.3.html读出来链接中的数据

var http = require('http');
var fs = require('fs');
var url = require('url');
//url里面有一个属性，可以拿到字符串

//引入模块，用server方法，创建

var server= http.createServer(function(req,res){
	//请求对象   返回
	res.setHeader('Content-Type','text/html;charset=UTF-8');
 // var cookie= document.cookie.
	var urlstr = req.url ;
	console.log(req.url);
	//可以拿到请求的地址  req.url就是请求的地址，

//如果请求的是/favicon.ico直接返回
	if (req.url=='/favicon.ico') {
		res.statusCode = 404;
		res.end();
	}

	if (urlstr.search(/\?/) != -1) {
		var prams = url.parse(urlstr,true).query;
		var parmstr=JSON.stringify(prams);//转化为字符串
		//query解析成一个对象
		res.statusCode = 200;
		console.log(prams.name);
		res.end(parmstr);
		//接收到了，然后封装成了json对象
	}

	var Fileload= './'+urlstr;
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
res.setHeader('set-cookie',['sihdouih']);
			res.end(data);
		}
	})
	//js调试不很好调，一般都是这样把错误console出来，找错误改正
});

server.listen(3000,'127.0.0.1',function(){
	console.log("sever is running at http://127.0.0.1:3000");
});







