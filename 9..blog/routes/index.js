
const Router = require('express').Router;

const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const getCommonData = require('../util/getCommonData.js');
const pagination = require('../util/pagination.js');
const router = Router();

//显示首页
router.get("/",(req,res)=>{
	CategoryModel.find({},'_id name')
	.sort({order:1})
	.then((categories)=>{
		/*let options = {
			page: req.query.page,
			model:ArticleModel, 
			query:{}, 
			projection:'-__v', 
			sort:{_id:-1}, 
			populate:[{path:'category',select:'name'},{path:'user',select:'username'}]
		}

		pagination(options)
		.then((data)=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				articles:data.docs,
				page:data.page,
				list:data.list,
				pages:data.pages,
				categories:categories,
				url:'/articles'
			});	
		})	*/

	ArticleModel.getPaginationArticles(req)
	.then((data)=>{
		ArticleModel.find({},'_id title click')
		.sort({click:-1})
		.limit(10)
		.then((topArticles)=>{
			res.render('main/index',{
				userInfo:req.userInfo,
				articles:data.docs,
				page:data.page,
				list:data.list,
				pages:data.pages,
				categories:categories,
				topArticles:topArticles,
				url:'/articles'
			});
		})
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
		CategoryModel.find({},'_id name')
		.sort({order:1})
		.then((categories)=>{
			ArticleModel.find({},'_id title click')
			.sort({click:-1})
			.limit(10)
			.then((topArticles)=>{
				res.render('main/detail',{
					userInfo:req.userInfo,
					article:article,
					categories:categories,
					topArticles:topArticles
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
/*router.get("/list/:id",(req,res)=>{
	let id = req.params.id;  //取id
	// ArticleModel.findById(id)
	console.log(ArticleModel.find({},' _id  title intro'));
	ArticleModel.find()
	.then(article=>{
		res.render('main/lists',{
			userInfo:req.userInfo,
			article:article,
			list:list
		})			
	})

	// res.end("come");
});*/
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
				url:'/articles'
			});	
		})	
	})

	// res.end("come");
});

module.exports = router;