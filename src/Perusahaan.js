import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Company = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="company-container">
      <div className="company-details">
        <div className="address-section">
          <h2>Company Address</h2>
          <p className="address-text">
            <strong>Jl. Cendrawasih, Plosogeneng</strong><br />
            Jombang 61416, Jawa Timur
          </p>
        </div>
        <div className="company-images">
          <img src="/company1.jpg" alt="Office building" className="company-image-large" />
          <img src="/company2.jpg" alt="Product showcase" className="company-image-large" />
        </div>
      </div>
      <div className="map">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.1836882806763!2d112.22336071432546!3d-7.521682794557753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e783fef7a8180a1%3A0x60522deac3377bfc!2sCV%20Pangan%20Berkah%20Sentosa%20(%20pbsfoods.com)!5e0!3m2!1sen!2sid!4v1628494508876!5m2!1sen!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <button className="back-home-button" onClick={handleGoHome}>Back to Home</button>
    </div>
  );
};

export default Company;