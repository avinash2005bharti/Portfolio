import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="container contact-section">
      <div className="contact-wrapper glass-panel">
        <div className="contact-info">
          <h2 className="section-title gradient-text" style={{ textAlign: 'left' }}>Let's Connect</h2>
          <p className="contact-desc">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
          
          <div className="contact-details">
            <div className="contact-detail-item">
              <Mail className="contact-icon" size={20} />
              <span>avinashbharti3007@gmail.com</span>
            </div>
            <div className="contact-detail-item">
              <MapPin className="contact-icon" size={20} />
              <span>Bhopal, India</span>
            </div>
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
