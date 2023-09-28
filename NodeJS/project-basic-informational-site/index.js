const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	const indexFile = fs.readFileSync('./index.html')
	res.send(indexFile);
});

app.get('/about', (req, res) => {
	const aboutFile = fs.readFileSync('./about.html')
	res.send(aboutFile)
})

app.get('/contact-me', (req, res) => {
	const contactMeFile = fs.readFileSync('./contact-me.html')
	res.send(contactMeFile)
})

app.use((req, res) => {
	const file404 = fs.readFileSync('./404.html')
	res.status(404).send(file404)
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});