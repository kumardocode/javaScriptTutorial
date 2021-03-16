//it gives us an easy way to assign and 
//extract variables from arrays and objects
let a,b;
// [a,b] = [100,200]
// console.log(a,b)

// [a,b,c,...rest] = [300,400,500,600,700,800,900]
//console.log(rest)

//Array destructuring with rest pattern
// let people = ['John','Mike','Doe','Marry','Williams']
// const [person1,person2,person3,...rest] =  people;
// console.log(person1)
// console.log(person2)
// console.log(rest)

//parse array returned from function

// function getPeople(){
//   return ['John','Mike','Doe','Marry','Williams'];
// }

// let [person1,person2,person3 ]= getPeople()
// console.log(person1)
// console.log(person2)


//object destructuring

const person = {
  id : 1,
  name: 'John',
  email : 'john@gmail.com',
  city: 'USA',
  sayHello : function(){
    return 'hello'
  }
}

// const id = person.id,
//       name = person.name,
//       email = person.email,
//       city = person.city;
//       console.log(id,name,email,city)

const {id,name,email,city,sayHello} = person
console.log(id,name,email,city,sayHello())