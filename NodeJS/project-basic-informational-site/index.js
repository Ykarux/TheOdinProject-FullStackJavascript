const http = require('http');
const fs = require('fs')

const server = http.createServer(function (req, res) {
	if (req.method === 'GET' && req.url === '/') {
		const indexFile = fs.readFileSync('./index.html')
		res.end(indexFile)
	} else if (req.method === 'GET' && req.url === '/about') {
		const aboutFile = fs.readFileSync('./about.html')
		res.end(aboutFile)
	} else if (req.method === 'GET' && req.url === '/contact-me') {
		const contactMeFile = fs.readFileSync('./contact-me.html')
		res.end(contactMeFile)
	} else {
		const errorFile = fs.readFileSync('./404.html')
		res.end(errorFile)
	}
});

server.listen(8081, () => {
	console.log('Server is running on https://localhost:8081');
});