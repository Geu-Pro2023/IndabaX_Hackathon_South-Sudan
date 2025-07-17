# WeatherVision - Dynamic Weather Prediction Web App

This is a dynamic web application for predicting weather conditions from images using AI. The application is built with HTML, CSS, and JavaScript, and is designed to be fully dynamic with all content configurable through a central configuration file.

## Dynamic Structure

The application uses a central configuration file (`js/config.js`) to store all dynamic data that can be updated based on predictions. This makes it easy to update the application without modifying the HTML files directly.

### Key Features

- **Centralized Configuration**: All text, labels, and settings are stored in `js/config.js`
- **Dynamic Content**: All HTML elements are populated from the configuration file
- **Responsive Design**: Works on all device sizes
- **Real-time Predictions**: Connects to a backend API for weather predictions

## File Structure

- `index.html`: Home page with features and weather types
- `predict.html`: Page for uploading images and getting predictions
- `about.html`: Information about the project and dataset
- `css/styles.css`: Styling for the application
- `js/config.js`: Central configuration file
- `js/main.js`: Shared functionality and dynamic content population
- `js/predict.js`: Prediction page functionality

## How to Update Content

To update any content in the application, simply modify the `js/config.js` file. The changes will be automatically reflected across all pages.

### Configurable Elements

- Application name, tagline, and description
- Weather classes and their properties
- Features and their descriptions
- Navigation links
- API endpoint and settings
- Model statistics
- Section headers and descriptions

## API Integration

The application connects to a backend API for weather predictions. The API endpoint is configurable in the `js/config.js` file.

## Weather Classes

The application supports multiple weather classes, which are defined in the configuration file. Each class has:

- ID: Unique identifier
- Name: Display name
- Icon: Font Awesome icon class
- Icon Class: CSS class for styling
- Description: Text description
- Percentage: Distribution in the dataset

## Adding New Weather Classes

To add a new weather class, simply add a new entry to the `weatherClasses` array in the configuration file with all the required properties.

## Customizing the UI

The UI can be customized by modifying the CSS file or by updating the configuration file with new values.