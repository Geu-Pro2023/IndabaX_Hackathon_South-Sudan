// Configuration file for WeatherVision
// This file contains all dynamic data that can be updated based on predictions

const weatherVisionConfig = {
  // Application information
  app: {
    name: "Indabax South Sudan WeatherVision",
    tagline: "Weather Prediction",
    description: "Upload an image and predict weather conditions in real time using AI.",
    year: "2025",
    organization: "Indabax South Sudan",
    team: {
      name: "DREAMERS",
      members: [
        { name: "Madol Abraham", role: "ML Engineer" },
        { name: "John Akech", role: "ML Engineer" },
        { name: "Geu Aguto", role: "ML Engineer" },
        { name: "Jok James Dut", role: "ML Engineer" },
        { name: "Kuir Juach Kuir", role: "ML Engineer" }
      ]
    }
  },
  
  // CTA section content
  cta: {
    title: "Ready to Predict the Weather?",
    description: "Upload your image and experience the power of AI weather prediction"
  },
  
  // Section headers
  sections: {
    features: {
      title: "How It Works",
      description: "Our advanced AI model analyzes weather patterns in images to provide accurate predictions"
    },
    weatherTypes: {
      title: "Weather Conditions We Detect",
      description: "Our model can identify and classify multiple weather patterns"
    },
    predict: {
      title: "Weather Prediction",
      description: "Upload an image and let our AI analyze the weather conditions"
    }
  },
  
  // API configuration
  api: {
    predictionEndpoint: "https://dreamers-weather-classification.onrender.com/predict",
    maxFileSize: 10 * 1024 * 1024, // 10MB in bytes
    supportedFormats: ["image/jpeg", "image/png", "image/jpg"]
  },
  
  // Weather classes that the model can predict
  weatherClasses: [
    {
      id: "sunrise",
      name: "Sunrise",
      icon: "fa-solid fa-sun-rise",
      iconClass: "sun",
      description: "Early morning sunrise conditions with warm lighting",
      percentage: "25%"
    },
    {
      id: "shine",
      name: "Shine",
      icon: "fa-solid fa-sun",
      iconClass: "shine",
      description: "Clear, sunny weather with bright daylight",
      percentage: "25%"
    },
    {
      id: "rain",
      name: "Rain",
      icon: "fa-solid fa-cloud-showers-heavy",
      iconClass: "rain",
      description: "Rainy conditions with precipitation and clouds",
      percentage: "25%"
    },
    {
      id: "cloudy",
      name: "Cloudy",
      icon: "fa-solid fa-cloud",
      iconClass: "cloudy",
      description: "Overcast skies with various cloud formations",
      percentage: "25%"
    }
  ],
  
  // Model statistics
  modelStats: {
    trainingImages: "5,000+",
    accuracy: "94.2%",
    architecture: "CNN",
    weatherClasses: 4
  },
  
  // Kaggle competition information
  kaggle: {
    competitionName: "IndabaX South Sudan",
    competitionUrl: "https://www.kaggle.com/competitions/indabax-south-sudan/",
    datasetDescription: "Multi-class Weather Dataset for Image Classification",
    evaluationMetric: "Accuracy"
  },
  
  // Kaggle competition information
  kaggle: {
    competitionName: "IndabaX South Sudan",
    competitionUrl: "https://www.kaggle.com/competitions/indabax-south-sudan/",
    datasetDescription: "Multi-class Weather Dataset for Image Classification",
    evaluationMetric: "Accuracy"
  },
  
  // Features of the application
  features: [
    {
      icon: "fa-solid fa-cloud-arrow-up",
      title: "Image Upload",
      description: "Simply upload any weather image and let our AI analyze it"
    },
    {
      icon: "fa-solid fa-bolt-lightning",
      title: "Instant Prediction",
      description: "Get real-time weather condition predictions with confidence scores"
    },
    {
      icon: "fa-solid fa-chart-simple",
      title: "High Accuracy",
      description: "Trained on comprehensive multi-class weather datasets"
    }
  ],
  
  // Navigation links
  navigation: [
    { name: "Home", url: "index.html" },
    { name: "Predict", url: "predict.html" },
    { name: "About", url: "about.html" }
  ],
  
  // External links
  externalLinks: [
    {
      name: "View Dataset",
      url: "https://data.mendeley.com/datasets/4drtyfjtfy/1",
      icon: "fa-solid fa-database"
    },
    {
      name: "Kaggle Competition",
      url: "https://www.kaggle.com/competitions/indabax-south-sudan/",
      icon: "fa-solid fa-trophy"
    }
  ]
};