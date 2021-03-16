const posts = [{title : 'post one',body : 'This is post One'},
               {title : 'post Two',body : 'This is post Two'}
              ]

              function createPost(post,callback){
                  setTimeout(function(){
                    posts.push(post)
                    callback();
                  },2000)
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
              createPost({title : 'post Three',body : 'This is post Three'},getPosts)
              getPosts()
