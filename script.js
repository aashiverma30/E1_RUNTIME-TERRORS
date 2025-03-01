document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const registerBtn = document.getElementById("register");
  const loginBtn = document.getElementById("login");

  if (registerBtn && loginBtn && container) {
    registerBtn.addEventListener("click", () => {
      console.log("Register button clicked");
      container.classList.add("active");
    });

    loginBtn.addEventListener("click", () => {
      console.log("Login button clicked");
      container.classList.remove("active");
    });
  } else {
    console.error("Some elements are missing! Check your IDs in the HTML.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signInBtn").addEventListener("click", function () {
      window.location.href = "main.html"; // Redirect to main.html
  });
});


