document.querySelector('#loan-form').addEventListener('submit',function(e){
//show results
document.getElementById('results').style.display = 'none';

//hide loader
document.getElementById('loading').style.display = 'block';

setTimeout(calculateLoan,2000)
  e.preventDefault()

})

function calculateLoan(){
 const loanAmount = document.getElementById('amount')
 const loanIntrest = document.getElementById('interest')
 const loanYears = document.getElementById('years')
 const monthlyPayment = document.getElementById('monthly-payment')
 const totalPayment = document.getElementById('total-payment')
 const totalInterest = document.getElementById('total-interest')

 const principal = parseFloat(loanAmount.value)
 const calculatedInterest = parseFloat(loanIntrest.value) / 100 /12;
 const calculatedPayment = parseFloat(loanYears.value) * 12;

 //compute monthly payment
 const x = Math.pow(1+ calculatedInterest,calculatedPayment)
 const monthly = (principal*x*calculatedInterest)/(x-1);
 if(isFinite(monthly)){
  monthlyPayment.value = monthly.toFixed(2)
  totalPayment.value = (monthly * calculatedPayment).toFixed(2)
  totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2)
  
  //show results
  document.getElementById('results').style.display = 'block';

  //hide loader
  document.getElementById('loading').style.display = 'none';

} else{
   showError('please check your numbers!')
   //show results
  document.getElementById('results').style.display = 'none';

  //hide loader
  document.getElementById('loading').style.display = 'none';
 }
}
//error message 
function showError(error){

  //get elements 
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')

  const errorDiv = document.createElement('div')
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error))

  //insert error above heading
  card.insertBefore(errorDiv,heading)

  setTimeout(clearError,3000)

}
//clearing error function
function clearError(){
  document.querySelector('.alert').remove()
}