
const url = require('url');

const http = require('http');


http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == '/') {
        res.end('end');
    }
    else if (req.url == '/about') {
        res.end('about end');
    }
    else if (req.url == '/contact') {
        res.end('contact end');
    }
    else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('<h1>404 Errors in this site</h1>');
    }
}).listen(8083, () => {
    console.log('Port Done');
});
