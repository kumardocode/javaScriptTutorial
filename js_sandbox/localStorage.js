//local storage
// localStorage.setItem('name','John')
// localStorage.setItem('age',30)

//getting data from local storage
// const name = localStorage.getItem('name')
// const age = localStorage.getItem('age')

//console.log(name,age)

//remove from local storage
//localStorage.removeItem('name')
//localStorage.clear()
//console.log(name,age)

document.querySelector('form').addEventListener('submit',function(e){
  const task = document.getElementById('task').value
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks  = [];
  } else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks',JSON.stringify(tasks))
  alert('Task Saved')
  e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))
tasks.forEach(function(ele){
  console.log(ele)
});