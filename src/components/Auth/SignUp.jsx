import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // get location
  const from = location.state?.from || "/account"; // fallback to /account if no redirect provided

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Login failed");
      }

      const user = await response.json();
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userId", user.id);

      alert("Login successful!");

      setEmail("");
      setPassword("");

      navigate(from, { replace: true }); // redirect back to previous page
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
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
          autoComplete="email"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
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
