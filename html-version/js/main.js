// Main JavaScript file for shared functionality

document.addEventListener('DOMContentLoaded', () => {
  // Add active class to current navigation link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath.endsWith(linkPath)) {
      link.classList.add('active');
    } else if (currentPath.endsWith('/') && linkPath === 'index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Mobile menu toggle functionality
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinksContainer) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = mobileMenuToggle.querySelector('i');
      if (navLinksContainer.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Close mobile menu when clicking on a link
    navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }
  
  // Populate dynamic content from config
  populateDynamicContent();
});

// Function to populate navigation links
function populateNavigation() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.innerHTML = '';
    const currentPath = window.location.pathname;
    
    weatherVisionConfig.navigation.forEach(item => {
      const link = document.createElement('a');
      link.href = item.url;
      link.className = 'nav-link';
      link.textContent = item.name;
      
      if (currentPath.endsWith(item.url)) {
        link.classList.add('active');
      } else if (currentPath.endsWith('/') && item.url === 'index.html') {
        link.classList.add('active');
      }
      
      navLinks.appendChild(link);
    });
  }
}

// Function to populate dynamic content from config
function populateDynamicContent() {
  // Populate navigation
  populateNavigation();
  // Update app name and year in footer
  const footerText = document.querySelectorAll('.footer-text');
  const currentYear = new Date().getFullYear();
  footerText.forEach(element => {
    element.innerHTML = `© ${currentYear} ${weatherVisionConfig.app.name} — Built for Indabax South Sudan`;
  });
  
  // Update hero section
  const appName = document.getElementById('app-name');
  if (appName) {
    appName.textContent = weatherVisionConfig.app.name;
  }
  
  const appDescription = document.getElementById('app-description');
  if (appDescription) {
    appDescription.textContent = weatherVisionConfig.app.description;
  }
  
  // Update CTA section
  const ctaTitle = document.getElementById('cta-title');
  if (ctaTitle) {
    ctaTitle.textContent = weatherVisionConfig.cta.title;
  }
  
  const ctaDescription = document.getElementById('cta-description');
  if (ctaDescription) {
    ctaDescription.textContent = weatherVisionConfig.cta.description;
  }
  
  // Update section headers
  const featuresTitle = document.getElementById('features-title');
  if (featuresTitle) {
    featuresTitle.textContent = weatherVisionConfig.sections.features.title;
  }
  
  const featuresDescription = document.getElementById('features-description');
  if (featuresDescription) {
    featuresDescription.textContent = weatherVisionConfig.sections.features.description;
  }
  
  const weatherTypesTitle = document.getElementById('weather-types-title');
  if (weatherTypesTitle) {
    weatherTypesTitle.textContent = weatherVisionConfig.sections.weatherTypes.title;
  }
  
  const weatherTypesDescription = document.getElementById('weather-types-description');
  if (weatherTypesDescription) {
    weatherTypesDescription.textContent = weatherVisionConfig.sections.weatherTypes.description;
  }
  
  // Update predict page section header
  const predictTitle = document.getElementById('predict-title');
  if (predictTitle) {
    predictTitle.textContent = weatherVisionConfig.sections.predict.title;
  }
  
  const predictDescription = document.getElementById('predict-description');
  if (predictDescription) {
    predictDescription.textContent = weatherVisionConfig.sections.predict.description;
  }
  
  // Update logo text
  const logoText = document.querySelectorAll('.logo-text');
  logoText.forEach(element => {
    element.textContent = weatherVisionConfig.app.name;
  });
  
  // Update page title if it contains the app name
  if (document.title.includes('WeatherVision')) {
    document.title = document.title.replace('WeatherVision', weatherVisionConfig.app.name);
  }
  
  // Update meta descriptions
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && metaDescription.content.includes('WeatherVision')) {
    metaDescription.content = metaDescription.content.replace('WeatherVision', weatherVisionConfig.app.name);
  }
  
  // Populate weather types on index page
  const weatherGrid = document.querySelector('.weather-grid');
  if (weatherGrid) {
    weatherGrid.innerHTML = '';
    weatherVisionConfig.weatherClasses.forEach((weatherClass, index) => {
      weatherGrid.innerHTML += `
        <div class="weather-card" style="--reveal-index: ${index}">
          <i class="${weatherClass.icon} weather-icon ${weatherClass.iconClass}"></i>
          <h3 class="weather-name">${weatherClass.name}</h3>
        </div>
      `;
    });
  }
  
  // Populate features on index page
  const featuresGrid = document.querySelector('.features-grid');
  if (featuresGrid) {
    featuresGrid.innerHTML = '';
    weatherVisionConfig.features.forEach((feature, index) => {
      featuresGrid.innerHTML += `
        <div class="feature-card" style="--reveal-index: ${index}">
          <div class="feature-icon">
            <i class="${feature.icon}"></i>
          </div>
          <h3 class="feature-title">${feature.title}</h3>
          <p class="feature-description">
            ${feature.description}
          </p>
        </div>
      `;
    });
  }
  
  // Populate stats on about page
  const statsGrid = document.querySelector('.stats-grid');
  if (statsGrid) {
    const stats = [
      { icon: 'fa-solid fa-database', value: weatherVisionConfig.modelStats.trainingImages, label: 'Training Images' },
      { icon: 'fa-solid fa-chart-bar', value: weatherVisionConfig.modelStats.accuracy, label: 'Model Accuracy' },
      { icon: 'fa-solid fa-brain', value: weatherVisionConfig.modelStats.architecture, label: 'AI Architecture' },
      { icon: 'fa-solid fa-award', value: weatherVisionConfig.modelStats.weatherClasses, label: 'Weather Classes' }
    ];
    
    statsGrid.innerHTML = '';
    stats.forEach((stat, index) => {
      statsGrid.innerHTML += `
        <div class="stat-card" style="--reveal-index: ${index}">
          <i class="${stat.icon} stat-icon"></i>
          <div class="stat-value">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `;
    });
  }
  
  // Populate weather classes on about page
  const weatherClasses = document.querySelector('.weather-classes');
  if (weatherClasses) {
    weatherClasses.innerHTML = '';
    weatherVisionConfig.weatherClasses.forEach(weatherClass => {
      weatherClasses.innerHTML += `
        <div class="weather-class">
          <div class="weather-class-header">
            <h4>${weatherClass.name}</h4>
            <span class="weather-class-percent">${weatherClass.percentage}</span>
          </div>
          <p>${weatherClass.description}</p>
        </div>
      `;
    });
  }
  
  // Populate external links on about page
  const linksContainer = document.querySelector('.links-container');
  if (linksContainer) {
    linksContainer.innerHTML = '';
    weatherVisionConfig.externalLinks.forEach(link => {
      linksContainer.innerHTML += `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          <i class="${link.icon}"></i>
          ${link.name}
          <i class="fa-solid fa-external-link-alt"></i>
        </a>
      `;
    });
  }
  
  // Populate team members on about page
  const teamName = document.getElementById('team-name');
  if (teamName) {
    teamName.textContent = weatherVisionConfig.app.team.name;
  }
  
  const teamMembersList = document.getElementById('team-members-list');
  if (teamMembersList) {
    teamMembersList.innerHTML = '';
    weatherVisionConfig.app.team.members.forEach((member, index) => {
      // Get image filename based on member name
      let imagePath = '';
      // Handle special cases for image filenames
      if (member === 'Geu Aguto') {
        imagePath = 'images/Geu Aguto Garang.jpg';
      } else if (member === 'James Jok Dut') {
        // Ensure Jok James Dut's image is properly referenced
        imagePath = 'images/James.jpg';
      } else {
        imagePath = `images/${member}.${member === 'John Akech' || member === 'Kuir Juach Kuir' ? 'png' : 'jpg'}`;
      }
      
      teamMembersList.innerHTML += `
        <div class="team-member" style="--reveal-index: ${index}">
          <img src="${imagePath}" alt="${member}" class="team-member-image">
          <span class="team-member-name">${member}</span>
        </div>
      `;
    });
  }
}