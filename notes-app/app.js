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

// add, remove, read, list
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function (argv){
        console.log('Title: '+ argv.title)
        console.log('Body: '+argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function(){
        console.log(chalk.green.bgGray.bold('Removing the Note'))
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log(chalk.green.bgGray.bold('Reading the Note'))
    }
})

// Create read command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function(){
        console.log(chalk.green.bgGray.bold('Listing out all your notes'))
    }
})

yargs.parse()


 

