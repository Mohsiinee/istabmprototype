const form = document.querySelector('.login-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === "mohsine@gmail.com" && password === "2101") {
      window.location.href = "stg-profile.html";
    } else {
      alert("Email or password is incorrect. Please try again.");
    }
  });