var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	res.writeHead(200,{
		'Content-Type':'application/json',
	});
	var jdata = {
		firstname: 'Alex',
		lastname: 'Smith',
		address:{
			city: 'Dallas',
			state: 'TX',
			country: 'U.S.A.'
		}
	}
	res.end(JSON.stringify(jdata));
	
}).listen(1338,'127.0.0.1');