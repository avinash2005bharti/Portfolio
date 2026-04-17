import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      }
      setActive(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar glass-panel">
      <ul className="nav-list">
        <li>
          <a href="#home" className={`nav-item ${active === 'home' ? 'active' : ''}`} onClick={() => setActive('home')}>
            <Home size={20} />
            <span className="nav-label">Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className={`nav-item ${active === 'about' ? 'active' : ''}`} onClick={() => setActive('about')}>
            <User size={20} />
            <span className="nav-label">About</span>
          </a>
        </li>
        <li>
          <a href="#projects" className={`nav-item ${active === 'projects' ? 'active' : ''}`} onClick={() => setActive('projects')}>
            <Briefcase size={20} />
            <span className="nav-label">Projects</span>
          </a>
        </li>
        <li>
          <a href="#contact" className={`nav-item ${active === 'contact' ? 'active' : ''}`} onClick={() => setActive('contact')}>
            <Mail size={20} />
            <span className="nav-label">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
