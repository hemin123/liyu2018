const Router = require('express').Router;
const CommentModel = require('../models/comment.js');
// const pages = require('../util/page.js');
const router = Router();



//加入数据库
router.post("/add",(req,res)=>{
	let body = req.body;
	new CommentModel({
		// article:body.id;
		user:req.userInfo._id,
		content:body.content
	})
	.save()
	.then(comment=>{
		code:0
	})

})

router.get("/list",(req,res)=>{


	// res.render('admin/admin',{
	// 	userInfo:req.userInfo
	// });
	res.end("hhhh");
})

module.exports = router;











