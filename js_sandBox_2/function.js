//function decleration
// function greeting(firstName,lastName){
//   if(typeof firstName === "undefined")
//   {firstName = 'Jane'}
//   if(typeof lastName === "undefined")
//   {lastName = 'Smith'}
//   console.log('Hello! '+firstName+' '+lastName) 
// }
// greeting()

// function greeting(firstName='Suzane',lastName= 'Jaani'){
//   console.log('Hello! '+firstName+' '+lastName) 
// }
// greeting('Marry','kom')


// //Function Expression
// const sqrt = function(x){
//   return Math.sqrt(x);
// }
// console.log(sqrt(169))

//annomous function
// const mul =(x)=>{
//   return x*x;
// }
// console.log(mul(4))

//Immediately invokable function expression

(function(){
  console.log('IIFE Run..')
})();

((name)=>{
  console.log('Hello '+name)
})('John');