import React, { useState } from 'react';
import './App.css'; 

// StrategyCard Component
const StrategyCard = ({ strategies, selectedStrategy, onStrategyChange }) => {
  return (
    <div className='section-block'>
      <h4>Choose a Strategy you wish to ask recommendations for:</h4>
      <h5>**Disclaimer: TOOL ONLY WORKS WHEN THE INDIAN MARKET IS OPEN. IF YOU SEE RED TEXT WHEN YOU HIT ENTER IT MEANS MARKET IS NOT OPEN.**</h5>
      {strategies.map((strategy, index) => (
        <div key={index} className='radio-spacing'>
          <input
            type="radio"
            id={strategy}
            name="strategy"
            value={strategy}
            checked={selectedStrategy === strategy}
            onChange={() => onStrategyChange(strategy)}
            required
          />
          <label htmlFor={strategy}>{strategy}</label>
        </div>
      ))}
    </div>
  );
};

// Main OptionsTradingForm Component
const OptionsTradingForm = () => {
  const [selectedStrategy, setSelectedStrategy] = useState('');
  const [formData, setFormData] = useState({
    strategy: '',
    stockIndex: '',
    startDate: '',
    endDate: '',
    expiryDate: ''
  });

  const [resultData, setResultData] = useState(null);
  const [error, setError] = useState(null);

  const strategies = [
    'Short Straddle',
    'Bull Call Spread',
    'Short Put (coming soon)',
    'Long Call (coming soon)',
    'Long Straddle (coming soon)',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset any previous errors
    setResultData(null);
    formData.strategy = selectedStrategy;
    console.log(formData);

    try {
      const response = await fetch("http://34.205.32.53:80/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResultData({
        contractsToBuy: data.contractsToBuy,
        breakEvenPrice: data.breakEvenPrice,
        maximumProfit: data.maximumProfit,
        maximumLoss: data.maximumLoss,
      });
    } catch (err) {
      setError("There was an error or no matching contract was found. please try again.");
      // mock data
      /* setResultData({
        contractsToBuy: 10,
        breakEvenPrice: 1500,
        maximumProfit: 5000,
        maximumLoss: 1000,
      }); */
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return selectedStrategy!=='' 
    && formData.stockIndex 
    && formData.startDate
    && formData.endDate
    && formData.endDate >= formData.startDate
    && formData.expiryDate
    && formData.expiryDate >= formData.startDate
  };

  return (
    <div className="content">
     <h2>Options Trading</h2>
        <div className='indent'>
          <form onSubmit={handleSubmit}>
            {/* StrategyCard Component */}
            <StrategyCard
              strategies={strategies}
              selectedStrategy={selectedStrategy}
              onStrategyChange={setSelectedStrategy}
            />

            {/* Requirements Section */}
            <div className='section-block'>
              <h4>Enter Requirements Below: (enter "NIFTY" for the underlying since tool works only for Indian stock market)</h4>
              <div className="form-grid">
                <div className="form-group">
                  <label className='field-padding'>Underlying Stock/Index: </label>
                  <input type="text" name="stockIndex" value={formData.stockIndex} onChange={handleInputChange} required />
                </div>
                <div className="form-group"></div>
                <div className="form-group">
                  <label className='field-padding'>Start Date: </label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label className='field-padding'>End Date: </label>
                  <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} required min={formData.startDate} />
                </div>
                <div className="form-group">
                  <label className='field-padding'>Expiry Date of the Option Contract: </label>
                  <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleInputChange} required min={formData.startDate} />
                </div>
                <div className="form-group"></div>
              </div>
              <button type="submit" className="submit-btn" disabled={!isFormValid()}>Submit</button>

              {/* Error Section (optional) */}
              {error && <div style={{ color: "red" }}>{error}</div>}
            </div>
          </form>

          {/* Result Section (Conditional Rendering) */}
          {resultData && (
            <div className='section-block'>
              <h4>Results</h4>
              <div className="form-grid">
                <div className="form-group">Contracts to Buy: {resultData.contractsToBuy}</div>
                <div className="form-group">Break-even Price: {resultData.breakEvenPrice}</div>
                <div className="form-group">Maximum Profit: {resultData.maximumProfit}</div>
                <div className="form-group">Maximum Loss: {resultData.maximumLoss}</div>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default OptionsTradingForm;
