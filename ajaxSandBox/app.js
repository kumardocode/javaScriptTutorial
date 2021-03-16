document.getElementById('button').addEventListener('click',loadData);
function loadData(){
  //create HMLHttpRequest and get Response
  const xhr = new XMLHttpRequest();

  //open xhr
  xhr.open('GET','data.txt',true);

  xhr.onload = function(){
    if(this.status === 200){
      const div = document.getElementById('output')
      div.innerHTML = `<h1>${this.responseText}</h1>`
    }
  }
  xhr.send();
  /*
  
  */


 /* HTTP STATUS
 200 : "OK"
 403 : "Forbidden"
 404 : "Not Found"
 */
}