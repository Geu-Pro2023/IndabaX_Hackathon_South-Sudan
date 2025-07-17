// JavaScript for the prediction page

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const uploadArea = document.getElementById('upload-area');
  const fileInput = document.getElementById('file-input');
  const previewContainer = document.getElementById('preview-container');
  const imagePreview = document.getElementById('image-preview');
  const changeImageBtn = document.getElementById('change-image-btn');
  const predictBtn = document.getElementById('predict-btn');
  
  const emptyState = document.getElementById('empty-state');
  const loadingState = document.getElementById('loading-state');
  const errorState = document.getElementById('error-state');
  const successState = document.getElementById('success-state');
  
  const errorMessage = document.getElementById('error-message');
  const predictionLabel = document.getElementById('prediction-label');
  const confidenceValue = document.getElementById('confidence-value');
  const confidenceFill = document.getElementById('confidence-fill');
  const predictionText = document.getElementById('prediction-text');
  const confidenceText = document.getElementById('confidence-text');
  const uploadFormatsHint = document.getElementById('upload-formats-hint');
  
  // Update upload formats hint
  if (uploadFormatsHint) {
    const formats = weatherVisionConfig.api.supportedFormats.map(format => format.split('/')[1].toUpperCase()).join(', ');
    const maxSizeMB = weatherVisionConfig.api.maxFileSize / (1024 * 1024);
    uploadFormatsHint.textContent = `Supports ${formats} (max ${maxSizeMB}MB)`;
  }

  // Get API endpoint from config
  const API_URL = weatherVisionConfig.api.predictionEndpoint;

  // Event Listeners
  uploadArea.addEventListener('click', () => {
    fileInput.click();
  });

  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.style.borderColor = 'var(--primary)';
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.style.borderColor = 'var(--border)';
  });

  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadArea.style.borderColor = 'var(--border)';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  });

  changeImageBtn.addEventListener('click', resetUpload);
  predictBtn.addEventListener('click', predictWeather);

  // Functions
  function handleFileSelect(file) {
    // Validate file type
    const isValidType = weatherVisionConfig.api.supportedFormats.some(format => file.type === format);
    if (!isValidType) {
      showError(`Please select a supported image format (${weatherVisionConfig.api.supportedFormats.map(f => f.split('/')[1].toUpperCase()).join(', ')})`); 
      return;
    }

    // Validate file size
    if (file.size > weatherVisionConfig.api.maxFileSize) {
      const maxSizeMB = weatherVisionConfig.api.maxFileSize / (1024 * 1024);
      showError(`Please select an image smaller than ${maxSizeMB}MB`);
      return;
    }

    // Display preview
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      imagePreview.src = e.target.result;
      uploadArea.classList.add('hidden');
      previewContainer.classList.remove('hidden');
      
      // Reset states
      emptyState.classList.add('hidden');
      loadingState.classList.add('hidden');
      errorState.classList.add('hidden');
      successState.classList.add('hidden');
      
      // Show empty state
      emptyState.classList.remove('hidden');
    };
    fileReader.readAsDataURL(file);
  }

  function resetUpload() {
    uploadArea.classList.remove('hidden');
    previewContainer.classList.add('hidden');
    fileInput.value = '';
    
    // Reset states
    emptyState.classList.remove('hidden');
    loadingState.classList.add('hidden');
    errorState.classList.add('hidden');
    successState.classList.add('hidden');
  }

  function showError(message) {
    emptyState.classList.add('hidden');
    loadingState.classList.add('hidden');
    successState.classList.add('hidden');
    
    errorMessage.textContent = message;
    errorState.classList.remove('hidden');
  }

  function predictWeather() {
    // Check if file is selected
    if (!fileInput.files || fileInput.files.length === 0) {
      showError('Please select an image first');
      return;
    }

    // Hide all states
    emptyState.classList.add('hidden');
    errorState.classList.add('hidden');
    successState.classList.add('hidden');
    
    // Show loading state
    loadingState.classList.remove('hidden');
    
    // Disable predict button
    predictBtn.disabled = true;
    
    // Create form data for API request
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    
    // Make API call to backend
    fetch(API_URL, {
      method: 'POST',
      body: formData,
      // Don't set Content-Type header, let the browser set it with the boundary parameter
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Prediction response:', data);
      
      // Update UI with prediction
      // Check the structure of the response and adjust accordingly
      const label = data.class || data.label || data.prediction || 'Unknown';
      const confidence = data.confidence || data.probability || 0.9;
      
      // Find the matching weather class from config
      const weatherClass = weatherVisionConfig.weatherClasses.find(wc => 
        wc.name.toLowerCase() === label.toLowerCase() || 
        wc.id.toLowerCase() === label.toLowerCase()
      ) || { name: label, id: label.toLowerCase() };
      
      predictionLabel.textContent = weatherClass.name;
      
      const confidencePercent = (confidence * 100).toFixed(1) + '%';
      confidenceValue.textContent = confidencePercent;
      confidenceFill.style.width = confidencePercent;
      
      predictionText.textContent = weatherClass.name.toLowerCase();
      confidenceText.textContent = confidencePercent;
      
      // Hide loading state
      loadingState.classList.add('hidden');
      
      // Show success state
      successState.classList.remove('hidden');
      
      // Enable predict button
      predictBtn.disabled = false;
      
      // Add prediction to history for visualization
      if (window.addPredictionToHistory) {
        window.addPredictionToHistory({
          label: weatherClass.name,
          confidence: confidence,
          imageUrl: imagePreview.src
        });
        
        // Show notification
        if (window.showNotification) {
          window.showNotification(
            'Prediction Saved', 
            `Your ${weatherClass.name.toLowerCase()} prediction has been added to the visualization history.`, 
            'success'
          );
        }
      }
    })
    .catch(error => {
      console.error('Prediction error:', error);
      showError('Failed to predict weather. Please try again or check your internet connection.');
      
      // Enable predict button
      predictBtn.disabled = false;
    });
  }
});