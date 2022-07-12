const signUpFormHandler = async (event) => {
    event.preventDefault();
    
    // TODO: Need to make sure that our sign up page includes a "firstName" element ID,
    // TODO: this is what will be used to create a user. 
    const firstName = document.querySelector('#firstName').value.trim();

    // TODO: Need to make sure that our sign up page includes a "lastName" element ID,
    // TODO: this is what will be used to create a user.
    const lastName = document.querySelector('#lastName').value.trim();

    // TODO: Need to make sure that our sign up page includes a "email-sign-up" element ID,
    // TODO: this is what will be used to create a user. 
    const email = document.querySelector('#email-sign-up').value.trim();

    // TODO: Need to make sure that our sign up page include a "password-sign-up" element ID, 
    // TODO: this is what will be use to create a user.
    const password = document.querySelector('#password-sign-up').value.trim();
    
    // Checks that these values are not empty strings. 
    if (firstName && lastName && email && password) {
        // Makes an API request to authenticate the user. 
      const response = await fetch('/api/users/sign_up', {
        method: 'POST',
        // API body is converted to a string and passed to the API route. 
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // If API request returns a valid response, we can send the user to our sign in page. 
      // If the API request failed we alert the user to try again.
      if (response.ok) {
        // TODO: Need to add link to sign in page here.
        document.location.replace('/');
      } else {
        alert('Failed to create user. If the user already exists try again.');
      }
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
  