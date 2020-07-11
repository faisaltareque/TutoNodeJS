// const add = require('./utils.js')
// const fs = require('fs')
// const validator = require('validator')
 const getNotes =  require('./notes.js')
 const chalk = require('chalk')


const msg=getNotes()
console.log(msg)
console.log(chalk.red.bgGreen.bold('Success'));
// console.log(add(5,8))
// console.log(validator.isURL('https://www.google.com'))

console.log(process.argv)

 

