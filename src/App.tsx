import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <HomePage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;