import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';

import NewArrivals from '../NewArrivals/NewArrivals.jsx';
import NewArrivalsData from '../NewArrivals/NewArrivalsData.js';
import BestSellers from '../BestSellers/BestSellers.jsx';
import BestsellersData from '../BestSellers/BestsellersData.js';

import logo from '../../assets/logo.png';
import welcomeImage from '../../assets/background.jpg';

import Men from '../Men/Men.jsx';
import Women from '../Women/Women.jsx';
import Kids from '../Kids/Kids.jsx';
import Sale from '../Sale/Sale.jsx';
import Login from '../Auth/Login.jsx';
import SignUp from '../Auth/SignUp';
import Account from '../Account/account.jsx';
import UserInfo from '../Account/UserInfo/UserInfo.jsx';
import MyOrders from '../Account/MyOrders/MyOrders.jsx';
import CartPage from '../ShoppingCart/CartPage.jsx';
import ProductPage from '../Product/ProductPage';
import FAQ from '../FAQ/FAQ';
import About from '../About Us/About';
import Privacy from '../Privacy Policy/Privacy';
import Contact from '../Contact Us/contact';


const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/nordicsteps/';

  return (
    <div className="app">
      <Header logoSrc={logo} />
      <Navbar />

      <main className="main-content">
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
          
          <Route path="/account" element={<Account />}>
            <Route path="profile" element={<UserInfo />} />
            <Route path="orders" element={<MyOrders />} />
          </Route>

          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default AppContent;
