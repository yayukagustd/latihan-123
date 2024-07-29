import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" className="Home-logo small-logo" />
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button id="refreshHomePage" onClick={handleRefresh} className="nav-link btn btn-link nav-link-button home-button">
                <i className="fas fa-home"></i> Home
              </button>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link nav-link-button">
                <i className="fas fa-info-circle"></i> About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link nav-link-button">
                <i className="fas fa-envelope"></i> Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="Home-title">
        <h1>CV PANGAN BERKAH SENTOSA</h1>
        <h2>Further Processing Plant</h2>
      </div>
      <div className="Home-links">
        <Link to="/semua" className="btn btn-outline-light">
          <i className="fas fa-th-list"></i> SEMUA
        </Link>
        <Link to="/perusahaan" className="btn btn-outline-light">
          <i className="fas fa-building"></i> PERUSAHAAN
        </Link>
        <Link to="/kedai" className="btn btn-outline-light">
          <i className="fas fa-store"></i> KEDAI
        </Link>
        <Link to="/detail-product" className="btn btn-outline-light">
          <i className="fas fa-info"></i> DETAIL PRODUCT
        </Link>
      </div>
    </div>
  );
}

export default Home;