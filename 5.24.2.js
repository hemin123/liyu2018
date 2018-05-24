var http = require('http');
var fs = require('fs');

//引入模块，用server方法，创建

var server= http.createServer(function(req,res){
	//请求对象   返回
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	console.log(req.url);

	var Fileload= './'+req.url;
	fs.readFile(Fileload,function(err,data){
		if (err) {
			console.log('read err cuo')
			res.statusCode=404;
			res.end('err');
		}else{
			res.statusCode=200;
			res.end(data);
		}
	})
});

server.listen(3000,'127.0.0.1',function(){
	console.log("sever is running at http://127.0.0.1:3000");
});





