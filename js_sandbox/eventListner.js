//add event listner 
//-----event-object------
//1.click
//2.dblclick

//-----mouse-event------
//1.mouseover
//2.mouseout
//3.mousein
//4.mouseleave
//5.mousedown
//6.mouseenter
//7.mousemove

//-----keyboard-event-----
//1.keypress
//2.keyup
//3.keydown
//4.submit
//5.focus
//6.blur
//7.cut
//8.paste
//9.input
//10.change

//----------------------------------------------

let val;
// val= document.querySelector('.clear-tasks').addEventListener('click',function(){
//   console.log("clicked");
// })

val= document.querySelector(".clear-tasks").addEventListener('click',onClick)

function onClick(e){
  let val;
  val=e;
  // val = e.target
  // val = e.target.id
  // val = e.target.className
  // val = e.target.classList
  // val= e.target.innerText='Hello Listner'
  val = e.timeStamp;
  val= e.offsetY;
  val = e.offsetX
  console.log(val)
}