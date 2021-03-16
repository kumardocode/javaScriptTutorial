const color = 'white'

switch(color){
  case 'red':
   console.log(`color is ${color}`) 
   break;
   case 'green':
   console.log(`color is ${color}`) 
   break;
   case 'blue':
   console.log(`color is ${color}`) 
   break;
   case 'orange':
   console.log(`color is ${color}`)
   break; 
   case 'white':
   console.log(`color is ${color}`)
   break; 
   case 'black':
   console.log(`color is ${color}`)
   break; 
   default:
     console.log('Color is voilet')
}

let day;
switch(new Date().getDay()){
  case 0: day = 'monday';
    break;
  case 1: day = 'tuesday'
    break;
  case 2: day = 'wednesday'
    break;
  case 3 : day = 'thursday'
    break;
  case 4: day = 'friday'
    break;
  case 5: day = 'saturday'
    break;
  default : day = 'sunday'
}
console.log(`Today is ${day}`)