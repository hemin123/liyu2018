
const fs=require('fs');

let fd =fs.openSync('./1.txt','r');
//同步
let buf =Buffer.alloc(100);

console.log(buf);
fs.readSync(fd,buf,0,100,0);
//同步读到buf里面
console.log(buf);
