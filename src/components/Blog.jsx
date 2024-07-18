/* eslint-disable no-unused-vars */
import React from 'react';
import "./blog.css";
import placeholder1 from "../assets/placeholder1.jpeg"
import placeholder2 from "../assets/placeholder2.jpeg"

function Blog() {
  return (
    <section className="p-8" id='text-header'>
      <h2 className="text-4xl font-bold mb-4" id='head'>NEWS</h2>
      <h3 className="text-2xl mb-4">Recent Blog Post</h3>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <img src={placeholder1} alt="Blog Post" className="w-full h-40 object-cover mb-2" />
          <h4 className="text-xl">GALLERY IMAGE POST</h4>
          <p>By Admin in Logo - 1comment</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-blue-500">Read More</a>
        </div>
        <div>
          <img src={placeholder2} alt="Blog Post" className="w-full h-40 object-cover mb-2" />
          <h4 className="text-xl">SINGLE IMAGE POST</h4>
          <p>By Admin in Logo - 1comment</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-blue-500">Read More</a>
        </div>
        <div>
          <img src={placeholder1} alt="Blog Post" className="w-full h-40 object-cover mb-2" />
          <h4 className="text-xl">VIDEO POST</h4>
          <p>By Admin in Logo - 1comment</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-blue-500">Read More</a>
        </div>
        <div>
          <img src={placeholder2} alt="Blog Post" className="w-full h-40 object-cover mb-2" />
          <h4 className="text-xl">GALLERY IMAGE POST</h4>
          <p>By Admin in Logo - 1comment</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a href="#" className="text-blue-500">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Blog