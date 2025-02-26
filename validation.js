const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const confirm_password_input = document.getElementById('confirm-password-input');
const error_message = document.getElementById('error-message');


form.addEventListener('submit', (e) => {
   e.preventDefault() // prevents the form from submitting

   let errors = [];

   if (firstname_input){
    // if we have a firstname input then we are in the signup
      errors = getSignupFormErrors(firstname_input.Value, email_input.Value, password_input.Value, confirm-password_input.Value);
   }
   else {
    // if we don't have a firstname input then we are in the login
      errors = getLoginFormErrors(email_input.Value, password_input.Value);
   }

   if (errors.length > 0) {
       e.preventDefault();
       error_message.innerText = errors.join(", ");       
   }
})

function getSignupFormErrors(firstname, email, password, confirm_password) {
    let errors = [];
    
    if (firstname === '' || firstname === null) {
        errors.push('First name is required');
        firstname_input.parentElement.classList.add('incorrect');
    }
    if (email === '' || email === null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password === null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password !== confirm_password) {
        errors.push('Passwords do not match');
        password_input.parentElement.classList.add('incorrect');
        confirm_password_input.parentElement.classList.add('incorrect');
    }
    return errors;
}


function getLoginFormErrors(email, password) {
    let errors = [];
    
    if (email === '' || email === null) {
        errors.push('Email is required');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password === '' || password === null) {
        errors.push('Password is required');
        password_input.parentElement.classList.add('incorrect');
    }
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters');
        password_input.parentElement.classList.add('incorrect');
    }
    return errors;

}
    const allInputs = [ firstname_input, email_input, password_input, confirm_password_input ].filter(input => input !== null);

    allInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.parentElement.classList.contains('incorrect')) {
                input.parentElement.classList.remove('incorrect');
                error_message.innerText = '';
            }
        })
 });