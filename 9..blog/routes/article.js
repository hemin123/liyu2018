
const Router = require('express').Router;
 const UserModel = require('../models/user.js');
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');

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

	res.render('admin/article',{
		userInfo:req.userInfo
	});
	// res.end("hhhh");
})
router.get("/add",(req,res)=>{
	console.log(CategoryModel.find({},'_id name'));
	CategoryModel.find({},'_id name')
	.sort({ order:1 })
	.then((categories)=>{

		res.render('admin/article_add',{
			userInfo:req.userInfo,
			categories:categories
		});		
	})

	// res.end("hhhh");
})

router.post("/add",(req,res)=>{

	/*res.render('admin/category_add',{
		userInfo:req.userInfo
	});*/
	let body = req.body;
	console.log("body:::",body);
	new ArticleModel({
		category:body.category,
		user:req.userInfo._id,
		title:body.title,
		intro:body.intro,
		content:body.content
	})
	.save()
	.then((article)=>{
		
			res.render('admin/sucess',{
				userInfo:req.userInfo,
				message:'新增分类成功',
				url:'/article'
			})
		
	})
	.catch((e)=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'新增失败。数据库错误'
		})
	})


		
})

module.exports = router;

