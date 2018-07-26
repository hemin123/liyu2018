

// event
//返回一个类

const eee= require ('events');//使用events模块
//返回类

class MyEmitter extends eee{

}
//继承

const my = new MyEmitter(); 
my.on('test',()=>{//监听事件
	console.log('ggg');
})
my.emit('test');//触发事件

//事件名字可以一样，默认最多十个
//emitter.setMaxListeners();