//creating and appending elements
const li = document.createElement('li');
li.className = 'collection-item';
// li.textContent = 'New List Item';
li.id = 'new item'
li.setAttribute('title','attr')

//create text node and append
li.appendChild(document.createTextNode('New List Item'))

const link = document.createElement('a');
link.className = 'delete-item secondary-content'
link.setAttribute('href','#')
link.innerHTML = '<i class="fa fa-remove"></>'
li.appendChild(link)

const ul = document.querySelector('ul.collection').appendChild(li);

console.log(ul)