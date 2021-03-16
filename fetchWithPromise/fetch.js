const http = new easyHttp;
// http.getUser('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//   console.log(response)
// })
// .catch((err)=>{
//   console.log(err)
// })

const data = [{
    "title": "This is new Updated Title",
    "body": "This is new Updated Body"
}]


// http.postUser('https://jsonplaceholder.typicode.com/users',data)
// .then((response)=>{
//   console.log(response)
// })
// .catch((err)=>{
//   console.log(err)
// })


// http.updateUser('https://jsonplaceholder.typicode.com/users/2',data)
// .then((response)=>{
// console.log(response)
// })
// .catch((err)=>{
// console.log(err)
// })

http.deleteUser('https://jsonplaceholder.typicode.com/users/2')
.then((response)=>console.log(response))
.catch((err)=>console.log(err))