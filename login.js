// JavaScript
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Specify the desired username and password
    var desiredUsername = "123456";
    var desiredPassword = "654321";
  
    // Check if the entered username and password match the desired values
    if (username === desiredUsername && password === desiredPassword) {
      // Redirect to page3.html if the username and password are correct
      window.location.href = "./page3.html";
    } else {
      // Display login error message if the username or password is incorrect
      alert("Login error: Invalid username or password");
    }
  });