function Person(firstName,lastName,dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}

Person.prototype.greeting = function(){
  return `Hello ${this.firstName} welcome Abord!`;
}

function Customer(firstName,lastName,dob,phoneNumber,memberShip){
  Person.call(this,firstName,lastName,dob);
  this.phoneNumber = phoneNumber;
  this.memberShip = memberShip;
}



const person = new Person('John','Doe','12-07-1992');

console.log(person.greeting());


Customer.prototype = Object.create(Person.prototype)
Customer.prototype.constructor = Customer;
const customer = new Customer('Mary','Smith','12-july-1992','5555-5555-5555','standard')
console.log(customer.calculateAge())
console.log(customer.getFullName())
customer.getsMarried('Doe')
console.log(customer.getFullName())

Customer.prototype.greeting = function(){
  return `Hello ${this.firstName} ${this.lastName} welcome to Company!`;
}

console.log(customer.greeting())