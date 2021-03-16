//Replace element

//create element

const newHeading = document.createElement('h5')
newHeading.id='task-title'
newHeading.appendChild(document.createTextNode('Task List'))
//console.log(newHeading)

//grab old heading
const oldHeading = document.querySelector('#task-title')

//grab parent node
const cardAction = document.querySelector('.card-action')
cardAction.replaceChild(newHeading,oldHeading)
// console.log(cardAction)
// console.log(oldHeading)

//remove lis
const lis = document.querySelectorAll('li.collection-item')
//lis[0].remove();
//lis[1].remove()
const list = document.querySelector('ul')
//list.removeChild(lis[0])
//console.log(list)

//class and attribute
const firstLi = document.querySelector('li.collection-item')
const link = firstLi.children[0]
let val;
val = link.className
val = link.classList
val = link.classList.add('test')
val = link.classList.remove('test')
val = link

val = link.getAttribute('href')
val = link.setAttribute('href','https://google.com')
console.log(val)
