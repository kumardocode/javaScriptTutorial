function easyHTTP(){
  this.http = new XMLHttpRequest();
}

//make HTTP GET Request

easyHTTP.prototype.get = function(url,callback){
  this.http.open('GET',url,true);
  const self = this;
  this.http.onload = function()
  {
    if(self.http.status === 200){
       callback(null,self.http.responseText);
    }else{
      callback('Error'+self.http.status);
    }
  }
  this.http.send()
}  

//make HTTP POST Request

easyHTTP.prototype.post = function(url,data,callback){
  this.http.open('POST',url,true);
  this.http.setRequestHeader('Content-type','application/json');
  const self = this;
  this.http.onload = function(){
      callback(null,self.http.responseText)
    }
  this.http.send(JSON.stringify(data))
}

//Make http PUT Request

easyHTTP.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true)
  this.http.setRequestHeader('Content-type','application/json');
  const self = this;
  this.http.onload = function(){
      callback(null,self.http.responseText)
  }
  this.http.send(JSON.stringify(data))
}

//Make http DELETE Request
easyHTTP.prototype.delete = function(url,callback){
    this.http.open('DELETE',url,true)
    const self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
          callback(null,'Record Deleted')
        }else{
          callback('ERROR : '+self.http.status)
        }
    }
    this.http.send();
}