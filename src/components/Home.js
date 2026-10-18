import React from 'react';

export default function Home() {
  return (
    <section className="hero" id="home">
      <style>{`
        .hero {
          display: flex; justify-content: space-between; align-items: center;
          padding: 5rem 8%; min-height: 90vh; gap: 2rem;
        }
        .hero-content { flex: 1; max-width: 650px; }
        
        .badge {
          display: inline-block; padding: 6px 14px; border-radius: 20px;
          font-size: 11px; border: 1px solid rgba(128,128,128,0.3);
          margin-bottom: 2rem; letter-spacing: 1px;
        }
        
        .greeting { font-family: 'Playfair Display', serif; font-size: 24px; font-style: italic; margin-bottom: 0.5rem; opacity: 0.8;}
        .name { font-family: 'Playfair Display', serif; font-size: 72px; line-height: 1.1; margin-bottom: 1rem; }
        .role { font-size: 24px; font-weight: 500; margin-bottom: 1.5rem; }
        .desc { font-size: 15px; line-height: 1.7; opacity: 0.7; margin-bottom: 2.5rem; }
        
        .btn-group { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn {
          padding: 12px 24px; border-radius: 30px; font-size: 14px; font-weight: 500;
          cursor: pointer; border: 1px solid transparent; transition: all 0.2s;
          text-decoration: none; color: inherit; display: flex; align-items: center; gap: 8px;
        }
        .btn-primary { background: #7b61ff; color: white; }
        .btn-primary:hover { background: #6a4ff0; }
        .btn-outline { border-color: rgba(128,128,128,0.4); }
        .btn-outline:hover { background: rgba(128,128,128,0.1); }

        .hero-graphic { flex: 1; display: flex; justify-content: center; }
        .circle {
          width: 400px; height: 400px; border-radius: 50%;
          border: 1px dashed rgba(128,128,128,0.4); display: flex;
          justify-content: center; align-items: center; position: relative;
        }
        .inner-circle {
          width: 300px; height: 300px; border-radius: 50%;
          border: 1px solid rgba(128,128,128,0.2); display: flex;
          flex-direction: column; justify-content: center; align-items: center;
          background: rgba(128,128,128,0.05);
        }
        .open-badge {
          position: absolute; bottom: -10px; font-size: 11px;
          display: flex; align-items: center; gap: 8px;
        }
        .dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; }

        @media (max-width: 900px) {
          .hero { flex-direction: column-reverse; text-align: center; padding-top: 3rem;}
          .name { font-size: 48px; }
          .btn-group { justify-content: center; }
          .circle { width: 280px; height: 280px; }
          .inner-circle { width: 200px; height: 200px; }
        }
      `}</style>

      <div className="hero-content">
        <div className="badge"><span className="dot" style={{display:'inline-block', marginRight:'8px'}}></span> B.TECH CSE · GRADUATING 2027</div>
        <p className="greeting">Hello, I'm</p>
        <h1 className="name">Ashwini <span className="gradient-text">Mane</span></h1>
        <h2 className="role">Python Full Stack Developer</h2>
        <p className="desc">
          I build scalable, responsive web applications using Python, FastAPI, React.js, and PostgreSQL, with a focus on clean architecture and practical solutions to real-world problems.
        </p>
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">View Projects ↓</a>
          <button className="btn btn-outline">Download Resume ⬇</button>
          <button className="btn btn-outline">GitHub</button>
          <button className="btn btn-outline">LinkedIn</button>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="circle">
          <div className="inner-circle">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7b61ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{marginBottom:'10px'}}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
             <p style={{fontSize:'12px', opacity:0.6}}>Profile photo</p>
          </div>
          <div className="open-badge">
            <span className="dot"></span> Open to internships and entry-level opportunities
          </div>
        </div>
      </div>
    </section>
  );
}