//converting number to string

let val;
val = 5;

console.log("val = ",val);
console.log("typeOf val = ",typeof val);
//console.log("val = ",val.length); undefined
console.log("=============");

val = String(5);

console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("length Of val = ",val.length);
console.log("=============");


val = String(555);

console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("length Of val = ",val.length);
console.log("=============");


val = String(5);
val = String(5+5);

console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("length Of val = ",val.length);
console.log("=============");


//boolean to string

val = String(true);

console.log("val = ",val); //true
console.log("typeOf val = ",typeof val); //string
console.log("length Of val = ",val.length); //4
console.log("=============");


console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("length Of val = ",val.length);
console.log("=============");

val = String(new Date());
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("length Of val = ",val.length);
console.log("=============");

//Array to string
val = String([1,2,3,4,5,6,7]);
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("length Of val = ",val.length);
console.log("=============");

//toString method to convert the given type into type conversion

val = (5).toString();
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("length Of val = ",val.length);
console.log("=============");

val = (true).toString();
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("length Of val = ",val.length);
console.log("=============");

//conversion from string to number
val = Number('5');
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
//console.log("length Of val = ",val.length);
console.log("Fixed upto = ",val.toFixed(2));
console.log("=============");


val = Number(true);
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("Fixed upto = ",val.toFixed());
console.log("=============");

val = Number(false);
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("Fixed upto = ",val.toFixed());
console.log("=============");


val = Number(null);
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("Fixed upto = ",val.toFixed());
console.log("=============");


val = Number('hello');
console.log("val results to NAN = ",val);
console.log("typeOf val = ",typeof val);
console.log("Fixed upto = ",val.toFixed());
console.log("=============");

val = Number([1,2,3,4])
console.log("val = ",val);
console.log("typeOf val = ",typeof val);
console.log("Fixed upto = ",val.toFixed());
console.log("=============");

//use of parseInt
val = parseInt('100.30');
console.log("parseInt val = ",val);
console.log("typeOf parseInt val = ",typeof val);
console.log("=============");

val = parseFloat('100.32');
console.log("parseInt val = ",val);
console.log("typeOf parseInt val = ",typeof val);
console.log("=============");

const val1 = 5;
const val2 = 6;
const sum = val1+val2;
console.log("sum = val1 + val2: ",sum);
console.log("sum = val1 + val2 = ",typeof sum);
console.log("=============");


const val3 = String(5);
const val4 = 6;
const sum2 = Number(val3+val4);
console.log("sum = val1 + val2: ",sum2);
console.log("sum = val1 + val2 = ",typeof sum2);
console.log("=============");
