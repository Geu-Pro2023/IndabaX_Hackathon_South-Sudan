// Scroll reveal animation
document.addEventListener('DOMContentLoaded', function() {
  // Elements to reveal on scroll
  const revealElements = [
    '.feature-card',
    '.weather-card',
    '.stat-card',
    '.team-member',
    '.about-card',
    '.section-header'
  ];
  
  // Add reveal-hidden class to all elements
  revealElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('reveal-hidden');
    });
  });
  
  // Check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }
  
  // Reveal elements when they come into view
  function revealOnScroll() {
    document.querySelectorAll('.reveal-hidden').forEach(el => {
      if (isInViewport(el)) {
        el.classList.add('reveal-visible');
      }
    });
  }
  
  // Initial check
  revealOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', revealOnScroll);
});