const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const taskInput = document.querySelector('#task')
const filter = document.querySelector('#filter')

loadAllEventListner();

function loadAllEventListner(){
  document.addEventListener('DOMContentLoaded',getTasks)
  form.addEventListener('submit',addTask)
  taskList.addEventListener('click',removeTask)
  clearBtn.addEventListener('click',clearTask)
  filter.addEventListener('keyup',filterTask)
}

//getTasks from local storage
function getTasks(){
let tasks;
if(localStorage.getItem('tasks') === null){
  tasks = [];
} else{
  tasks = JSON.parse(localStorage.getItem('tasks'))
}
tasks.forEach((task)=>{
  const lis = document.createElement('li')
  lis.className = 'collection-item'
  lis.appendChild(document.createTextNode(task))
  const link = document.createElement('a')
  link.classList = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  lis.appendChild(link)
  taskList.appendChild(lis)
})
}

//add task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a Task')
  }else{
  //create li
  const lis = document.createElement('li')
  lis.className = 'collection-item'
  lis.appendChild(document.createTextNode(taskInput.value))
  const link = document.createElement('a')
  link.classList = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  lis.appendChild(link)
  taskList.appendChild(lis)

  //store task in local-storage
  storeTaskInLocalStorage(taskInput.value);
  taskInput.value = ''
  }
  e.preventDefault()
}

//store task in localstorage
function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

//removeTask
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();

    //remove task from local-storage
    removeTaskFromLocalStorage(e.target.parentElement.parentElement)
  }
}
}

//remove task from local storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.forEach((task,index)=>{
    if(taskItem.textContent === task){
      tasks.splice(index,1)
    }
  })
  localStorage.setItem('tasks',JSON.stringify(tasks))
}

//clearTask
function clearTask(){
  taskList.innerHTML = ''

  //cleartask-from local storage
  clearTaskFromLocalStorage();
}
//clear-task-from-localstorage
function clearTaskFromLocalStorage(){
  localStorage.clear();
}

//filter task
function filterTask(e){
const text = e.target.value.toLowerCase();
document.querySelectorAll('.collection-item').forEach((task)=>{
  const item = task.firstChild.textContent
  if(item.toLowerCase().indexOf(text) != -1){
    task.style.display = 'block'
  }else {
    task.style.display = 'none'
  }
})
}