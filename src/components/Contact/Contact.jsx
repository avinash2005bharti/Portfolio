import React from 'react';
import { Mail, MapPin, FileText } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="container contact-section">
      <div className="contact-wrapper glass-panel">
        <div className="contact-info">
          <h2 className="section-title gradient-text" style={{ textAlign: 'left' }}>Let's Connect</h2>
          <p className="contact-desc">
            Open to opportunities in full-stack development, AI products, and agentic automation. Let’s build something impactful.
          </p>

          <div className="contact-details">
            <a href="mailto:avinashbharti3007@gmail.com" className="contact-detail-item">
              <Mail className="contact-icon" size={20} />
              <span>avinashbharti3007@gmail.com</span>
            </a>
            <div className="contact-detail-item">
              <MapPin className="contact-icon" size={20} />
              <span>Bhopal, India</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/avinash2005bharti" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FiGithub size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/avinash-bharti-183696261/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FiLinkedin size={18} /> LinkedIn
            </a>
            <a href="https://ik.imagekit.io/avinash2005/RESUME.pdf" target="_blank" rel="noopener noreferrer" className="social-btn">
              <FileText size={18} /> Resume
            </a>
          </div>
        </div>

        <form action="https://formsubmit.co/avinashbharti3007@gmail.com" method="POST" className="contact-form">
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <div className="form-group">
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input type="email" name="email" id="email" placeholder="email@example.com" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea name="message" id="message" rows="4" placeholder="Tell me about your project..." required></textarea>
          </div>
          <button type="submit" className="submit-btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
