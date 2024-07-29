import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import DetailProduct from './ProductDetail';
import Semua from './Semua';
import Perusahaan from './Perusahaan';
import Kedai from './Kedai';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail-product" element={<DetailProduct />} />
          <Route path="/semua" element={<Semua />} />
          <Route path="/perusahaan" element={<Perusahaan />} />
          <Route path="/kedai" element={<Kedai />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
