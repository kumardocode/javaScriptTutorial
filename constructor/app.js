function Person(firstName,lastName,dob){
  this.firstName = firstName; 
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const mary = new Person('mary','smith','7-12-1992 08:20:00')
const john = new Person('john','Doe','july-12-1989 08:20:00')
console.log(mary.calculateAge())
console.log(mary.firstName)
console.log(mary.lastName)