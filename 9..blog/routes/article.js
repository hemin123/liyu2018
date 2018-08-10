
const Router = require('express').Router;
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const  pagination = require('../util/pagination.js');
var multer  = require('multer');//npm install --save multer
var upload = multer({ dest: 'public/uploads/' });
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

	// res.render('admin/article',{
	// 	userInfo:req.userInfo
	// });
	// res.end("hhhh");

	// ArticleModel
	// .find()
	// .
	let options = {
		page:req.query.page,
		model:ArticleModel,
		query:{},
		projection:'-__v',
		sort:{_id:-1},

	}
	pagination(options)
	.then((data)=>{
		res.render('admin/article',{
			userInfo:req.userInfo,
			articles:data.docs,
			pages:data.pages,
			url:'/article'
		});
	})
})
router.get("/add",(req,res)=>{
	// console.log(CategoryModel.find({},'_id name'));
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

router.get("/edit/:id",(req,res)=>{
	let id = req.params.id;  //取id
	console.log(id);
	CategoryModel.find()
	.then((categories)=>{
		// console.log(category);
		ArticleModel.findById(id)
		.then((article)=>{
			console.log(article);
			res.render('admin/article_edit',{
				userInfo:req.userInfo,
				categories:categories,
				article:article
			});		
		});
	});
});

router.post('/edit',(req,res)=>{
	let body = req.body;
	console.log("body:::::",body);
	console.log("body:::::",body.id);
	console.log("body:::::",body.category);
	let id =body.id;
	let options = {
		category:body.category,
		title:body.title,
		intro:body.intro,
		content:body.content
	}
	ArticleModel.update({_id:id},options,(err,raw)=>{
		if(!err){
			res.render('admin/sucess',{
				userInfo:req.userInfo,
				message:'编辑文章成功',
				url:'/article'
			})	
		}else{
	 		res.render('admin/error',{
				userInfo:req.userInfo,
				message:'编辑文章失败,数据库操作失败'
			})	
		}
	});
})

router.get("/delete/:id",(req,res)=>{
	let id = req.params.id;
	
	ArticleModel.remove({_id:id},(err,raw)=>{
		if(!err){
			res.render('admin/sucess',{
				userInfo:req.userInfo,
				message:'删除文章成功',
				url:'/article'
			})				
		}else{
	 		res.render('admin/error',{
				userInfo:req.userInfo,
				message:'删除文章失败,数据库操作失败'
			})				
		}		
	})

});

/*router.post('/uploadimg',upload.single('upload'),(req,res)=>{

	let path="/uploads/"+req.file.filename;
	console.log(req.file);
	res.json({
		updoad:true,
		url:path
	})

})*/
router.post('/uploadimg',upload.single('upload'),(req,res)=>{
	let path = "/uploads/"+req.file.filename;
	res.json({
		uploaded:true,
        url:path
	})
})



module.exports = router;

