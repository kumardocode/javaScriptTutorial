const name = 'Rahul';
const age = 30;
const city = 'pune';
const course = 'PGDAC';

let html;

//without template literal
html='<ul><li>Name: '+ name +'</li><li>Age: '+ age +'</li><li>City: '+ city +'</li><li>Course: '+ course +'</li></ul>';

html='<ul>'+
'<li>Name: '+ name +'</li>'+
'<li>Age: '+ age +'</li>'+
'<li>City: '+ city +'</li>'+
'<li>Course: '+ course +'</li>'+
'</ul>';

//with template literal's ES-6

function hello(){
  return "hello";
}
  html = `<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>City: ${city}</li>
  <li>Course: ${course}</li>
  <li>Sum: ${4+4}</li>
  <li>function: ${hello()}</li>
  <li>Age: ${(age > 30) ? 'overAge' : 'underAge' }</li>
  </ul>`
document.body.innerHTML=html;

