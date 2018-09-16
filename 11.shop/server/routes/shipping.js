


const Router = require('express').Router;
const UserModel = require('../models/user.js');

const router = Router();


//普通用户登录权限控制
router.use((req,res,next)=>{
	if(req.userInfo._id){
		next()
	}else{
		res.json({
			code:10
		})
	}
})
//增加地址
router.post('/',(req,res)=>{
	let body = req.body;
	UserModel.findById(req.userInfo._id)
	.then(user=>{
		if (user.shipping) {
			user.shipping.push(body)
		}else{
			user.shipping =[body]
		}
		user.save()
		.then(newUser=>{
			res.json({
				code:0,
				data:user.shipping
			})			
		})
	})
	
})

module.exports = router;










