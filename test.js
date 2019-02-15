


var http = require('http')
var fs = require('fs');



var server = http.createServer(function(req, res){
	console.log(req.url+ ' ')
	if(req.url === '/') {
			
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname +'/test.html').pipe(res);
		fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
		  if (err) throw err;
		  console.log('Saved!');
		});		
	
	}
	
	else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname +'/404.html').pipe(res);
	}
});


server.listen(3000);
