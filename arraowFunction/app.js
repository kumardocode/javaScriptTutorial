// function greet(){
//   console.log('Hello')
// }
// greet()

// const greet = function greet(){
//   console.log('Hello')
// }
// greet()

// const greet = ()=>{
//   console.log('Hello')
// }
// greet()

/** One Line Function Does not need {} braces */
// const greet = ()=>console.log('Hello')
// greet()

// Return in arrow-function
const greet = ()=>'Hello'

//same as above
// const greet = function(){
//    return'Hello'
// }

//console.log(greet())

//Return Object

// const sayHello = ()=>({msg:"say Hello"})
// console.log(sayHello())


// const sayHello = function(name){
//   console.log(`Hello ${name}`)
// }
// sayHello('Brad Traversy')

//single argument dont need parenthesis
// const sayHello = name =>console.log(`Hello ${name}`)
// sayHello('Brad Traversy')

// const sayHello = function(firstName,lastName){
//   console.log(`Hello ${firstName} ${lastName}`)
// }
// sayHello("Jhon","Doe")

// const sayHello = (firstName,lastName)=>{
//   console.log(`Hello GoodMorning ${firstName} ${lastName}`)
// }
// sayHello("Jhon","Doe")

const users = ["John Doe","Marry Williams","Albert"]

//shorter
// const nameLength =users.map(function(user){
//   return user.length
// })
// console.log(nameLength)


//shortest
const nameLength =users.map(user=>user.length)
console.log(nameLength)