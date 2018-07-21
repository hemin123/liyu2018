
//模块定义
//console.log(exports);
// console.log(module);
// console.log(module.exports);
// console.log(module.exports===exports);

 let str='red';

let  fn =()=>{
	console.log('111');
}

 let obj ={name:'hhs',age:18};
// console.log(obj);

// exports.str=str;
exports.obj=obj;
exports.fn=fn;

 module.exports.str=str;
 // module.exports.obj=obj;
 // module.exports.fn=fn;


//对象赋值的是地址
//一旦用 module.exports.的话 .exports.就不能用了.会再复制一份
 // module.exports = {
 // 	str1:str,
 // 	fn:fn,
 // 	obj:obj
 // }

 // 一个一个导入属性exports.




