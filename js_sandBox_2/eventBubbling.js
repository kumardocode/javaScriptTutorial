// document.querySelector('.card-title').addEventListener('click',()=>{
//   console.log(`Event Bubbled : card-title`)
// })

// document.querySelector('.card-content').addEventListener('click',()=>{
//   console.log(`Event Bubbled : card-content`)
// })


// document.querySelector('.card').addEventListener('click',()=>{
//   console.log(`Event Bubbled : card`)
// })

// document.querySelector('.col').addEventListener('click',()=>{
//   console.log(`Event Bubbled : col `)
// })


//Event Delegation

// const delItem = document.querySelector('.delete-item')
//console.log(delItem)

const delItem = document.body;
delItem.addEventListener('click',deleteItem)

// function deleteItem(e){
//   if(e.target.parentElement.className === 'delete-item secondary-content'){
//     console.log('Delete-Item')
//   }
// }

function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('Delete-Item')
    e.target.parentElement.parentElement.remove()
  }
}