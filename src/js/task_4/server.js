const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
	console.log(req.url);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');

	if (req.method === 'OPTIONS') {
		res.writeHead(200);
		res.end();
		return;
	}

	res.end('successful response from server');
}

const server = http.createServer(requestHandler);

server.listen(port, err => {
	if (err) {
		return console.log('Error!', err);
	}

	console.log(`server is listening on port: ${ port }`);
});