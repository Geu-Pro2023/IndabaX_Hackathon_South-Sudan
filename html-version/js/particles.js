// Particles animation for hero section
document.addEventListener('DOMContentLoaded', function() {
  const heroParticles = document.querySelector('.hero-particles');
  if (!heroParticles) return;
  
  // Create particles
  for (let i = 0; i < 50; i++) {
    createParticle(heroParticles);
  }
});

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Random position
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  
  // Random size
  const size = Math.random() * 10 + 5;
  
  // Random opacity
  const opacity = Math.random() * 0.5 + 0.1;
  
  // Random animation duration
  const duration = Math.random() * 20 + 10;
  
  // Set styles
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.opacity = opacity;
  particle.style.animationDuration = `${duration}s`;
  
  // Add to container
  container.appendChild(particle);
}