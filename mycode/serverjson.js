var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200,{
		'Content-Type':'application/json',
	});
	fs.createReadStream(__dirname + "/jsonobj.json").pipe(res);
	
}).listen(1338,'127.0.0.1');