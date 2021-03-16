class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }
  showProfile(user){
    this.profile.innerHTML = `<div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" class="btn btn-primary btn-block mb-4" target="_blank">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gits: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Company: ${user.blog}</li>
              <li class="list-group-item">Company: ${user.location}</li>
              <li class="list-group-item">Company: ${user.created_at}</li>
          </ul>
          </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>`
  }

  //show alert
  showAlert(message,className){
    this.clearAlert();
    const div = document.createElement('div');
    div.className =className;
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search')
    container.insertBefore(div,search);

    //clear alert after 3 second
    setTimeout(()=>{
      this.clearAlert();
    },3000)
  }
  clearProfile(){
    this.profile.innerHTML = ''
  }

  clearAlert(){
    const currentAlert = document.querySelector('.alert')
    if(currentAlert){
      currentAlert.remove();
    }
  }
}