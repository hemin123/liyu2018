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

	res.render('admin/admin',{
		userInfo:req.userInfo
	});
	// res.end("hhhh");
})

router.get('/users',(req,res)=>{
	UserModel.find({},'_id username isAdmin')
	.then((user)=>{
		res.rnder('admin/user_list',
			{userInfo:req.userInfo,
				users:users});


	})
	
})


module.exports = router;