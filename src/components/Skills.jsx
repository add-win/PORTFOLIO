import React from 'react';
import { Code2, Server, Database, Cpu, Wrench, Cloud } from 'lucide-react';
import './Skills.css';

const Skills = ({ skills }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="skill-cat-icon" />,
      items: skills.languages || [],
      description: "Core programming languages for web apps, algorithms, and AI models."
    },
    {
      title: "Web Development",
      icon: <Server className="skill-cat-icon" />,
      items: skills.web || [],
      description: "Frontend and backend frameworks for reactive interfaces and RESTful APIs."
    },
    {
      title: "Databases & Backend",
      icon: <Database className="skill-cat-icon" />,
      items: skills.databases || [],
      description: "Relational and document database management systems."
    },
    {
      title: "Machine Learning & AI",
      icon: <Cpu className="skill-cat-icon" />,
      items: skills.ml_ai || [],
      description: "Deep learning architectures, neural networks, and NLP processing."
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench className="skill-cat-icon" />,
      items: skills.devops_tools || [],
      description: "Version control, IDEs, API testing, and design tools."
    },
    {
      title: "Cloud & Platforms",
      icon: <Cloud className="skill-cat-icon" />,
      items: skills.cloud_platforms || [],
      description: "Cloud inference engines, real-time messaging, and PWA services."
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <h2 className="section-title">Technical Skills</h2>
      <p className="skills-subtitle">
        Comprehensive technology stack spanning full-stack development, artificial intelligence, and software tools.
      </p>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category-card glass-card">
            <div className="skill-category-header">
              {cat.icon}
              <h3 className="skill-category-title">{cat.title}</h3>
            </div>
            <p className="skill-category-desc">{cat.description}</p>
            <div className="skill-items-container">
              {cat.items.map((skill, sIdx) => (
                <span key={sIdx} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
