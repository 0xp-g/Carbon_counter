// frontend/src/components/LoggedInNav.tsx
// --- NEW FILE ---
// This is the new, consistent navigation bar for all authenticated pages.

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LoggedInNavProps {
  handleLogout: () => void;
}

export const LoggedInNav: React.FC<LoggedInNavProps> = ({ handleLogout }) => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isLeaderboard = location.pathname === '/leaderboard';
  const isProfile = location.pathname === '/profile';

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">Carbon Counter</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              to="/dashboard" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isDashboard ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Dashboard
            </Link>
            <Link 
              to="/leaderboard" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isLeaderboard ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              Leaderboard
            </Link>
            <Link 
              to="/profile" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isProfile ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-50'}`}
            >
              User Profile
            </Link>
            <button
              onClick={handleLogout}
              className="rounded bg-black px-4 py-2 text-sm font-bold text-white hover:bg-gray-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
