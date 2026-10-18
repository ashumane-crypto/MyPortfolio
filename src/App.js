import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="app-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
          font-family: 'Inter', sans-serif;
          transition: background-color 0.3s, color 0.3s;
        }
        body.dark-mode { background-color: #0b0c10; color: #f8f9fa; }
        body.light-mode { background-color: #f4f6fb; color: #111; }

        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Global Section Styling */
        section {
          padding: 6rem 8%;
          border-bottom: 1px solid rgba(128,128,128,0.1);
        }
        
        .section-subtitle {
          font-size: 12px;
          letter-spacing: 2px;
          color: #7b61ff;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .section-subtitle::before {
          content: "";
          display: block;
          width: 20px;
          height: 2px;
          background: #7b61ff;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          margin-bottom: 2rem;
          font-weight: 600;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #a78bfa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-style: italic;
        }

        @media (max-width: 768px) {
          section { padding: 4rem 5%; }
          .section-title { font-size: 32px; }
        }
      `}</style>

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}