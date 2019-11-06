const fs = require('fs');
const image =fs.readFileSync('./cp.jpg').toString('base64');

const AipOcrClient = require('baidu-aip-sdk').ocr;

const client = new AipOcrClient('17712436','kG5A30mdHrLlqzbMrhMtx6pm','fPOoQT9312wGIMZFabEzleeUfAZTyskD');

const options={};
options["multi_detect"]="true";
client.licensePlate(image, options).then(function(result){
    console.log(result);
})//车牌号