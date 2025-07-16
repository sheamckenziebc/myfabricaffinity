const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
      slide.classList.remove('exit');
    } else if (slide.classList.contains('active')) {
      slide.classList.remove('active');
      slide.classList.add('exit');
      // Remove the .exit class after the animation completes
      setTimeout(() => slide.classList.remove('exit'), 1500);
    } else {
      slide.classList.remove('active', 'exit');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);
// Advance slides every 5 seconds
setInterval(nextSlide, 5000);
