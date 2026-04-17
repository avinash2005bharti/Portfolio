import React from 'react';
import { Target, TrendingUp } from 'lucide-react';
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
            <span className="focus-tag">DSA in C++</span>
            <span className="focus-tag">System Design</span>
            <span className="focus-tag">Web Perf</span>
          </div>
        </div>

        <div className="focus-item glass-panel">
          <div className="focus-header">
            <TrendingUp className="focus-icon" size={24} />
            <h3 className="focus-title">Backend Path</h3>
          </div>
          <p className="focus-desc">Building applications with Node.js and exploring modern API architectures.</p>
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
