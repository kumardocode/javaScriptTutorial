let i = 10;

// for(let i =0 ; i<10;i++){
//   if(i==2){
//     console.log(`${i} is my favourite number`)
//     continue;
//   }
//   if(i==5){
//     console.log(`I dislike ${i} so stop here..`)
//     break;
//   }
//   console.log("Number  : ",i)
// }


// i = 0;
// while(i<10){
//   console.log(`Number : ${i}`)
//   i++;
// }

//loop through arrays
const cars = ['Ford','Chevy','Honda','Toyota']

// for(let i=0; i<cars.length; i++){
//   console.log(cars[i])
// }

// cars.forEach((car,index)=>{
//   console.log(`${index} : ${car}`)
// })

// cars.map((car,index)=>{
//   console.log(`${index} : ${car}`)
// })

const users = 
[
  {id:1,name:'John'},
  {id:2,name:'Doe'},
  {id:3,name:'Jane'},
  {id:4,name:'Rahul'},
  {id:5,name:'Ram'}
]

let ids = users.map((user)=>{
  return user.id
})

let name = users.map((user)=>{
  return user.name
})
console.log(ids)
console.log(name)