var http = require('http');
var fs = require('fs');
var url = require('url');


//引入模块，用server方法，创建

var server= http.createServer(function(req,res){
	//请求对象   返回
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	var urlstr =req.url;
	console.log('req.url',urlstr)
	if (urlstr=='/favicon.ico') {
		res.statusCode =404;
		res.end();
	}

  if (req.method == 'POST') {
  	var body ='';
  	//网络上传输字符串
  	req.on('data',function(chunk){
  		body+=chunk;
  		//一段一段请求回来，然后全部保存在body
  	});
  	req.on('end',function(){
  		console.log('body'+body);
  		var bodyobj = querystring.parse(body);
  		var strBody = JSON.stringify(bodyobj);
  		//转化为对象
  		res.statusCode = 200;
  		res.end(strBody);
  	})


   }else{
  	if (urlstr.search(/\?/)!=-1) {
  		var prams = url.parse(urlstr,true).query;

  		var pramsstr = JSON.stringify(prams);
  		res.statusCode = 200;
  		res.end(pramsstr);

  	}

		var Fileload= './'+urlstr;
		fs.readFile(Fileload,function(err,data){
			if (err) {
				console.log('read err cuo',err);
				res.statusCode=404;
				res.end('err');
			}else{
				res.statusCode=200;
				res.end(data);
			}
		})
	}
});

server.listen(3000,'127.0.0.1',function(){
	console.log("sever is running at http://127.0.0.1:3000");
});





