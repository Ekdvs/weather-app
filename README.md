# 🌦️ Weather App - Full Stack Assignment

A secure weather application that displays **real-time weather information** for multiple cities with **Auth0 authentication and authorization**.

---

## 🌟 Features

- **Weather Display:** View weather information for multiple cities  
- **Detailed Weather View:** Click on any city card to see comprehensive weather details  
- **Authentication:** Secure login/logout using Auth0  
- **Multi-Factor Authentication (MFA):** Email-based MFA for enhanced security  
- **Data Caching:** 5-minute cache to optimize API requests  
- **Responsive Design:** Works seamlessly on desktop and mobile devices  
- **Modern UI:** Beautiful gradient designs with smooth animations  

---

## 🛠️ Tech Stack

### **Frontend**
- React 18 with TypeScript  
- React Router for navigation  
- Auth0 React SDK for authentication  
- Axios for API requests  
- Tailwind CSS for styling  
- React Icons for weather icons  
- Vite as build tool  

### **Backend**
- Node.js with Express  
- Auth0 for authentication & authorization  
- OpenWeatherMap API for weather data  
- node-cache for data caching  
- express-jwt & jwks-rsa for JWT validation  

---

## 📋 Prerequisites

- Node.js (v16 or higher)  
- npm or yarn  
- Auth0 account  
- OpenWeatherMap API key  

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ekdvs/weather-app.git
cd weather-app
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file in the backend directory:

env
Copy code
PORT=8080
OPENWEATHER_API_KEY=your_openweathermap_api_key
AUTH0_DOMAIN=your_auth0_domain
AUTH0_AUDIENCE=https://fidenz-weather-app/api
AUTH0_ISSUER_BASE_URL=https://your_auth0_domain
AUTH0_JWKS_URI=https://your_auth0_domain/.well-known/jwks.json
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
Create a .env file in the frontend directory:

env
Copy code
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_AUTH0_AUDIENCE=https://fidenz-weather-app/api
4️⃣ Auth0 Configuration
Create Auth0 Application
Go to Auth0 Dashboard

Create a Single Page Application

Note down the Domain and Client ID

Application Settings
nginx
Copy code
Allowed Callback URLs: http://localhost:5173
Allowed Logout URLs: http://localhost:5173
Allowed Web Origins: http://localhost:5173
Create API
Go to Applications → APIs

Create a new API with identifier:
https://fidenz-weather-app/api

Use this as your AUTH0_AUDIENCE

Enable Multi-Factor Authentication (MFA)
Go to Security → Multi-factor Auth

Enable Email as MFA factor

Set MFA as required for all users

Create Test User
graphql
Copy code
Email: careers@fidenz.com
Password: Pass#fidenz
➡️ Disable public signups in
Authentication → Database → Your Database → Settings

5️⃣ OpenWeatherMap API Key
Sign up at OpenWeatherMap

Navigate to API Keys

Copy your API key and add it to your backend .env

🏃 Running the Application
Start Backend Server
bash
Copy code
cd backend
npm start
➡️ The backend will run on http://localhost:8080

Start Frontend Development Server
bash
Copy code
cd frontend
npm run dev
➡️ The frontend will run on http://localhost:5173

📁 Project Structure
bash
Copy code
weather-app/
├── backend/
│   ├── controller/
│   │   └── weatherController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── router/
│   │   └── weatherRouter.js
│   ├── service/
│   │   └── weatherService.js
│   ├── cities.json
│   ├── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── WeatherCard.tsx
│   │   │   └── WeatherDetail.tsx
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   └── ViewWeather.tsx
│   │   ├── services/
│   │   │   └── weatherService.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── .env
└── README.md
🔐 Authentication Flow
User visits the application

If not authenticated → redirected to Auth0 login

User logs in with careers@fidenz.com / Pass#fidenz

MFA verification via email (if enabled)

Upon success → user can view weather data

JWT token is used for secure API authorization

🌤️ API Endpoints
Backend Endpoints
Method	Endpoint	Description
GET	/api/weather	Fetch weather for all cities
POST	/api/weather/:id	Fetch weather for a specific city

💾 Caching Strategy
Weather data cached for 5 minutes

Reduces redundant API calls

Improves performance

Cached data served for repeated requests

🎨 UI Features
Dashboard
Grid layout showing all cities

Each card includes:

City name and country

Current temperature

Weather description + icon

Min/Max temperature

Pressure, humidity, visibility, wind

Sunrise/sunset

Detail View
Enlarged weather info for one city

Back navigation

Same comprehensive data as cards

📱 Responsive Design
Desktop: 2-column grid layout

Mobile: Single-column layout

Adaptive navigation and spacing

Touch-friendly interactions

```markdown
## 🖼️ Screenshots

| Dashboard | Details View |
|------------|--------------|
| ![Dashboard](./assets/dashboard.png) | ![Details](./assets/details.png) |

	

🔒 Security Features
JWT-based authentication

Auth0 MFA via email

Protected API routes

Secure token validation

CORS configuration

🧪 Testing the Application
Test User
graphql
Copy code
Email: careers@fidenz.com
Password: Pass#fidenz
Testing Flow
Navigate to http://localhost:5173

Click Login

Enter test credentials

Complete MFA (email verification)

View weather dashboard

Click any city for detail view

Test Logout functionality

🐛 Troubleshooting
Auth0 Login Issues
Ensure URLs match your local setup

Verify API audience configuration

Check .env Auth0 values

API Key Errors
Verify API key validity

Check API permissions

Ensure no rate limits exceeded

CORS Errors
Ensure backend CORS allows http://localhost:5173

Confirm correct backend URL in frontend service

Cache Issues
Restart backend to clear stale cache

Cache auto-refreshes every 5 minutes

📝 Assignment Completion Checklist
✅ Weather data fetching from OpenWeatherMap API
✅ Display weather information with UI design
✅ Responsive layout for desktop and mobile
✅ 5-minute data caching
✅ Auth0 authentication integration
✅ Login/Logout functionality
✅ MFA via email
✅ Restricted signups (pre-registered users only)
✅ Test account created
✅ Clean code structure
✅ Comprehensive documentation

👥 Contributors
Developed by Vishwa Sampath as part of the
Fidenz Technologies Full Stack Developer Assignment

📄 License
This project is for assignment purposes only.

Developed with ❤️ for Fidenz Technologies
© 2025 Fidenz Technologies

yaml
Copy code

---

