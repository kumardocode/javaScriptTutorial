//type conversion
//string to number
//number to string
//boolean to string
//boolean to number
//date to string
//date to number
//array to number
//functions used : - 1. toFixed()  2. val.length 


//Number to String
// let val = String(5);
//     val = String(4+4)
//     val = String(true)
//     val = String(new Date())
//     val = String([1,2,3,4,5,6])

//     //toString()
//     val = (5).toString()
//     val = (4+4).toString()
//     val = (true).toString()
//     val = (false).toString()
//     val = ([9,8,7,6,5,4,3]).toString() //13


//String to number 

let val = '5'
    val=Number('5')
    val = Number(true)
    val = Number(false)
    val = Number([2,3,4,5,6])
    val = Number('hello')
    val = Number(null)
    val = Number(new Date())
    val = parseInt('23.56')
    val = parseFloat('23.56')


//output
//console.log(val)
//console.log(typeof val)
//console.log(val.length)
//console.log(val.toFixed(2))


const val1 = String(5)
const val2 = 6
const sum = Number(val1+val2)
console.log(sum)
console.log(typeof sum)