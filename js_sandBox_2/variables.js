//var ,let and const

// var name = 'John Doe'
// console.log(name)
// name = 'Jane Smith'
// console.log(name)

//Init Var
// var greeting;
// console.log(greeting)
// greeting = 'Hello'
// console.log(greeting)

//let 
// let greeting;
// console.log(greeting)
// greeting = 'Hello'
// console.log(greeting)

// //Identifiers 
// identifiers must not start with numbers
// identifiers must contains numbers but after the variables
// are
// identifiers must contain $ at starting position but not reccomended
// identifiers must contains _ at starting and in middle at the variables


//CONST
//const title; const variable must assigned at the starting
// const title = "Rana"
// console.log(title)

//object's are imm-mutable

const person = {
  name: "Rahul",
  age: 29
}

console.log("Person Details before performing operation : ",person)
person['name'] = 'Kumar'
person['age'] = 30
person['title'] = 'rana'
console.log("Person Details after performing operation : ",person)

//Array manipulation
//const arrayDemo = [2,3,4,5,"Kumar",45.67]
//console.log(arrayDemo)
// console.log("arrayDemo[2] : ",arrayDemo[2])
// console.log("arrayDemo[4] : ",arrayDemo[4])
// arrayDemo.push('8')
// arrayDemo[4] = 100
// arrayDemo.splice(1,3)
// console.log(arrayDemo)