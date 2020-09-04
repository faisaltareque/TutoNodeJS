// Object Property Shorthand

const name = 'Faisal'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {
    label : 'Red notebook',
    price : 3,
    stock : 210,
    salePrice : undefined
}

// const label = product.label
// const stock = product.stock

// const {label, stock:stockIn, rating = 4} = product

// console.log(label)
// console.log(stockIn)
// console.log(rating)

const transaction = (type, {label, stock} = {})=>{
    console.log(label)
    console.log(stock)
}

transaction('order', product)

transaction('order')