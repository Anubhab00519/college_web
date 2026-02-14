import React, { useState } from 'react';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <div>
      {currentPage === 'landing' ? (
        <LandingPage onLoginClick={() => setCurrentPage('login')} />
      ) : (
        <LoginPage onBack={() => setCurrentPage('landing')} />
      )}
    </div>
  );
}