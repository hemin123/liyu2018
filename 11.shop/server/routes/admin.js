// ajax  a标签 表单提交前后台的处理


const Router = require('express').Router;
const UserModel = require('../models/user.js');
// const pages = require('../util/page.js');
const CommentModel = require('../models/comment.js');
const hmac = require('../util/hmac.js');
const pagination = require('../util/pagination.js');

const fs=require('fs');
const path=require('path');
const router = Router();


router.get("/init",(req,res)=>{
	//插入数据到数据库
	new UserModel({
		username:'admin',
		password:hmac('admin'),
		isAdmin:true
	})
	.save((err,newUser)=>{
		if(!err){//插入成功
			res.send('ok')
		}else{
			res.send('err')				
		}
	})
});

router.post("/login",(req,res)=>{
	let body = req.body;
	//定义返回数据
	let result  = {
		code:0,// 0 代表成功 
		message:''
	}
	UserModel
	.findOne({username:body.username,password:hmac(body.password)})
	.then((user)=>{
		if(user){//登录成功

			 req.session.userInfo={
			 	_id:user._id,
			 	username:user.username,
			 	isAdmin:user.isAdmin
			 }
			 result.data = {
			 	username:user.username
			 }

			 res.json(result);

		}else{
			result.code = 1;
			result.message = '用户名和密码错误'
			res.json(result);
		}
	})

})


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

router.get("/count",(req,res)=>{
	res.json({
		code:0,
		data:{
			usernum:300,
			ordernum:301,
			productnum:302
		}
	})
})
router.get('/users',(req,res)=>{
	let options={
		page:req.query.page,
		model:UserModel,
		query:{},
		projection:'',
		sort:{_id:-1}
	}
	pagination(options)
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