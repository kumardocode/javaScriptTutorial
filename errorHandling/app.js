//Refference error
//Type error
//Syntax error

// try {
//   null.greeting('Hello')
// } catch (error) {
//   console.log(error instanceof ReferenceError)
//   console.log(error instanceof TypeError)
//   console.log(error instanceof SyntaxError)
//   console.log(error instanceof Error)
//   console.log(error instanceof Error)
//   console.log('Its Null Stupid',error.message)
//   console.log(error.name)
// }
// finally{
//   console.log('Finally Goes on..')
// }
// console.log('Program continues...')

const user = {email:"john@gmail.com"}
try {
  if(!user.name){
    throw('User has no name')
  }  
} catch (error) {
  console.log(error)
}
