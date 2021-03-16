//removing and replacing element
const newHeading = document.createElement('h2')
newHeading.id = 'newheading';
newHeading.append(document.createTextNode('Task List'))
console.log(newHeading);

const oldHeading = document.getElementById('task-title')
const cardAction = document.querySelector('.card-action')
cardAction.replaceChild(newHeading,oldHeading)

//remove elements
// const lis = document.querySelector('li')
// lis.remove();
const lisItems = document.querySelectorAll('li')
//console.log(lisItems)

//remove the list items
//lisItems[0].remove();

//removing the child using parent element
const lis = document.querySelector('ul');
lis.removeChild(lisItems[3])
// console.log(lis)

//classes and attributes
const lisFirst = document.querySelector('li:first-child')
const link = lisFirst.children[0]
let val;
val= link;
// console.log(link)
// console.log(lisFirst)
val = link.classList
val = link.className
link.classList.add('test')
link.classList.remove('test')
val = link;
console.log(val)