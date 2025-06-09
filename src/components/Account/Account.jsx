import { useNavigate, Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Account.css';

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // email is stored in localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedId = localStorage.getItem("userId");

    if (storedEmail) {
      setUserEmail(storedEmail);
    } else {
      setError("No user logged in");
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate('/login');
  };

  const isRootAccount = location.pathname.endsWith('/account');

  return (
    <div className="account-container">
      <div className="account-links">
        <Link to="">My Account</Link>
        <Link to="profile">Profile</Link>
        <Link to="orders">My Orders</Link>
        <button onClick={handleLogout} className="logout-button">Log Out</button>
      </div>

      {isRootAccount && (
        <div className="account-greeting">
          {error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : (
            <>
              <p>👋 Hei {userEmail}, welcome to Nordic Steps!</p>
              <p>Need help finding your next pair? Let’s explore!</p>
              <Link to="/sale" className="accountgreeting-cta-button">Go to Shop</Link>
            </>
          )}
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default Account;
