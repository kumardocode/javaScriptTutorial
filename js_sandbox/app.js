//document.getElementById()
let val;
//console.log(document.getElementById('task-title'))

//get things from elements
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;

console.log("val = ",val);

//change styling
val= document.getElementById("task-title").style.background = '#333';
val= document.getElementById("task-title").style.color = 'red';
val= document.getElementById("task-title").style.textAlign = 'center'
val= document.getElementById("task-title").textContent = 'Task List';
val= document.getElementById("task-title").lastChild
val= document.getElementById("task-title").style.padding = '5px'
//val= document.getElementById("task-title").style.display = 'none';

//change content
val= document.getElementById("task-title").textContent = 'Task List '
val= document.getElementById("task-title").innerText = 'Task to do';
val= document.getElementById("task-title").innerHTML = '<span>My Task To Do</span>'

//document.querySelector

val= document.querySelector("task-title");
val= document.querySelector(".card-title");
val= document.querySelector("h5");
val= document.querySelector("li").style.color = 'red';
val= document.querySelector("ul li").style.color = 'blue';
val= document.querySelector("li:last-child").style.color ='green'
val= document.querySelector("li:nth-child(3)").style.color ='yellow'
val= document.querySelector("li:nth-child(4)").textContent = 'Hello Java-script'
val= document.querySelector("li:nth-child(odd)").style.color ='pink';
val= document.querySelector("li:nth-child(even)").style.color ='black'


console.log("val = ",val)