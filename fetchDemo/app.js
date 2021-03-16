document.getElementById('button1').addEventListener('click',getTextData);
document.getElementById('button2').addEventListener('click',getJsonData);
document.getElementById('button3').addEventListener('click',fetchDataFromApi);



function getTextData(){
  fetch('text.txt')
  .then(function(resp){
    return resp.text()
  })
  .then(function(data){
    const div = document.getElementById('output');
    div.innerHTML = data;
  })
}


function getJsonData(){
  document.getElementById('output').innerHTML = ''
  fetch('user.json')
  .then(function(resp){
    return resp.json()
  })
  .then(function(data){
    let output='';
    const div = document.getElementById('output');
    const ul = document.createElement('ul')
    data.forEach(function(user){
      output +=`<li>${user.id}</li>
      <li>${user.name}</li>
      <li>${user.company}</li>
      <hr>` 
    })
    ul.innerHTML = output;
    div.appendChild(ul);
  })
}

function fetchDataFromApi(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(resp){
    return resp.json()
  })
    .then(function(data){
      let output='';
      const div = document.getElementById('output')
      //create element 
      const ul = document.createElement('ul')
      data.forEach(function(user){
      output +=`<li>${user.id}</li>
                <li>${user.name}</li>
                <li>${user.username}</li>
                <li>${user.email}</li>
                <hr>`
    })
     ul.innerHTML = output;
     div.appendChild(ul)
  })
  .catch(function(err){
    console.log(err)
  })
}