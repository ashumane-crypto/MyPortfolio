import React from 'react';

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: '8rem', paddingTop: '6rem' }}>
      <style>{`
        /* Animations */
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(123, 97, 255, 0.2); }
          70% { box-shadow: 0 0 0 30px rgba(123, 97, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(123, 97, 255, 0); }
        }

        .contact-container {
          text-align: center; 
          max-width: 850px; 
          margin: 0 auto;
          background: var(--card-bg);
          border: 1px solid var(--border-color); 
          border-radius: 24px; 
          padding: 5rem 3rem;
          position: relative;
          overflow: hidden;
          animation: slideUpFade 0.8s ease-out forwards;
        }

        /* The animated glowing background behind the box */
        .contact-container::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(123,97,255,0.15) 0%, rgba(0,0,0,0) 70%);
          z-index: 0;
          pointer-events: none;
          animation: pulseGlow 4s infinite;
        }
        
        .contact-content {
          position: relative;
          z-index: 1; /* Keeps text above the glowing background */
        }

        .contact-subtitle {
          font-size: 12px; 
          color: #7b61ff; 
          letter-spacing: 2px; 
          text-transform: uppercase;
          margin-bottom: 2rem; 
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .contact-subtitle::before, .contact-subtitle::after {
          content: ''; width: 20px; height: 1px; background: #7b61ff; opacity: 0.5;
        }
        
        .contact-title { 
          font-family: 'Playfair Display', serif; 
          font-size: 48px; 
          line-height: 1.2; 
          margin-bottom: 1.5rem;
        }
        
        .contact-desc { 
          font-size: 16px; 
          opacity: 0.8; 
          line-height: 1.7; 
          margin-bottom: 3rem; 
          max-width: 650px; 
          margin-inline: auto;
        }
        
        .contact-buttons { 
          display: flex; 
          justify-content: center; 
          gap: 1.5rem; 
          margin-bottom: 2.5rem; 
          flex-wrap: wrap;
        }
        
        /* Shared Button Styles */
        .btn {
          padding: 14px 32px; 
          border-radius: 30px; 
          font-size: 15px; 
          font-weight: 500;
          text-decoration: none; 
          display: inline-flex; 
          align-items: center; 
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        /* Button Icons */
        .btn svg { transition: transform 0.3s ease; }
        .btn:hover svg { transform: scale(1.15) rotate(5deg); }

        /* Email Button */
        .btn-email { 
          background: #7b61ff; 
          color: #ffffff; 
          box-shadow: 0 4px 15px rgba(123,97,255,0.3);
        }
        .btn-email:hover { 
          background: #6a4ff0; 
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(123,97,255,0.5);
        }
        
        /* LinkedIn Button */
        .btn-linkedin { 
          background: transparent; 
          border-color: var(--border-color); 
          color: inherit; 
        }
        .btn-linkedin:hover { 
          background: var(--card-bg);
          border-color: #7b61ff;
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .email-text { 
          font-size: 14px; 
          opacity: 0.6; 
          letter-spacing: 1px;
        }

        @media (max-width: 768px) { 
          .contact-title { font-size: 32px; } 
          .contact-container { padding: 3rem 1.5rem; } 
          .contact-desc { font-size: 14px; }
          .btn { width: 100%; } /* Full width buttons on mobile */
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-subtitle">LET'S CONNECT</div>
          
          <h2 className="contact-title">
            Have an opportunity or an idea<br />
            <span className="gradient-text">worth building?</span>
          </h2>
          
          <p className="contact-desc">
            Let's connect and build something meaningful together! I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="contact-buttons">
            {/* Email Link */}
            <a href="mailto:ashumane2005@gmail.com" className="btn btn-email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              Email Me
            </a>
            
            {/* LinkedIn Link */}
            <a href="https://www.linkedin.com/in/ashwini-mane05/" target="_blank" rel="noreferrer" className="btn btn-linkedin">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div>
          
          <p className="email-text">ashumane2005@gmail.com</p>
        </div>
      </div>
    </section>
  );
}