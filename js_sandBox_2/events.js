//click
//dblclick
//mouseenter
//mouseleave
//mouseover
//mouseout
//mouseup
//mousedown
//mousemove

const clearTask = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

//click
//clearTask.addEventListener('click',runEvent)

//dblclick
//clearTask.addEventListener('dblclick',runEvent)

//mouseenter
//card.addEventListener('mouseenter',runEvent)

//mouseleave
//card.addEventListener('mouseleave',runEvent)

//mouseover
//card.addEventListener('mouseover',runEvent)

//mouseout
//card.addEventListener('mouseout',runEvent)

//mousemove
card.addEventListener('mousemove',runEvent)

function runEvent(e){
  console.log(`Event Type : ${e.type}`)
 heading.innerText = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`
document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`
}