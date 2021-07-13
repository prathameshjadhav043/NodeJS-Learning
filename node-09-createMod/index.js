
// how to create won modules
// How to used it

// create a js file the create add functions in it 
// the export the module 

// for single functions we used

// const add = require('./fun');
// console.log(add(12, 21));

// for multiple

const fun = require('./fun');

let add = fun.add;
console.log(add(20, 19));

let sub = fun.sub;
console.log(sub(20, 19));

let mul = fun.mul;
console.log(mul(20, 19));