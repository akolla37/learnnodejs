var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	if(req.url === '/'){
		res.writeHead(200,{
			'Content-Type':'text/html',
		});
		fs.createReadStream(__dirname + "/index.html").pipe(res);
	}else if(req.url === '/api'){
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
	}else if(req.url === '/json'){
		res.writeHead(200,{
			'Content-Type':'application/json',
		});
		fs.createReadStream(__dirname + "/jsonobj.json").pipe(res);
	}
	
}).listen(1338,'127.0.0.1');