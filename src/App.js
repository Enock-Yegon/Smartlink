import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Layout from './Components/Layout/Layout';
import Navbar from './Components/Layout/Navbar';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Register from './Components/Register';
import Apply from './Components/Apply';

function App() {
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar */}
      {location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="apply" element={<Apply />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

// Wrap the App component with Router
function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default WrappedApp;
