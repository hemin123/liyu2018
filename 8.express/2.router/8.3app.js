

/*const roter= require('express').roter

var touter=roter();
router.get('/',(res,req)=>{
	res.sent();
})*/


var express = require('express');
var app = express();

app.use(express.static('public'));


/*app.get('/', (req, res)=> {
  res.send('Hello World!');
});*/

app.use('/user',require('./router/user.js'));
app.use('/blog',require('./router/blog.js'));




var server = app.listen(3000, function () {

  console.log('running。。。');
});


