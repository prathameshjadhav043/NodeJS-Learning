// const fName = "Jadhav";

// console.log(fName);

const fs = require('fs');

fs.writeFileSync("read.txt", "revesion nodeJS");
// its create a new txt file with "revesion nodeJS" content

// fs.writeFileSync("read.txt", "hardwork");

// if we give new content to same file the is create new with new content

// fs.appendFileSync("read.txt", "this now update");

const read = fs.readFileSync('read.txt');
// for read the file
console.log(read.toLocaleString());

// to rename the file

fs.renameSync('read.txt', 'newRead.txt');