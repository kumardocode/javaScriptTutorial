/* 
1.players must guess a number between min and max
2.players get a certain amount of guesses
3.notify player of guesses remaining
4.notify player if loose or if win
5.let the player choose to play again 
*/
let min = 1,
    max = 10,
    winningNumber = randomNumber(min,max);
    guessLeft = 3;

//UI ELEMENTS
const game = document.querySelector('#game')
const minNumber = document.querySelector('.min-num')
const maxNumber = document.querySelector('.max-num')
const guessInput = document.querySelector('#guess-input')
const guessBtn = document.querySelector('#guess-btn')
const message = document.querySelector('.message')

//assign UI min and max
minNumber.textContent = min;
maxNumber.textContent = max;

//play again add event listner
game.addEventListener('mousedown',function(e){
 if(e.target.className === 'play-again'){
   window.location.reload();
 }
})

//add event listner to guess the number
guessBtn.addEventListener('click',function(){
  const guess = parseInt(guessInput.value)
  if(isNaN(guess) || guess < min || guess > max)
  {
    setMessage(`Please enter number between ${min} and ${max}`,'red');
  }

  //check if won
  if(guess == winningNumber){
    //game won
    gameOver(true,`${winningNumber} is correct, You Won!`);
  }else{
    //wrong number
    guessLeft -=1;

    if(guessLeft == 0){
      //game over -lost
    gameOver(false,`Game over you lost . The correct number was ${winningNumber}`)
    } else{
      //game continue -play again

    //change border color
    guessInput.style.borderColor = 'red';
    //send message
    setMessage(`${guess} is not correct ,${guessLeft} guess left`,'red')
    }
  }
})

//gameOver
function gameOver(won,msg){

let color;
(won == true )? color = 'green': color = 'red';
 //disable input 
 guessInput.disabled = true;
 //change border color
 guessInput.style.borderColor = color;
 message.style.color = color 
 //send message
 setMessage(msg)

 guessBtn.value = 'Play Again';
 guessBtn.className +='play-again';
}

//set message
function setMessage(msg,color){
  message.style.color = color
  message.textContent = msg;
}

//generating random number
function randomNumber(min,max) {
return(Math.floor(Math.random()*(max-min+1)+min))
}