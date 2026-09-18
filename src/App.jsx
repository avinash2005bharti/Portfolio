import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects.jsx';
import Focus from './components/Focus/Focus';
import Stats from './components/Stats/Stats';
import Profiles from './components/Profiles/Profiles';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Focus />
        <Stats />
        <Profiles />
        <Contact />
      </main>
    </div>
  );
}

export default App;
