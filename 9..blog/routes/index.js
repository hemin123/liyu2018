
const Router = require('express').Router;

const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const CommentModel = require('../models/comment.js');
const getCommonData = require('../util/getCommonData.js');
const pagination = require('../util/pagination.js');
const router = Router();

//显示首页
router.get("/",(req,res)=>{	

	ArticleModel.getPaginationArticles(req)
	.then((pageData)=>{
		getCommonData()
		.then(data=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				articles:pageData.docs,
				page:pageData.page,
				list:pageData.list,
				pages:pageData.pages,
				categories:data.categories,
				topArticles:data.topArticles,
				url:'/articles'
			});
		})
	
	})
	
})

//ajax请求获取文章列表的分页数据
router.get("/articles",(req,res)=>{
	let options = {
		page: req.query.page,
		model:ArticleModel, 
		query:{}, 
		projection:'-__v', 
		sort:{_id:-1}, 
		populate:[{path:'category',select:'name'},{path:'user',select:'username'}]
	}

	pagination(options)
	.then((data)=>{
		res.json({
			code:'0',
			data:data
		})
	})
});

//详情页
router.get("/view/:id",(req,res)=>{
	let id = req.params.id;  //取id
	ArticleModel.findByIdAndUpdate(id,{$inc:{click:1}},{new:true})
	.populate('category','name')//获取分类名称
	.then(article=>{
		getCommonData()
		.then((data)=>{
			CommentModel.getPaginationComments(req,{article:id})
			.then(pageData=>{
				res.render('main/detail',{
					userInfo:req.userInfo,
					article:article,
					categories:data.categories,
					topArticles:data.topArticles,
					comments:pageData.docs,
					page:pageData.page,
					list:pageData.list,
					pages:pageData.pages,
					category:article.category._id.toString()
				})			      	
			})
		})

		
		// getCommonData()
		// .then(data=>{
				
		// })
	})

	//res.end("come");
});

//列表页

router.get("/list/:id",(req,res)=>{
	let id = req.params.id;  //取id
	ArticleModel.getPaginationArticles(req,{category:id})
	.then(pageData=>{
		getCommonData()
		.then(data=>{
			res.render('main/list',{
				userInfo:req.userInfo,
				articles:pageData.docs,
				page:pageData.page,
				list:pageData.list,
				pages:pageData.pages,
				categories:data.categories,
				topArticles:data.topArticles,
				category:id,
				url:'/articles'
			});	
		})	
	})

	// res.end("come");
});

module.exports = router;