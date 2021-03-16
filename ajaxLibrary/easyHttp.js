function easyHttp(){
   this.http = new XMLHttpRequest()
}

//create HTTP GET request

easyHttp.prototype.get = function(url,callback){
  this.http.open('GET',url,true);
  const self = this;
  self.http.onload = function(){
    if(self.http.status === 200){
      callback(null,self.http.responseText)
    }else{
      callback('Error'+self.http.status)
    }
  }

  this.http.send()
}
//create HTTP POST request
easyHttp.prototype.post = function(url,data,callback){
  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-type','application/json')
  const self = this;
  this.http.onload = function(){
      callback(null,self.http.responseText)
  }

  this.http.send(JSON.stringify(data))
}

//create HTTP PUT request
easyHttp.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true);
  this.http.setRequestHeader('Content-type','application/json')
  const self = this;
  this.http.onload = function(){
      callback(null,self.http.responseText)
  }

  this.http.send(JSON.stringify(data))
}

//create HTTP DELETE request
easyHttp.prototype.delete = function(url,callback){
  this.http.open('DELETE',url,true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){ 
    callback(null, 'Record Deleted successfully...')
  }else{
    callback('Error : '+self.http.status)
  }
}
  this.http.send()
}