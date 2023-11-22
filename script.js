const images = [
    'about-banner.jpg',
    'img/hm-bg.jpg',
    'img/hm-slideshow1.jpg',
    'img/hm-bg1.jpg'
    // Add more image URLs as needed
  ];
  
  let currentIndex = 0;
  const introSection = document.querySelector('.intro-hm');
  
  function changeBackground() {
    introSection.style.backgroundImage = `url(${images[currentIndex]})`;
    introSection.classList.add('dark-overlay'); // Adding a CSS class for the overlay
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  // Change background every 5 seconds (adjust as needed)
  setInterval(changeBackground, 5000);
  