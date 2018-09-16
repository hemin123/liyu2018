


const Router = require('express').Router;
const UserModel = require('../models/user.js');

const router = Router();


//普通用户登录权限控制
router.use((req,res,next)=>{
	if(req.userInfo._id){
		next()
	}
	else{
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
		//已有
		if (user.shipping) {
			user.shipping.push(body)
		}//没有
		else{
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
//獲取登錄用戶
router.post('/list',(req,res)=>{
	UserModel.findById(req.userInfo._id)
	.then(user=>{
		res.json({
			code:0,
			data:user.shipping
		})					
	})
	.catch(e=>{
		res.json({
			code:1,
			message:'獲取失敗'
		})
	})
	
})
//delete
router.put('/delete',(req,res)=>{
	let body = req.body;
	UserModel.findById(req.userInfo._id)
	.then(user=>{
		user.shipping.id(body.shippingId).remove();
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










