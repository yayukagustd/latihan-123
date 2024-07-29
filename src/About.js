import React from 'react';
import './App.css';

function About() {
  return (
    <div className="about-container">
      <header className="about-header">
        <img src={`${process.env.PUBLIC_URL}/logopbs.png`} alt="PBS Logo" className="about-logo" />
      </header>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          CV Pangan Berkah Sentosa is a manufacturer of frozen processed food based on chickens, cows, and fish.
          We process our products hygienically using modern technology to ensure the production of high-quality, halal,
          and nutritious food that is sure to be loved by our customers due to its great taste.
        </p>
        <p>
          All of our products have been certified halal by the Majelis Ulama Indonesia (MUI), have passed the NKV Test,
          and are registered with a distribution permit from the Drug and Food Supervisory Agency.
        </p>
        <p>CV Pangan Berkah Sentosa 2021</p>
        <a href="/" className="back-button">Back to Home</a>
        {/* <Link to="/" className="back-button">Back to Home</Link> */}
      </div>
    </div>
  );
}

export default About;