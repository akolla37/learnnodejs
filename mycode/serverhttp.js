var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200,{
		'Content-Type':'text/html',
	});
	var htmlcontent = fs.readFileSync(__dirname + "/index.html");
	res.end(htmlcontent.toString());

}).listen(1337,'127.0.0.1');