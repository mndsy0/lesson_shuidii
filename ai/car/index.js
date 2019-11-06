//fileSystem 内置模块
const fs = require('fs');
// console.log('hello node');
const AipImageClassidyClient =require("baidu-aip-sdk").imageClassify; //图片分类客户端
const image = fs.readFileSync("car.jpg").toString("base64");//base64 同步读取文件 图片字符化
// console.log(image);
const client = new AipImageClassidyClient('17711770','SL6cK94xzMjnoyntcw1vQG2x','KCZivRs3TyOXUiZiuHsRy67FLuFGHeqW');

client
  .carDetect(image)
  .then(function(result){
      console.log(result)
  })
// AipImageClassidyClient
// //回调函数
// //文件在哪？ 磁盘里
// //js 在哪里运行？ 内存 I/o操作
// fs.readFile('./texft.txt',function(err,date){
//     if(err){
//         return console.error(err);
//     }
//     console.log(date.toString());
// })
