document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("../includes/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header-include").innerHTML = data;
    });

  // Load footer
  fetch("../includes/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-include").innerHTML = data;
    });
});
