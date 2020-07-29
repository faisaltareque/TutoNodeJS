const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>{
    return 'Your notes......'
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }    
}

const addNote =(title, body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.find((note)=> note.title === title)


    if(!duplicateNotes){
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

const listNote = ()=>{
    const notes=loadNotes()
    console.log(chalk.inverse.bold('Your Notes'))
    notes.forEach((note)=>{
        console.log('Title: '+note.title)
    })
}

const readNote = (title)=>{
    const notes = loadNotes()
    const mainNote = notes.find((note)=>note.title === title)
    if(!mainNote){
        console.log(chalk.black.bgRed.bold('Note not found'))
    }else{
        console.log(chalk.black.bgGreen.bold.bold('Title: '+mainNote.title))
        console.log('Note: '+mainNote.body)
    }
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title != title
    )

    if(duplicateNotes.length===notes.length){
        console.log(chalk.black.bgRed.bold.bold('Note Does not Exist!'))
    }else{
        saveNotes(duplicateNotes)
        console.log(chalk.black.bgGreen.bold.bold('Note Removed!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}