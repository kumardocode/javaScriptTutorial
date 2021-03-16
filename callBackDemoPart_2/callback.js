const users = [ 
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net"
  }
]

function createUser(user,callback){
  setTimeout(function(){
    users.push(user)
    callback();
  },2000)
}

function getUser(){
  let output= '';
  setTimeout(function(){
    users.forEach((user)=>{
        output +=`<li>${user.id}</li>
        <li>${user.name}</li>
        <li>${user.username}</li>
        <li>${user.email}</li>
        <hr>`
    })
    document.body.innerHTML = output;
  },1000)
}
createUser( {
  "id": 4,
  "name": "John Doe",
  "username": "John",
  "email": "John@yesenia.net"
},getUser)
getUser();
