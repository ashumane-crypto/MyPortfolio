import React from 'react';

export default function Experience() {
  return (
    <section id="experience">
      <style>{`
        .exp-header { margin-bottom: 3rem;}
        .exp-card {
          background: rgba(128,128,128,0.03); border: 1px solid rgba(128,128,128,0.1);
          border-radius: 16px; padding: 3rem; display: flex; justify-content: space-between;
          align-items: center; gap: 2rem;
        }
        .exp-icon {
          width: 50px; height: 50px; border-radius: 12px; background: rgba(123,97,255,0.1);
          display: flex; justify-content: center; align-items: center; font-size: 24px;
        }
        .exp-content { flex: 1; }
        .exp-sub { font-size: 11px; color: #7b61ff; letter-spacing: 1px; margin-bottom: 0.5rem;}
        .exp-title { font-size: 22px; font-weight: 600; margin-bottom: 0.5rem;}
        .exp-desc { font-size: 14px; opacity: 0.7; line-height: 1.6;}
        
        .contact-btn {
          padding: 12px 24px; border-radius: 30px; border: 1px solid rgba(128,128,128,0.3);
          background: transparent; color: inherit; cursor: pointer; white-space: nowrap;
        }
        
        @media (max-width: 768px) {
          .exp-card { flex-direction: column; text-align: center; padding: 2rem;}
        }
      `}</style>

      <div className="exp-header">
        <div className="section-subtitle">EXPERIENCE</div>
        <h2 className="section-title">Ready for the <span className="gradient-text">next opportunity</span></h2>
      </div>

      <div className="exp-card">
        <div className="exp-icon">💼</div>
        <div className="exp-content">
          <div className="exp-sub">SEEKING PROFESSIONAL EXPERIENCE</div>
          <h3 className="exp-title">Open to internships and entry-level opportunities</h3>
          <p className="exp-desc">Professional experience details have not been supplied yet. This section is ready to be updated with verified roles, responsibilities, and outcomes.</p>
        </div>
        <button className="contact-btn">Contact Me ✉</button>
      </div>
    </section>
  );
}