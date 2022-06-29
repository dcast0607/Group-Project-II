// TODO: Make sure that this is used on our API file.
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    // If the user is logged out successfully, they are sent
    // back to the homepage. 
    if (response.ok) {
    // TODO: Need to make sure that we do want to send
    // TODO: the users here. 
      document.location.replace('/');
    } else {
        // If login fails we display the error message. 
      alert(response.statusText);
    }
  };
  
  // TODO: Need to make sure that on our homepage html file, we have an element
  // TODO: with ID "logout". When the use clicks on this button, the user is logged out.
  document.querySelector('#logout').addEventListener('click', logout);
  