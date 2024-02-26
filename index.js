var http = require('http');
var url = require('url');
var dt = require('./datetime');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/roll') {
        const result = Math.floor(Math.random() * 6) + 1;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`You rolled a ${result}`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});



