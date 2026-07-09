import React, { useState } from 'react';
import { Mail, Code, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { Linkedin } from './BrandIcons';
import './Contact.css';

const Contact = ({ personal }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate API request or trigger mailto
    const mailtoLink = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Addwin,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`)}`;
    
    // Open in new tab or trigger email app
    window.location.href = mailtoLink;
    setIsSubmitted(true);

    // Reset form after a small delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Have an internship opportunity, a project idea, or just want to connect? Drop a message!
      </p>

      <div className="contact-layout">
        {/* Contact Info Sidebar */}
        <div className="contact-info">
          <div className="info-card glass-card">
            <div className="info-item">
              <Mail className="info-icon" />
              <div className="info-details">
                <span className="info-label">Email Me</span>
                <a href={`mailto:${personal.email}`} className="info-value">
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="info-item">
              <MapPin className="info-icon" />
              <div className="info-details">
                <span className="info-label">Location</span>
                <span className="info-value">{personal.location}</span>
              </div>
            </div>

            <div className="info-item">
              <Linkedin className="info-icon" />
              <div className="info-details">
                <span className="info-label">LinkedIn</span>
                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="info-value">
                  in/addwinalanolikkal
                </a>
              </div>
            </div>

            <div className="info-item">
              <Code className="info-icon" />
              <div className="info-details">
                <span className="info-label">LeetCode</span>
                <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" className="info-value">
                  Addwin_Alanolikkal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div className="submission-success">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Thank You!</h3>
                <p>Opening your email client to send the message...</p>
              </div>
            ) : (
              <>
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    rows="5" 
                    placeholder="Hi Addwin, I'd like to talk about..." 
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message <Send size={16} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
