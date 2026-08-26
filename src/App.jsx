import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import { ArrowUp } from 'lucide-react';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main style={{ marginTop: '70px' }}>
        <Hero personal={portfolioData.personal} />
        <About education={portfolioData.education} />
        <Experience experience={portfolioData.experience} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Achievements achievements={portfolioData.achievements} certifications={portfolioData.certifications} />
        <Contact personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <footer style={{
        padding: '30px 20px',
        textAlign: 'center',
        borderTop: '1px solid var(--border-color)',
        marginTop: '30px',
        backgroundColor: 'var(--bg-secondary)',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <p style={{ fontWeight: 600, fontFamily: 'var(--font-heading)' }}>
            &lt;Addwin Alanolikkal /&gt;
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Addwin Alanolikkal. All rights reserved.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Full-Stack & AI Engineer | Thrissur, Kerala, India
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: 'var(--primary)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          display: showScrollTop ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-lg)',
          zIndex: 99,
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.backgroundColor = 'var(--primary)';
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}

export default App;
