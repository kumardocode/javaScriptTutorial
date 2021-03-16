//global scope
var a = 1;
let b = 2;
const c = 3;

console.log(`Global scope before block execution a = ${a} , b = ${b} , c = ${c}`)

//in function lavel value of var in global scope do not changed unlike in block level or loop
// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Function scope a = ${a} , b = ${b} , c = ${c}`)   
// }
// test();

//block level under if scope

if(true){
  var a = 4;
let b = 5;
const c = 6;
console.log(`If scope a = ${a} , b = ${b} , c = ${c}`)
}
//global scope
// console.log(`Global scope after block execution a = ${a} , b = ${b} , c = ${c}`)

for(var a=0;a<10;a++){
  console.log(`for loop a = ${a}`)
}
console.log(`Global scope after block execution a = ${a} , b = ${b} , c = ${c}`)
