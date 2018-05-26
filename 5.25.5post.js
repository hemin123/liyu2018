var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

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

    console.log(req.method);
    //請求模式判斷
      if (req.method == 'POST') {
          	var body ='';
          	//网络上传输字符串

            //on事件
          	req.on('data',function(chunk){
          		body+=chunk;
              console.log(chunk);
          		//一段一段请求回来，然后全部保存在body
          	});

      	req.on('end',function(){
      		console.log('body'+body);
      		var bodyobj = querystring.parse(body);
      		var strBody = JSON.stringify(bodyobj);
      		//转化为对象,解析成json,字符串
      		res.statusCode = 200;
      		res.end(strBody);
      	});


       }
       else{
        if(urlstr.search(/\?/) != -1){
              var prams = url.parse(urlstr,true).query;
              //通常拿到参数后需要根据参数做相应的处理
              //todo......
              var parmsStr = JSON.stringify(prams);
              res.statusCode = 200;
              res.end(parmsStr);    
        }
        //如果没有参数,打开文件读取并且返回
           var filePath = "./"+urlstr;
          fs.readFile(filePath,function(err,data){
              if(err){
                console.log('read file error:::',err);
                res.statusCode = 404;
                res.end('file not found');
              }else{
                res.statusCode = 200;
                res.end(data);
              }
          })    
      
    	}
});

server.listen(3000,'127.0.0.1',function(){
	console.log("sever is running at http://127.0.0.1:3000");
});





