const name = "John Doe"
console.log(typeof name)

const age = 28
console.log(typeof age)

const hasKids = true
console.log(typeof hasKids)

const car = null
console.log(typeof car)

let test 
console.log(typeof test)

const sym = Symbol()
console.log(typeof sym)

//REFERENCE TYPE DATA-TYPE
const person = {
  name: "John",
  age:20
}
console.log(typeof person)

const array = [3,5,6,7]
console.log(typeof array)

const employee = [
  {name: "Kumar",age:20,role: "Engineer"}
  ,90
  ,100
  ,[1,2,3,4,5]
]
console.log(typeof employee)
console.log(employee[0].name)
console.log(employee[0].age)
console.log(employee[0].role)
console.log(employee[1])
console.log(employee[3][0])
console.log(employee[3][1])
console.log(employee[3][4])

function testfoo(){
  console.log("This is to test")
}
console.log(typeof testfoo)

const foo = function foo(){
  console.log("This is to foo")
}
console.log(typeof foo)

const today = new Date()
console.log(typeof today)