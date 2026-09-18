import React from 'react';
import { Code2, Database, Monitor, Palette, FileJson, Server, Sparkles, Bot, ShieldCheck, Layout } from 'lucide-react';
import './Skills.css';

const skillsData = [
  { name: 'React.js', icon: <Monitor size={28} /> },
  { name: 'JavaScript', icon: <FileJson size={28} /> },
  { name: 'Python', icon: <Code2 size={28} /> },
  { name: 'HTML5', icon: <Layout size={28} /> },
  { name: 'CSS3', icon: <Palette size={28} /> },
  { name: 'Tailwind CSS', icon: <Palette size={28} /> },
  { name: 'Node.js', icon: <Server size={28} /> },
  { name: 'Express.js', icon: <Server size={28} /> },
  { name: 'MongoDB', icon: <Database size={28} /> },
  { name: 'LangChain', icon: <Sparkles size={28} /> },
  { name: 'LangGraph', icon: <Bot size={28} /> },
  { name: 'RAG', icon: <ShieldCheck size={28} /> },
  { name: 'LLM Apps', icon: <Sparkles size={28} /> },
];

const Skills = () => {
  return (
    <section className="container skills-section">
      <h2 className="section-title gradient-text">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card glass-panel">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
