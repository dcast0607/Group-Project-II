const resetPasswordFormHandler = async (event) => {
    event.preventDefault();

    // TODO: Need to make sure that our reset password page includes a "email-address" element ID,
    // TODO: this will be use to check which user needs to have their password reset. 
    const email = document.querySelector('#email-reset').value.trim();

    // TODO: Need to make sure our reset password page includes a "verification-code" element ID, 
    // TODO: this will be used to let the user reset their password.
    const verificationCode = document.querySelector('#token-reset').value.trim();

    // TODO: Need to make sure that our reset password page includes a "new-password" element ID, 
    // TODO: this is what will be use to generate a new password.
    const password = document.querySelector('#password-reset').value.trim();

    // TODO: Need to make sure that our reset password page includes a "confirm-password" element ID, 
    // TODO: we want to make sure that the user confirms their new password. 
    const confirmPassword = document.querySelector('#confirmPassword-reset').value.trim();   
    
    // Checks that these values are not empty strings. 
    if (email && verificationCode && password && confirmPassword) {
        // Checks to see that the confirmation code is correct.
        if (verificationCode === "TACO") {
            // Checks to see if both passwords match.
            if (password === confirmPassword) {
                // Makes an API request to authenticate the user. 
                const response = await fetch('/api/users/reset_password', {
                    method: 'PUT',
                    // API body is converted to a string and passed to the API route. 
                    body: JSON.stringify({ email, password }),
                    headers: { 'Content-Type': 'application/json' },
                })
                .then( function(response) {
                        // If API request returns a valid response, we can send the user to our calendar homepage. 
                        // If the API request failed we alert the user to log in again. 
                            if (response.ok) {
                                console.log("Successfully reset password.");
                                return response.json();
                            } else {
                                alert('Failed to reset password, this user may not exist.');
                            }
                }).then(data => localStorage.setItem('userId', data.user.id));
                document.location.replace('/calendar');;
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

const redirectToHomePageHandler = async (event) => {
     event.preventDefault();
    console.log("Sending the user back to the homepage.");
    document.location.replace('/homepage');
};


document
    .querySelector('.resetPassword-form')
    .addEventListener('submit', resetPasswordFormHandler);

document
    .querySelector('.resetPassword-form')
    .addEventListener('#homePage-button', redirectToHomePageHandler);
  