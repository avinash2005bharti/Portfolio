import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="container projects-section">
      <h2 className="section-title gradient-text">Featured Work & Focus</h2>
      
      <div className="project-card glass-panel">
        <div className="project-tags">
          <span className="tag">Next.js</span>
          <span className="tag">Tailwind</span>
        </div>
        <h3 className="project-title">Productivity Dashboard</h3>
        <p className="project-description">
          A full-stack productivity tool built for modern developers, featuring real-time task sync and custom analytics.
        </p>
        <div className="project-links">
          <a href="https://productivity-dashboard-beryl-nine.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <ExternalLink size={16} /> Live Preview
          </a>
          <a href="https://github.com/avinash2005bharti" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
            <FiGithub size={16} /> Source
          </a>
        </div>
        <div className="project-glow"></div>
      </div>
    </section>
  );
};

export default Projects;
