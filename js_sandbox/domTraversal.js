let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector("li.collection-item:first-child")
val = listItem
val = list;

//get child nodes
val = list.childNodes;
val = list.childNodes[0]
val = list.childNodes[0].nodeName
val = list.childNodes[0].nodeType

// 1 - Element
// 2- Attribute(deprecated)
// 3- Text -Node
// 8 - comment
// 9 - Document itself
// 10 - Doctype

//get children of element nodes

val = list.children
val = list.children[0].textContent = 'hello'

//get children of children
val = list.children[1].children[0].textContent = 'Link'

val = list.firstChild;
val = list.firstElementChild;


val = list.lastChild;
// val = list.lastElementChild;

//get parent element
// val = list.parentElement.parentElement

// val = listItem.parentElement.parentElement.children[1]



//get siblings
// val = listItem.nextSibling
// val = listItem.nextElementSibling.nextElementSibling.textContent='hi'
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling.textContent = 'Change Dom'
console.log("val = ",val);