// function sayHello(name){
//   return `Hello ${name}`
// }
// console.log(sayHello('John'))

// async function sayHello(name){
//   return `Hello ${name}`
// }
// sayHello('Brad').then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// });



async function sayHello(name){
  const promise = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    resolve(`Hello ${name}`)
   },2000)
  })
  const error = false;
  if(!error){
    const res = await promise;
    return res;
  }else{
    await Promise.reject('Something went wrong')
  }
}
sayHello('Brad').then((result) => {
  console.log(result)
}).catch((err) => {
  console.log(err)
});
