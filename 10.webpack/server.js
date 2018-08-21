
var http =require('http');

var server = http.createServer(function(req,res){
  res.setHeader("Access-Control-Allow-Origin",'*');
	const data=["hhh0","ssss"];
	res.end(JSON.stringify(data))
})

server.listen(3000,'127.0.0.1',function(){
	console.log('running')
})
