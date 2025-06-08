import "./Login.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "nordic@example.com" && password === "nordic") {
      alert("Login successful!");
      navigate("/account");
    } else {
      setError("Invalid email or password");
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Go to signup page
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>

      
        <button
          type="button"
          onClick={handleSignUpClick}
          style={{ marginTop: "10px", backgroundColor: "#28a745" }}
        >
          Sign Up
        </button>
      </form>

    </div>
  );
};

export default Login;
