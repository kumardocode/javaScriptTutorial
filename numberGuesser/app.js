let min = 1,
    max = 10,
    winningNumber = 2,
    guessLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message')

minNum.textContent = min;
maxNum.textContent = max;

//add event listner

guessBtn.addEventListener('click',()=>{
  const guess = parseInt(guessInput.value)
  //validate number
 if(isNaN(guess) || guess < minNum || guess > maxNum){
   setMessage(`Please enter number between ${min} and ${max}`,'red')
 }

 //check if won
 if(guess == winningNumber){
   guessInput.disabled = true;
   guessInput.style.borderColor = 'green'
  setMessage(`${winningNumber} is correct, YOU WON`,'green')
 }else{
   guessLeft -= 1;
   if(guessLeft === 0){
     //game over you loose
     guessInput.disabled = true;
     guessInput.style.borderColor = 'red'
     setMessage(`game over you loose the winning number was ${winningNumber}` ,'red')
   }else {
     //game continues answer wrong
     guessInput.style.borderColor = 'red'
     guessInput.value = ''
     setMessage(`${guess} is not correct ${guessLeft} guesses left` ,'red')
   }
 }
})

//setmessage
function setMessage(msg,color){
  message.style.color = color
  message.textContent = msg
}