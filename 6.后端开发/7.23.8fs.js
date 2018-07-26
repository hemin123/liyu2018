
const fs = require('fs');
//打开
let fd = fs.openSync(./1.txt,  'w');
console.log(fd);
//写入
fs.writeSync(fd,'aaa');

fs.closeSync(fd);


/*let buf =Buffer.alloc(100);

fs.read()fd,buf,1,100,0,()=>


open
write
close*/