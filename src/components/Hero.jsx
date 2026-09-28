import React from 'react';
import { Mail, Code, ArrowRight, Download, Sparkles, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Hero.css';

const Hero = ({ personal }) => {
  return (
    <section id="home" className="hero-section section">
      <div className="hero-grid">
        {/* Left Column: Bio & Call-to-actions */}
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>Open for Internships & Projects</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">{personal.name}</span>
          </h1>

          <h2 className="hero-subtitle">{personal.title}</h2>

          <p className="hero-desc">{personal.summary}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a
              href="/Addwin_Alanolikkal_resume.pdf"
              download="Addwin_Alanolikkal_resume_oct.pdf"
              className="btn btn-secondary"
            >
              Resume <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <Mail size={20} />
            </a>
            <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <Code size={20} />
            </a>
          </div>
        </div>

        {/* Right Column: Prominent Circular Photo Frame */}
        <div className="hero-visual-column">
          <div className="profile-frame-wrapper animate-float">
            <div className="glowing-gradient-ring"></div>

            <div className="circular-photo-frame">
              <img
                src="/profile.jpeg"
                alt="Addwin Alanolikkal Profile Photo"
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="profile-photo-fallback" style={{ display: 'none' }}>
                <span>AA</span>
              </div>
            </div>

            {/* Floating Badges around the frame */}
            <div className="floating-badge badge-top-right glass-card">
              <Sparkles size={16} className="badge-icon glow-gold" />
              <span>Full-Stack & AI</span>
            </div>

            <div className="floating-badge badge-bottom-left glass-card">
              <CheckCircle2 size={16} className="badge-icon glow-green" />
              <span>B.Tech CSE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
