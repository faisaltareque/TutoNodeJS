// Importing required midules
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Defining paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather ',
        name: 'Faisal'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About',
        name: 'Faisal'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title: 'Help',
        helpText: 'This is a help page',
        name: 'Faisal Tareque'
    })
})

app.get('/weather',(req, res)=>{
    res.send({
        forecast : 'It is snowing',
        location : 'Philadelphia'
    })
})

app.get('/help/*', (req,res)=>{
    res.render('404',{
        title: 'Error',
        errorMessage: 'Help Article not found',
        name: 'Faisal Tareque'
    })
})

app.get('*', (req,res)=>{
    res.render('404',{
        title: 'Error',
        errorMessage: 'Page not found!!!',
        name: 'Faisal Tareque'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})