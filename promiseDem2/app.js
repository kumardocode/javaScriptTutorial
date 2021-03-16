const posts = [{title : 'post one',body : 'This is post One'},
               {title : 'post Two',body : 'This is post Two'}
              ]

              function createPost(post){
                return new Promise(function(resolve,reject){
                  setTimeout(function(){
                    posts.push(post)
                    const error = false;
                    if(!error){
                      resolve()
                    }else{
                      reject('Something went wrong')
                    }
                  },2000)
                })
              }

              function getPosts(){
                setTimeout(function(){
                  let output = '';
                  posts.forEach((post)=>{
                    output += `<li>${post.body}</li>`
                  })
                  document.body.innerHTML = output;
                },1000)
              }

              //create-post
              createPost({title : 'post Three',body : 'This is post Three'}).then(getPosts)
              .catch(function(err){
                if(err){
                  console.log(err)
                }
              })
              getPosts()
