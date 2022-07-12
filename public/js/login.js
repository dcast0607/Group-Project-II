const loginFormHandler = async (event) => {
    event.preventDefault();
    // TODO: Need to make sure that our homepage includes a "email-login" element ID,
    // TODO: this is what will be used to retrieve the email. 
    const email = document.querySelector('#email-login').value.trim();
    // TODO: Need to make sure that our homepage include a "password-login" element ID, 
    // TODO: this is what will be use to retrieve the password.
    const password = document.querySelector('#password-login').value.trim();
    
    // Checks that these values are not empty strings. 
    if (email && password) {
        // Makes an API request to authenticate the user. 
      const response = await fetch('/api/users/sign_in', {
        method: 'POST',
        // API body is converted to a string and passed to the API route. 
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // If API request returns a valid response, we can send the user to our calendar homepage. 
      // If the API request failed we alert the user to log in again. 
      if (response.ok) {
        // TODO: Need to add link to calendar here.
        document.location.replace('/');
      } else {
        alert('Failed to log in. Try again.');
      }
    }
  };

  const resetPasswordRedirectHandler = async (event) => {
    event.preventDefault();
    console.log('Sending user back to the reset password page.');
    document.location.replace("/reset_password");
  };
  
  // TODO: Add query selectors to accept the sign in request. 
  // TODO: Verify that our HTML homepage has a "login-form" class. 
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  document
  .querySelector('#resetPasswordLogin-button')
  .addEventListener('click', resetPasswordRedirectHandler);