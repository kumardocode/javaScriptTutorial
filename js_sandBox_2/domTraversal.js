let val;
const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')
val = list;
val = listItem;
// val = list.childNodes
// val = list.childNodes[0]
// val = list.childNodes[1]
// val = list.childNodes[2]

// //Eleminating the textNode and 
// val = list.children
// val = list.children[2].style.color = 'red'
// val = list.children[1].textContent = 'Hello'

// //children of children
// val = list.children[2].children[0]

// //firstChild
// val = list.firstChild
// val = list.firstElementChild.style.color = 'blue'

// //val = list.lastChild.style.color = 'pink'
// val = list.lastElementChild.style.color = 'orange'

// val = list.firstElementChild.nextElementSibling.nextElementSibling.style.color = 'green'
val = listItem.nextElementSibling.style.color = 'red'
val = listItem.nextElementSibling.nextElementSibling.style.color = 'blue'
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling.style.color='green'
val = listItem.parentElement.parentElement
console.log(val)