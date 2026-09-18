import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const stats = [
  { value: '8+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
  { value: '10+', label: 'GitHub Repositories' },
  { value: '4+', label: 'AI Projects' },
];

const Stats = () => {
  return (
    <section className="container stats-section">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="stat-number gradient-text">{stat.value}</h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
