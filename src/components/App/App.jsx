import React from 'react';
import './App.css'; // Import the CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import NewArrivals from '../NewArrivals/NewArrivals.jsx';
import NewArrivalsData from '../NewArrivals/NewArrivalsData.js';
import BestSellers from '../BestSellers/BestSellers.jsx';
import BestsellersData from '../BestSellers/BestsellersData.js'; // Import the data
import logo from '../../assets/logo.svg';
import welcomeImage from '../../assets/background.jpg'; // Import the welcome image


import Men from '../Men/Men.jsx';
import Women from '../Women/Women.jsx';
import Kids from '../Kids/Kids.jsx';
import Sale from '../Sale/Sale.jsx';
import Login from '../Auth/Login.jsx'; 
import SignUp from '../Auth/SignUp';


const App = () => {
  return (
    <Router basename="/nordicsteps">
      <div className="app">
        {/* Header Component */}
        <Header logoSrc={logo} />

        {/* Navbar Component */}
        <Navbar />

        {/* Main Content Section */}
        <main className="main-content">
          <div className="image-container">
            <img src={welcomeImage} alt="Welcome to Nordic Steps" className="welcome-image" />
            <div className="overlay-text">
              <h1>Welcome to Nordic Steps</h1>
              <p>Discover the best shoes for every occasion!</p>
            </div>
          </div>

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

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
