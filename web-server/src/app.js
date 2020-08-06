const express = require('express')

const app = express()

app.get('',(req, res)=>{
    res.send('<h1>Hello Express!</h1>')
    
})

app.get('/help',(req, res)=>{
    res.send('How may i help you!')
})

app.get('/about',(req, res)=>{
    //res.send('Welcome to Weatherly')
    res.send('<h1>About</h>')
})

app.get('/weather',(req, res)=>{
    //res.send('Show weather')
    res.send({
        forecast : 'It is snowing',
        location : 'Philadelphia'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000.')
})