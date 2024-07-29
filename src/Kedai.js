import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Ensure you have necessary styles

const locations = [
  { lat: -7.513460, lng: 112.232895 },
  { lat: -7.517288, lng: 112.233494 },
  { lat: -7.519171, lng: 112.233595 },
];

const generateStaticMapUrl = () => {
  const baseUrl = 'https://www.google.com/maps/embed/v1/view?';
  const center = `center=${locations[0].lat},${locations[0].lng}`;
  const zoom = 'zoom=14';

  const markers = locations.map(
    (location) => `markers=color:red%7Clabel:%7C${location.lat},${location.lng}`
  ).join('&');
  
  return `${baseUrl}${center}&${zoom}&${markers}`;
};

const Kedai = () => {
  const mapUrl = generateStaticMapUrl();

  return (
    <div className="kedai-container">
      <iframe
        src={mapUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Kedai Locations Map"
      ></iframe>
      <Link to="/" className="back-to-home btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default Kedai;