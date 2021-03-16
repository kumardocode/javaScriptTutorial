//EVENT BUBBLING

document.querySelector('.card-title').addEventListener('click',function(e){
    console.log("card-title")
})

document.querySelector('.card-content').addEventListener('click',function(e){
  console.log("card-content")
})

document.querySelector('.card').addEventListener('click',function(e){
  console.log("card")
})

document.querySelector('.col').addEventListener('click',function(e){
  console.log("col")
})

document.querySelector('.row').addEventListener('click',function(e){
  console.log("row")
})

document.querySelector('.container').addEventListener('click',function(e){
  console.log("container")
})