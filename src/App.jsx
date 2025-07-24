import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Header from './component/Header';
import Footer from './component/Footer';

import Home from './component/Home';
import SkipMeal from './component/SkipMeal';
import DailyMenu from './component/DailyMenu';
import RateMeal from './component/RateMeal';
import Feedback from './component/Feedback';
import Balance from './component/Balance';
import AdminDashboard from './component/AdminDashboard';
import SignupPage from './component/SignupPage';
import LoginForm from './component/LoginForm';
import ScanQRCode from './component/ScanQRCode';

function App() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignup = () => setIsSignedUp(true);
  const handleLogin = () => setIsLoggedIn(true);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isSignedUp={isSignedUp}
              isLoggedIn={isLoggedIn}
            />
          }
        />
        <Route path="/signup" element={<SignupPage onSignup={handleSignup} />} />
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/skip-meal" element={<SkipMeal />} />
        <Route path="/menu" element={<DailyMenu />} />
        <Route path="/rate" element={<RateMeal />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/scan" element={<ScanQRCode />} />      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
