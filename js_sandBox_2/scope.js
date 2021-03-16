//scope of var let and const 

var a = 1
let b = 2;
const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Function scope: value of a = ${a} | b = ${b} | c = ${c}`)
// }
// test()

// if(true){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log(`Block level scope: value of a = ${a} | b = ${b} | c = ${c}`)
// }

for( let a =0 ; a<10; a++){
  console.log(`Function scope: value of a = ${a}`)
}
console.log(`Global scope: value of a = ${a} | b = ${b} | c = ${c}`)
