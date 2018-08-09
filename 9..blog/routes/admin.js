// ajax  a标签 表单提交前后台的处理


const Router = require('express').Router;
const UserModel = require('../models/user.js');
// const pages = require('../util/page.js');
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
/*	UserModel.find({},'_id username isAdmin')
	.then((user)=>{
		// console.log(user);
		res.render('admin/user_list',
			{userInfo:req.userInfo,
				users:user});	
	})*/

	let page =req.query.page;
	let limit = 2;
	// page-1)*limite
	UserModel.estimatedDocumentCount({})
	.then((count)=>{
		let pages = Math.ceil(count / limit);
		if(page > pages){
			page = pages;
		}
		let list = [];

		for(let i = 1;i<=pages;i++){
			list.push(i);
		}
		
		let skip = (page - 1)*limit;

		UserModel.find({},'_id username isAdmin')
		.skip(skip)
		.limit(limit)
		.then((users)=>{
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users:users,
				page:page*1,
				list:list
			});			
		})

	})

/*	var options={
	page:req.query.page,
	model:UserModel,
	show:'_id username isAdmin',

	}*/

	/*pages.page(options)
	.then(data){
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:users,
			page:page*1,
			list:list
		});		
	}*/


	
})


module.exports = router;