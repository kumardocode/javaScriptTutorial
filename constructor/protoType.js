//Object.prototype
//Person.prototype

function Person(firstName,lastName,dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob)
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
Person.prototype.fullName = function(){
  return `${this.firstName} ${this.lastName}`
}
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}
const john = new Person('John','Doe','july-12-1992')
const mary = new Person('Mary','Smith','july-12-1989')
console.log(john.calculateAge())
console.log(john.fullName())
john.getsMarried('Master')
console.log(john.fullName())
console.log(john)
console.log(john.hasOwnProperty('lastName'))
console.log(john.hasOwnProperty('last'))