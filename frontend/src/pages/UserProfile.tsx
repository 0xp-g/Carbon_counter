import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoggedInNav } from '../components/LoggedInNav';

const UserProfile: React.FC = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [totalEmitted, setTotalEmitted] = useState('');
  const [totalSaved, setTotalSaved] = useState('');
  const [streak, setStreak] = useState('');

  
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Use the VITE_API_BASE_URL from the environment variables
      fetch(`${import.meta.env.VITE_API_BASE_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          if (!res.ok) {
            throw new Error("Unauthorized or fetch error");
          }
          return res.json();
        })
        .then(data => {
          setUsername(data.username);
          setUserEmail(data.email);
          setUserPassword("********");
          setTotalEmitted(data.totalEmitted || "0 kg");
          setTotalSaved(data.totalSaved || "0 kg");
          setStreak(data.streak || "0 days");
        })
        .catch(err => {
          console.error("Failed to load user profile", err);
        });
    } else {
      console.warn("No token found in localStorage.");
    }
  }, []);



  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Keeping navigation, as it's separate from the main UI content */}
      <LoggedInNav handleLogout={handleLogout} />
      
      <main className="flex flex-col items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-2xl space-y-12">

          {/* User Header Section - Enhanced visual hierarchy and spacing */}
          <header className="flex flex-col items-center space-y-2 text-center">
            <div className="w-40 h-40 rounded-full bg-gray-200 flex items-center justify-center text-7xl font-bold text-gray-700 uppercase ring-4 ring-gray-300 ring-offset-4 ring-offset-white transition-all">
              {username.charAt(0)}
            </div>
            <h1 className="text-5xl font-black mt-6 tracking-tight">{username}</h1>
            <p className="text-lg text-gray-600 font-medium">Environmental Champion</p>
          </header>

          {/* Account Details Section - Redesigned as a prominent card with clearer data presentation */}
          <section className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-black border-b border-gray-200 pb-4">
              Account Details
            </h2>
            
            <div className="space-y-6">
              {/* Email Display Row */}
              <div className="flex justify-between items-center py-4 border-b border-gray-200">
                <span className="text-sm font-medium text-gray-500">Email Address</span>
                <span className="text-base text-black font-semibold">{userEmail}</span>
              </div>

              {/* Password Display Row */}
              <div className="flex justify-between items-center py-4">
                <span className="text-sm font-medium text-gray-500">Password</span>
                <div className="relative flex items-center space-x-3">
                  <span className="text-base text-black font-semibold tracking-widest">
                    {showPassword ? userPassword : '••••••••'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="text-gray-500 hover:text-black transition-colors"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye-off">
                        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
