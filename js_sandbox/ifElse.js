// if(something){
//   do something
// } else {
//   do something else
// }
const id = 100;

// //Equal to
// if(id == 100){
//   console.log("CORRECT")
// } else {
//   console.log("INCORRECT")
// }

// //NOT EqualTo

// if(id != 100){
//   console.log("CORRECT")
// } else {
//   console.log("INCORRECT")
// }

// //Equal to value and type
// if(id === '100'){
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT")
// }

// if(typeof id === typeof 100){
//   console.log("CORRECT")
// } else {
//   console.log("INCORRECT")
// }

//equal to value and type
// if(id !== 100){
//   console.log("CORRECT")
// } else {
//   console.log("INCORRECT")
// }

// if(typeof id !== undefined){
//   console.log(`The id is ${id}`)
// } else{
//   console.log("NO ID")
// }

//GREATER AND LESS THAN

// if(id > 30){
//   console.log("CORRECT")
// } else {
//   console.log("INCORRECT")
// }

// const color ='orange';

// if(color === 'red'){
//    console.log("color is red");
//  } else if(color === 'blue'){
//      console.log("blue");
//  } else {
//   console.log("color is neither red nor blue")
//  }

//LOGICAL OPERATOR

const name = 'steve';
const age=24;

// if(age > 4 && age <15){
//   console.log(`${name} is a Teen-ager`)
// } else if(age >= 20 && age <= 25){
//   console.log(`${name} is Youth`)
// } else {
//   console.log(`${name} is Old age`)
// }

//OR Operator
if(age<5 || age >15){
  console.log(`${name} is child`)
} else if(age >=20 || age<=30){
  console.log(`${name} is youth`)
} else{
  console.log(`${name} is Old`)
}