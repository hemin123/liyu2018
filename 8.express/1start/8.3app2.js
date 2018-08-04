var express = require('express');
var app = express();

app.use(express.static('public'));
// app.use(express.static('./index.html'));

app.get('/',(req,res,next)=>{
	console.log(0);
	console.log('one');
	next();
},(res,req)=>{
	console.log("next");
	res.send("jjj");
})

// app.all('/',(req,res)=>{
// 	console.log('all');
// 	next();

// })

app.get('/ab?cd', function (req, res) {
  res.send("ab?cd")
});

app.post('/', (req, res)=>{
  res.send("get data ....")
});

app.put('/', (req, res)=>{
  res.send('put');
});


app.delete('/',(req, res)=>{
  res.send('delete...');
});


var server = app.listen(3000, function () {

  console.log('running。。。');
});