import React from 'react';

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: '8rem' }}>
      <style>{`
        .contact-container {
          text-align: center; max-width: 800px; margin: 0 auto;
          background: radial-gradient(circle at center, rgba(123,97,255,0.1) 0%, rgba(128,128,128,0.02) 100%);
          border: 1px solid rgba(128,128,128,0.1); border-radius: 24px; padding: 5rem 2rem;
        }
        
        .contact-subtitle {
          font-size: 12px; color: #7b61ff; letter-spacing: 2px; text-transform: uppercase;
          margin-bottom: 2rem; display: inline-block; border-bottom: 1px solid rgba(123,97,255,0.3); padding-bottom: 4px;
        }
        
        .contact-title { 
          font-family: 'Playfair Display', serif; 
          font-size: 48px; 
          line-height: 1.2; 
          margin-bottom: 1.5rem;
        }
        
        .contact-desc { 
          font-size: 15px; 
          opacity: 0.7; 
          line-height: 1.6; 
          margin-bottom: 3rem; 
          max-width: 600px; 
          margin-inline: auto;
        }
        
        .contact-buttons { 
          display: flex; 
          justify-content: center; 
          gap: 1rem; 
          margin-bottom: 2rem; 
          flex-wrap: wrap;
        }
        
        .btn-email { 
          background: #7b61ff; 
          color: white; 
          padding: 12px 28px; 
          border-radius: 30px; 
          text-decoration: none; 
          font-size: 14px; 
          display: flex; 
          align-items: center; 
          gap: 8px;
          transition: background 0.2s;
        }
        .btn-email:hover { background: #6a4ff0; }
        
        .btn-linkedin { 
          background: transparent; 
          border: 1px solid rgba(128,128,128,0.3); 
          color: inherit; 
          padding: 12px 28px; 
          border-radius: 30px; 
          text-decoration: none; 
          font-size: 14px; 
          display: flex; 
          align-items: center; 
          gap: 8px;
          transition: background 0.2s;
        }
        .btn-linkedin:hover { background: rgba(128,128,128,0.1); }
        
        .email-text { font-size: 13px; opacity: 0.5; }

        @media (max-width: 768px) { 
          .contact-title { font-size: 32px; } 
          .contact-container { padding: 3rem 1.5rem; } 
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-subtitle">LET'S CONNECT</div>
        
        <h2 className="contact-title">
          Have an opportunity or a project<br />
          <span className="gradient-text">worth building?</span>
        </h2>
        
        <p className="contact-desc">
          I'm open to internship and entry-level opportunities where I can contribute, learn, and grow as a Python full-stack developer.
        </p>
        
        <div className="contact-buttons">
          {/* Replace the '#' with your actual mailto link */}
          <a href="mailto:ashumane2005@gmail.com" className="btn-email">
            ✉ Email Me
          </a>
          {/* Replace the '#' with your actual LinkedIn URL */}
          <a href="#" target="_blank" rel="noreferrer" className="btn-linkedin">
            🔗 LinkedIn
          </a>
        </div>
        
        <p className="email-text">ashumane2005@gmail.com</p>
      </div>
    </section>
  );
}