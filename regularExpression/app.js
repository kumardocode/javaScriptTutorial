// let re = /hello/;
// //console.log(re) // /hello/
// //console.log(re.source)  // hello
// re = /hello/i


// //exec() -> Return result in an array or null
// // let result = re.exec('Brad Hello World')
// // console.log(result)
// // console.log(result[0])
// // console.log(result.index)
// // console.log(result.input)
// // console.log(result.length)
// // console.log(result)

// //test()-> Return true or false
// // const result = re.test('GoodHello Brad World')
// // console.log(result)

// //match() -> Return Result Array or null
// // const str = 'good hello today'
// // const result = str.match(re)
// // console.log(result[0])
// // console.log(result.input)

// //search() -> Returns index of firstMatch found or -1 if not found
// // const str = 'hBello brad Hello Morning'
// // const result = str.search(re)
// // console.log(result)


// //replace() ->Return new string with some or matches All

// const str = 'hello brad good hello'
// const newString = str.replace(re,'Hii')
// console.log(newString) 


let re = /hello/i
let result;
// console.log(re)
// console.log(re.source)


//exec,test,searh,replace,match

//1.exec() -> Returns an array if present or null
//2.test() -> Returns boolean 
//3.match() -> Return Array if present and null if not 
//4.replace() -> Return new string with some or matches All
//5.search() -> Returns index of firstMatch found or -1 if not found

result = re.exec('Hello World');
// console.log(result)
// console.log(result[0])
// console.log(result.index)
// console.log(result.input)

result = re.test('World Good HelloMorning')

let str = 'World Good HelloMorning';
result =  str.match(re)
// console.log(result[0])
// console.log(result.input)
// console.log(result.index)

result = str.search(re)

result = str.replace(re,'John Doe ')
console.log(result)
