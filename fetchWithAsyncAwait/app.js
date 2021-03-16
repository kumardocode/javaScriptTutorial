const user = new Users;
// user.getUsers('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//   console.log(response)
// })
// .catch((err)=>console.log(err))


const data = 
[
  {
      "name": "John Doe Williams Updated",
      "username": "johndoewilliams Updated",
      "email": "johnmary@email.com Updated",
  }
]

// user.postUser('https://jsonplaceholder.typicode.com/users',data)
// .then((response)=>{
//   console.log(response)
// })
// .catch((err)=>console.log(err))

// user.updateUser('https://jsonplaceholder.typicode.com/users/2',data)
// .then((user)=>console.log(user))
// .catch((err)=>console.log(err))


user.deleteUser('https://jsonplaceholder.typicode.com/users/2')
.then((user)=>console.log(user))
.catch((err)=>console.log(err))