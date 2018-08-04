

const Router = require('express').Router;

const router = Router();
//地址是ip/user/id  id这一项需要和本文件请求的地址匹配
router.get("/",(req,res)=>{
	res.send('get user data');
})
router.post("/",(req,res)=>{
	res.send('add user data');
})
router.put("/",(req,res)=>{
	res.send('edit user data');
})
router.delete("/:id",(req,res)=>{
	console.log(req.params.id);
	res.send('delete user data');
})

module.exports = router;

