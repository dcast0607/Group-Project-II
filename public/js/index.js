// This will be used to make an API request that can take the user to the reset password page. 
const resetPasswordRequestHandler = (event) => {
    event.preventDefault();
    // TODO: Add logic to handle redirect, to the sign up page. This can built at the API level or
    // TODO: within the index.js file. If we do this through the index.js file we just need ot use the
    // TODO: location.href to redirect the user to the right page. 
    fetch('api/users/sign_up', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.error('Error:', error);
        });

};

// This will be used to make an API request that can take the user to the sign up page. 
const signUpRequestHandler = (event) => {
    // TODO: Add logic to handle redirect, to the reset password page. This can built at the API level or
    // TODO: within the index.js file. If we do this through index.js we just need to use location.href to
    // TODO: redirect the user to the right page. 
    fetch('api/users/reset_password', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
          console.error('Error:', error);
        });
};


// This query selector will target the reset password button on the homepage. When the user clicks on this button
// we will take them to the reset password page.
document.querySelector('#reset-password-button').addEventListener('click', resetPasswordRequestHandler);

// This query selector will allow target the sign up button on the homepage. When the user clicks on this button
// we will take them to the sign up page. 
document.querySelector('#sign-up-button').addEventListener('click', signUpRequestHandler);