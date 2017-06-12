var fs = require('fs');

var readme = fs.createReadStream(__dirname + '/license.txt',{
	encoding:'utf8',
	highWaterMark: 1 * 1024});

var writeme = fs.createWriteStream(__dirname + '/tmp.txt');	


readme.on('data', function(chunk){
	//console.log(chunk.length);
	console.log(chunk);
	console.log("---------------");
	writeme.write(chunk);
	writeme.write('\n=============\n');
});