const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

const submitBtn = document.getElementById('btn')

form.addEventListener('submit',(event) => {
  event.preventDefault();

  validateInput();
})

const validateInput = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const cPassword = confirmPassword.value.trim();


  // Username Validate
  if(usernameValue === ''){
    setError(username, `Username is required`)
  }
  else{
    setSuccess(username)
  }

// Email validate
if (emailValue === ''){
  setError(email, `Email is required`)
}

else if (!isValidEmail(email)){
  setError(email, `Provide a valid email address`)
}
else{
  setSuccess(email)
}



// Password validate
  if(passwordValue === ''){
    setError(password, `Password is required`)
  }
  else if(passwordValue.length < 8) {
    setError(password, `Password is too short`)
  }
  else{
    setSuccess(password)
  }


  // Confirm password validate
  if(cPassword === ''){
    setError(confirmPassword, `Please confirm your Password`)
  }
  else if(cPassword !== passwordValue) {
    setError(confirmPassword, `Password doesn't match` )
  }
  else{
    setSuccess(confirmPassword)
  }
}


const setError = (element, message) =>{
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');
  errorDisplay.innerText = message;

  inputControl.classList.add('error')
  inputControl.classList.remove('success')
}

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error')
  errorDisplay.innerText = ''
  inputControl.classList.add('success');
  inputControl.classList.remove('error')
}

const isValidEmail =(e)=> {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return validRegex.test(e)
}