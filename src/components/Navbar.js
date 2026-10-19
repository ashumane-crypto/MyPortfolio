import React, { useState } from 'react';

export default function Navbar({ isDarkMode, toggleTheme }) {
  // State to control the mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 8%;
          position: sticky;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          /* Adapts to light/dark mode */
          background-color: rgba(11, 12, 16, 0.85); 
        }
        body.light-mode .navbar { background-color: rgba(244, 246, 251, 0.85); }

        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit; z-index: 1001;}
        .logo-circle {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid #7b61ff; display: flex; justify-content: center;
          align-items: center; color: #7b61ff; font-weight: 600; font-size: 14px;
          background: rgba(123,97,255,0.1);
        }
        .logo-text { display: flex; flex-direction: column; font-weight: 600; font-size: 16px;}
        .logo-text span { font-size: 10px; letter-spacing: 2px; opacity: 0.6; margin-top: 2px;}

        .nav-links { display: flex; gap: 2rem; list-style: none; align-items: center; }
        .nav-links li a {
          text-decoration: none; color: inherit; font-size: 14px;
          font-weight: 500; opacity: 0.7; transition: all 0.2s ease;
        }
        .nav-links li a:hover { opacity: 1; color: #7b61ff; }

        /* Right side controls (Theme + Hamburger) */
        .nav-controls {
          display: flex;
          align-items: center;
          gap: 1rem;
          z-index: 1001;
        }

        .theme-btn {
          background: var(--card-bg); border: 1px solid var(--border-color);
          color: inherit; width: 38px; height: 38px; border-radius: 50%;
          cursor: pointer; display: flex; justify-content: center; align-items: center;
          font-size: 16px; transition: background 0.2s;
        }
        .theme-btn:hover { background: rgba(123,97,255,0.1); border-color: #7b61ff;}

        /* Hamburger Button (Hidden on Desktop) */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 1001;
        }
        .hamburger span {
          width: 100%;
          height: 2px;
          background-color: var(--text-color);
          background-color: currentColor;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        /* Hamburger Animation to 'X' */
        .hamburger.active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Menu Container */
        .mobile-menu {
          display: none;
        }

        /* Media Query for Mobile Devices */
        @media (max-width: 900px) { 
          .nav-links { display: none; } 
          .hamburger { display: flex; }

          .mobile-menu {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #0b0c10;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            transform: translateY(-100%);
            transition: transform 0.4s ease-in-out;
            z-index: 1000;
          }
          body.light-mode .mobile-menu { background-color: #f4f6fb; }

          .mobile-menu.open {
            transform: translateY(0);
          }

          .mobile-menu a {
            text-decoration: none;
            color: inherit;
            font-size: 24px;
            font-weight: 500;
            opacity: 0.8;
            transition: opacity 0.2s, color 0.2s;
          }
          .mobile-menu a:hover {
            opacity: 1;
            color: #7b61ff;
          }
        }
      `}</style>
      
      <a href="#home" className="nav-logo" onClick={closeMobileMenu}>
        <div className="logo-circle">AM</div>
        <div className="logo-text">Ashwini Mane<span>PORTFOLIO</span></div>
      </a>
      
      {/* Desktop Links */}
      <ul className="nav-links">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#achievements">Achievements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-controls">
        <button className="theme-btn" onClick={toggleTheme} title="Toggle Theme">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        
        {/* Hamburger Icon */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#skills" onClick={closeMobileMenu}>Skills</a>
        <a href="#projects" onClick={closeMobileMenu}>Projects</a>
        <a href="#experience" onClick={closeMobileMenu}>Experience</a>
        <a href="#certifications" onClick={closeMobileMenu}>Certifications</a>
        <a href="#achievements" onClick={closeMobileMenu}>Achievements</a>
        <a href="#contact" onClick={closeMobileMenu}>Contact</a>
      </div>
      
    </nav>
  );
}