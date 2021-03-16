//function decleration 
// function greet(firstName,lastName){
//   return 'Hello'+ ' '+firstName + ' '+lastName;
// }
// console.log(greet('John','Doe'));

// //2. method of function decleration by adding default value
// function greeting(firstName,lastName){
//   if(typeof firstName === 'undefined'){
//     firstName = 'Jane'
//   }
//   if(typeof lastName === 'undefined'){
//     lastName = 'Doe'
//   }
//   return firstName +' '+lastName;
// }
// console.log(greeting('suzane'));

// //3. method of function decleration by adding default value
// function greetMeeting(firstName='amit',lastName='shah'){
//   return firstName +' '+lastName;
// }
// console.log(greetMeeting('narendra ', 'modi'));

// //4. way for function decleration

// const personDetails = function(firstName='Rahul',lastName='Rana'){
//   return firstName + ' ' + lastName;
// }
// console.log(personDetails('Kumar','Rahul'));

//5. way to declare IIFE(Immediate invoke function expression)

(function(firstName){
  console.log("IIFE Run.."+firstName);
})('Kumar')

//6.way to declare the function using object notation

const toDo = {
  add : function(){
    console.log("ADD")
  },
  sub : function(){
    console.log("SUB")
  },
  edit: function(id){
    console.log(`Id to edit ${id}`);
  }
};
toDo.mul = function(){
  console.log("MUL..");
}

//
console.log(toDo.add());
console.log(toDo.edit(8))