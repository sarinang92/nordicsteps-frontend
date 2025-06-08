import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import NewArrivals from '../NewArrivals/NewArrivals.jsx';
import NewArrivalsData from '../NewArrivals/NewArrivalsData.js';
import BestSellers from '../BestSellers/BestSellers.jsx';
import BestsellersData from '../BestSellers/BestsellersData.js';
import logo from '../../assets/logo.svg';
import welcomeImage from '../../assets/background.jpg';

import Men from '../Men/Men.jsx';
import Women from '../Women/Women.jsx';
import Kids from '../Kids/Kids.jsx';
import Sale from '../Sale/Sale.jsx';
import Login from '../Auth/Login.jsx'; 
import SignUp from '../Auth/SignUp';

const AppContent = () => {
  const location = useLocation();

  const isHomePage = location.pathname === '/' || location.pathname === '/nordicsteps/';

  return (
    <div className="app">
      <Header logoSrc={logo} />
      <Navbar />

      <main className="main-content">
        {/* Conditionally show image only on home page */}
        {isHomePage && (
          <div className="image-container">
            <img src={welcomeImage} alt="Welcome to Nordic Steps" className="welcome-image" />
            <div className="overlay-text">
              <h1>Welcome to Nordic Steps</h1>
              <p>Discover the best shoes for every occasion!</p>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={
            <>
              <NewArrivals products={NewArrivalsData} />
              <BestSellers products={BestsellersData} />
            </>
          } />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default AppContent;
