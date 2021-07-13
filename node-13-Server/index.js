const http = require('http');

// Method 1

// const server = http.createServer((req, res) => {
//     res.end('Got it');
// });

// server.listen(8082, () => {
//     console.log('now this complete');
// });

// Method 2

// http.createServer((req, res) => {
//     console.log('Going...');
//     res.end('end');
// }).listen(8083, () => {
//     console.log('Port Done');
// });
