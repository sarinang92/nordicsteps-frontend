import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Navbar from "./Components/Navbar";

const Home = () => (
  <main className="home-container">
    <h1>Welcome to Nordic Steps</h1>
  </main>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;