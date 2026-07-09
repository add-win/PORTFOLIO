import React from 'react';
import { Code2, Server, Database, Settings } from 'lucide-react';
import './Skills.css';

const Skills = ({ skills }) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="skill-cat-icon" />,
      items: skills.languages,
      description: "Languages used for core algorithms, scripting, and backend code."
    },
    {
      title: "Web Technologies",
      icon: <Server className="skill-cat-icon" />,
      items: skills.web,
      description: "Libraries and protocols utilized to build reactive frontends and web APIs."
    },
    {
      title: "Databases",
      icon: <Database className="skill-cat-icon" />,
      items: skills.databases,
      description: "Relational and non-relational database management systems."
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="skill-cat-icon" />,
      items: skills.tools,
      description: "Development environments, hosting, APIs, and configuration tools."
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <h2 className="section-title">My Skills</h2>
      <p className="skills-subtitle">
        A summary of programming languages, web standards, and developer tools in my tech stack.
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
