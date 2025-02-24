# Weather Application 🌦️

This is a **Weather Application** built using **React.js**. It uses the **OpenWeatherMap API** to fetch and display real-time weather data such as temperature, wind speed, and humidity for any city in the world.

![image](https://github.com/user-attachments/assets/374d5841-deea-46d5-a407-13734f455aad)

Deployed link: https://weather-application-react-js-3wo4-green.vercel.app/


---

## Features 🛠️
- Search for the weather in any city.
- Displays:
  - **Temperature** in Celsius.
  - **Wind Speed** in km/h.
  - **Humidity** percentage.
- Beautiful and responsive user interface with dynamic icons.
- Default weather data displayed for **London** on initial load.

---

## Installation and Setup Guide 🚀

### **Prerequisites**
1. Ensure you have **Node.js** and **npm** (Node Package Manager) installed.
   - [Download Node.js](https://nodejs.org/) if not already installed.

2. Sign up for a free account at **OpenWeatherMap** to obtain an API key.
   - [OpenWeatherMap API](https://openweathermap.org/).

---

### **Steps to Install and Run the Application**

1. **Clone the Repository**  
   Clone the project from your GitHub repository or download it directly as a ZIP file.
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the Project Directory**  
   Move into the project's folder:
   ```bash
   cd weather-app
   ```

3. **Install Dependencies**  
   Install all the required packages and libraries using npm:
   ```bash
   npm install
   ```

4. **Set Up the Environment File**  
   Create an `.env` file in the root of your project (at the same level as `package.json`) and add your **OpenWeatherMap API key**:
   ```plaintext
   VITE_API_KEY=your_openweather_api_key
   ```

5. **Run the Development Server**  
   Start the development server:
   ```bash
   npm run dev
   ```
   The application will run locally, and you can access it in your browser at:
   ```plaintext
   http://localhost:5173
   ```

---

## Project Structure 📂

```
weather-app/
├── src/
│   ├── assets/          # Contains image assets (icons, etc.)
│   ├── components/      # Contains React components
│   ├── Weather.css      # CSS file for styling the app
│   ├── Weather.jsx      # Main Weather component
├── public/              # Public files (index.html, etc.)
├── .env                 # Environment variables (API key)
├── package.json         # Project configuration and dependencies
├── README.md            # This file
```

---

## Technologies Used 🛠️
- **React.js**: Front-end framework.
- **CSS**: For styling.
- **Vite**: For fast development and bundling.
- **OpenWeatherMap API**: For fetching weather data.

---

## How to Use 🌍
1. Enter the name of a city in the **search bar**.
2. Click the **search icon** or press **Enter**.
3. View the updated weather information for the searched city:
   - Temperature in Celsius.
   - Wind speed in km/h.
   - Humidity percentage.

---

## Known Issues 🚧
- Ensure that your API key is valid and active.
- Check the console for any errors if data doesn't load properly.

---

## Future Improvements 🛠️
- Add support for multiple units (Celsius, Fahrenheit).
- Show a 5-day weather forecast.
- Improve the UI/UX with animations and additional themes.

---

## License 📄
This project is licensed under the MIT License.

---

Enjoy using the Weather Application! ☀️🌧️
