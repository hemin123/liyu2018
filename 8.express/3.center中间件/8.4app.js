//中间件


var express = require('express');
var app = express();

//静态文件处理
app.use(express.static('public'));

app.use(function (req, res, next) {
  console.log('Time:1';
  next();
  console.log('end:1';
});
  app.use(function (req, res, next) {
  console.log('Time:2';
  next();
  console.log('end:2';
});
  app.use(function (req, res, next) {
  console.log('Time:3';
  next();
  console.log('end:3';
});
  app.get('/', (req, res)=> {
  res.send('Hello World!');
});


var server = app.listen(3000, function () {

  console.log('running。。。');
});


