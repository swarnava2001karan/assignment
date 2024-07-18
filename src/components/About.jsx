/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import "./about.css"

function About() {
  return (
    <div className="about">
      <h2 className="section-title">ABOUT</h2>
      <h1>This is the one page polo</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <div className="buttons">
        <button className="btn-black">More Info</button>
        <button className="btn-yellow">Join Expreance</button>
      </div>
      <div className="about-circle"></div>
    </div>
    
  );
}

export default About;