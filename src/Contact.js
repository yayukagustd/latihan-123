import React from 'react';
import './App.css';
import { BsFacebook, BsInstagram, BsLink45Deg, BsTiktok } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="contact-container" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/bgpbs.jpg')`, minHeight: '100vh', color: 'black' }}>
      <header className="contact-header">
        <img src={`${process.env.PUBLIC_URL}/logopbs.png`} alt="PBS Logo" className="contact-logo" />
      </header>
      <div className="contact-content">
        <div className="contact-left">
          <h2>Drop by or reach out</h2>
          <p>Call: (0321) 8495069</p>
          <p>Email: business@pbsfoods.com</p>
          <div className="contact-products">
            <img src={`${process.env.PUBLIC_URL}/kamil.png`} alt="Kamil" className="contact-product" />
            <img src={`${process.env.PUBLIC_URL}/salam.png`} alt="Salam" className="contact-product" />
            <img src={`${process.env.PUBLIC_URL}/zaitun.png`} alt="Zaitun" className="contact-product" />
          </div>
          <div className="contact-certifications">
            <img src={`${process.env.PUBLIC_URL}/muinkvbpom.png`} alt="Muinkvbpom" className="contact-certification" />
          </div>
        </div>
        <div className="contact-right">
          <h2>Business Hours</h2>
          <p>Monday to Saturday:</p>
          <p>7.00 am to 4.30 pm</p>
          <p>8.00 am to 5.30 pm</p>
          <p>Sunday:</p>
          <p>Weekend</p>
        </div>
      </div>
      <div className="contact-footer">
        <div className="contact-social">
          <a href="https://www.facebook.com/pangan.berkah?mibextid=ZbWKwL" className="social-link">
            <BsFacebook className="social-icon" /> Pangan Berkah Sentosa
          </a>
          <a href="https://www.instagram.com/pbs.frozenfood?igsh=NDExZWR3Z3dzaG95" className="social-link">
            <BsInstagram className="social-icon" /> @pbs.frozenfood
          </a>
          <a href="https://pbsfoods.com/" className="social-link">
            <BsLink45Deg className="social-icon" /> https://pbsfoods.com
          </a>
          <a href="https://www.tiktok.com/@pbsfoods?_t=8o3c5lofFyB&_r=1" className="social-link">
            <BsTiktok className="social-icon" /> @pbsfoods
          </a>
        </div>
        <a href="/" className="back-button">Back to Home</a>
      </div>
    </div>
  );
}

export default Contact;