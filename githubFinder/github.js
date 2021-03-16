class GitHub{
  constructor(){
    this.client_id = '64d4869ae6bfab1acd1d';
    this.clent_secret = '3be127b18257e02c91eab6d97d4ff1c2e9bfabe0';
  }
  async getUsers(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}?client_secret=${this.clent_secret}`);
    const profile = await profileResponse.json();
    return{
      profile
    }
  }
}