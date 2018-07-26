// 实现可写流，使用stream模块


const {Writable} =require('stream');
//拿到这个类wrtable
// console.log(stream);
// console.log(Writable);

// const writer = new Writable();//直接用用不了
// writer.write('sss');

class myWriter extends Writable{//继承这个类
	constructor(){
		super();
	}
	_write(chunk,encoding,callback){
		// console.log(chunk);
		console.log(chunk.toString());
		callback();
	}
}

const writer = new myWriter();

writer.on('finish',()=>{
	console.log('finish...');
});

writer.write('www','utf8',()=>{
	console.log('ggg');
});
writer.write('ww','utf8',()=>{
	console.log('ggg2');
});

writer.end();

// process.stdin.pipe(writer);

