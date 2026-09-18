import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="container about-section">
      <h2 className="section-title gradient-text">About Me</h2>
      <div className="about-content glass-panel">
        <p className="about-text">
          I am a software developer passionate about building scalable full-stack applications and AI-powered solutions. My expertise spans the <strong>MERN Stack</strong>, REST APIs, real-time applications, <strong>Generative AI</strong>, <strong>Retrieval-Augmented Generation</strong>, and <strong>Agentic AI systems</strong>.
        </p>
        <p className="about-text">
          I enjoy creating modern user experiences while integrating intelligent automation using <strong>Large Language Models</strong> and workflow tools like <strong>LangChain</strong> and <strong>LangGraph</strong>. My goal is to build impactful products that combine software engineering with artificial intelligence.
        </p>

        <div className="about-stats">
          <div className="stat-card">
            <h3 className="stat-number gradient-text">MERN</h3>
            <p className="stat-label">Full Stack</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number gradient-text">AI</h3>
            <p className="stat-label">Generative Systems</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number gradient-text">RAG</h3>
            <p className="stat-label">Knowledge Apps</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number gradient-text">Agents</h3>
            <p className="stat-label">Agentic AI</p>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
