// Theme toggler
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});

// Form submit (just a demo)
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
});
