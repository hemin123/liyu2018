

// 全套模板生成http://www.expressjs.com.cn/starter/generator.html


var express = require('express');
var swig = require('swig');
var app = express();


//设置让浏览器不缓存页面
swig.setDefaults({
  cache: false
})




app.engine('html',swig.renderFile);

app.set('views','./views');

app.set('view engine','html');

app.get('/',(req,res)=>{
	res.render('data')

})
app.get('/list',(req,res)=>{
	res.render('list');

})
app.get('/con',(req,res)=>{
	res.render('con');

})




// app.use(express.static('public'));
var server = app.listen(3000, function () {

  console.log('running。。。');
});