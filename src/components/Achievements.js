import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements">
       <style>{`
        .ach-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 3rem;}
        
        .ach-card {
          background: rgba(128,128,128,0.03); border: 1px solid rgba(128,128,128,0.1);
          border-radius: 16px; padding: 3rem 2rem; position: relative; overflow: hidden;
        }
        
        /* Watermark Numbers */
        .ach-watermark {
          position: absolute; top: 10px; right: 10px; font-family: 'Playfair Display', serif;
          font-size: 100px; font-weight: 600; color: rgba(123,97,255,0.05); line-height: 1; pointer-events: none;
        }
        
        .ach-icon { color: #7b61ff; font-size: 24px; margin-bottom: 1.5rem; position: relative; z-index: 1;}
        .ach-title { font-size: 20px; font-weight: 600; margin-bottom: 1rem; position: relative; z-index: 1;}
        .ach-desc { font-size: 14px; opacity: 0.7; line-height: 1.6; position: relative; z-index: 1;}
      `}</style>

      <div className="section-subtitle">RECOGNITION</div>
      <h2 className="section-title">Achievements that mark <br/><span className="gradient-text" style={{fontSize:'50px'}}>progress</span></h2>
      
      <div className="ach-grid">
        <div className="ach-card">
          <div className="ach-watermark">01</div>
          <div className="ach-icon">🏆</div>
          <h4 className="ach-title">District-Level Winner</h4>
          <p className="ach-desc">Winner at the PixelFusion District-Level Technical Event.</p>
        </div>
        
        <div className="ach-card">
          <div className="ach-watermark">02</div>
          <div className="ach-icon">🏆</div>
          <h4 className="ach-title">Python Assessment</h4>
          <p className="ach-desc">Qualified the Javik Labs Python assessment with a score of 43/50.</p>
        </div>
        
        <div className="ach-card">
          <div className="ach-watermark">03</div>
          <div className="ach-icon">🏆</div>
          <h4 className="ach-title">Academic Project Portfolio</h4>
          <p className="ach-desc">Built multiple academic full-stack and AI projects.</p>
        </div>
      </div>
    </section>
  );
}