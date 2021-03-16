const person = {
  firstName: 'John',
  lastName : 'Doe',
  age:28,
  email:'john@example.com',
  hobbies: ['music','sports','reading'],
  address:{
    city:'ranchi',
    state:'jharkhand'
  },
  getBirthYear:()=>{
    return 1992
  }
}

let val;
val = person.firstName
val = person.lastName
val = person['firstName']
person['firstName'] = 'Jane';
val = person['firstName']
val = person['age']
val = person.email
val = person.hobbies[0]
val = person.hobbies[2]
val = person.address
val = person.address['state']
val = person.address.city
val = person.getBirthYear(); 
console.log(val)


//array of objects
const people = [
{name:'kumar',age:28},
{name:'ram',age:22},
{name:'shyam',age:26},
{name:'mohan',age:27},
{name:'gita',age:21},
{name:'sita',age:29}
]
//console.log(people)
// for(let i= 0;i<people.length;i++){
//   console.log(people[i].name)
// }

// for(let i in people){
//   console.log(people[i].name)
// }

// for(let i in people){
//   console.log(people[i].age)
// }

val = people.forEach((pep)=>{
console.log('name: ', pep.name,'|', 'age: ',pep.age)
})