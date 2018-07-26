//fs.writeFileSync(file, data[, options])

//fs.readFileSync(path[, options])
//返回值
const fs = require('fs');
// fs.writeFileSync('./1.txt','ttt');
 // fs.writeFile('./1.txt','ttt',(err)=>{
 // 	if (!err) {
 // 		console.log('sucess');
 // 	}else{
 // 		console.log('fail')
 // 	}
 // });

 let data = fs.readFileSync('./1.txt',{flag:'r'});
 console.log(data);
 console.log(data.toString());

  let data = fs.readFileSync('./1.txt',{flag:'r'},()=>{
  	
  });
 console.log(data);
 console.log(data.toString());