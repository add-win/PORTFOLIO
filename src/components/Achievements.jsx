import React from 'react';
import { Trophy, Award, Landmark, Flame, UserCheck, CheckCircle2, AwardIcon } from 'lucide-react';
import './Achievements.css';

const Achievements = ({ achievements, certifications }) => {
  const getAchievementIcon = (title) => {
    const t = title.toLowerCase();
    if (t.includes('hackathon') || t.includes('1st') || t.includes('prize')) return <Trophy className="ach-icon gold" />;
    if (t.includes('chess') || t.includes('champion')) return <Flame className="ach-icon orange" />;
    if (t.includes('election') || t.includes('app')) return <Landmark className="ach-icon blue" />;
    if (t.includes('volunteer') || t.includes('fifa')) return <UserCheck className="ach-icon green" />;
    return <Award className="ach-icon purple" />;
  };

  return (
    <section id="achievements" className="achievements-section section">
      <h2 className="section-title">Achievements & Credentials</h2>
      
      <div className="achievements-layout">
        {/* Achievements Column */}
        <div className="achievements-column">
          <h3 className="column-title">Engagements & Achievements</h3>
          <div className="achievements-list">
            {achievements.map((ach, idx) => (
              <div key={idx} className="achievement-card glass-card">
                <div className="ach-icon-wrapper">
                  {getAchievementIcon(ach.title)}
                </div>
                <div className="ach-details">
                  <h4 className="ach-title">{ach.title}</h4>
                  <p className="ach-desc">{ach.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="certifications-column">
          <h3 className="column-title">Certifications</h3>
          <div className="certifications-list">
            {certifications.map((cert, idx) => (
              <div key={idx} className="certification-card glass-card">
                <div className="cert-status-wrapper">
                  <CheckCircle2 className="cert-status-icon" />
                </div>
                <div className="cert-details">
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
