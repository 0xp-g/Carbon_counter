// frontend/src/App.tsx
// --- MODIFIED FILE ---
// Added the new route for the User Profile page.

import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/HomePage';
import LeaderboardPage from './pages/LeaderboardPage'; // Import the new page


function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  const handleSetToken = (newToken: string | null) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={token ? <Navigate to="/dashboard" /> : <LoginPage setToken={handleSetToken} />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/dashboard" /> : <RegisterPage />}
        />
        
        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={token ? <DashboardPage setToken={handleSetToken} /> : <Navigate to="/login" />}
        />
        <Route
          path="/leaderboard"
          element={token ? <LeaderboardPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// frontend/src/components/Navigation.tsx
// --- MODIFIED FILE ---
// Added a link to the Leaderboard in the navigation bar.

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  // Don't show nav on login/register pages
  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }
  
  // Different nav for dashboard vs public pages
  if (token && (location.pathname.startsWith('/dashboard') || location.pathname.startsWith('/leaderboard'))) {
     return null; // The dashboard and leaderboard have their own nav bars
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">Carbon Counter</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/leaderboard" className="text-black font-medium hover:underline">Leaderboard</Link>
            <Link to="/login" className="text-black font-medium hover:underline">Login</Link>
            <Link to="/register" className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 font-medium">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};