const resetPasswordFormHandler = async (event) => {
    event.preventDefault();

    // TODO: Need to make sure that our reset password page includes a "email-address" element ID,
    // TODO: this will be use to check which user needs to have their password reset. 
    const emailAddress = document.querySelector('#email-address').value.trim();

    // TODO: Need to make sure our reset password page includes a "verification-code" element ID, 
    // TODO: this will be used to let the user reset their password.
    const verificationCode = document.querySelector('#verification-code').value.trim();

    // TODO: Need to make sure that our reset password page includes a "new-password" element ID, 
    // TODO: this is what will be use to generate a new password.
    const newPassword = document.querySelector('#new-password').value.trim();

    // TODO: Need to make sure that our reset password page includes a "confirm-password" element ID, 
    // TODO: we want to make sure that the user confirms their new password. 
    const confirmPassword = document.querySelector('#confirm-password').value.trim();   
    
    // Checks that these values are not empty strings. 
    if (emailAddress && verificationCode && newPassword && confirmPassword) {
        // Checks to see that the confirmation code is correct.
        if (verificationCode === "Brian") {
            // Checks to see if both passwords match.
            if (newPassword === confirmPassword) {
                // Makes an API request to authenticate the user. 
                const response = await fetch('/api/users/reset_password', {
                    method: 'POST',
                    // API body is converted to a string and passed to the API route. 
                    body: JSON.stringify({ emailAddress, newPassword }),
                    headers: { 'Content-Type': 'application/json' },
                });
                // If API request returns a valid response, we can send the user to our sign in page. 
                // If the API request failed we alert the user to log in again. 
                if (response.ok) {
                    // TODO: Add link to send the user back to homepage.
                    document.location.replace('/');
                } else {
                    alert('Failed to reset password. Try again.');
                }
            } 
            else {
                alert("Please make sure that your passwords match!");
            }
        }
        else {
            alert("Please enter the correct verification code!");
        }

    } 
    else {
        alert("Please make sure that you fill out all of the fields correctly.");
    }
};

  
  // TODO: Add query selectors to accept the sign in request. 
  // TODO: Verify that our HTML homepage has a "login-form" class. 
  document
    .querySelector('.reset-password-form')
    .addEventListener('submit', resetPasswordFormHandler);
  