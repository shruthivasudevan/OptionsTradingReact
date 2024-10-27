import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/trading-analysis">Trading Analysis</Link>
      <Link to="/options-trading-form">Options Trading Form</Link>
    </nav>

    </div>
  );
};

export default Sidebar;
