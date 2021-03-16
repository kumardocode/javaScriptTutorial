let val;

val = document
val = document.all
val = document.head
val = document.body
val = document.doctype
val = document.scripts
val = document.all.length
val = document.contentType
val = document.URL
val = document.characterSet
val = document.charset
val = document.cookie
val = document.firstChild
val = document.firstElementChild
val = document.images
val = document.lastChild
val = document.nodeType
val = document.nodeValue
val = document.parentElement
val = document.parentNode
val = document.textContent
val = document.childNodes
val = document.forms
val = document.forms[0]
//val = document.forms[1]
val = document.forms[0].id
val = document.forms[0].method
val = document.forms[0].attributes
val = document.forms[0].className
val = document.forms[0].action


val = document.links
val = document.links[0].classList
val = document.links[0].className
val = document.links[0].id



val = document.scripts[0].getAttribute('src')
val = document.scripts
val = Array.from (val)

val.forEach((attr)=>{
  console.log(attr.getAttribute('src'))
})
console.log(val)