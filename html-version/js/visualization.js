// Visualization for prediction results
document.addEventListener('DOMContentLoaded', function() {
  // Store prediction history
  let predictionHistory = JSON.parse(localStorage.getItem('predictionHistory')) || [];
  
  // Function to add new prediction to history
  window.addPredictionToHistory = function(prediction) {
    // Add timestamp
    prediction.timestamp = new Date().toISOString();
    
    // Add to history
    predictionHistory.push(prediction);
    
    // Keep only last 10 predictions
    if (predictionHistory.length > 10) {
      predictionHistory.shift();
    }
    
    // Save to localStorage
    localStorage.setItem('predictionHistory', JSON.stringify(predictionHistory));
    
    // Update visualizations if on results page
    if (document.getElementById('visualization-container')) {
      createVisualizations();
    }
  };
  
  // Function to create visualizations
  function createVisualizations() {
    const container = document.getElementById('visualization-container');
    if (!container) return;
    
    // Clear container
    container.innerHTML = '';
    
    // If no predictions yet
    if (predictionHistory.length === 0) {
      container.innerHTML = '<p class="no-data">No prediction data available yet. Make some predictions to see visualizations.</p>';
      return;
    }
    
    // Create confidence chart
    createConfidenceChart(container);
    
    // Create class distribution chart
    createClassDistributionChart(container);
    
    // Create prediction timeline
    createPredictionTimeline(container);
  }
  
  // Create confidence chart
  function createConfidenceChart(container) {
    const chartContainer = document.createElement('div');
    chartContainer.className = 'chart-container';
    chartContainer.innerHTML = '<h3>Confidence Levels</h3><div class="chart confidence-chart"></div>';
    container.appendChild(chartContainer);
    
    const chart = chartContainer.querySelector('.confidence-chart');
    
    // Get last 5 predictions
    const recentPredictions = predictionHistory.slice(-5).reverse();
    
    recentPredictions.forEach(prediction => {
      const confidenceBar = document.createElement('div');
      confidenceBar.className = 'confidence-bar-chart';
      
      const label = document.createElement('div');
      label.className = 'chart-label';
      label.textContent = prediction.label || 'Unknown';
      
      const barContainer = document.createElement('div');
      barContainer.className = 'chart-bar-container';
      
      const bar = document.createElement('div');
      bar.className = 'chart-bar';
      bar.style.width = `${(prediction.confidence || 0) * 100}%`;
      
      const value = document.createElement('div');
      value.className = 'chart-value';
      value.textContent = `${((prediction.confidence || 0) * 100).toFixed(1)}%`;
      
      barContainer.appendChild(bar);
      confidenceBar.appendChild(label);
      confidenceBar.appendChild(barContainer);
      confidenceBar.appendChild(value);
      chart.appendChild(confidenceBar);
    });
  }
  
  // Create class distribution chart
  function createClassDistributionChart(container) {
    const chartContainer = document.createElement('div');
    chartContainer.className = 'chart-container';
    chartContainer.innerHTML = '<h3>Weather Class Distribution</h3><div class="chart distribution-chart"></div>';
    container.appendChild(chartContainer);
    
    const chart = chartContainer.querySelector('.distribution-chart');
    
    // Count occurrences of each class
    const classCounts = {};
    predictionHistory.forEach(prediction => {
      const label = prediction.label || 'Unknown';
      classCounts[label] = (classCounts[label] || 0) + 1;
    });
    
    // Create pie chart
    const pieChart = document.createElement('div');
    pieChart.className = 'pie-chart';
    
    // Calculate total
    const total = Object.values(classCounts).reduce((sum, count) => sum + count, 0);
    
    // Calculate percentages and create segments
    let cumulativePercentage = 0;
    const legend = document.createElement('div');
    legend.className = 'chart-legend';
    
    Object.entries(classCounts).forEach(([label, count], index) => {
      const percentage = (count / total) * 100;
      const startAngle = cumulativePercentage;
      cumulativePercentage += percentage;
      
      // Create pie segment
      const segment = document.createElement('div');
      segment.className = 'pie-segment';
      segment.style.background = `conic-gradient(transparent ${startAngle}%, var(--chart-color-${index % 5}) ${startAngle}%, var(--chart-color-${index % 5}) ${cumulativePercentage}%, transparent ${cumulativePercentage}%)`;
      pieChart.appendChild(segment);
      
      // Add to legend
      const legendItem = document.createElement('div');
      legendItem.className = 'legend-item';
      legendItem.innerHTML = `
        <span class="legend-color" style="background-color: var(--chart-color-${index % 5})"></span>
        <span class="legend-label">${label}</span>
        <span class="legend-value">${percentage.toFixed(1)}%</span>
      `;
      legend.appendChild(legendItem);
    });
    
    chart.appendChild(pieChart);
    chart.appendChild(legend);
  }
  
  // Create prediction timeline
  function createPredictionTimeline(container) {
    const chartContainer = document.createElement('div');
    chartContainer.className = 'chart-container';
    chartContainer.innerHTML = '<h3>Prediction Timeline</h3><div class="chart timeline-chart"></div>';
    container.appendChild(chartContainer);
    
    const chart = chartContainer.querySelector('.timeline-chart');
    
    // Create timeline
    const timeline = document.createElement('div');
    timeline.className = 'timeline';
    
    predictionHistory.forEach((prediction, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      
      const date = new Date(prediction.timestamp);
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
      
      timelineItem.innerHTML = `
        <div class="timeline-point" style="background-color: var(--chart-color-${index % 5})"></div>
        <div class="timeline-content">
          <div class="timeline-label">${prediction.label || 'Unknown'}</div>
          <div class="timeline-confidence">${((prediction.confidence || 0) * 100).toFixed(1)}% confidence</div>
          <div class="timeline-time">${formattedDate}</div>
        </div>
      `;
      
      timeline.appendChild(timelineItem);
    });
    
    chart.appendChild(timeline);
  }
  
  // Function to clear prediction history
  function clearPredictionHistory() {
    predictionHistory = [];
    localStorage.removeItem('predictionHistory');
    createVisualizations();
    
    // Show notification
    if (window.showNotification) {
      window.showNotification('History Cleared', 'All prediction history has been cleared successfully.', 'success');
    }
  }
  
  // Function to save visualizations as image
  function saveVisualizations() {
    const container = document.getElementById('visualization-container');
    if (!container) return;
    
    // Check if there's data to save
    if (predictionHistory.length === 0) {
      if (window.showNotification) {
        window.showNotification('No Data', 'There is no prediction data to save. Make some predictions first.', 'error');
      }
      return;
    }
    
    // Use html2canvas library if available
    if (window.html2canvas) {
      // Show loading notification
      if (window.showNotification) {
        window.showNotification('Processing', 'Generating visualization image...', 'success');
      }
      
      html2canvas(container).then(canvas => {
        const link = document.createElement('a');
        link.download = 'weathervision-analytics.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        
        // Show success notification
        if (window.showNotification) {
          window.showNotification('Download Started', 'Your visualization has been saved as an image.', 'success');
        }
      });
    } else {
      // Fallback - open a new window with the data
      const dataStr = JSON.stringify(predictionHistory, null, 2);
      const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
      
      const link = document.createElement('a');
      link.download = 'weathervision-data.json';
      link.href = dataUri;
      link.click();
      
      // Show success notification
      if (window.showNotification) {
        window.showNotification('Download Started', 'Your prediction data has been saved as JSON.', 'success');
      }
    }
  }
  
  // Initialize visualizations and controls if on results page
  if (document.getElementById('visualization-container')) {
    createVisualizations();
    
    // Set up event listeners for controls
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    if (clearHistoryBtn) {
      clearHistoryBtn.addEventListener('click', clearPredictionHistory);
    }
    
    const saveVisualizationsBtn = document.getElementById('save-visualizations-btn');
    if (saveVisualizationsBtn) {
      saveVisualizationsBtn.addEventListener('click', saveVisualizations);
    }
  }
});