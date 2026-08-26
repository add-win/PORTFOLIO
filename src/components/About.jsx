import React from 'react';
import { GraduationCap, MapPin, Award, Calendar, BookOpen, User } from 'lucide-react';
import './About.css';

const About = ({ education }) => {
  return (
    <section id="about" className="about-section section">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-layout">
        <div className="about-text-container">
          <p className="about-intro">
            I am a passionate <strong>Full-Stack & AI/ML Developer</strong> pursuing my B.Tech in Computer Science & Engineering at Christ College of Engineering, Irinjalakuda.
          </p>
          <p className="about-details">
            Proficient in Python, React, Node.js, FastAPI, MySQL, and MongoDB with a solid foundation in machine learning architectures (DenseNet, ResNet) and modern web technologies. Hackathon winner with proven teamwork, research presentation, and real-world project development experience.
          </p>

          <div className="about-stats-grid">
            <div className="stat-card glass-card">
              <BookOpen className="stat-icon" />
              <div className="stat-info">
                <span className="stat-label">CGPA</span>
                <span className="stat-value">8.82 / 10</span>
              </div>
            </div>
            
            <div className="stat-card glass-card">
              <Award className="stat-icon" />
              <div className="stat-info">
                <span className="stat-label">Hackathon</span>
                <span className="stat-value">AstraX 1st Prize</span>
              </div>
            </div>

            <div className="stat-card glass-card">
              <MapPin className="stat-icon" />
              <div className="stat-info">
                <span className="stat-label">Location</span>
                <span className="stat-value">Thrissur, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="education-timeline-container">
          <h3 className="timeline-title">Education</h3>
          <div className="timeline">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot">
                  <GraduationCap size={16} />
                </div>
                <div className="timeline-content glass-card">
                  <span className="edu-duration">
                    <Calendar size={14} /> {edu.duration}
                  </span>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <h5 className="edu-institution">{edu.institution}</h5>
                  <p className="edu-details">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
