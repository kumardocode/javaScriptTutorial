//event delegation

// document.querySelector('.collection').addEventListener('click',function(e){
//   let val;
//   val = e.target.parentElement.parentElement.remove()
//   console.log(val)
// })


// document.querySelector('body').addEventListener('click',function(e){
//   console.log(`Event Target:-${e.type}`);
// })

// const delItem = document.querySelector('.delete-item')
// delItem.addEventListener('click',deleteItem)

document.body.addEventListener('click',deleteItem)

// function deleteItem(e){
//   if(e.target.className === 'fa fa-remove'){
//     console.log('deleteItem')
//   }


function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
      e.target.parentElement.parentElement.remove()
       console.log('deleteItem')
  }
}