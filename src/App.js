import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import AboutUs from './AboutUs';
import TradingAnalysis from './TradingAnalysis';
import OptionsTradingForm from './OptionsTradingForm';
import HomePage from './HomePage';
import NotFound from './NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Header />
        <Sidebar />
        <div className="main-content">
          <Routes>
            {/* Default page (Home) */}
            <Route path="/" element={<HomePage />} />

            {/* Other routes */}
            <Route path="/trading-analysis" element={<TradingAnalysis />} />
            <Route path="/options-trading-form" element={<OptionsTradingForm />} />
            <Route path="/about-us" element={<AboutUs />} />

            {/* Catch-all route for 404 pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
