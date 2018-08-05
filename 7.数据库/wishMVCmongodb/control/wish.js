// http://127.0.0.1:3000/wish/index

const wish = require('../Model/WishModel.js');
const swig = require('swig');
const querystring=require('querystring');

const MongoClient = require('mongodb').MongoClient;


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'wish';



class Wish{

	index(req,res,...args){
		// console.log('Wish index....');
		console.log(args);
		// res.end('ok');
		wish.get((err,data)=>{
			if (!err) {
				console.log('sucess');
				let template =swig.compileFile(__dirname+'/../view/wish.html');
				let html = template({
					data:data
				});
				res.setHeader('Content-type','text/html;charast:utf-8');
				res.end(html);
			}else{
				console.log(err);
			}
		})
	}
	add(req,res,...args){
		console.log("add data");
		let body='';
		req.on('data',(chunk)=>{
			body+= chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(body);
			// console.log(obj);//后台可以看到
			wish.add(obj,(err,data)=>{
				if(!err){
					let result = {
						status:0,
						data:data
					}
					let resultJson=JSON.stringify(result);
					res.end(resultJson);
				}else{
					let result = {
						status:101,
						data:'err'
					}
					let resultJson=JSON.stringify(result);
					res.end(resultJson);
					console.log(err)
				}

			});

		});
		// wish.add((err,data)=>{

		// })
	}
	del(req,res,...args){
		console.log(args);
		wish.remove(args[0],(err)=>{
			if(!err){
				let resultJson = JSON.stringify({
					status:0
				})
				res.end(resultJson);

			}
		})
	}
};

module.exports = new Wish();