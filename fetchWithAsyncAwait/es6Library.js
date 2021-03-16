// class Users{
//   getUsers(url){
//     return new Promise((resolve,reject)=>{
//       fetch(url)
//       .then((resp)=>resp.json())
//       .then((data)=>resolve(data))
//       .catch((err)=>reject(err))
//     })
//   }

//   postUser(url,data){
//     return new Promise((resolve,reject)=>{
//       fetch(url,{
//         method : "POST",
//         headers:{
//           "Content-type" :"application/json"
//         },
//         body:JSON.stringify(data)
//       })
//       .then((resopnse)=>resopnse.json())
//       .then((data)=>resolve(data))
//       .catch((err)=>reject(err))
//     })
//   }

//   updateUser(url,data){
//     return new Promise((resolve,reject)=>{
//       fetch(url,{
//         method:"PUT",
//         headers : {
//           "Content-type":"application/json"
//         },
//         body:JSON.stringify(data)
//       })
//       .then((response)=>response.json())
//       .then((data)=>resolve(data))
//       .catch((err)=>reject(err))
//     })
//   }

//   deleteUser(url){
//     return new Promise((resolve,reject)=>{
//       fetch(url)
//       .then((response)=>response.json())
//       .then(()=>resolve('Record Deleted'))
//       .catch((err)=>reject(err))
//     })
//   }
// }


class Users{
 async getUsers(url){
       const response = await fetch(url)
       const userData = await response.json()
       return userData;
  }

  async postUser(url,data){
     const response = await fetch(url,{
        method : "POST",
        headers:{
          "Content-type" :"application/json"
        },
        body:JSON.stringify(data)
      })
      const userData = await response.json()
      return userData;
  }

 async updateUser(url,data){
     const response = await fetch(url,{
        method:"PUT",
        headers : {
          "Content-type":"application/json"
        },
        body:JSON.stringify(data)
      })
    const userData = await response.json()
    return userData
  }

  async deleteUser(url){
    const response = await fetch(url,{
      method : "DELETE",
      headers:{
        "Content-type":"application/json"
      }
    })
    const userData = await 'Resource Deleted..';
    return userData;
    }
}