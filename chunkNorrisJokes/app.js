document.querySelector('.get-jokes').addEventListener('click',getFunnyJokes)

function getFunnyJokes(e){
 const input = document.getElementById('number').value;
 
 const xhr = new XMLHttpRequest();
 xhr.open('GET',`http://api.icndb.com/jokes/random/${input}`,true)
 xhr.onload = function(){
   if(this.status === 200){
     const jokesArr = JSON.parse(this.responseText)

    //store Jokes at local Storage
     //setJokesToLocalStorage(jokesArr)

     const tbody = document.getElementById('output')
     
     //create element tr
     jokesArr.value.forEach((joke,index)=>{
      index++;
      const tr = document.createElement('tr')
      console.log(tr)
      tr.innerHTML += 
      `<th scope="row">${index}</th>
      <td>${joke.id}</td>
      <td>${joke.joke}</td>
      <td><a href = "#" class="delete">X</a></td>`
      tbody.appendChild(tr)
     })
     console.log(jokesArr)
  }
 }
 xhr.send()
 e.preventDefault()
}
function setJokesToLocalStorage(jokesArr){
  let jokes;
  if(localStorage.getItem('jokes') === null){
    jokes = []
  } else{
    jokes = JSON.parse(localStorage.getItem('jokes'))
  }
  jokes.push(jokesArr)
  localStorage.setItem('jokes',JSON.stringify(jokesArr))
}