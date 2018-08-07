

const Router = require('express').Router;

const router = Router();


router.post("/",(req,res)=>{
	let body = '';
	req.on('data',(chunk)=>{
		body+=chunk;
	})
	req.on('end',()=>{
		console.log(body)
	})


//插件 https://github.com/expressjs/body-parser
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())
// console.log(req.body)


	res.send('add blog data');
})


module.exports = router;


