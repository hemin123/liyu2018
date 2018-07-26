// fs.createWriteStream(path[, options])
// rs.createReadStream(path[, options])
const fs1 = require('fs');

fs=fs1.createWriteStream('./2.txt');//写
//没有这个文件会自己创建   可写流        

/*
fs.on('open',()=>{
	console.log('打开管道');
})
fs.on('close',()=>{
	console.log('close最后关闭管道');
})
fs.on('finish',()=>{
	console.log('close完成退出');
})

fs.write('aaa');
fs.write('bbb');
fs.end();//end函数调用finish函数
*/

rs=fs1.createReadStream('./1.txt')//读
//没有这个文件会报错......可读流

/*
let body ='';
rs.on('data',(chunk)=>{
	body=body+chunk;//会一块一块的以流的形式读
	//chunk是buffer,字符串拼接就变成字符串
	console.log(chunk);
})
rs.on('end',()=>{
	console.log('读出来的数据'+body);
	console.log('read file  end');
})
*/

rs.pipe(fs);
//读1写到2.txt













/*
rs.createReadStream(path[, options])

open close 

data
chunk

end

rs.pipe()
*/