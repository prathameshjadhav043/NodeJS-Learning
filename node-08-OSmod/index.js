const os = require('os');

console.log(os.arch());

// for Check your pc versions or bits

const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`);

// for Check your memory

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);

// Check host

console.log(os.hostname());

// Check platform
console.log(os.platform());

// Check Details
console.log(os.cpus());
console.log(os.getPriority());

// practies some other modules ( Path Module ) ;