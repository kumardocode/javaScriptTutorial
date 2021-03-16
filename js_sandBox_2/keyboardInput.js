//submit
//keypress
//keyup
//keydown
//cut
//paste
//input
//focus
//blur

const form = document.querySelector('form')
const taskInput = document.getElementById('task')

const select = document.querySelector('select')
//submit event
//form.addEventListener('submit',runEvent)

//keydown event
//taskInput.addEventListener('keydown',runEvent)

//keypress event
//taskInput.addEventListener('keypress',runEvent)

//keyup
//taskInput.addEventListener('keyup',runEvent)

//cut
//taskInput.addEventListener('cut',runEvent)

//paste
//taskInput.addEventListener('paste',runEvent)

//focus
//taskInput.addEventListener('focus',runEvent)

//blur
//taskInput.addEventListener('blur',runEvent)

//input
//taskInput.addEventListener('input',runEvent)


//change
//select.addEventListener('change',runEvent)

//clear the input
taskInput.innerHTML = ''
//keypress
function runEvent(e){
  console.log(`Event Type ${e.type}`)
  //console.log(taskInput.value)
  console.log(e.target.value)
  //e.preventDefault()
}
