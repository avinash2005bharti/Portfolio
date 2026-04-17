import React from 'react';
import './Hero.css';
import profileImage from '../../assets/profile.png';

const Hero = () => {
  return (
    <section id="home" className="hero-section container animate-fade-in">
      <div className="hero-content">
        <h1 className="hero-title animate-float">Avinash Bharti</h1>
        <h2 className="hero-subtitle gradient-text">
          CSE Student | Frontend Developer | DSA Enthusiast
        </h2>
        <p className="hero-tagline">
          "Building fast, scalable, and user-friendly web applications"
        </p>
        
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="hero-image-wrapper animate-float" style={{ animationDelay: '0.2s' }}>
        <img src={profileImage} alt="Avinash Bharti" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
