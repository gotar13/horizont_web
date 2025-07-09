import React from 'react';
import '../styles/comingSoon.css';
import HorizontLogo from '../assets/Horizontlogo.png'; // Importáljuk a Horizont logót

export default function ComingSoon() {
  return (
    <main className="container">
      <div className="logoHorizont">
        <img
          src={HorizontLogo}
          alt="Horizont_logo"
        />
      </div>
      <h1>Coming Soon</h1>
      <div className="loader">
        <div className="bar" />
      </div>
    </main>
  );
}