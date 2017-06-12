var fs = require('fs');

var data = fs.readFileSync(__dirname + '/buf.js','utf8');

console.log(data);

console.log("================================");
console.log("================================");
//uses libuv for assynchronous i/o operations
//node readFile is assync operation
var data2 = fs.readFile(__dirname + '/buf.js',function(err, data){
	console.log('Error : ' + err);
	console.log('Data : ' + data);
});
console.log("*************************");
console.log("================================");
console.log("*************************");