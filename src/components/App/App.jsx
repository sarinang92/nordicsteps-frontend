import React from 'react';
import './App.css'; // Import the CSS file
import Header from '../Header/Header.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from '../Footer/Footer.jsx';
import logo from '../../assets/logo.svg';
import welcomeImage from '../../assets/background.jpg'; // Import the welcome image

const App = () => {
  return (
    <div className="app">
      {/* Header Component */}
      <Header logoSrc={logo} /> {/* Pass the logo as a prop */}

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
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default App;
