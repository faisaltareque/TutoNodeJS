const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes......'
}

const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })    
        saveNotes(notes)
        console.log(chalk.black.bgGreen.bold.bold('New Notes Added!'))
    }else{
        console.log(chalk.black.bgRed.bold.bold('Note title taken!'))
    }    
}

const removeNote = function (title){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title != title
    })

    if(duplicateNotes.length===notes.length){
        console.log(chalk.black.bgRed.bold.bold('Note Does not Exist!'))
    }else{
        saveNotes(duplicateNotes)
        console.log(chalk.black.bgGreen.bold.bold('Note Removed!'))
    }
}

const saveNotes = function(notes){
    const dataJOSN = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJOSN)
}

const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}