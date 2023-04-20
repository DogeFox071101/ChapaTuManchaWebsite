submitButton.addEventListener('click', (event) => {

function logout() {
  // Send a request to the server to log out the user
  fetch('/logout', {
    method: 'POST',
    credentials: 'include'
  })
  .then(response => {
    // Clear any saved user credentials or session information
    localStorage.clear(); // or sessionStorage.clear() depending on your setup
    
    // Redirect the user to a different page (in this case, the login page)
    window.location.href = "login.html";
  })
  .catch(error => {
    console.error('Error logging out:', error);
  });
}
});