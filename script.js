document.addEventListener("DOMContentLoaded", () => {
  // Toggle navbar
  const navbarNav = document.querySelector('.navbar-nav');
  const hamburger = document.querySelector('#hamburger-menu');
  hamburger.onclick = () => navbarNav.classList.toggle('active');
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
  });


  // Carousel dengan auto-slide
  const slides = document.querySelectorAll('.slide');
  const container = document.querySelector('.slides-container');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let current = 0;
  let timer;
  const delay = 2000;

  function updateCarousel() {
    container.style.transform = `translateX(-${current * 100}%)`;
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      current = (current + 1) % slides.length;
      updateCarousel();
    }, delay);
  }

  prevBtn.addEventListener('click', () => {
    current = (current > 0 ? current - 1 : slides.length - 1);
    updateCarousel();
    resetTimer();
  });

  nextBtn.addEventListener('click', () => {
    current = (current < slides.length - 1 ? current + 1 : 0);
    updateCarousel();
    resetTimer();
  });

  // Awal auto-slide
  resetTimer();
});