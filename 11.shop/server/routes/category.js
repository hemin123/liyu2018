const Router = require('express').Router;
const UserModel = require('../models/user.js');
const CategoryModel = require('../models/category.js');
const pagination = require('../util/pagination.js');
const router = Router();

router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next();
	} else{
	 // res.send('<h1>使用管理员账号登陆</h1>')
		 res.send({
		 	code:10
		 });

	}
})
router.post("/",(req,res)=>{
	let body = req.body;
	CategoryModel
	.findOne({name:body.name,pid:body.pid})
	.then((cate)=>{
		if(cate){
	 		res.json({
	 			code:1,
	 			message:"添加分类失败,分类已存在"
	 		})
		}else{
			new CategoryModel({
				name:body.name,
				pid:body.pid
			})
			.save()
			.then((newCate)=>{
				if(newCate){
					if(body.pid == 0){//如果添加的是一级分类,返回新的一级分类
						CategoryModel.find({pid:0},"_id name")
						.then((categories)=>{
							res.json({
								code:0,
								data:categories
							})	
						})						
					}else{
						res.json({
							code:0
						})
					}
					
				}
			})
			.catch((e)=>{
		 		res.json({
		 			code:1,
		 			message:"添加分类失败,服务器端错误"
		 		})
			})
		}
	})
})
router.get("/",(req,res)=>{
	let pid = req.query.pid;
	let page =req.query.page;

	if (page) {
		CategoryModel
		.getPaginationCategories(page,{pid:pid})
		.then((result)=>{
			res.json({
				code:0,
				data:{
					current:result.current,
					total:result.total,
					pageSize:result.pageSize,
					list:result.list
				}
			})		
		})	
	}else{
		CategoryModel.find({pid:pid},"_id name pid order")
		.then((categories)=>{
			res.json({
				code:0,
				data:categories
			})
			
		})
		.catch((e)=>{
			res.json({
				code:1,
				message:'新增失败。服务器错误'
			})
		})
	}

	 
})






//显示首页
router.get("/",(req,res)=>{

	let options = {
		page: req.query.page,//需要显示的页码
		model:CategoryModel, //操作的数据模型
		query:{}, //查询条件
		projection:'_id name order', //投影，
		sort:{order:1} //排序
	}

	pagination(options)
	.then((data)=>{
		res.render('admin/category_list',{
			userInfo:req.userInfo,
			categories:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/category'
		});	
	})
	
	// res.end("hhhh");
})

router.get("/add",(req,res)=>{

	res.render('admin/category_add',{
		userInfo:req.userInfo
	});
	// res.end("hhhh");
})
router.post("/add",(req,res)=>{

	/*res.render('admin/category_add',{
		userInfo:req.userInfo
	});*/
	let body = req.body;
	console.log("body:::",body);
	CategoryModel
	.findOne({name:body.name})
	.then((cate)=>{//新建的分类如果已存在cate是1，否则0
		if (cate) {
			res.render('admin/error',{
			userInfo:req.userInfo,
			message:'新增分类失败，重名'
			});
	 
/*		}else{
			new CategoryModel({
				name:body.name,
				order:body.order
			})
			.save()
			.then(newCate)=>{
				if (newCate) {//新增成功
					res.render('admin/sucess',{
						userInfo:req.userInfo,
						message:新增分类成功,
						url:'./category'
					});

				}
			}*/
		}else{
			new CategoryModel({
				name:body.name,
				order:body.order
			})
			.save()
			.then((newCate)=>{
				if(newCate){//新增成功,渲染成功页面
					res.render('admin/sucess',{
						userInfo:req.userInfo,
						message:'新增分类成功',
						url:'/category'
					})
				}
			})
			.catch((e)=>{
				res.render('admin/error',{
					userInfo:req.userInfo,
					message:'新增失败。数据库错误'
				})
			})
			/*res.render('admin/sucess',{
				userInfo:req.userInfo
			});*/

		}
	})

	 
})

router.get('/edit/:id',(req,res)=>{
	let id = req.params.id;
	CategoryModel.findById(id)
	.then((category)=>{
		res.render('admin/category_edit',{
			userInfo:req.userInfo,
			category:category
		});
	});		
		// res.end("hhhh");
		
});
router.post('/edit',(req,res)=>{
	let body = req.body;
	/*.then(category=>{
		if (category.name == body.name&&category.order == body.order) {
			res.render('admin/error',{
				userInfo:userInfo
			})
		}
	})
	console.log('hhh');
		res.render('admin/category_edit',{
					userInfo:req.userInfo
				});
		// res.end("hhhh");
*/

	CategoryModel.findById(body.id)
	.then((category)=>{
		if(category.name == body.name && category.order == body.order){
	 		res.render('admin/error',{
				userInfo:req.userInfo,
				message:'请修改数据后提交'
			})				
		}else{
			CategoryModel.findOne({name:body.name,_id:{$ne:body.id}})
			.then((newCategory)=>{
				if(newCategory){
			 		res.render('admin/error',{
						userInfo:req.userInfo,
						message:'编辑分类失败,已有同名分类'
					})						
				}else{
					CategoryModel.update({_id:body.id},{name:body.name,order:body.order},(err,raw)=>{
						if(!err){
							res.render('admin/sucess',{
								userInfo:req.userInfo,
								message:'修改分类成功',
								url:'/category'
							})					
						}else{
					 		res.render('admin/error',{
								userInfo:req.userInfo,
								message:'修改分类失败,数据库操作失败'
							})					
						}
					})					
				}
			})
		}
	})
		
})

router.get("/delete/:id",(req,res)=>{
	let id = req.params.id;
	
	CategoryModel.remove({_id:id},(err,raw)=>{
		if(!err){
			res.render('admin/sucess',{
				userInfo:req.userInfo,
				message:'删除分类成功',
				url:'/category'
			})				
		}else{
	 		res.render('admin/error',{
				userInfo:req.userInfo,
				message:'删除分类失败,数据库操作失败'
			})				
		}		
	})

});



module.exports = router;