//literal
let re;
re = /hello/i;
re = /^hello/i;
re = /^h/i;
re = /javascript$/i;
re = /java.cript$/i; //wild card
re = /javascript/i;
re = /Gre?a?y/i;
re = /Gre?a?y?/i;

//string to match from
// const str = 'Hello To World of javascript'
const str = 'Gray'

const result = re.exec(str)
console.log(result);

function veriFy(re,str){
  if (re.test(str)) {
    console.log(`${str} Matches : [ ${re.source} ]`)
  } else {
    console.log(`${str} does Not Match [ ${re.source} ]`)
  }
}
veriFy(re,str)