// let color='red';
// color='blue'
// color='black'
// switch(color){
//   case 'red' :
//     console.log(`color is ${color}`)
//     break;
//   case 'blue' :
//     console.log(`color is ${color}`)
//     break;
//   case 'green' :
//     console.log(`color is ${color}`)
//     break;
//   case 'orange' :
//     console.log(`color is ${color}`)
//     break;
//   case 'black' :
//     console.log(`color is ${color}`)
//     break;
//   case 'white' :
//     console.log(`color is ${color}`)
//     break;
    
// }

//DATE FORMAT

let today = new Date();
switch(today.getDay()){
    case 0 : 
        today = 'sunday';
    break;
    case 1 : 
        today = 'monday';
    break;
    case 2 : 
        today = 'tuesday';
    break;
    case 3 : 
        today = 'wednesday';
    break;
    case 4 : 
        today = 'thursday';
    break;
    case 5 : 
        today = 'friday';
    break;
    case 6 : 
        today = 'saturday';
    break;
}
console.log(`Today is ${today}`)