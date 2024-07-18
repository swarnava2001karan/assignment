/* eslint-disable no-unused-vars */
import React from 'react';
import "./feature.css";
import { FaStarHalfAlt,FaGlobeEurope,FaLock  } from "react-icons/fa";

function Features() {
  return (
    <section className="p-8 flex space-x-4">
      <div className="bg-black text-white p-4 flex-1">
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        <FaStarHalfAlt color="yellow" size={30}/>
        </span>
        <h3 className="text-2xl mb-2">Responsive Design</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="bg-black text-white p-4 flex-1">
        <FaGlobeEurope color="yellow" size={30} />
        <h3 className="text-2xl mb-2">Awesome Features</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="bg-yellow-400 text-black p-4 flex-1">
        <FaLock color="black" size={30} />
        <h3 className="text-2xl mb-2">Powerful Security</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
}

export default Features;