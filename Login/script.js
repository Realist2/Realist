document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check credentials
  if (username === "Tobi" && password === "13723942732") {
    document.getElementById("message").textContent = "Login successful!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = "Invalid username or password.";
    document.getElementById("message").style.color = "red";
  }
});