/* eslint-disable no-unused-vars */
import React from 'react';
import teamMember1 from '../assets/profile-pictures/user1.jpg';
import teamMember2 from '../assets/profile-pictures/user2.jpg';
import teamMember3 from '../assets/profile-pictures/user3.jpg';
import "./team.css"

function Team() {
  return (
    <section className="team">
      <h2 className="section-title">EXPERT</h2>
      <h1>Meet Our Team</h1>
      <div className="team-members">
        <div className="team-member">
          <img src={teamMember1} alt="Robert Williams" />
          <h2>Robert Williams</h2>
          <p>Web Developer</p>
        </div>
        <div className="team-member">
          <img src={teamMember2} alt="Robert Williams" />
          <h2>Robert Williams</h2>
          <p>Web Developer</p>
        </div>
        <div className="team-member featured">
          <img src ={teamMember3} alt ="person3" />
          <h2>Robert Williams</h2>
          <p>Web Developer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="social-icons">
            <span>f</span>
            <span>t</span>
            <span>in</span>
            <span>g</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;