// Navbar
import { Link } from "react-router-dom";
import logo from "../assets/logo shoes.svg"; // Ensure this path is correct
import "./Navbar.css"; // Ensure you have styles for proper positioning

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Nordic Steps Logo" className="logo" />
        <h1 className="tagline">NORDIC STEPS</h1>
      </div>
      <div className="nav-links">
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;




