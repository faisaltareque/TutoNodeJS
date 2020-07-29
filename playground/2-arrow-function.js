// const square = function(x){
//     return x*x
// }

// const square = (x) =>{
//     return x*x
// }

const square = (x) => x*x

console.log(square(5))

// const event ={
//     name: 'Birthday Party',
//     printGuestList: function (){
//         console.log('Guest list for '+this.name+".")
//     }
// }

const event ={
    name: 'Birthday Party',
    guestlist:['Fahim', 'Arik', 'Omi'],
    printGuestList(){
        console.log('Guest list for '+this.name+".")

        this.guestlist.forEach((guest)=>{
            console.log(guest+' is attending '+ this.name)
        })
    }
}

event.printGuestList()