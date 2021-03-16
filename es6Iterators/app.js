// const person = ['john','mike','marry','williams']

// function personIterator(person){
//   let nextIndex = 0;
//   return {
//     next : function(){
//       return (nextIndex < person.length) ? {value : person[nextIndex++],done:false}:{done:true}
//     }
//   }
// }

// const iterator = personIterator(person)
// // console.log(iterator.next().value)
// // console.log(iterator.next().value)
// // console.log(iterator.next().value)
// // console.log(iterator.next().value)
// // console.log(iterator.next())

// function idMaker(){
//   let index=0
//   return{
//     next : function(){
//       return {value : index++ ,done:false}
//     }  
//   }
// }
// const itr = idMaker();
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())


// -------------------------Iterator Demo------------------------------------

const person = ['Jack','Jill','John','Doe','Marry','Williams']

function personIterator(person){
  let nextIndex = 0;  
  return{ 
        next : function(){
          return (nextIndex < person.length)?{value: person[nextIndex++] , done: false}:
          {done : true}
        }
    }
}
const iterator = personIterator(person)
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

function idGenerator(){
  let index = 0;
  return{
    next : function(){
      return {value : ++index, done: false}
    }
  }
}
const iter = idGenerator();
// console.log(iter.next().value)
// console.log(iter.next().value)
// console.log(iter.next().value)
// console.log(iter.next().value)
// console.log(iter.next().value)

//------------------Generator--------------------
//generator function is of type itrator and also of type iteralbe
//it is iterartor because it has iterabele@mathod 
//it is iterable because it has next method
//generator and iterator is similar type 
//generator has yield property
//yield pause the current execution and returns the result to the caller method
//once the execution of caller completes then the next line of code gets executed
//within the block
//its kind of return state ment

function* idGenerate(){
  let index = 1;
  while (true) {
    yield index++;
  }
}
const itr = idGenerate()
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)
// console.log(itr.next().value)


function* personDetails(){
  yield 'John'
  yield 'Doe'
  yield 'Marry'
  yield 'Williams'
}
const it = personDetails()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
