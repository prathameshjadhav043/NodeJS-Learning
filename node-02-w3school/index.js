// ************************** Start *********************************//
// how to create server using node js
// http module

var http = require('http');
var dt = require('./newModule');
var url = require('url');

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
// }).listen(8080); clear



// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Hello World!');
// }).listen(8080);


// **************************  End *********************************//


// ************************** Start *********************************//

// first create new newModule and exports the file
// after thata import the file here


// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('new module is created at ' + dt.myDatetime());
// }).listen(8080);

// **************************  End *********************************//


// ************************** Start *********************************//

// how the port is work o different ports
// url edith locathost:8080/summer
// url edith locathost:8080/winter

// the outpunt get like this

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(req.url);
//     res.end('want to check the files');
// }).listen(8081);

// **************************  End *********************************//


// ************************** Start *********************************//

// split string query

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var q = url(req.url, true).query;
//     var txt = q.year + " " + q.month;
//     res.end(txt);
// }).listen(8083);

// **************************  End *********************************//
