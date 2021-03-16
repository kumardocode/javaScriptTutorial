let re;
re = /\w/i  //word character alphanumeric and _
re = /\w+/i //+ = matches one or more word character
re = /\W/i // NON Word character fails when we pass any word or digit or alphanumeric 
            //but passes when we send space or special symbol

re = /\d/  //Matches any digit that appears first from left to right           
re = /\d+/ //Matches any number of digits

re = /\D/  //Matches any non digit 

re = /\s/; //Matches whitespace char
re = /\S/; //pass with any character and digit but fails with if only we pass white space
re = /Hell\b/i //word boundary
re = /\hell/ //its not word boundary so returning hell from word hello

//let str = 'hello world hell' //Matches any non digit if any non digit is present then it passes the case



//Assesrtion
re = /x(?=y)/ //let str = 'hexyllo world hell'
              //Only matches if x followed by y

let str = 'hellox world hell'
re = /x(?!y)/ //matches if x not follwed by y

let result = re.exec(str)
console.log(result)


function reTest(re,str){
  if (re.test(str)) {
      console.log(`${str} Matches ${re.source}`)
  } else {
    console.log(`${str} Not Matches ${re.source}`)
  }
}
reTest(re,str)