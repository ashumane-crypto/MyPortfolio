import React from 'react';
import profilePic from '../assets/Profile.jpeg'; 
import resumePdf from '../assets/Ashwini_Mane_Resume.pdf';

export default function Home() {
  return (
    <section className="hero" id="home">
      <style>{`
        .hero {
          display: flex; justify-content: space-between; align-items: center;
          padding: 6rem 8%; min-height: 90vh; gap: 4rem;
        }
        .hero-content { flex: 1.2; max-width: 700px; }
        
        .badge {
          display: inline-flex; align-items: center; padding: 8px 16px; border-radius: 20px;
          font-size: 11px; border: 1px solid var(--border-color);
          margin-bottom: 2rem; letter-spacing: 1px; background: var(--card-bg);
        }
        .dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; margin-right: 8px;}
        
        .greeting { font-family: 'Playfair Display', serif; font-size: 24px; font-style: italic; margin-bottom: 0.5rem; opacity: 0.8;}
        .name { font-family: 'Playfair Display', serif; font-size: 68px; line-height: 1.1; margin-bottom: 1rem; }
        .role { font-size: 24px; font-weight: 500; margin-bottom: 1.5rem; }
        
        /* Adjusted description for better readability with the longer text */
        .desc { 
          font-size: 15px; 
          line-height: 1.8; 
          opacity: 0.8; 
          margin-bottom: 2.5rem; 
          text-align: justify;
        }
        
        /* BUTTONS */
        .btn-group { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn {
          padding: 12px 24px; border-radius: 30px; font-size: 14px; font-weight: 500;
          cursor: pointer; transition: all 0.2s; text-decoration: none; 
          display: flex; align-items: center; gap: 8px; border: 1px solid transparent;
        }
        
        .btn-primary { background: #7b61ff; color: #ffffff !important; }
        .btn-primary:hover { background: #6a4ff0; transform: translateY(-2px); }
        
        .btn-outline { background: transparent; border-color: var(--border-color); color: inherit; }
        .btn-outline:hover { background: var(--card-bg); border-color: #7b61ff; transform: translateY(-2px); }

        /* IMAGE GRAPHIC */
        .hero-graphic { flex: 0.8; display: flex; justify-content: center; align-items: center;}
        
        .image-wrapper {
          position: relative;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          /* Changed padding to allow the image to sit nicely inside */
          padding: 12px; 
          background: linear-gradient(135deg, rgba(123,97,255,0.2), rgba(59,130,246,0.2));
          border: 1px dashed var(--border-color);
          display: flex; justify-content: center; align-items: center;
          box-shadow: 0 0 40px rgba(123,97,255,0.15); /* Adds a nice glow */
        }

        .image-wrapper::before {
          content: '';
          position: absolute;
          top: -15px; left: -15px; right: -15px; bottom: -15px;
          border-radius: 50%;
          border: 1px dashed rgba(123,97,255,0.3);
          animation: rotate 25s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .profile-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          /* THIS IS THE FIX: object-fit contain ensures the whole outfit is seen */
          object-fit: contain; 
          /* Aligns the image to show the face nicely */
          object-position: center bottom;
          background-color: var(--card-bg); /* Fills empty space behind image if needed */
          border: 4px solid var(--bg-dark); 
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        body.light-mode .profile-img { border-color: #f4f6fb; }

        @media (max-width: 1024px) {
          .image-wrapper { width: 320px; height: 320px; }
          .name { font-size: 56px; }
        }

        @media (max-width: 900px) {
          .hero { flex-direction: column-reverse; text-align: center; padding-top: 4rem; gap: 3rem;}
          .name { font-size: 48px; }
          .desc { text-align: center; } /* Centers text on mobile */
          .btn-group { justify-content: center; }
          .image-wrapper { width: 280px; height: 280px; }
        }
      `}</style>

      <div className="hero-content">
        <div className="badge"><span className="dot"></span> B.TECH CSE · GRADUATING 2027</div>
        <p className="greeting">Hello, I'm</p>
        <h1 className="name">Ashwini <span className="gradient-text">Mane</span></h1>
        <h2 className="role">Python Full Stack Developer</h2>
        
        {/* UPDATED DESCRIPTION */}
        <p className="desc">
          Aspiring Python Full Stack Developer with hands-on experience in building scalable web applications using Python, FastAPI, React.js, SQL, PostgreSQL, and Firebase. Skilled in REST API development, authentication, database design, CRUD operations, and responsive web development. Passionate about solving real-world problems through clean, maintainable code and continuously learning modern software engineering practices.
        </p>
        
        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">View Projects ↓</a>
          
          <a href={resumePdf} download="Ashwini_Mane_Resume.pdf" className="btn btn-outline">
            Download Resume ⬇
          </a>
          
          <a href="https://github.com/ashumane-crypto" target="_blank" rel="noreferrer" className="btn btn-outline">
            GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/ashwini-mane05/" target="_blank" rel="noreferrer" className="btn btn-outline">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="image-wrapper">
          <img src={profilePic} alt="Ashwini Mane" className="profile-img" />
        </div>
      </div>
    </section>
  );
}