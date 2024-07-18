/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./stat.css";
import phone from "../assets/phone.jpeg"
import React from 'react';
import im1 from "../assets/profile-pictures/1.jpg";
import im2 from "../assets/profile-pictures/2.jpeg";
import im3 from "../assets/profile-pictures/3.jpeg";
import im4 from "../assets/profile-pictures/4.jpeg";
import im5 from "../assets/profile-pictures/5.jpeg";
import im6 from "../assets/profile-pictures/6.jpeg";
import im7 from "../assets/profile-pictures/7.jpeg";
import im8 from "../assets/profile-pictures/8.jpeg";

function Stats() {
  return (
    <section className="p-8">
      <h2 className="text-2xl mb-4" id="impression">Here're some impressive numbers about us</h2>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-4xl font-bold">4369</h3>
          <p>Project Completed</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">2406</h3>
          <p>Happy Client</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">3978+</h3>
          <p>Cup of Coffee</p>
        </div>
        <div className="doughnut">
          <span className="doughnut-text">57%</span>
          <img src={phone} alt="phone"/>
        </div>
      </div>
      <div className="image-grid">
         <img src={im1} alt="Image 1" />
         <img src={im2} alt="Image 2" />
         <img src={im3} alt="Image 3" />
         <img src={im4} alt="Image 4" />
         <img src={im5} alt="Image 5" />
         <img src={im6} alt="Image 6" />
         <img src={im7} alt="Image 7" />
         <img src={im8} alt="Image 8" />
        </div>
    </section>
  );
}

export default Stats;