const numbers= [2,65,34,21,19,67];
const number2 = new Array(99,23,12,15,34,76,43,222,321)
let fruits = ["Apple","mango","guava","banana","litchi"];
let vals;

const mixed = 
[
  3,6,9,13,15,
  "watermelon"
  ,"john",
  null,
  {"name":"jane",
  age: 28,email:"john@example.com"}
  ,undefined,
  new Date()
]
// vals = numbers[2]
// numbers[2] = 50
// vals = numbers.includes(50)
// vals = Array.isArray(numbers)
// vals = Array.isArray(number2)
// vals = numbers.indexOf(21)
// vals = numbers.lastIndexOf(19)
// vals = numbers.indexOf(45)
// vals = numbers.push(1000)
// vals = numbers.unshift(1001)
// vals = numbers.pop()
// vals = numbers.shift()
// vals = numbers.splice(2,1)
// vals = numbers.concat(number2)
// fruits = [...number2]
//vals = number2.sort()


//done sorting using compare function

// vals = number2.sort((x,y)=>{
//   return x-y;
// })

// vals = number2.sort((x,y)=>{
//   return y-x;
// })

//find function
vals = number2.find((num)=>{
  return num > 50
})

vals = number2.find((num)=>{
  return num < 50
})

vals = number2.filter((num)=>{
  return num > 50
})

//console.log(fruits)
console.log(number2)
console.log(vals)