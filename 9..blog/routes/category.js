const Router = require('express').Router;
const UserModel = require('../models/user.js');
const router = Router();

router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next();
	} else{
		res.send('<h1>使用管理员账号登陆</h1>')
	}
})

//显示首页
router.get("/",(req,res)=>{

	res.render('admin/category_list',{
		userInfo:req.userInfo
	});
	// res.end("hhhh");
})
router.get("/add",(req,res)=>{

	res.render('admin/category_add',{
		userInfo:req.userInfo
	});
	// res.end("hhhh");
})




module.exports = router;