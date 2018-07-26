
const {Readable}=require('stream');

class MyReadStream extends Readable{
	constructor(){
		super();
		this.index =0;
	}

	_read(){
		this.index++;
		if (this.index>5) {
			this.push(null);
		}else{
			let str =' '+this.index;
			let buf =Buffer.from(str);
			this.push(buf);
		}
	}
}

const rs = new MyReadStream();
rs.on('data',(chunk)=>{
	console.log(chunk.toString());
})
rs.on('end',(chunk)=>{
	console.log('body',toString());
})

