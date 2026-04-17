import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container about-section">
      <h2 className="section-title gradient-text">The Vision</h2>
      <div className="about-content glass-panel">
        <p className="about-text">
          I am a 2nd-year CSE student at the intersection of creative frontend engineering and robust backend logic. 
          My journey is fueled by a relentless curiosity for how things work under the hood.
        </p>
        <p className="about-text">
          Currently focusing on mastering <strong>Data Structures and Algorithms</strong> while crafting 
          immersive web experiences using <strong>React</strong> and <strong>Node.js</strong>. 
          I believe in code that isn't just performant, but an art form in itself.
        </p>

        <div className="about-stats">
          <div className="stat-card">
            <h3 className="stat-number gradient-text">DSA</h3>
            <p className="stat-label">Problem Solving</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number gradient-text">React</h3>
            <p className="stat-label">Frontend</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number gradient-text">Node.js</h3>
            <p className="stat-label">Backend</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number gradient-text">Next.js</h3>
            <p className="stat-label">Fullstack</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
