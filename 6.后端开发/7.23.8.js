

const EventEmitter =require('events');

// console.log(stream);
// console.log(Writable);

// const writer = new Writable();
// writer.write('sss');

class MyEventEmitter extends EventEmitter{
	constructor(data,offsetLength){
			super();
			this.data = data;
			this.offsetLength = offsetLength;
			this.on('newListener',(eventName)=>{
			
				if (eventName=='data') {
				console.log(this.listeners('data'));
				//空	
					setImmediate(()=>{
						this._dispatch();
					})
				}
			})
		}

		_dispatch(){
			let totalLength = this.data.length;
			let restLength = totalLength;

			while(restLength>0){
				let start =totalLength-restLength;
				let end =start+this.offsetLength; 
				let tmp = this.data.slice(start,end);
				let buf= Buffer.from(tmp);
				this.emit('data',buf);
				restLength=restLength-1;

			}
			this.emit('end');
			
			
		}
}

let data = `0hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh123`;
const rs = new MyEventEmitter(data,10);
let count =0;
let body ='';
rs.on('data',(chunk)=>{
	console.log(count++,chunk.toString());
	body+=chunk;
});

rs.on('end',()=>{

	console.log('body',body);
	// console.log('body',toString());
	console.log('end....');	
});