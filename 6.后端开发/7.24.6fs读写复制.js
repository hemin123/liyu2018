//添加 读 更改删除

const fs = require('fs');
const uuidv1 = require('uuid/v1');

const filePath ='./7.24.6.json';

let add = (id,name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if (!err) {
			let obj =JSON.parse(data);
			obj.push({
				'id':id,
				'name':name
			})
			console.log(obj);
			let str = JSON.stringify(obj);
			fs.writeFile(filePath,str,(err)=>{
				if (!err) {
					console.log('data');
				}else{
					callback(err);
				}

			 })
		}else{
			console.log('err');
		}	
	})

	 
}

/*add (11,55,(err,data)=>{
	if (!err) {
		console.log(data);
	}else{

	}
});*/





let get =(id,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if (!err) {
			let obj =JSON.parse(data);
			let result ={};

// forEach          every   some有真就结束了true 
		//  obj.forEach(function(val){
		// 	拿到数据就不再循环了
		// foreach不能用break报错
		//结束本次循环,不影响其他循环

		//every没有返回值returnfalse/true

		//some有真才是真,


		/*obj.forEach((val)=>{
			console.log(val);
			if (val['id']==id) {
				result=val;
				return false;
			}
			console.log(val);
		});	*/
	/*	obj.every((val)=>{
			console.log(val);
			if (val['id']==id) {
				result=val;
				return false;
			}
			console.log(val);
		});	*/
		obj.some((val)=>{
			console.log(val);
			if(val['id']==id){
					result=val;
					return true;
				}			
				console.log(obj);
		})
			
			/*for(key in obj){
				if(obj[key].id==id){
					result=obj[key];
					break;
				}			
				console.log(obj);
			}*/
			
			callback(null,result);
		}else{
			console.log(err);
		}
	
	})
}
// get(1,(data,err)=>{
// 	if(!err){
// 		console.log(data);
// 		//有没有数据判断
// 	}else{
// 		console.log('err',err);
// 	}

// })


let updata =(id,name,callback)=>{
	fs.readFile(filePath,(err,data)=>{
		if (!err) {
			let obj =JSON.parse(data);

			obj.some((val)=>{
				// console.log(val);
				if(val['id']==id){
					val['name']=name;
					return true;
				}			
					// console.log(val);
			})
			// console.log(obj);
			let str = JSON.stringify(obj);
			fs.writeFile(filePath,str,(err,data)=>{
				if (!err) {
					console.log('sucess')
				}else{
					callback(err);
				}
			})
		}else{
			callback(err);
		}
	})
}
/*
updata('1','hhh',(data,err)=>{
	if (!err) {
		console.log(data);
	}else{
		console.log(err);
	}
})
*/


let deletes = (id,callback)=>{
fs.readFile(filePath,(err,data)=>{
		if (!err) {
			let obj =JSON.parse(data);
/*
			var result =[];
			obj.filter((val)=>{
				
				if (val['id']==id) {
					return false;
				}
				console.log(val);
				let str = JSON.stringify(val);
				result=result+str;

			})
			*/
			//下面这个是复制老师的
			let newObj = obj.filter((val)=>{
				return val['id'] != id
			});
			let result = JSON.stringify(newObj);

			console.log(result);
			fs.writeFile(filePath,result,(data,err)=>{
				if (!err) {
					console.log('data');
				}else{
					callback(err);
				}

			 })


		}else{
			callback(err);
		}
})
}
/*obj.filter((val)=>{

})*/

deletes('1',(data,err)=>{
	if (!err) {
		console.log(data);
	}else{
		console.log(err);
	}
})