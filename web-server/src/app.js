const express = require('express')

const app = express()

app.get('',(req, res)=>{
    res.send('Hello Express!')
})

app.get('/help',(req, res)=>{
    res.send('How may i help you!')
})

app.get('/about',(req, res)=>{
    res.send('Welcome to Weatherly')
})

app.get('/weather',(req, res)=>{
    res.send('Show weather')
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})