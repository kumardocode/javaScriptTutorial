const person = {
  firstName : 'John',
  lastName : 'Doe',
  age: 28,
  email:" john@SpeechGrammarList.com",
  hobby:['music','sports','cooking'],
  address : {
    city : 'Miami',
    state: 'Sydney'
  },
  getBirthyear: function(){
    return 2020 - this.age;
  }
}


//array of object's
let empDetails;
const employee = [
  {name : 'john', age: 30},
  {name : 'mike', age: 28},
  {name : 'rahul', age: 32},
]
for(let e in employee){
  console.log(employee[e].name)
}

let val;
val=person;
val = person.firstName;
val = person['lastName'];
val = person['age']
val = person.email;
val = person.hobby[1];
val = person.hobby
val = person.getBirthyear();
console.log("val = ",val);