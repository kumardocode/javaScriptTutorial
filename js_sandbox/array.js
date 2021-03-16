//array and its methods
const numbers=[12,27,13,45,37,56,5];
const array= new Array(41,35,88,91,23,43);
const fruits=['Apple','Banana','Orange','Mango','pear'];
const mixed=[1,3,'hello',true,undefined,null,{a:1,b:2},new Date()];

let val;

//check array length
console.log("array length = ",numbers.length);

//check array is array
console.log("Array check = ",Array.isArray(numbers));

//console.log(typeof numbers);
// console.log("array = ",numbers);

//get single value
// val = numbers[0];
// val = numbers[3];
// console.log(val);

//push new element into array at last position
console.log("old array = ",numbers);
numbers.push(99)
//console.log("new array = ",numbers);
//push new element into array at first position
numbers.unshift(100);
console.log("new array = ",numbers);

//pop last element from array
numbers.pop();
console.log("new array after pop operation = ",numbers);

//pop first element from array
numbers.shift();
console.log("new array after shift operation = ",numbers);


//splice
// console.log("Before splice = ",fruits);
// fruits.splice(1,2,'guava','pineapple');
// console.log("After splice = ",fruits);

//reverse array
// console.log("Before reverse = ",fruits);
// fruits.reverse();
// console.log("After reverse = ",fruits);

//sorting an array
// console.log("Before sorting = ",fruits);
// fruits.sort();
// console.log("After sorting = ",fruits);

//sorting done based on first letter
// console.log("Before sorting = ",numbers);
// numbers.sort();
// console.log("After sorting = ",numbers);

//custom sorting function using compare function
console.log("Before sorting = ",numbers);
val = numbers.sort(function(x,y){
  return x-y;
});
console.log("After sorting = ",val);
console.log("typeof val= ",typeof val);

//custom sorting function using compare function in reverse order
// console.log("Before sorting = ",numbers);
// val = numbers.sort(function(x,y){
//   return y-x;
// });
// console.log("After sorting = ",val);
// console.log("typeof val= ",typeof val);

//find function
val = numbers.find(function(num){
  return num > 30;
})
console.log("Num greater than age = ",val);
console.log("typeof val= ",typeof val);


//filter
val = numbers.filter(function(num){
  return num > 30;
})
console.log("Num greater than age = ",val);
console.log("typeof val= ",typeof val);

val = numbers.map(function(num){
  return num*2;
})
console.log("Num using map = ",val);
console.log("numbers = ",numbers);
console.log("typeof val= ",typeof val);

