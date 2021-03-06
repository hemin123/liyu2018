// ajax  a标签 表单提交前后台的处理


const Router = require('express').Router;
const UserModel = require('../models/user.js');
// const pages = require('../util/page.js');
const CommentModel = require('../models/comment.js');
const hmac = require('../util/hmac.js');

const fs=require('fs');
const path=require('path');
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

router.get('/comments',(req,res)=>{
	CommentModel.getPaginationComments(req)
	.then(data=>{
		res.render('admin/comments',{
			userInfo:req.userInfo,
			comments:data.docs,
			page:data.page,
			pages:data.pages,
			list:data.list
		})
	})
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
	
})

router.get('/site',(req,res)=>{
	let filePath =path.normalize(__dirname+'/../site-info.json');
	fs.readFile(filePath,(err,data)=>{
		if (!err) {
			let site =JSON.parse(data);
			res.render('admin/site',{
				userInfo:req.userInfo,
				site:site
			});
		}else{
			console.log(err);
		}
	})
})

router.post("/site",(req,res)=>{
	let body = req.body;
	let site ={
		name:body.name,
		author:{
			name:body.authorName,
			intro:body.authorIntro,
			image:body.authorImage,
			wechat:body.authorWechat
		},
		icp:body.icp
	}
	site.carouseles =[];
	// typeof body.carouselUrl=='object'类型走下面对象 数组
	//length判断没用   object就是数组
	if (body.carouselUrl.length && (typeof body.carouselUrl=='object')) {
		for (let i = 0; i < body.carouselUrl.length; i++) {
			site.carouseles.push({
				url:body.carouselUrl[i],
				path:body.carouselPath[i]
			})
		}
	}else{//string
		site.carouseles.push({
			url:body.carouselUrl,
			path:body.carouselPath
		})

	}

	site.ads = [];
	if (body.adUrl.length && (typeof body.adUrl=='object')) {
		for (var i = 0; i < body.adUrl.length; i++) {
			site.ads.push({
				url:body.adUrl[i],
				path:body.adPath[i]
			})
		}
	}else{
		site.ads.push({
			url:body.adUrl,
			path:body.adPath
		})
	}
	let strSite =JSON.stringify(site);
	let filePath =path.normalize(__dirname+'/../site-info.json');
	fs.writeFile(filePath,strSite,(err)=>{
		if (!err) {
			res.render('admin/sucess',{
				userInfo:req.userInfo,
				message:'更新站点信息成功',
				url:'/admin/site'
			})
		}else{
			res.render('admin/error',{
				userInfo:req.userInfo,
				message:'删除失败，写入错误'
			})
		}
	})

})


router.get('/password',(req,res)=>{
	res.render('admin/password',{
		userInfo:req.userInfo
	})

})
router.post('/password',(req,res)=>{
	let body=req.body;
	console.log(body);

	UserModel.update({_id:req.userInfo._id},{
		password:hmac(req.body.password)
	})
	.then(raw=>{
		req.session.destroy();
		res.render('admin/sucess',{
			userInfo:req.userInfo,
			message:'更新密码成功',
			url:'/'
		})			
	})

})


module.exports = router;