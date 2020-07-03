//const add = require('./utils.js')
//const fs = require('fs')
const validator = require('validator')
const getNotes =  require('./notes.js')

const msg=getNotes()
// console.log(add(5,8))
//console.log(msg)
console.log(validator.isURL('https://www.google.com'))

