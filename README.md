# IndabaX Hackathon South-Sudan - Dreamers Team
## Application of Machine Learning Techniques in Real-Time Data

A real-time weather classification web app built for the **IndabaX South Sudan 2025 - Intermediate Track Hackathon**, under the theme:

## Project Overview

This project is a submission by **Team Dreamers** for the IndabaX South Sudan AI Hackathon. The competition challenged participants to build a weather condition classification model and **deploy it with a real-time user interface** to boost social impact through applied AI.

Our solution includes:
- A trained CNN model using EfficientNet/MobileNet on a labeled image dataset.
- A fully deployed FastAPI backend for real-time inference.
- A modern, responsive frontend built with HTML, Tailwind CSS, and vanilla JavaScript.
- A UI that allows users to upload an image and see predicted weather conditions instantly.


## 🌐 Live Demo

🔗 FastAPI: Click: [Visit the Live Demo](https://dreamers-weather-classification.onrender.com/docs)

🔗 Real Website: Click: [Visit the Live Demo](https://neon-malabi-b731a8.netlify.app)


## Model

- **Architecture:** Transfer learning with EfficientNetB3 / MobileNetV2
- **Accuracy:** Achieved over 96% test accuracy
- **Framework:** TensorFlow 2.16 (CPU)

## Features

- Upload an image to classify the weather condition
- Supports categories like sunny, cloudy, rainy, foggy, etc.
- Real-time prediction using REST API
- Fully responsive design
- Weather-inspired color theme


## Dreamers Team Dreamers

We are a team of five final-year software Engineering students passionate about AI for social impact from African Leadership University (ALU), Rwanda

| Name                         | Program                | Specialization         | Contribution                              | School
|------------------------------|------------------------|------------------------|-------------------------------------------|------------------------------
| Madol Abraham Kuol           | Software Engineering   | Machine Learning       | Data Preprocessing & Config               | African Leadership Univeristy
| John Deng Madit              | Software Engineering   | Machine Learning       | Model Architecture & Frontend             | African Leadership Univeristy
| Geu Aguto Garang             | Software Engineering   | Machine Learning       | Transfer learning - Fine-tuning           | African Leadership Univeristy
| Jok James Dut                | Software Engineering   | Machine Learning       | Test Dataset Prediction & Frontend        | African Leadership Univeristy
| Kuir Juach Kuir              | Software Engineering   | Machine Learning       | Model Visualizations & Documentation      | African Leadership Univeristy


## Tech Stack

- **Frontend:** HTML5, Tailwind CSS, JavaScript
- **Backend:** FastAPI (Python)
- **Modeling:** TensorFlow, Keras
- **Deployment:** Render (for API), Static Hosting (for Frontend)


## Project Structure

```plaintext
├── api/                      # FastAPI backend
│   ├── main.py               # Inference endpoint
│   └── model/                # Saved model files
├── frontend/                 # Tailwind-based frontend
│   └── index.html            # Main UI
├── requirements.txt
└── README.md
```

## How to Run Locally
### 1. Backend (FastAPI)
```
cd api
pip install -r requirements.txt
uvicorn main:app --reload
```
### 2. Frontend
Simply open ```index.html``` in your browser or host using any static server (like VSCode Live Server).

## Hackathon Details
- Organizer: IndabaX South Sudan
- Track: Intermediate
- Challenge: Real-time data application with ML
- Submission Format: 226-row CSV with predicted labels
- Bonus Points: Real-time UI integration ✅

## UI Interface
1. Front-end Website
2. Backend

## Acknowledgements
- Sponsored by **IndabaX South Sudan**
- Special thanks to the mentors, organizers, and the Kaggle community

## Contact
If you want to collaborate or learn more:
- 📧 g.bior@alustudent.com
- 📧 j.akech@alustudent.com
- 📧 k.juach@alustudent.com
- 📧 Johnakec12@gmail.com
- 📧 m.madol@alustudent.com
