const request = require('request')

// const forecast = (lat, lon, callback) =>{
//     const url = 'http://api.weatherstack.com/current?access_key=91ac54d95093519b3a1e690fe2f659c8&query='+lat+','+lon
//     request({ url: url, json: true}, (error, response) =>{
//         if(error){
//             callback('Unable to connect to the weather service.',undefined)
//         }else if(response.body.error){
//             callback('Unable to find location.',undefined)
//         }else{
//             callback(undefined, {
//                 weather: response.body.current.weather_descriptions[0],
//                 temperature: response.body.current.temperature,
//                 rainingChance: response.body.current.precip,
//             })
//         }    
//     })
// }

const forecast = (lat, lon, callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=91ac54d95093519b3a1e690fe2f659c8&query='+lat+','+lon
    request({url, json: true}, (error, {body}={}) =>{
        if(error){
            callback('Unable to connect to the weather service.',undefined)
        }else if(body.error){
            callback('Unable to find location.',undefined)
        }else{
            callback(undefined, {
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                rainingChance: body.current.precip,
            })
        }    
    })
}


module.exports = {
    forecast: forecast
}
