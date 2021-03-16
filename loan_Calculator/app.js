//defining the variables
document.getElementById('loan-form').addEventListener('submit',(e)=>{
  //Show Loader
  document.getElementById('loading').style.display = 'block'

  //Hide Results
  document.getElementById('results').style.display = 'none'

  setTimeout(calculateResult,2000)
  e.preventDefault()
});

function calculateResult(){
  //set UI vars
  const amount = document.getElementById('amount')
  const intrest = document.getElementById('interest')
  const years = document.getElementById('years')
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value)
  const calculatedInterest = parseFloat(intrest.value) /100/12
  const calculatedPayments = parseFloat(years.value)*12

  //compute monthly payment
  const x = Math.pow(1+calculatedInterest,calculatedPayments)
  const monthly = (principal*x*calculatedInterest)/(x-1)
  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly*calculatedPayments).toFixed(2)
    totalInterest.value = ((monthly*calculatedPayments)-principal).toFixed(2)

     //Show Loader
  document.getElementById('loading').style.display = 'none'

  //Hide Results
  document.getElementById('results').style.display = 'block'
  }else{
    showError('Please check your Number')
     //Show Loader
  document.getElementById('loading').style.display = 'none'

  //Hide Results
  document.getElementById('results').style.display = 'none'
  }
}
//showError
function showError(error){

  //get Elements
  const card = document.querySelector('.card')
  const heading = document.querySelector('.heading')
  
  const errorDiv = document.createElement('div')
  errorDiv.className = 'alert alert-danger'
  errorDiv.appendChild(document.createTextNode(error))
  
  //insert function
  card.insertBefore(errorDiv,heading)

  //clear-error
  setTimeout(clearError,3000)
}
//clear error
function clearError(){
  const error = document.querySelector('.alert')
  error.remove()
}