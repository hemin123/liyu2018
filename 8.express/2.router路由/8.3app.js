

/*const roter= require('express').roter

var touter=roter();
router.get('/',(res,req)=>{
	res.sent();
})*/


var express = require('express');
var app = express();

app.use(express.static('public'));
// .html是静态文件


/*app.get('/', (req, res)=> {
  res.send('Hello World!');
});*/

app.use('/user',require('./router/user.js'));
app.use('/blog',require('./router/blog.js'));

// 实例化  


var server = app.listen(3000, function () {

  console.log('running。。。');
});


