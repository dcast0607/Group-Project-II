const signUpFormHandler = async (event) => {
    event.preventDefault();
    
    // TODO: Need to make sure that our sign up page includes a "firstName" element ID,
    // TODO: this is what will be used to create a user. 
    const firstName = document.querySelector('#userFirstName-signup').value.trim();

    // TODO: Need to make sure that our sign up page includes a "lastName" element ID,
    // TODO: this is what will be used to create a user.
    const lastName = document.querySelector('#userLastName-signup').value.trim();

    // TODO: Need to make sure that our sign up page includes a "email-sign-up" element ID,
    // TODO: this is what will be used to create a user. 
    const email = document.querySelector('#email-signup').value.trim();

    // TODO: Need to make sure that our sign up page include a "password-sign-up" element ID, 
    // TODO: this is what will be use to create a user.
    const password = document.querySelector('#password-signup').value.trim();

    const confirmPassword = document.querySelector('#confirmPassword-signup').value.trim();
    
    // Checks that these values are not empty strings. 
    if (firstName && lastName && email && password && confirmPassword) {
        if (password === confirmPassword) {
          // Makes an API request to authenticate the user. 
          const response = await fetch('/api/users/sign_up', {
            method: 'POST',
            // API body is converted to a string and passed to the API route. 
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: { 'Content-Type': 'application/json' },
          })
          .then( function(response) {
          // If API request returns a valid response, we can send the user to our calendar homepage. 
          // If the API request failed we alert the user to log in again. 
            if (response.ok) {
              console.log("Account created successfully!");
              return response.json();
            } else {
              alert('Failed to create account, try again. Make sure that you choose a tough password. If you are still running into issues maybe try resetting your password');
            }
          })
          .then(data => localStorage.setItem('userId', data.user.id));
          document.location.replace('/calendar');
        };
        } else {
      alert('Please make sure that you fill out all of the required information and that your passwords match.');
    }
  };

const returnToHomepageHandler = async (event) => {
  event.preventDefault();
  console.log("Sending the user back to the homepage.");
  document.location.replace('/homepage');
  };
  
  // TODO: Add query selectors to accept the sign up request. 
  // TODO: Verify that our sign up page has a "sign-up-form" class. 
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signUpFormHandler);

  document
    .querySelector('#homePage-button')
    .addEventListener('click', returnToHomepageHandler);
  