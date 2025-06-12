import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './AppContent';

const App = () => {
  return (
    <Router basename="/nordicsteps">
      <AppContent />
    </Router>
  );
};

export default App;
