

// event
//返回一个类

const eee= require ('events');
//返回类

class MyEmitter extends eee{

}
//继承
// my.on===my.addListener
const my = new MyEmitter(); 
my.on('test',()=>{//监听事件
	console.log('ggg1');
})
my.addListener('test',()=>{//监听事件
	console.log('ggg2');
})
//两个一样

my.once('test',()=>{//监听事件
	console.log('ggg3');
})//只能触发一次


my.emit('test');//触发事件

//事件名字可以一样，默认最多十个
//emitter.setMaxListeners();


my.on('test4',(a1,a2)=>{//监听事件
	console.log('ggg',a1,a2);
})
my.emit('test4','aa','bb');//触发事件