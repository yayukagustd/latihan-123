import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure you have necessary styles

const Semua = () => {
  return (
    <div className="semua-container">
      <header className="semua-header">
        <h1>Semua Products</h1>
        <p>Discover our wide range of products, catering to all your needs.</p>
      </header>

      <section className="semua-introduction">
        {/* <h2>Welcome to Semua Products</h2>
        <p>At Semua, we offer a diverse selection of products that meet the highest standards of quality and excellence. Browse through our categories to find the perfect products for you.</p> */}
      </section>

      <section className="semua-company-profile">
        {/* <h2>Company Profile</h2>
        <p>CV Pangan Berkah Sentosa is committed to providing quality food products. Our further processing plant ensures that we meet the highest standards in the industry. Our mission is to bring nutritious and delicious food to our customers.</p> */}
      </section>

      <section className="semua-categories">
        <h2>Product Categories</h2>
        <ul>
          {/* <li><a href="/category1">Category 1</a></li>
          <li><a href="/category2">Category 2</a></li>
          <li><a href="/category3">Category 3</a></li>
          <li><a href="/category4">Category 4</a></li> */}
          {/* Add more categories as needed */}
        </ul>
      </section>

      <section className="semua-highlights">
        {/* <h2>Featured Products</h2>
        <div className="highlight-product">
          <img src="path_to_image1.jpg" alt="Featured Product 1" />
          <h3>Featured Product 1</h3>
          <p>Description of featured product 1.</p>
        </div>
        <div className="highlight-product">
          <img src="path_to_image2.jpg" alt="Featured Product 2" />
          <h3>Featured Product 2</h3>
          <p>Description of featured product 2.</p>
        </div> */}
        {/* Add more featured products as needed */}
      </section>

      <section className="semua-kedai">
        {/* <h2>Our Kedai</h2>
        <div className="kedai-item">
          <img src="path_to_kedai_image1.jpg" alt="Kedai 1" />
          <h3>Kedai 1</h3>
          <p>Description of Kedai 1.</p>
        </div>
        <div className="kedai-item">
          <img src="path_to_kedai_image2.jpg" alt="Kedai 2" />
          <h3>Kedai 2</h3>
          <p>Description of Kedai 2.</p>
        </div> */}
        {/* Add more kedai as needed */}
      </section>

      {/* <footer className="semua-footer">
        <p>For more information, contact us at <a href="mailto:info@example.com">info@example.com</a>.</p>
      </footer> */}

      <Link to="/" className="back-to-home btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default Semua;
