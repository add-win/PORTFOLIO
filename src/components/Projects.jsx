import React, { useState } from 'react';
import { ExternalLink, Calendar, Code } from 'lucide-react';
import { Github } from './BrandIcons';
import './Projects.css';

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('All');

  // Filter types based on tags
  const filterCategories = ['All', 'React', 'Node.js', 'Python', 'Firebase', 'MySQL'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.some(t => t.toLowerCase() === filter.toLowerCase() || t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="projects" className="projects-section section">
      <h2 className="section-title">My Projects</h2>
      <p className="projects-subtitle">
        A curated showcase of development projects ranging from Web PWAs and full-stack platforms to AI chat assistants.
      </p>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="project-card glass-card">
            <div className="project-card-header">
              <span className="project-duration">
                <Calendar size={14} /> {project.duration}
              </span>
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
            </div>

            <div className="project-card-body">
              <p className="project-desc">{project.description}</p>
              
              {project.bullets && (
                <ul className="project-bullets">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="project-card-footer">
              <div className="project-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tag-badge">
                    {tag}
                  </span>
                ))}
              </div>

              {project.github && (
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link-btn"
                    title="View Source on GitHub"
                  >
                    <Github size={18} />
                    <span>Source Code</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
