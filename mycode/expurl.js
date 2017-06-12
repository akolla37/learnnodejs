var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello Express World');
}).listen(1338,'127.0.0.1');;
/*
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
*/