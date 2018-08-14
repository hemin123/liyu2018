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
    cb(null,'public/resource/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+path.extname(file.originalname));
  }
})

var upload = multer({ storage: storage })

router.use((req,res,next)=>{
	if (req.userInfo.isAdmin){
		next();
	} else{
		res.send('<h1>使用管理员账号登陆</h1>')
	}
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


router.post('/add',upload.single('file'),(req,res)=>{
	// new ResourceModel
	console.log('file');
	console.log(req.file);
	new ResourceModel({
		name:req.body.name,
		path:'/resource/'+req.file.filename
	})
	.save()
	.then(resource=>{
		res.render('admin/sucess',{
			userInfo:req.userInfo,
			message:'添加资源成功',
			url:'/resource'

		})
	})
})




router.get('/delete/:id',(req,res)=>{
	let id = req.params.id;
	// new ResourceModel
	
	// ResourceModel.remove(_id=id)
	// .then(raw=>{
	// 	console.log(raw);
	// })
	ResourceModel.findByIdAndRemove(id)
	.then(resource=>{
		console.log(resource.path);
		let filepath = path.normalize(__dirname+'/../public/'+resource.path);
		console.log(filepath);
		fs.unlink(filepath,(err)=>{
			if (!err) {
				res.render('admin/sucess',{
					userInfo:req.userInfo,
					message:'删除成功',
					url:'/resource'
				})
			}else{
				res.render('admin/error',{
					userInfo:req.userInfo,
					message:'删除资源失败'
				})

			}
		})
	}).catch(e=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:'删除数据库失败'
		})
	})
	// console.log(req.file);
})



module.exports = router;