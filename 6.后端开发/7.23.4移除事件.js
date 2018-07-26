


const eee= require ('events');
//返回类

class MyEmitter extends eee{

}
//继承
// my.on===my.addListener
const my = new MyEmitter(); 
let fn1 = ()=>{
	console.log('text1');
}
my.on('test',fn1);
// my.on('test',()=>{//监听事件
// 	console.log('ggg1');
// })
my.emit('test');//触发事件
my.removeListener('test',fn1);  //移除事件
my.emit('test');//触发事件


my.on('newListen',(event,listen)=>{ //触发事件前触发
	if (event==='event') {
		my.on('event',()=>{
			console.log('b');
		})
	}
})