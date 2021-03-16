const github = new GitHub;
const ui = new UI;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup',(e)=>{
  const userText = e.target.value;
  if(userText !== ''){
    github.getUsers(userText)
    .then((data)=>{
      console.log('Data = > ',data)
      if(data.profile.message === "Not Found" ){
        console.log('Error Message',data.profile.message)
          //show alert
          ui.showAlert('User-Not Found','alert alert-danger')
      }else{
          //show profile
          ui.showProfile(data.profile)
      }
    })
    .catch((err)=>console.log(err))
  }else{
    //clear profile
    ui.clearProfile()
  }
})