console.log("Hello, Console!");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var desiredUsername = "123456";
    var desiredPassword = "654321";
  
    if (username === desiredUsername && password === desiredPassword) {
      window.location.href = "./page3.html";
    } else {alert("Login error: Invalid username or password");
    }
  });