const Router = require('express').Router;
const path = require('path');
const fs = require('fs');

const ResourceModel = require('../models/resource.js')
const pagination = require('../util/pagination.js');


const router = Router();
const multer  = require('multer');//npm install --save multer
// var upload = multer({ dest: '/public/resource/' });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'public/product-images/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+path.extname(file.originalname));
  }
})

const productModel=require('../models/product.js')


var upload = multer({ storage: storage })

router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next();
	} else{
		res.send({
			code:10
		});
	}
})

router.post('/uploadImage',upload.single('file'),(req,res)=>{
	const filePath ='http://127.0.0.1:3000/product-images/' +req.file.filename
	res.send(filePath);
	
})
router.post('/uploadDetailImage',upload.single('file'),(req,res)=>{
	const filePath='http://127.0.0.1:3000/product-image/'+req.filename
	res.json({
		"sucess":true,
		"msg":"上传成功",
		"file_path":filePath
	});
})



router.post('/add',upload.single('file'),(req,res)=>{
	// new ResourceModel
	console.log('file');
	console.log(req.file);
	new ResourceModel({
		name:req.body.name,
		path:'/uploads/'+req.file.filename
	})
	.save()
	.then(resource=>{
		res.render('admin/sucess',{
			userInfo:req.userInfo,
			message:'添加资源成功',
			url:'/uploads'

		})
	})
})





//显示资源列表
router.get("/",(req,res)=>{
	let options = {
        page: req.query.page,//需要显示的页码
        model:ResourceModel, //操作的数据模型
        query:{}, //查询条件
        projection:'-__v', //投影，
        sort:{_id:-1}, //排序
    }
    pagination(options)
    .then(data=>{
		 	res.render('admin/resource',{
				userInfo:req.userInfo,
				resources:data.docs,
				page:data.page,
				pages:data.pages,
				list:data.list
			});     	
    })
})
router.get("/add",(req,res)=>{

	res.render('admin/resource_add',{
		userInfo:req.userInfo
	});
	// res.end("hhhh");
})







module.exports = router;