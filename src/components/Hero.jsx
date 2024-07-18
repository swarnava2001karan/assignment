/* eslint-disable no-unused-vars */
import "./hero.css";

import React from 'react';
import heroImage from "../assets/girl.jpeg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="header-circle"></div>
        <h1>CREATIVE AND PROFESSIONAL</h1>
        <p>Use by you or one client in a single end product which end users are not charged for. Use by you client in a single end product which end users are not charged for</p>
        <button className="button"> Contact Us</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
        <div className="hero-doughnut"></div>
      </div>
    </section>
  );
}

export default Hero;
  