import React from 'react';
import { Mail, Code, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Hero.css';

const Hero = ({ personal }) => {
  return (
    <section id="home" className="hero-section section">
      <div className="hero-grid">
        <div className="hero-content animate-fade-in">
          <span className="hero-tagline">Open to Internships & Roles</span>
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
              href="/Addwin_Alanolikkal_resume_June2026.pdf" 
              download="Addwin_Alanolikkal_resume.pdf"
              className="btn btn-secondary"
            >
              Resume <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <Mail size={22} />
            </a>
            <a href={personal.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <Code size={22} />
            </a>
          </div>
        </div>

        <div className="hero-visual animate-float">
          <div className="code-card glass-card">
            <div className="code-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
              <span className="code-title">portfolio.py</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
<span className="keyword">class</span> <span className="class-name">Developer</span>:
    <span className="keyword">def</span> <span className="method">__init__</span>(<span className="variable">self</span>):
        <span className="variable">self</span>.name = <span className="string">"Addwin Alanolikkal"</span>
        <span className="variable">self</span>.role = <span className="string">"Full Stack / AI & ML"</span>
        <span className="variable">self</span>.college = <span className="string">"CCE, Irinjalakuda"</span>
        <span className="variable">self</span>.skills = [
            <span className="string">"React"</span>, <span className="string">"Node.js"</span>, 
            <span className="string">"Python"</span>, <span className="string">"Firebase"</span>
        ]

    <span className="keyword">def</span> <span className="method">get_status</span>(<span className="variable">self</span>):
        <span className="keyword">return</span> <span className="string">"Always learning, building APIs"</span>

<span className="variable">addwin</span> = Developer()
<span className="builtin">print</span>(addwin.get_status())
                </code>
              </pre>
            </div>
            <div className="code-footer">
              <span className="comment"># Output: Always learning, building APIs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
