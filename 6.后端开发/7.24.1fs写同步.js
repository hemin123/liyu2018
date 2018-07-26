
const fs = require('fs');
//打开
let fd = fs.openSync('./1.txt',  'w');
console.log(fd);
//写入
fs.writeSync(fd,'aaahhh');
//保存退出
fs.closeSync(fd);


//持久存储 1文件 2数据库