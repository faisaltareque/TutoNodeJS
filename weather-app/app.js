const geocode =  require('./utils/geocode.js')
const forecast =  require('./utils/forecast.js')

let searchAddress = process.argv[2]
if(!searchAddress){
    console.log('Please provide an address')
}else{
    geocode.geocode(searchAddress, (error, data) =>{
        if(error){
            return console.log(error)
        }
        forecast.forecast(data.latitude, data.longitude, (error,forecastData) =>{
            if(error){
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
        
    })
}


// forecast.forecast(loactionData.latitude, loactionData.longitude, (error,data) =>{
//     console.log('Error', error)
//     console.log('Data', data)
// })

