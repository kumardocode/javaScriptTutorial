//document.getElementByClassName('--className--')

// const items = document.getElementsByClassName('collection-item')
// console.log("Items = ",items);
// items[0].style.color='red'
// items[1].textContent='hello'

// let lis = document.querySelector('ul').getElementsByClassName('collection-item')
// console.log("Lis = ",lis);


//document.getElementByTagName('--className--')

// let lis = document.getElementsByTagName('li')
// console.log("lis = ",lis);
// lis[0].style.color='red'
// lis[1].textContent='hello kumar'

// lis = Array.from(lis)
// lis.reverse()
// console.log("rev",lis)
// lis.forEach((ele,index)=>{
//   ele.textContent = `hello - ${index}`
// })



// let lis = document.querySelector('ul li')
// console.log("lis = ",lis)

// let items = document.querySelectorAll("ul.collection li.collection-item")


items = document.querySelectorAll('li')
const liEven = document.querySelectorAll('li:nth-child(even)');
const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach(function(li ,index){
  li.style.background = '#ccc'
})

for(let i=0; i<liEven.length; i++){
  liEven[i].style.background ='#f4f4f4';
}