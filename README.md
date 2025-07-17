# IndabaX Hackathon South-Sudan - Dreamers Team
## Application of Machine Learning Techniques in Real-Time Data

A real-time weather classification web app built for the **IndabaX South Sudan 2025 - Intermediate Track Hackathon**, under the theme:

---

## Project Overview

This project is a submission by **Team Dreamers** for the IndabaX South Sudan AI Hackathon. The competition challenged participants to build a weather condition classification model and **deploy it with a real-time user interface** to boost social impact through applied AI.

Our solution includes:
- A trained CNN model using EfficientNet/MobileNet on a labeled image dataset.
- A fully deployed FastAPI backend for real-time inference.
- A modern, responsive frontend built with HTML, Tailwind CSS, and vanilla JavaScript.
- A UI that allows users to upload an image and see predicted weather conditions instantly.

---

## 🌐 Live Demo

🔗 FastAPI: Click: [Visit the Live Demo](https://dreamers-weather-classification.onrender.com/docs)

🔗 Real Website: Click: [Visit the Live Demo](https://neon-malabi-b731a8.netlify.app)

---

## Model

- **Architecture:** Transfer learning with EfficientNetB3 / MobileNetV2
- **Accuracy:** Achieved over 96% test accuracy
- **Framework:** TensorFlow 2.16 (CPU)

---

## Features

- Upload an image to classify the weather condition
- Supports categories like sunny, cloudy, rainy, foggy, etc.
- Real-time prediction using REST API
- Fully responsive design
- Weather-inspired color theme

---

## Dreamers Team Dreamers

We are a team of five final-year software Engineering students passionate about AI for social impact from African Leadership University (ALU), Rwanda

| Name                         | Program                | Specialization         | Contribution                              | School
|------------------------------|------------------------|------------------------|-------------------------------------------|------------------------------
| Madol Abraham Kuol           | Software Engineering   | Machine Learning       | Data Preprocessing & Config               | African Leadership Univeristy
| John Deng Madit              | Software Engineering   | Machine Learning       | Model Architecture & Frontend             | African Leadership Univeristy
| Geu Aguto Garang             | Software Engineering   | Machine Learning       | Transfer learning - Fine-tuning           | African Leadership Univeristy
| Jok James Dut                | Software Engineering   | Machine Learning       | Test Dataset Prediction & Frontend        | African Leadership Univeristy
| Kuir Juach Kuir              | Software Engineering   | Machine Learning       | Model Visualizations & Documentation      | African Leadership Univeristy

---

## Tech Stack

- **Frontend:** HTML5, Tailwind CSS, JavaScript
- **Backend:** FastAPI (Python)
- **Modeling:** TensorFlow, Keras
- **Deployment:** Render (for API), Static Hosting (for Frontend)

---

## Project Structure

```plaintext
├── api/                      # FastAPI backend
│   ├── main.py               # Inference endpoint
│   └── model/                # Saved model files
├── frontend/                 # Tailwind-based frontend
│   └── index.html            # Main UI
├── requirements.txt
└── README.md
