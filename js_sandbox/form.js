const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const select = document.querySelector('select')

//form.addEventListener('submit',runEvent)
//form.addEventListener('keypress',runEvent)
//taskInput.addEventListener('keydown',runEvent)
//taskInput.addEventListener('keyup',runEvent)
//taskInput.addEventListener('input',runEvent)
//taskInput.addEventListener('focus',runEvent)
//taskInput.addEventListener('blur',runEvent)
//taskInput.addEventListener('keydown',runEvent)
select.addEventListener('change',runEvent)

function runEvent(e){
//e.preventDefault();
console.log(`Event Type:- ${e.type}`)

//get input
//console.log(taskInput.value)

//clear the input
//taskInput.value='';

console.log(e.target.value) 
}