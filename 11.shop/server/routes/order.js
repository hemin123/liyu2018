


const Router = require('express').Router;
const UserModel = require('../models/user.js');

const router = Router();

//获取购物车数量
router.get('/orderProductList',(req,res)=>{
	UserModel.findById(req.userInfo._id)
	.then(user=>{
		user.getOrderProductList()
		.then(cart=>{
			res.json({
				code:0,
				data:cart
			})
		})
		
	})
	.catch(e=>{
		res.json({
			code:1,
			message:'获取购物车失败'
		})
	})	
	
})



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


module.exports = router;










