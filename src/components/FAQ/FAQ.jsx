import React from "react";
import { Link } from "react-router-dom";
import "./FAQ.css"; 

const Faq = () => {
  return (
    <main className="body">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-section">
        <div className="faq-item">
          <div className="faq-question">What types of shoes does Nordic Step offer?</div>
          <div className="faq-answer">Running, hiking, casual, and formal shoes.</div>
        </div>
        <div className="faq-item">
          <div className="faq-question">What is the return policy?</div>
          <div className="faq-answer">Return unworn shoes within 30 days with receipt.</div>
        </div>
        <div className="faq-links">
          <Link to="/about">About Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
};

export default Faq;
