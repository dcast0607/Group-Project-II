const loginFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    
    // Checks that these values are not empty strings. 
    if (email && password) {
        // Makes an API request to authenticate the user. 
      const response = await fetch('/api/users/sign_in', {
        method: 'POST',
        // API body is converted to a string and passed to the API route. 
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      .then( function(response) {
      // If API request returns a valid response, we can send the user to our calendar homepage. 
      // If the API request failed we alert the user to log in again. 
      if (response.ok) {
        console.log("Successfully logged in.");
        return response.json();
      } else {
        alert('Failed to log in. Try again.');
      }
      })
      .then(data => localStorage.setItem('userId', data.user.id));
      document.location.replace('/calendar');
    }
  };

  const resetPasswordRedirectHandler = async (event) => {
    event.preventDefault();
    console.log('Sending user back to the reset password page.');
    document.location.replace("/reset_password");
  };
  

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  document
  .querySelector('#resetPasswordLogin-button')
  .addEventListener('click', resetPasswordRedirectHandler);