const loginRedirectHandler = async (event) => {
    event.preventDefault();
    console.log('Sending user to login page.');
    document.location.replace('/login');
  };

  const resetPasswordRedirectHandler = async (event) => {
    event.preventDefault();
    console.log('Sending user to the reset password page.');
    document.location.replace('/reset_password');
  };

  const signUpRedirectHandler = async (event) => {
    event.preventDefault();
    console.log('Sending user to the sign up page.');
    document.location.replace('/sign_up');
  };


document
.querySelector('#login-button')
.addEventListener('click', loginRedirectHandler);
document
.querySelector('#signUp-button')
.addEventListener('click', signUpRedirectHandler);
document
.querySelector('#resetPassword-button')
.addEventListener('click', resetPasswordRedirectHandler);