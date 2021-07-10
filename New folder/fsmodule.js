const fs = require('fs');
// fs.readFile('file.txt','utf8', (err,data)=> {
//     console.log(err, data);
// })
// console.log('task complete');

// readfilesynch

// const a = fs.readFileSync('file.txt');
// console.log(a.toString());
// console.log('task2 complete');

// wirte file

// fs.writeFile('file1.txt','This write file of ms module',()=>{
//     console.log("write to the file");
// });
// console.log('Task3');

const a = fs.writeFileSync('file2.txt','This is a data2');
console.log(a);
console.log('Task4');