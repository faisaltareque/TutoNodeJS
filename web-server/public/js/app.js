console.log('Client side avascript file is loaded!')



const weatherForm = document.querySelector("form")
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    messageOne.textContent='Loading...'
    messageTwo.textContent = ''
    const loaction = search.value
    fetch('http://localhost:3000/weather?address='+loaction).then((response)=>{
    response.json().then((data)=>{
            if(data.errorMessage){
                console.log(data.errorMessage)
                messageOne.textContent=data.errorMessage

            }else{
                messageOne.textContent=data.forecast.description
                messageTwo.textContent=data.location
                // console.log(data.forecast)
                // console.log(data.location)
            }
        })
    })
    // console.log(loaction)
})