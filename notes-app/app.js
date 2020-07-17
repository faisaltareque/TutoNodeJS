// const add = require('./utils.js')
// const fs = require('fs')
// const validator = require('validator')
 const getNotes =  require('./notes.js')
 const yargs = require('yargs')
 const chalk = require('chalk')


//const msg=getNotes()
//console.log(msg)
//console.log(chalk.red.bgGreen.bold('Success'));
// console.log(add(5,8))
// console.log(validator.isURL('https://www.google.com'))


// Customizing Yargs Version
yargs.version('1.1.0')

const command=process.argv
console.log(command)
console.log(yargs.argv)


 

