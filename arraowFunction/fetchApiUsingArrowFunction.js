document.getElementById('button-one').addEventListener('click',getTextData);
document.getElementById('button-two').addEventListener('click',getJsonData);
//without arraw function
/* 
  function getTextData(){
    let output = '';
    fetch('text.txt')
      .then(function(resp){
      return resp.text()
    })
    .then(function(data){
      output = data;
      document.getElementById('result').innerHTML = output
    })
  }
*/

//Using Arrow function for getting text data
function getTextData(){
  let output = '';
  fetch('text.txt')
    .then((resp)=>resp.text())
    .then((data)=>{
    output = data;
    document.getElementById('result').innerHTML = output
  })
}

function getJsonData(){
  let output = ''
  fetch('users.json').then(response =>response.json())
  .then((users)=>{
    const div = document.getElementById('result')
    const ul = document.createElement('ul')
    users.forEach((user)=>{
        output +=`<li>ID:${user.id}</li>
        <li>Name:${user.name}</li>
        <li>UserName: ${user.username}</li>
        <li>Email: ${user.email}</li>
        <li>Street: ${user.address.street}</li>
        <li>City: ${user.address.city}</li>
        <li>Zip: ${user.address.zipcode}</li>
        <hr>`
    })
    ul.innerHTML = output;
    div.appendChild(ul)
  }).catch((err)=>{
    console.log('Something went wrong',err)
  })
}