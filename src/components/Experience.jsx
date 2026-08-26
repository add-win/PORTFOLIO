import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle } from 'lucide-react';
import './Experience.css';

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="experience-section section">
      <h2 className="section-title">Work & Internship Experience</h2>
      <p className="experience-subtitle">
        Hands-on experience in full-stack development, AI applications, web engineering, and data analytics.
      </p>

      <div className="experience-timeline">
        {experience.map((exp, idx) => (
          <div key={idx} className="experience-card glass-card">
            <div className="exp-card-header">
              <div className="exp-icon-wrapper">
                <Briefcase size={22} className="exp-icon" />
              </div>
              <div className="exp-header-text">
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">
                  <Building2 size={16} /> {exp.company}
                </h4>
              </div>
              <div className="exp-duration-badge">
                <Calendar size={14} /> {exp.duration}
              </div>
            </div>

            <div className="exp-card-body">
              <ul className="exp-points">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircle size={16} className="point-bullet-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
