
const fs = require('fs');
//打开......写 异步写

fs.open('./1.txt',  'w',(err,fd)=>{
console.log(fd);
	if(!err){
		fs.write(fd,'sss',(err)=>{
			if(!err){
				console.log('success')
				fs.close(fd,(err)=>{
					if (!err) {
						console.log('close');
					}else{
						console.log('fail')
					}
				})
			}else{
				console.log('writefail...')
			}
			
		})
	}else{
		console.log(0);
	}

});

console.log('do something')