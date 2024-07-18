/* eslint-disable no-unused-vars */
import React from 'react';
import "./service.css";
import group from "../assets/profile-pictures/group.jpeg"

function Service() {
  return (
    <section className="p-8 bg-gray-100" id='navbar'>
      <div className="service-doughnut"></div>
      <img src={group} alt='group' className='group'/>
      <div className='text-header'>
      <h2 className="text1">SERVICE</h2>
      <h1 className="text-2xl mb-4" id='subtext'>Clean Idea and unique Design</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-xl mb-2">Excellent Features</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h4 className="text-xl mb-2">Simple & Clean</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h4 className="text-xl mb-2">Parallax Effect</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h4 className="text-xl mb-2">24/7 Support</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Service;