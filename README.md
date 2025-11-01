Weather App - Full Stack Assignment
A secure weather application that displays real-time weather information for multiple cities with Auth0 authentication and authorization.
🌟 Features

Weather Display: View weather information for multiple cities
Detailed Weather View: Click on any city card to see comprehensive weather details
Authentication: Secure login/logout using Auth0
Multi-Factor Authentication: Email-based MFA for enhanced security
Data Caching: 5-minute cache to optimize API requests
Responsive Design: Works seamlessly on desktop and mobile devices
Modern UI: Beautiful gradient designs with smooth animations

🛠️ Tech Stack
Frontend

React 18 with TypeScript
React Router for navigation
Auth0 React SDK for authentication
Axios for API requests
Tailwind CSS for styling
React Icons for weather icons
Vite as build tool

Backend

Node.js with Express
Auth0 for authentication & authorization
OpenWeatherMap API for weather data
node-cache for data caching
express-jwt & jwks-rsa for JWT validation

📋 Prerequisites

Node.js (v16 or higher)
npm or yarn
Auth0 account
OpenWeatherMap API key

🚀 Setup Instructions
1. Clone the Repository
bashgit clone https://github.com/Ekdvs/weather-app.git
cd weather-app
2. Backend Setup
bashcd backend
npm install
Create a .env file in the backend directory:
envPORT=8080
OPENWEATHER_API_KEY=your_openweathermap_api_key
AUTH0_DOMAIN=your_auth0_domain
AUTH0_AUDIENCE=[your_auth0_audience](https://fidenz-weather-app/api)
AUTH0_ISSUER_BASE_URL=https://your_auth0_domain
AUTH0_JWKS_URI=https://your_auth0_domain/.well-known/jwks.json
3. Frontend Setup
bashcd frontend
npm install
Create a .env file in the frontend directory:
envVITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_AUTH0_AUDIENCE=[your_auth0_audience](https://fidenz-weather-app/api)
4. Auth0 Configuration
Create Auth0 Application

Go to Auth0 Dashboard
Create a new Single Page Application
Note down the Domain and Client ID

Configure Application Settings

Allowed Callback URLs: http://localhost:5173
Allowed Logout URLs: http://localhost:5173
Allowed Web Origins: http://localhost:5173

Create API

Go to Applications → APIs
Create a new API with identifier (e.g., https://fidenz-weather-app/api)
Use this identifier as AUTH0_AUDIENCE

Enable Multi-Factor Authentication

Go to Security → Multi-factor Auth
Enable Email as MFA factor
Configure MFA to be required for all users

Create Test User

Go to User Management → Users
Create a new user:

Email: careers@fidenz.com
Password: Pass#fidenz


Disable public signups in Authentication → Database → Your database → Settings

5. OpenWeatherMap API Key

Sign up at OpenWeatherMap
Navigate to API Keys section
Copy your API key and add it to the backend .env file

🏃 Running the Application
Start Backend Server
bashcd backend
npm start
The backend will run on http://localhost:8080
Start Frontend Development Server
bashcd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure
```
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
If not authenticated, redirected to Auth0 login
User logs in with credentials (careers@fidenz.com / Pass#fidenz)
MFA verification via email (if enabled)
Upon successful authentication, user can view weather data
JWT token is used for API authorization

🌤️ API Endpoints
Backend Endpoints

GET /api/weather - Fetch weather for all cities
POST /api/weather/:id - Fetch weather for specific city by ID

💾 Caching Strategy

Weather data is cached for 5 minutes
Reduces redundant API calls to OpenWeatherMap
Improves application performance
Cached data is served for repeated requests within the timeframe

🎨 UI Features

Dashboard: Grid layout displaying weather cards for all cities
Weather Cards:

City name and country
Current temperature
Weather description with icons
Min/max temperature
Additional details (pressure, humidity, visibility, wind)
Sunrise/sunset times


Detail View:

Enlarged weather information
Back navigation
Same comprehensive data as cards



📱 Responsive Design

Desktop: 2-column grid layout
Mobile: Single column layout
Adaptive navigation and spacing
Touch-friendly interactions

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
Test User Credentials

Email: careers@fidenz.com
Password: Pass#fidenz

Testing Flow

Navigate to http://localhost:5173
Click "Login"
Enter test credentials
Complete MFA if prompted
View weather dashboard
Click on any city card to see detailed view
Test logout functionality

🐛 Troubleshooting
Common Issues
Auth0 Login Issues

Verify all URLs in Auth0 settings match your local setup
Check that API audience is correctly configured
Ensure .env files have correct Auth0 credentials

API Key Errors

Verify OpenWeatherMap API key is valid
Check API key has proper permissions
Ensure no rate limits are exceeded

CORS Errors

Verify backend CORS configuration allows frontend origin
Check that frontend is making requests to correct backend URL

Cache Issues

Clear node-cache if stale data persists
Restart backend server to reset cache

📝 Assignment Completion Checklist

✅ Weather data fetching from OpenWeatherMap API
✅ Display weather information with UI design
✅ Responsive layout for desktop and mobile
✅ 5-minute data caching implementation
✅ Auth0 authentication integration
✅ Login/Logout functionality
✅ Multi-Factor Authentication (MFA) via email
✅ Restricted signups (only pre-registered users)
✅ Test account created (careers@fidenz.com)
✅ Clean code structure
✅ Comprehensive documentation

👥 Contributors
This project was developed as part of the Fidenz Technologies Full Stack Developer assignment.
📄 License
This project is for assignment purposes only.

Developed with ❤️ for Fidenz Technologies
© 2025 Fidenz TechnologiesRetryClaude can make mistakes. Please double-check responses. Sonnet 4.5