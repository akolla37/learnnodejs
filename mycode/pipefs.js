var fs = require('fs');
var zlib = require('zlib');

var readme = fs.createReadStream(__dirname + '/license.txt',{
	encoding:'utf8',
	highWaterMark: 1 * 1024});

var writeme = fs.createWriteStream(__dirname + '/tmp.txt');	
var compressed = fs.createWriteStream(__dirname + '/tmp.txt.gz');	
var gzip = zlib.createGzip();

readme.pipe(writeme);

readme.pipe(gzip).pipe(compressed);