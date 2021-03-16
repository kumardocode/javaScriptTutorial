class easyHttp{
  //get user
  getUser(url){
    return new Promise((resolve,reject)=>{
    fetch(url)
    .then(response=> response.json())
    .then(data=>resolve(data))
    .catch(err=>reject(err))
    })
  }
  //post user
  postUser(url,data){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method : 'POST',
        headers :{
          "Content-type" : "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response=>response.json())
      .then(data=>resolve(data))
      .catch(err=>reject(err))
    })
  }
  //put user
  updateUser(url,data){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method : "PUT",
        headers : {
          "Content-type" : "application/json"
        },
        body :JSON.stringify(data)
      })
      .then((response)=>response.json())
      .then((data)=>resolve(data))
      .catch((err)=>reject(err))
    })
  }
  //delete user
  deleteUser(url){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method : "DELETE",
        headers :{
          "Content-type":"application/json"
        }
      })
      .then((response)=>response.json())
      .then(()=>resolve('Resourse DELETED'))
      .catch((err)=>reject(err))
    })
  }
}