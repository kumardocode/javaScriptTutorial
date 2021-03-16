const today = new Date();
console.log("Today is = ",today)

let birthDate =  new Date('10-7-2020');
birthDate =  new Date('10/7/2020');
birthDate =  new Date('10-7-2020 30:45:00');
val = today.getDate();
val = today.getFullYear();
val = today.getHours();
val = today.getMonth();

today.setDate(2)
today.setFullYear(2021)
console.log(today)
console.log("birthDate = ",val)
