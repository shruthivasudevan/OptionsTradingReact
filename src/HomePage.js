import React from 'react';
import './App.css'

const HomePage = () => {
  return (
    <div className="content">
        {/* Hero Section */}
      <section className="section-block">
        <h2>Welcome to Optimize Solutions</h2>
        <p>Welcome to Optimize Solutions! This platform provides personalized options
        trading recommendations that align with your unique trading style. We help you
        stay ahead in the market with real-time suggestions on options contracts, while
        also aiding you to invest impactfully in ESG based companies. A portion of your
        profits will be directed into ESG investments, allowing you to make a positive social
        impact while profiting from them. So use Optimize Solutions, your partner in financial
        success!
        (This product works only on the Indian stock market for now.
        Also only the options recommendation portion is working, the rest are coming soon!)

        </p>
      </section>

      {/* Features Section */}
      <section className="section-block">
        <h2>Platform Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>AI-Powered Recommendations</h3>
            <p>
                Leverages LSTM models to analyze trader behavior over time, classify trading patterns, and identify optimal strategies for future trades.            </p>
          </div>
          <div className="feature-item">
            <h3>Market Condition Analysis</h3>
            <p>
            Uses real-time data (from the NSE API) to assess current market scenarios and recommend suitable options strategies.
            </p>
          </div>
          <div className="feature-item">
            <h3>Tailored Strategy Selection</h3>
            <p>
                Aligns recommendations with each trader’s preferred style, suggesting options contracts like Bull Call Spread or Short Straddle for specific market stances.
            </p>
          </div>
          <div className="feature-item">
            <h3>Embedded Widget Integration</h3>
            <p>
            Optimize functions as an add-on within a trader’s existing platform, ensuring ease of use without requiring a transition to a new system.
            </p>
          </div>
          <div className="feature-item">
            <h3>Social Impact Investing</h3>
            <p>
            Automatically directs a portion of generated profits into ESG investments, where traders can choose which companies to invest in. This gives returns with a focus on sustainable, positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-block">
        <h2>Ready to Start Trading?</h2>
        <p>
          Join our traders who are using the portal to achieve their financial goals and begin trading smarter!
          Click on the Options Trading Form on the left navigation bar!
        </p>
      </section>
    </div>
  );
}

export default HomePage;
