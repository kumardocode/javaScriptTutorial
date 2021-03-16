const firstName = 'John'
const lastName = 'Doe'
const age = 28
const email = 'john@example.com'
let html;
// html = '<ul><li>firstName: '+ firstName +'</li><li>lastName: '+ lastName +'</li><li>Age: '+ age +'</li><li>email: '+ email +'</li></ul>'


// html = '<ul>'+
//   '<li>firstName: '+ firstName +'</li>'+
//   '<li>lastName: '+ lastName +'</li>'+
//   '<li>Age: '+ age +'</li>'+
//   '<li>email: '+ email +'</li>'+
//   '</ul>'

html = `<ul>
<li>FirstName: ${firstName}</li>
<li>LastName: ${lastName}</li>
<li>Age: ${age}</li>
<li>Email:: ${email}</li>
</ul>`
document.body.innerHTML = html;
