// const users = [{"id":1,"name":"John Doe","company":"Design"}
//              ,{"id":2,"name":"Mary Williams","company":"Testing"}]

// function createUser(user,callback){
//   setTimeout(function(){
//     users.push(user)
//     callback()
//   },2000)
// }

// function getUsers(){
//   setTimeout(function(){
//     let output = '';
//     users.forEach(function(user){
//       output +=`<li>${user.name}</li>`
//     })
//     document.body.innerHTML = output;
//   },1000)
// }
// createUser({"id":3,"name":"suzane jane","company":"Analysis"},getUsers)
// getUsers();


const users = [{"id":1,"name":"John Doe","company":"Design"}
             ,{"id":2,"name":"Mary Williams","company":"Testing"}]

function createUser(user){
 return new Promise(function(resolve,reject){
    setTimeout(function(){
      users.push(user)

      const error = false;
      if(!error){
        resolve()
      }else{
        reject('Error: Something went wrong');
      }
    },2000)
  })
}

function getUsers(){
  setTimeout(function(){
    let output = '';
    users.forEach(function(user){
      output +=`<li>${user.name}</li>`
    })
    document.body.innerHTML = output;
  },1000)
}
createUser({"id":3,"name":"suzane jane","company":"Analysis"})
.then(getUsers)
.catch(function(err){
  console.log(err)
})
getUsers();