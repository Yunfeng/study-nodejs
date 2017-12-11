var http = require('http');

http.createServer(function(req, res) {
	var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	switch(path) {
		case '':
			res.writeHead(200, { 'Content-type': 'text/plain'});
			res.end('Homepage');
			break;
		case '/about':
			res.writeHead(200, { 'Content-type': 'text/plain'});
			res.end('About');
			break;
		default:
			res.writeHead(404, { 'Content-type': 'text/plain'});
			res.end('Not Found');
			break;

	}

}).listen(3000);

console.log('3000 Ctr-c to terminate');