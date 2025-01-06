import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Forgot from './pages/forgot';
import Profile from './pages/component/models/profile';
import RefreshHandler from './RefreshHandler';
import Contact from './pages/component/models/contact';
import About from './pages/component/About';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // handle login and logout state
  const handleLogin = () => {
    setIsAuthenticated(true); 
    localStorage.setItem('isAuthenticated', 'true'); // Persist state
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove from localStorage
  };

  // Ensure to check authentication on route change
  React.useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);

  // PrivateRoute component for protecting routes
  function PrivateRoute({ element }) {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route 
          path="/profile" 
          element={isAuthenticated ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" />} 
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />


      </Routes>
    </div>
  );
}

export default App;
