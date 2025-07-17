# Dreamers Weather Classification App

![Weather Banner](https://images.unsplash.com/photo-1500839941678-aae14dbfae9d?fit=crop&w=1280&q=80)

A real-time weather classification web app built for the **IndabaX South Sudan 2025 - Intermediate Track Hackathon**, under the theme:

> _Application of Machine Learning Techniques in Real-Time Data_

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

🔗 [Visit the Live App](https://dreamers-weather-classification.onrender.com)

---

## Model

- **Architecture:** Transfer learning with EfficientNetB3 / MobileNetV2
- **Accuracy:** Achieved over 96% test accuracy
- **Framework:** TensorFlow 2.16 (CPU)

---

## Features

- Upload an image to classify weather condition
- Supports categories like sunny, cloudy, rainy, foggy, etc.
- Real-time prediction using REST API
- Fully responsive design
- Weather-inspired color theme

---

## Dreamers Team Dreamers

We are a team of five final-year software Engineering students passionate about AI for social impact from African Leaderhsip Univeristy, Rwanda:

| Name                      | Program                | Specialization                | Contribution            | School
|---------------------------|------------------------|-------------------------------|-------------------------|-----------
| Madol Abraham Kuol        | Software Engineering   | Machine Learning & APIs       | Backend & Model         | African Leadership Univeristy (ALU)
| John Akech                | Software Engineering   | Machine Learning & Frontend   | Frontend & Fine-Tunning | African Leadership Univeristy (ALU)
| Geu Aguto Garang          | Software Engineering   | Machine Learning & Blockchain | Frontend (HTML, CSS)    | African Leadership Univeristy (ALU)
| Jok James Dut             | Software Engineering   | Machine Learning & Mobile App | Styling & UI Testing    | African Leadership Univeristy (ALU)
| Kuir Juach Kuir           | Software Engineering   | Machine Learning & UI/UX      | Data Preprocessing      | African Leadership Univeristy (ALU)

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
