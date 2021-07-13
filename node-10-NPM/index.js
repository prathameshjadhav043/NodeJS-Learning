// NPM pakages in nodenJS

// 1. initalize NPM in projects using
//       "npm inti" <= command

// after complete npm initialize
// auto generae file is package.json
// its have all informations we had using npm 
// all dependancy and packagesss

// now install new dependancy
// in terminal npm install chalk
// after install

// use chalk module

const chalk = require('chalk');
// console.log(chalk.blue('Hello Chalk'));
// console.log(chalk.gray.underline.inverse('Hello Chalk'));
// console.log(chalk.green.underline.inverse('success'));
// console.log(chalk.yellow.underline.inverse('true'));
// console.log(chalk.red.underline.inverse('false'));


// use validator module

// check mail is vaild or not

const validator = require('validator');
const res = validator.isEmail('prathameshjadhav043@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));