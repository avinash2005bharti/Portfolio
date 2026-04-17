import React, { useState, useEffect } from 'react';
import { Code, Terminal } from 'lucide-react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import './Profiles.css';

const profileData = [
  { id: 'email', name: 'Email', icon: <FiMail size={24} />, link: 'mailto:avinashbharti3007@gmail.com', handle: 'avinashbharti3007@gmail.com' },
  { id: 'linkedin', name: 'LinkedIn', icon: <FiLinkedin size={24} />, link: 'https://www.linkedin.com/in/avinash-bharti-183696261/', handle: 'avinash-bharti-183696261' },
  { id: 'github', name: 'GitHub', icon: <FiGithub size={24} />, link: 'https://github.com/avinash2005bharti', handle: 'avinash2005bharti' },
  { id: 'leetcode', name: 'LeetCode', icon: <Code size={24} />, link: 'https://leetcode.com/u/avinash06bharti/', handle: 'avinash06bharti' },
  { id: 'gfg', name: 'GeeksforGeeks', icon: <Terminal size={24} />, link: 'https://www.geeksforgeeks.org/profile/avi2005bharti', handle: 'avi2005bharti' },
];

const Profiles = () => {
  const [stats, setStats] = useState({
    leetcode: null,
    gfg: null
  });

  useEffect(() => {
    fetch('https://leetcode-api-faisalshohag.vercel.app/avinash06bharti')
      .then(res => res.json())
      .then(data => {
        if (data && data.totalSolved !== undefined) {
          setStats(prev => ({ ...prev, leetcode: data.totalSolved }));
        }
      })
      .catch(err => console.error("Error fetching LeetCode stats", err));

    fetch('https://geeks-for-geeks-stats-api.vercel.app/?userName=avi2005bharti')
      .then(res => res.json())
      .then(data => {
        if (data && data.info && data.info.totalProblemsSolved !== undefined) {
          setStats(prev => ({ ...prev, gfg: data.info.totalProblemsSolved }));
        }
      })
      .catch(err => console.error("Error fetching GFG stats", err));
  }, []);

  return (
    <section className="container profiles-section">
      <h2 className="section-title gradient-text">Presence</h2>
      <div className="profiles-grid">
        {profileData.map((profile, index) => (
          <a key={index} href={profile.link} target="_blank" rel="noopener noreferrer" className="profile-card glass-panel">
            <div className="profile-icon">
              {profile.icon}
            </div>
            <div className="profile-info">
              <h3 className="profile-name">{profile.name}</h3>
              <p className="profile-handle">
                {profile.id === 'email' ? profile.handle : `@${profile.handle}`}
              </p>
              {stats[profile.id] !== null && stats[profile.id] !== undefined && (
                <div className="profile-stats">
                  <span className="stat-badge">Solved: {stats[profile.id]}</span>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profiles;
