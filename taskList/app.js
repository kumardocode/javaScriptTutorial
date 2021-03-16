const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-task')
const taskInput = document.querySelector('#task')
const filter = document.querySelector('#filter')

//loadAll EventListner
loadEventListners();

function loadEventListners(){
  //DOM load event
  document.addEventListener('DOMContentLoaded',getTasks)
  form.addEventListener('submit',addTask)
  taskList.addEventListener('click',removeTask)
  clearBtn.addEventListener('click',clearTask)
  filter.addEventListener('keyup',filterTask)
}

//function adding the task
function addTask(e){
if(taskInput.value === ''){
  alert('Enter Task')
}
e.preventDefault();
//create li element
const li = document.createElement('li')
li.className='collection-item'
//create text node and append to li element
li.appendChild(document.createTextNode(taskInput.value))
//create new link element
const link = document.createElement('a')
link.className='delete-item secondary-content';
//add icon inner html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append the link to li
li.appendChild(link) 
//append li to ul
taskList.appendChild(li);

//store task to LS
storeTaskToLocalStorage(taskInput.value)

//clear input
taskInput.value=''
}

//store task to LS
function storeTaskToLocalStorage(taskInput){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
   tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(taskInput)
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

//remove task
function removeTask(e){
if(e.target.parentElement.classList.contains('delete-item')){
  if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();
     //remove task from local-storage
  removeTaskFromLocalStorage
                            (e.target.parentElement.parentElement)
  }
}
}
//remove task from local storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  } else {
   tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach(function(task,index){
    if(taskItem.textContent === task){
      tasks.splice(index,1)
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks))
 }
//clear task
function clearTask(){
  taskList.innerHTML = ''

  //faster
  // while(taskList.firstChild){
  //   taskList.removeChild(taskList.firstChild)
  // }
  //clear task from local stoirage
  clearTaskFromLocalStorage();
}


//clearTaskFromLocalStorage()
function clearTaskFromLocalStorage(){
  localStorage.clear()
}


//filter task
function filterTask(e){
const text = e.target.value.toLowerCase()
 document.querySelectorAll('.collection-item').forEach(function(task){
  const item = task.firstChild.textContent;
  if( item.toLowerCase().indexOf(text) != -1){
      task.style.display= 'block'
  } else {
    task.style.display= 'none'
  }
 })
}

//get tasks
function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')) 
   }
   tasks.forEach(function(task){
     //create li element
     const li = document.createElement('li')
     li.className = 'collection-item';
     //create text node and appent to li
     li.appendChild(document.createTextNode(task))

     //create link element
     const link = document.createElement('a')
     link.className = 'delete-item secondary-content'

     //add icon
     link.innerHTML = '<i class="fa fa-remove"></i>'
     //append link to li
     li.appendChild(link)

     //append li to ul
     taskList.appendChild(li) 
   })
}