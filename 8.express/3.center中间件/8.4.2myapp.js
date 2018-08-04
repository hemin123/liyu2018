
//原理
// 自己写express函数  next函数
//https://www.jianshu.com/p/797a4e38fe77

const http =require('http');

	var fn = [];
function express(){
	var app=function(req,res){
		var i=0;
		function next(){
			var task = fn[i++];
			if (!task) {
				return ;
			}
			task(req,res,next);
		}

		next();

	}
}



var app = express();


const sever=http.createServer(app);

server = sever.listen(3000, function () {

  console.log('running。。。');
});

