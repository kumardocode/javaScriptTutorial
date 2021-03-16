//getElementById('')
let val;
val = document.getElementById('task-title')

//get things from the element
val = document.getElementById('task-title').id
val = document.getElementById('task-title').className

//styling the element
val = document.getElementById('task-title').style.color = 'red'
val = document.getElementById('task-title').style.background = '#333';
val = document.getElementById('task-title').style.padding = '3px'
//val = document.getElementById('task-title').style.display = 'none'

//text content
val = document.getElementById('task-title').textContent = 'Task List'
val = document.getElementById('task-title').innerText = 'My Task List'
val = document.getElementById('task-title').innerHTML = '<span>Task Item</span>'

//querySelector
val = document.querySelector('#task-title')
val = document.querySelector('.test')
val = document.querySelector('.card-title')
val = document.querySelector('h5')
val = document.querySelector('ul')
val = document.querySelector('ul li').style.color = 'blue'
//val = document.querySelector('ul:li')
val = document.querySelector('li:last-child').style.color = 'green'
val= document.querySelector('li:nth-child(3)').style.color = 'yellow'
val= document.querySelector('li:nth-child(odd)').style.color = 'orange'
val= document.querySelector('li:nth-child(even)').style.color = 'pink'

console.log(val)