
//buffer

//const buf = new Buffer('hello');
//buffer存放地址

//两个16进制数 一字节

// 8bit位=1b字节
//console.log(buf);

//三个十六进制  一个汉字
const bbb = Buffer.from('kua');
const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10);
buf1[4]=10;
buf1[2]=0x11;
console.log(bbb);
//buffer上面的静态方法