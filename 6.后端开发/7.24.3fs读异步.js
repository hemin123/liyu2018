const fs = require('fs');
//异步读

// let fd = fs.openSync('./1.txt','w');
// let buf =Buffer.alloc(100);

fs.open('./1.txt','r',(err,fd)=>{
	if (!err) {
		let buf=Buffer.alloc(100);
		fs.read(fd,buf,0,100,0,(err)=>{
			if (!err) {
				console.log('sucess');
				fs.close(fd,(err)=>{
					if (!err) {
						console.log('close sucess');
						console.log(buf);
					}else{
						console.log('false');
					}
					
				})
			}else{
				console.log('fail');
			}

		})
	}else{
		console.log('open err')
	}
})



