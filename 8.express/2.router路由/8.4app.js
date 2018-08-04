

/*const roter= require('express').roter

var touter=roter();
router.get('/',(res,req)=>{
	res.sent();
})*/


var express = require('express');
var app = express();

//静态文件处理
app.use(express.static('public'));

// app.use('/public',express.static('public'));
//访问地址需要带/public，才可以访问


/*app.get('/', (req, res)=> {
  res.send('Hello World!');
});*/

app.use('/user',require('./router/user.js'));
app.use('/blog',require('./router/blog.js'));

// 实例化  


var server = app.listen(3000, function () {

  console.log('running。。。');
});


