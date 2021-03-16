//Book-Constructor
function Book(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI-Constructor
function UI(){}

UI.prototype.addBookToList = function(bookItem){
const tbody = document.getElementById('book-list')

//create elements
const tr = document.createElement('tr')
 tr.innerHTML = `<td>${bookItem.author}</td>
                <td>${bookItem.title}</td>
                <td>${bookItem.isbn}</td>
                <td><a href ="#" class="delete">X</a></td>`
                tbody.appendChild(tr);
}

//clear fields
UI.prototype.clearFields = function(){
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('isbn').value = '';
}

UI.prototype.setMessage = function(message,className){
  
  const form = document.querySelector('.book-form')

  //create element
  const div = document.createElement('div')
  div.className = `alert ${className} size`
  div.appendChild(document.createTextNode(message))
  div.style.display = 'block'

  //getparent
  const container = document.querySelector('.container');
  container.insertBefore(div,form)

  //settime-out
  setTimeout(()=>{
    document.querySelector('.alert').remove()
  },3000)
}

UI.prototype.removeBook = function(target){
  //check if contains class for delete
  if(target.classList.contains('delete')){
    target.parentElement.parentElement.remove()
  }
}

const book = document.querySelector('.book-form')
book.addEventListener('submit',(e)=>{
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const isbn = document.getElementById('isbn').value;

  //Instantiate Book Constructor
  const book = new Book(author,title,isbn);
  
  //Instantiate-UI-constructor
  const ui = new UI();

  //validate
  if(author === '' || title === '' || isbn === ''){
    ui.setMessage(`Please Fill The Form Correctly`,'error')
  } else{
    ui.addBookToList(book);
    ui.setMessage(`BooK added ! `,'success')
    ui.clearFields()
  }
 
  e.preventDefault();
})


//Event Listner for delete book
document.getElementById('book-list').addEventListener('click',(e)=>{
  const ui = new UI();
  ui.removeBook(e.target)

  //show message
  ui.setMessage(`Record deleted successfully`,'success')
  e.preventDefault()
})