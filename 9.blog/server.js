

const express = require('express');
const swig=require('swig');
const bodyParser =require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb://localhost/blog',{useNewUrlParser:true});

var db = mongoose.connection;

db.on('error', (err)=>{
	throw err
});
db.once('open', ()=> {
	console.log("db connecnted")
});


//配置模板
swig.setDefaults({
  cache: false
})
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');



//静态文件处理
app.use(express.static('public'));

//处理post请求中间件
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

//处理路由
app.use("/",require('./router/index.js'))
// app.use("/user",require('./router/user.js'))

// 实例化  



app.listen(3000,()=>{
	console.log('server is running at 127.0.0.1:3000')
})


