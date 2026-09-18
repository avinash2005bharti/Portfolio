import React from 'react';
import { Target, Sparkles, Brain } from 'lucide-react';
import './Focus.css';

const Focus = () => {
  return (
    <section className="container focus-section">
      <div className="focus-grid">
        <div className="focus-item glass-panel">
          <div className="focus-header">
            <Target className="focus-icon" size={24} />
            <h3 className="focus-title">Current Focus</h3>
          </div>
          <div className="focus-tags">
            <span className="focus-tag">MERN Stack</span>
            <span className="focus-tag">Generative AI</span>
            <span className="focus-tag">Agentic AI</span>
          </div>
        </div>

        <div className="focus-item glass-panel">
          <div className="focus-header">
            <Brain className="focus-icon" size={24} />
            <h3 className="focus-title">AI Engineering Path</h3>
          </div>
          <p className="focus-desc">Building AI-native products with RAG, LLM workflows, and intelligent automation.</p>
          <div className="progress-bar">
            <span className="progress-label">In Progress</span>
            <div className="progress-track">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focus;
