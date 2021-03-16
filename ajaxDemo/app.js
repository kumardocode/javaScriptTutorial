document.getElementById('customer').addEventListener('click',getData);
document.getElementById('customers').addEventListener('click',getJsonData);
document.getElementById('customersArray').addEventListener('click',getJsonArrayData);


function getData(){
  let output = document.getElementById('output');
    const xhr = new XMLHttpRequest();
    xhr.open('GET','data.txt',true)
    xhr.onload = function(){
      if(this.status === 200){
        output.innerHTML = `${this.responseText}`
      }
    }
    xhr.send()
}
function getJsonData(e){
  let div = document.getElementById('output');
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customer.json',true);
  xhr.onload = function(){
    const customer = JSON.parse(this.responseText);
    if(this.status === 200){
      const output = `<ul>
                      <li>ID: ${customer.id}</li>
                      <li>Name: ${customer.name}</li>
                      <li>Age: ${customer.age}</li>
                      <li>Company: ${customer.company}</li>
                      <li>Phone: ${customer.phone}</li>
                      </ul>`
    div.innerHTML = output;
    }
  }
  xhr.send();
}

function getJsonArrayData(e){
  let div = document.getElementById('output');

  //create ul
  const ul = document.createElement('ul')
  
  const xhr = new XMLHttpRequest();
  xhr.open('GET','customers.json',true)
  xhr.onload = function(){
    const customers = JSON.parse(this.responseText);
    let output = ''
    customers.forEach((customer)=>{
      output +=
      `<li>ID: ${customer.id}</li>
       <li>Name: ${customer.name}</li>
       <li>Age: ${customer.age}</li>
       <li>Company: ${customer.company}</li>
       <li>Phone: ${customer.phone}</li>
       <hr>
      `
    });
    document.getElementById('output').innerHTML = output;
  }
  xhr.send();

}