const firstName = 'Kumar'
const lastName = 'Rahul'
let val;

///output
val = firstName+lastName
val = firstName + ' '+lastName

//append
val = 'Brad '
val += 'Traversy'
val = 'Hello my name is '+firstName  


//concat
val = firstName.concat(' ',lastName)

//escaping sequence
val = 'That\'s great, I cant\'t wait';
val = firstName.indexOf('u')
val = firstName.lastIndexOf('a')
val = firstName.indexOf('x')
val = firstName.toLowerCase()
val = firstName.toUpperCase()

val = firstName.includes('i')
val = firstName.includes('m')

console.log(val)

let str = "Hello there my name is John Doe"
//str= str.replace('John','Jane')
str = str.split(' ')
// str = "Apple,Banana,orange,mango,lichi"
// str = str.split(',')
console.log(str)
