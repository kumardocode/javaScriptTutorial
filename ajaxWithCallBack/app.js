const http = new easyHTTP;

/**Get Multiple User */

// http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(response)
//   }  
// })


/**Get Single User */
// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(response)
//   }  
// })

/**POST Request */

const data = [{
  "title": "This is custom title after Updated",
  "body" : "This is custom body updated"
}]

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(response)
//   }
// })

/**POST Request */
// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,response){
//   if(err){
//     console.log(err)
//   }else{
//     console.log(response)
//   }
// })

/*DELETE Request*/
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
  if(err){
    console.log(err)
  }else{
    console.log(response)
  }
})