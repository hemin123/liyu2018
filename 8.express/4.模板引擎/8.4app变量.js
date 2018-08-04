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
	res.render('index',{
		title:'hello',
		content:'hahahha',
		obj:{
			"name":"he","age":18
		},
		name:'to0m',
		arr:["tom","amy","boy","g"]
	})

})



// app.use(express.static('public'));
var server = app.listen(3000, function () {

  console.log('running。。。');
});