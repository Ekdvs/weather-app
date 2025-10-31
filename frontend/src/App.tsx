
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import ViewWeather from './pages/ViewWeather';

function App() {
  return  <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view/:id" element={<ViewWeather />} />
      </Routes>
    </Router>
}

export default App;
