const key1 = 'some string for key1'
      key2 = {}
      key3 = function(){
          return 'hello'
      }
      key4 = String(Symbol())
      key5 = String(Symbol('123'))
      key6 = []
      key7 = ['john','mike']

const map = new Map();
map.set(key1 , 'Some Value for key-1');
map.set(key2 , 'Some Value for key-2');
map.set(key3 , 'Some Value for key-3');
map.set(key4 , 'Some Value for key-4');
map.set(key5 , 'Some Value for key-5');
map.set(key6 , 'Some Value for key-6');
map.set(key7 , 'Some Value for key-7');

// console.log('typeof key1',typeof key1)
// console.log('typeof key2',typeof key2)
// console.log('typeof key3',typeof key3)
// console.log('typeof key4',typeof key4)
// console.log('typeof key5',typeof key5)
// console.log('typeof key6',typeof key6)
// console.log('typeof key7',typeof key7)

//get values using keys
// console.log(map.get(key1))
// console.log(map.get(key2))
// console.log(map.get(key3))
// console.log(map.get(key4))
// console.log(map.get(key5))
// console.log(map.get(key6))
// console.log(map.get(key7))

//iterarting through map get key,value
// for(let [key,value] of map){
//   console.log(`${key} : ${value}`)
// } 

//iterarting through map get only key's
// for(let key of map.keys()){
//   console.log(`${key}`)
// } 

//iterarting through map get only values
// for(let values of map.values()){
//   console.log(`${values}`)
// } 

//console.log({name:'john'} === {name:'john'}) //false becuse it depends on refference type 

//convert map into array
const mapArr = Array.from(map)
//console.log(mapArr)

//get array of keys
const mapKey = Array.from(map.keys())
//console.log(mapKey)


//get array of values
const mapValue = Array.from(map.values())
console.log(mapValue)
