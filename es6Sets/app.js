//set is used tyo store data in the collection
//using set we cannot store the duplicate values in the collection
//if we try to do such thing it will eleminate that
//in case of refference it will be possible if both are pointing to other location

  const set = new Set();

  const o = {name:'John',city: 'usa'}
  set.add(1);
  set.add(2);
  set.add(3);
  set.add(3); //gets eleminated
  set.add(2); //gets eleminated because it is allready present
  set.add(o);
  set.add({name:'John',city: 'usa'}); //both are added because both are refference type and are pointing to different memory location
  
  console.log(set.size)
