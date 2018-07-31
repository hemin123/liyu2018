
const wish = require('../Model/WishModel.js');
const swig = require('swig');

class Wish{

	index(req,res,...args){
		// console.log('Wish index....');
		console.log(args);
		// res.end('ok');
		wish.get((err,data)=>{
			if (!err) {
				console.log('sucess');
				let template =swig.compileFile(__dirname+'/../view/index.html');
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
		console.log(args);
		wish.add((err,data)=>{

		})
	}
	del(req,res,...args){
		console.log(args);
		wish.remove((err)=>{
			if(!err){

			}
		})
	}
};

module.exports = new Wish();