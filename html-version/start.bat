@echo off
echo Starting WeatherVision Application...

echo.
echo Using deployed backend at: https://dreamers-weather-classification.onrender.com
echo.

echo Starting frontend server...
python -m http.server 8000

echo.
echo Server stopped.