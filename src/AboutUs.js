import React from 'react';
import './App.css';

const AboutUs = () => {
  return (
    <div className="content">
      <h2>Optimize Solutions</h2>

      <section className="section-block">
        <h4>Who are we?</h4>
        <p>
          Optimize Solutions is a financial technology company that wants to create social
          impact by using AI and machine learning to transform options trading. Our mission is to
          empower traders and firms with personalized, high-probability recommendations that align
          with each trader's style, while also integrating a social impact component to create
          positive change in the world.
        </p>
      </section>

      <section className="section-block">
        <h4>What do we do?</h4>
        <h5>
         Optimize Solutions provides an automated options trading recommendation tool designed to help traders make decisions quicker and easier, while also impact investing!
        </h5>
          <p>1. Provide Recommendations Based on Strategy: Based on the chosen strategy, this tool will give you recommendations on which contracts to buy that yields the most profit with less risk.</p>
          <p>2. Analyzing Market Trends: Using advanced ML models and the trader’s history, the product analyzes market movements to give feedback on what the trader may change in their trading style. (in progress)</p>
          <p>3. Examining Trading Histories: Our tool evaluates past trades to understand and recommend strategies that align with the trader’s preferences and patterns. (in progress) </p>
          <p>4. Social Impact Integration: Optimize ensures a portion of options trading profits supports ESG investments, allowing traders to achieve financial success and contribute to positive social and environmental impact. A series of ESG companies will be recommended to the trader as well. (future plans)</p>
      </section>

      <section className="section-block">
        <h4>Contact Us</h4>
        <p>
          Got questions or need support? Feel free to reach out to us at:
          <br />
          Email: svasudevan@imsa.edu
          <br />
          Phone: +1-312-451-1846
        </p>
      </section>

    </div>
  );
};

export default AboutUs;
