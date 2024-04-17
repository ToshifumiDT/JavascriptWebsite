console.log("Hello, Console!");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const desiredUsername = "123456";
    const desiredPassword = "654321";
  
    if (username === desiredUsername && password === desiredPassword) {
      window.location.href = "./page3.html";
    } else {alert("Login error: Invalid username or password");
    }
  });