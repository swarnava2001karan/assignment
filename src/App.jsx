/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Stats from './components/Stats';
import Service from './components/Service';
import Team from './components/Team';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <Stats />
      <Service />
      <Team />
      <Blog />
    </div>
  );
}

export default App;