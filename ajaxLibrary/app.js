const http = new easyHttp;

//new http get request
// http.get('https://jsonplaceholder.typicode.com/posts',(error,response)=>{
//   if(!error){
//     console.log(response);
//   }else{
//     console.log(error);
//   }
// })


const data = [
  {
    "title": "This is Updated Demo Title",
    "body": "This is Updated demo body"
  }
]

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(response)
//   }
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(response)
//   }
// })

http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(err,response){
  if(err){
    console.log(err)
  }else{
    console.log(response)
  }
})