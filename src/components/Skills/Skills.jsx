import React from 'react';
import { Code2, Monitor, Database, Palette, FileJson, Server, Layout, Binary } from 'lucide-react';
import './Skills.css';

const skillsData = [
  { name: 'C++', icon: <Code2 size={28} /> },
  { name: 'JavaScript', icon: <FileJson size={28} /> },
  { name: 'HTML', icon: <Layout size={28} /> },
  { name: 'CSS', icon: <Palette size={28} /> },
  { name: 'React', icon: <Monitor size={28} /> },
  { name: 'DSA', icon: <Binary size={28} />, link: 'https://codolio.com/profile/avinashbharti' },
  { name: 'Node.js', icon: <Server size={28} /> },
  { name: 'Next.js', icon: <Database size={28} /> },
];

const Skills = () => {
  return (
    <section className="container skills-section">
      <h2 className="section-title gradient-text">Technical Arsenal</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => {
          const content = (
            <>
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </>
          );

          return skill.link ? (
            <a key={index} href={skill.link} target="_blank" rel="noopener noreferrer" className="skill-card glass-panel" style={{textDecoration: 'none', color: 'inherit'}}>
              {content}
            </a>
          ) : (
            <div key={index} className="skill-card glass-panel">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
