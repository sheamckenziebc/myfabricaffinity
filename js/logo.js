document.addEventListener("DOMContentLoaded", function () {
  const logo = document.querySelector('.animated-logo');
  if (!logo) return;

  const hour = new Date().getHours();

  if (hour >= 6 && hour <= 18) {
    // Daytime look
    logo.style.filter = 'brightness(1.2) saturate(1.1)';
  } else {
    // Nighttime look
    logo.style.filter = 'brightness(0.8) grayscale(10%)';
  }
});