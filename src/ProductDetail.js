import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const ProductDetail = () => {
  const [visibleProducts, setVisibleProducts] = useState({
    kamil: false,
    salam: false,
    zaitun: false
  });

  const [logoClick, setLogoClick] = useState({
    kamil: false,
    salam: false,
    zaitun: false
  });

  const toggleVisibility = (product, isLogoClick = false) => {
    setVisibleProducts(prevState => ({
      ...prevState,
      [product]: !prevState[product]
    }));

    if (isLogoClick) {
      setLogoClick(prevState => ({
        ...prevState,
        [product]: !prevState[product]
      }));
    }
  };

  return (
    <div className="product-detail-container">
      <h1 className="product-detail-title">DETAIL PRODUCT</h1>
      <div className="product-logos">
        <div className="product-logo">
          <img src="/kamil.png" alt="Kamil Logo" onClick={() => toggleVisibility('kamil', true)} />
          <p>KAMIL</p>
          <button onClick={() => toggleVisibility('kamil')}>View More</button>
          {visibleProducts.kamil && (
            <div className="additional-images">
              {logoClick.kamil ? (
                <>
                  <img src="/kamil1.png" alt="Kamil Product 1" />
                  <img src="/kamil2.png" alt="Kamil Product 2" />
                  <img src="/kamil3.png" alt="Kamil Product 3" />
                  <img src="/kamil4.png" alt="Kamil Product 4" />
                  <img src="/kamil5.png" alt="Kamil Product 5" />
                  <img src="/kamil6.png" alt="Kamil Product 6" />
                  <img src="/kamil7.png" alt="Kamil Product 7" />
                  <img src="/kamil8.png" alt="Kamil Product 8" />
                  <img src="/kamil9.png" alt="Kamil Product 9" />
                  <img src="/kamil10.png" alt="Kamil Product 10" />
                  <img src="/kamil11.png" alt="Kamil Product 11" />
                  <img src="/kamil12.png" alt="Kamil Product 12" />
                  <img src="/kamil13.png" alt="Kamil Product 13" />
                  <img src="/kamil14.png" alt="Kamil Product 14" />
                  <img src="/kamil15.png" alt="Kamil Product 15" />
                </>
              ) : (
                <>
                  <img src="/ketkamil1.jpg" alt="Ketkamil Product 1" />
                  <img src="/ketkamil2.jpg" alt="Ketkamil Product 2" />
                  <img src="/ketkamil3.jpg" alt="Ketkamil Product 3" />
                </>
              )}
            </div>
          )}
        </div>
        <div className="product-logo">
          <img src="/salam.png" alt="Salam Logo" onClick={() => toggleVisibility('salam', true)} />
          <p>SALAM</p>
          <button onClick={() => toggleVisibility('salam')}>View More</button>
          {visibleProducts.salam && (
            <div className="additional-images">
              {logoClick.salam ? (
                <>
                  <img src="/salam1.png" alt="Salam Product 1" />
                  <img src="/salam2.png" alt="Salam Product 2" />
                  <img src="/salam3.png" alt="Salam Product 3" />
                  <img src="/salam4.png" alt="Salam Product 4" />
                  <img src="/salam5.png" alt="Salam Product 5" />
                  <img src="/salam6.png" alt="Salam Product 6" />
                  <img src="/salam7.png" alt="Salam Product 7" />
                  <img src="/salam8.png" alt="Salam Product 8" />
                  <img src="/salam9.png" alt="Salam Product 9" />
                  <img src="/salam10.png" alt="Salam Product 10" />
                  <img src="/salam11.png" alt="Salam Product 11" />
                  <img src="/salam12.png" alt="Salam Product 12" />
                  <img src="/salam14.png" alt="Salam Product 14" />
                  <img src="/salam15.png" alt="Salam Product 15" />
                  <img src="/salam16.png" alt="Salam Product 16" />
                  <img src="/salam17.png" alt="Salam Product 17" />
                  <img src="/salam18.png" alt="Salam Product 18" />
                  <img src="/salam19.png" alt="Salam Product 19" />
                  <img src="/salam20.png" alt="Salam Product 20" />
                </>
              ) : (
                <>
                  <img src="/ketsalam1.jpg" alt="Ketsalam Product 1" />
                  <img src="/ketsalam2.jpg" alt="Ketsalam Product 2" />
                  <img src="/ketsalam3.jpg" alt="Ketsalam Product 3" />
                  <img src="/ketsalam4.jpg" alt="Ketsalam Product 4" />
                </>
              )}
            </div>
          )}
        </div>
        <div className="product-logo">
          <img src="/zaitun.png" alt="Zaitun Logo" onClick={() => toggleVisibility('zaitun', true)} />
          <p>ZAITUN</p>
          <button onClick={() => toggleVisibility('zaitun')}>View More</button>
          {visibleProducts.zaitun && (
            <div className="additional-images">
              {logoClick.zaitun ? (
                <>
                  <img src="/zaitun1.png" alt="Zaitun Product 1" />
                  <img src="/zaitun2.png" alt="Zaitun Product 2" />
                  <img src="/zaitun3.png" alt="Zaitun Product 3" />
                  <img src="/zaitun4.png" alt="Zaitun Product 4" />
                  <img src="/zaitun5.png" alt="Zaitun Product 5" />
                  <img src="/zaitun6.png" alt="Zaitun Product 6" />
                  <img src="/zaitun7.png" alt="Zaitun Product 7" />
                  <img src="/zaitun8.png" alt="Zaitun Product 8" />
                  <img src="/zaitun9.png" alt="Zaitun Product 9" />
                  <img src="/zaitun10.png" alt="Zaitun Product 10" />
                  <img src="/zaitun11.png" alt="Zaitun Product 11" />
                  <img src="/zaitun12.png" alt="Zaitun Product 12" />
                  <img src="/zaitun13.png" alt="Zaitun Product 13" />
                  <img src="/zaitun14.png" alt="Zaitun Product 14" />
                  <img src="/zaitun15.png" alt="Zaitun Product 15" />
                </>
              ) : (
                <>
                  <img src="/ketzaitun1.jpg" alt="Ketzaitun Product 1" />
                  <img src="/ketzaitun2.jpg" alt="Ketzaitun Product 2" />
                </>
              )}
            </div>
          )}
        </div>
      </div>
      <Link to="/" className="back-to-home btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default ProductDetail;