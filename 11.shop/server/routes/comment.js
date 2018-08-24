const Router = require('express').Router;
const CommentModel = require('../models/comment.js');
const router = Router();



//加入数据库
router.post("/add",(req,res)=>{
	let body = req.body;
	new CommentModel({
		 article:body.id,
		user:req.userInfo._id,
		content:body.content
	})
	.save()
	.then(comment=>{
		CommentModel.getPaginationComments(req,{article:body.id})
		.then(data=>{
			res.json({
				code:0,
				data:data
			});
		})
		
	})

})

router.get("/list",(req,res)=>{

	let article = req.query.id;
	let query ={};
	if (article) {
		query.article=article;
	}
	CommentModel.getPaginationCommits(req,query)
	.then(data=>{
		res.json({
			code:'0',
			data:data	
		})
	})

	// res.render('admin/admin',{
	// 	userInfo:req.userInfo
	// });
	// res.end("hhhh");
})

module.exports = router;











