const firstName="Kumar";
const lastName="Rahul";
const age=30;
const str="Hello there my name is Brad";
const tags="web development,design,programming,testing";
let val;
val=firstName + lastName;

//concatination
val=firstName +' '+ lastName;

//append
val = "Brad ";
val +="Traversy";

val= 'Hello my name is '+firstName+' and i am '+age+'.';
//Escaping sequence
val='That\'s awesome,I can\'t wait'


//length
val=firstName.length;

//concatination
val=firstName.concat(' ',lastName);

//change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName.charAt(3);

//indexof() method
//returns negative result if the specified character is not present in the specified string
val = firstName.indexOf('a');
val = firstName.lastIndexOf('m');

//replace method
val = firstName.replace('u','x');

//search
val = firstName.search('m');

//check that given string starts with or ends with
val = firstName.startsWith('m');
val = firstName.endsWith('r');

//find the matched character in the string
val = firstName.match('r');



val = firstName.includes('m');

val = firstName[0];
val = firstName[1];

//substring
val=firstName.substr(0,3);
val=firstName.substring(0,3)
val = firstName.slice(0,3);

//takes negative string starting from the back
val = firstName.slice(-3);

//split
val=str.split(' ');
val=tags.split(',');

val=tags.includes('testing');
console.log("Val = ",val);
console.log("typeof Val = ",typeof val);