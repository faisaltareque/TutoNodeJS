const request = require('request')

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZmFpc2FsdGFyZXF1ZSIsImEiOiJja2RhY2M5N3czamFxMnFxeXprcmVxNzQ5In0.1I1oDk4-JwIG0YUg5vpEzA&limit=1'
    request({url: url, json: true}, (error, response) =>{
        if(error){
            callback('Unable to connect to location services.', undefined)
        }else if(response.body.features.length===0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined,{
                location: response.body.features[0].place_name,
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0]
            })
        }
    })
}


module.exports = {
    geocode: geocode
}
