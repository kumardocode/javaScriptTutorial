
const ul = document.querySelector('ul.collection')
console.log(ul)
const li = document.createElement('li')
li.className = 'collection-item';
li.textContent = 'new List Item'
const a = document.createElement('a')
a.href = '#'
a.classList = 'delete-item secondary-content'
a.innerHTML = '<i class = "fa fa-remove"></i>'
li.appendChild(a);
ul.appendChild(li)
console.log(li)
//console.log(a)