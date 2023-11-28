

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  const whatWeOfferSection = document.querySelector('.what-we-offer');
  if (isInViewport(whatWeOfferSection)) {
      whatWeOfferSection.classList.add('show');
      window.removeEventListener('scroll', handleScroll);
  }
}

// Add event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial check in case the element is already visible on page load
handleScroll();
