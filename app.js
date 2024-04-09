document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    var firstName = document.getElementById("first-name").value.trim();
    var lastName = document.getElementById("last-name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    // Check for empty fields and email format
    displayErrorMessage(firstName === "", "First name cannot be empty.", "first-name-error");
    displayErrorMessage(lastName === "", "Last name cannot be empty.", "last-name-error");
    displayErrorMessage(email === "", "Email cannot be empty.", "email-error");
    displayErrorMessage(!isValidEmail(email), "Looks like this is not an email.", "email-error");
    displayErrorMessage(password === "", "Password cannot be empty.", "password-error");
});

// Function to validate email format
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to display error message
function displayErrorMessage(condition, message, errorElementId) {
  var errorElement = document.getElementById(errorElementId);
  if (condition) {
    errorElement.textContent = message;
  } else {
    errorElement.textContent = '';
  }
}
