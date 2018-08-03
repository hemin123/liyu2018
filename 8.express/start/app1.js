var express = require('express');
var app = express();




app.get('/', (req, res)=> {
  res.send('Hello World!');
});





app.use(express.static('public'));
var server = app.listen(3000, function () {

  console.log('running。。。');
});