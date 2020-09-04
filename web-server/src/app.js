// Importing required midules
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

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
        name: 'Faisal Tareque'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About',
        name: 'Faisal Tareque'
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
    if(!req.query.address){
        return res.send({
            errorMessage: 'You need to provide address!'
        })
    }
    //console.log(req.query.address)
    geocode.geocode(req.query.address, (error, {latitude,longitude,location} = {}) =>{
        if(error){
            return res.send({
                errorMessage: error
            })
        }
        forecast.forecast(latitude, longitude, (error,forecastData) =>{
            if(error){
                return res.send({
                    errorMessage: error
                })
            }
            return res.send({
                forecast : forecastData,
                location: location,
                address: req.query.address
            })
        })
        
    })
})

app.get('/products',(req, res)=>{
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term!'
        })
    }
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