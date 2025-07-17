// Notification System
document.addEventListener('DOMContentLoaded', function() {
  // Create notification function
  window.showNotification = function(title, message, type = 'success') {
    const container = document.getElementById('notification-container');
    if (!container) return;
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Icon based on type
    let icon = 'fa-check-circle';
    if (type === 'error') {
      icon = 'fa-exclamation-circle';
    }
    
    // Set content
    notification.innerHTML = `
      <i class="fa-solid ${icon} notification-icon"></i>
      <div class="notification-content">
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
      </div>
    `;
    
    // Add to container
    container.appendChild(notification);
    
    // Remove after animation completes
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };
});