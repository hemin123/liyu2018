//中间件
var express = require('express');
var app = express();

app.use(express.static('public'));
// .html是静态文件




app.use('/',require('./router/blog.js'));

// 实例化  


var server = app.listen(3000, function () {

  console.log('running。。。');
});


