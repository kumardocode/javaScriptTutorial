//document.querySelector('byclassname')
//document.querySelector('bytagname')
let items;
//  items = document.getElementsByClassName('collection')
//  items = document.getElementsByClassName('collection-item')
// console.log(items)
// console.log(items[0])
// console.log(items[1])
// items[1].style.color = 'red'
// items[1].textContent = 'hello'

//items = document.querySelector('ul').getElementsByClassName('collection-item')
//console.log(items)

//getElementByTagName()
// let listItem = document.getElementsByTagName('li')
// //console.log(listItem)
// listItem[0].style.color = 'blue'
// listItem[2].textContent = 'Hello Dude'

// listItem = Array.from(listItem)

// listItem.reverse()
// listItem.forEach((ele,index)=>{
//   console.log(`${index} : ${ele.className} `)
// })
// //console.log(listItem)

//querySelectorAll

lis = document.querySelectorAll('li') //returns node list
lis.forEach((ele,index)=>{
  console.log(`${ele.className} , ${index}`)
})
console.log(lis)