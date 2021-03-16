class Book{
  constructor(author,title,isbn){
    this.author = author;
    this.title = title;
    this.isbn = isbn;
  }
}

class UI{
  addBookToList(bookItem){
    const tbody = document.getElementById('book-list')

    //create elements
    const tr = document.createElement('tr')
      tr.innerHTML = 
      `<td>${bookItem.author}</td>
      <td>${bookItem.title}</td>
      <td>${bookItem.isbn}</td>
      <td><a href ="#" class="delete">X</a></td>`
      tbody.appendChild(tr);
  }

  setMessage(message,className){

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

  removeBook(target){
      //check if contains class for delete
      if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove()
      }
  }
  clearFields(){
    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('isbn').value = '';
  }
}

//class Of Local Storage
class Store{
  static getBookFromLocalStorage(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }else{
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books;
  }
  static removeBookFromLocalStorage(isbn){
    const books = Store.getBookFromLocalStorage()
    books.forEach((book,index)=>{
      if(book.isbn === isbn){
        books.splice(index,1)
      }
    })
    localStorage.setItem('books',JSON.stringify(books));
  }
  static addBookToLocalStorage(book){
    const books = Store.getBookFromLocalStorage();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books))
  }
  static displayBooksFromLocalStorage(){
    const books = Store.getBookFromLocalStorage()
    books.forEach((book)=>{
      const ui = new UI;

      //Add book to UI
      ui.addBookToList(book)
    })
  }
}


//Event Listner for add book
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

    //Add Book To LocalStorage
    Store.addBookToLocalStorage(book);

    ui.setMessage(`BooK added ! `,'success')
    ui.clearFields()
  }
 
  e.preventDefault();
})


//Event Listner for delete book
document.getElementById('book-list').addEventListener('click',(e)=>{
  const ui = new UI();
  ui.removeBook(e.target)

  //remove book from local storage
  Store.removeBookFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);

  //show message
  ui.setMessage(`Record deleted successfully`,'success')
  e.preventDefault()
}) 

//DOM Load Event
document.addEventListener('DOMContentLoaded',Store.displayBooksFromLocalStorage());
