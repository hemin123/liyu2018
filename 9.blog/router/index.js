
const Router = require('express').Router;

const router = Router();

//显示首页
router.get("/",(req,res)=>{

	/*res.render('main/index',{
		userInfo:req.userInfo
	});*/
	res.end("ok");
})

module.exports = router;