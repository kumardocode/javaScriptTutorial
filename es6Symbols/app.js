//symbol is not 
//it is unique
//it is very useful as object propery identifier


let sym1 = Symbol()
// console.log(sym1)
let sym2 = Symbol()
// console.log(sym2)
// console.log(sym1 === sym2)

KEY1 = Symbol()
KEY2 = Symbol(123)
const object = {}

//if we want to use variable as a key then we have to use like this
//object[KEY1] = 'prop1
//if we use like this object.KEY3 = 'prop3
//then we are not using variable as key we are using KEY3 as normal property

object[KEY1] = 'prop1'
object[KEY2] = 'prop2'
object.KEY3 = 'prop3'
object.KEY4 = 'prop4'
//console.log(object)

//Symbols are not enumerable in for in loop..aboutImage

for(let i in object){
  console.log(`${i} : ${object[i]}`)
}

//out-put KEY1 and KEY2 are ignored 
//KEY3 : prop3
//KEY4 : prop4

//symbols are ignored by JSON.stringyfy()
console.log(JSON.stringify({key1 : 'prop'})) //{"key1":"prop"}
console.log(JSON.stringify({[Symbol('123')] : 'prop2'})) //{}