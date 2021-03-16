let re;
re = /Gr[ae]y/i  //must be a or e
re = /[GF]ray/  //must be a or e , Gray Matches [ [GF]ray ]
re = /[GF]ray/  //must start with G or F
re = /[GF]ray/i  //for ignoring case
re = /[^GF]ray/i  //can be anything except G or F here ^ symbol represents not
re = /^[GF]ray/i  // if we put ^ out side then it means that string must start with G or F
re = /[A-Z]ray/   // Matches any upper case letter
re = /[A-Z]ray/i  //Matches any upper case letter and lower case letter
re = /[A-Za-z]ray/ //Matches any upper case letter and lower case letter
re = /[A-Za-z0-9]ray/


//Qualifiers
re = /hel{2}o/i // Must exactly occur {n} amount of times
re = /hel{3}o/i // Must exactly occur {n} amount of times
re = /hel{2,4}o/i //must occur atleast {min,max} times

// const str = 'Colour Gray '

const str = 'Hello'
let result = re.exec(str)
console.log(result)

function reTest(re,str){
  if (re.test(str)) {
  console.log(`${str} Matches [ ${re.source} ]`)
  } else {
    console.log(`${str} Not Matches [ ${re.source} ]`)
  }
}
reTest(re,str)