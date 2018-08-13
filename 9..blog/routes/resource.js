
const Router = require('express').Router;
const ArticleModel = require('../models/article.js');


const router = Router();
const multer  = require('multer');//npm install --save multer
// var upload = multer({ dest: '/public/resource/' });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,'/public/resource/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
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

	res.render('admin/resource',{
		userInfo:req.userInfo
	});
	// res.end("hhhh");
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
})




/*router.get('/delete/:id',(req,res)=>{
	// new ResourceModel
	
	ResourceModel.remove(_id=id)
	.then(raw=>{
		console.log(raw);
	})
	ResourceModel.findByIdAndRemove(id)
	.then(resource=>{
		let filepath = path.normalize(__dirname+'/../public/resource');
		fs.unlink(filepath,(err)=>{
			if (!err) {
				res.render('admin/sucess',{
					userInfo:userInfo,
					message:'删除成功'
					url:'/resource'
				})
			}else{

			}
		})
	})
	console.log(req.file);
})*/



module.exports = router;