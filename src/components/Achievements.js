import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      id: "01",
      title: "District-Level Winner",
      desc: "Secured 1st place at the PixelFusion District-Level Technical Event for innovative problem-solving and development.",
      // Trophy Icon
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
    },
    {
      id: "02",
      title: "Completed Internships",
      desc: "Successfully completed Web Development and Python with AI internships, gaining hands-on industry experience.",
      // Briefcase Icon
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
    },
    {
      id: "03",
      title: "Full Stack & AI Projects",
      desc: "Designed and developed multiple full-stack applications and AI models, solving real-world problems with scalable code.",
      // Code icon
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    }
  ];

  return (
    <section id="achievements">
       <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ach-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
          gap: 2rem; 
          margin-top: 3rem;
        }
        
        .ach-card {
          background: var(--card-bg); 
          border: 1px solid var(--border-color);
          border-radius: 16px; 
          padding: 3rem 2rem; 
          position: relative; 
          overflow: hidden;
          transition: all 0.3s ease;
          animation: slideUp 0.6s ease forwards;
          opacity: 0;
        }

        /* Staggered Animation */
        .ach-card:nth-child(1) { animation-delay: 0.1s; }
        .ach-card:nth-child(2) { animation-delay: 0.3s; }
        .ach-card:nth-child(3) { animation-delay: 0.5s; }

        /* Hover Effect */
        .ach-card:hover {
          transform: translateY(-8px);
          border-color: rgba(123,97,255,0.4);
          box-shadow: 0 15px 30px rgba(123,97,255,0.1);
        }
        
        /* Large Watermark Numbers in Background */
        .ach-watermark {
          position: absolute; top: 10px; right: 15px; font-family: 'Playfair Display', serif;
          font-size: 120px; font-weight: 600; color: rgba(123,97,255,0.05); line-height: 1; 
          pointer-events: none; transition: transform 0.3s ease;
        }

        .ach-card:hover .ach-watermark {
          transform: scale(1.1) translateX(-5px);
          color: rgba(123,97,255,0.1);
        }
        
        /* Icon Box */
        .ach-icon { 
          width: 60px; 
          height: 60px; 
          border-radius: 14px; 
          background: rgba(123,97,255,0.1); 
          color: #7b61ff; 
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.5rem; 
          position: relative; 
          z-index: 1;
          transition: all 0.3s ease;
        }

        .ach-card:hover .ach-icon {
          background: #7b61ff;
          color: white;
          transform: scale(1.1) rotate(-5deg);
        }

        .ach-title { 
          font-size: 22px; 
          font-weight: 600; 
          margin-bottom: 1rem; 
          position: relative; 
          z-index: 1;
          color: inherit;
        }

        .ach-desc { 
          font-size: 15px; 
          opacity: 0.75; 
          line-height: 1.7; 
          position: relative; 
          z-index: 1;
        }

        @media (max-width: 768px) {
          .ach-card { padding: 2rem; }
          .ach-title { font-size: 20px; }
        }
      `}</style>

      <div className="section-subtitle">RECOGNITION</div>
      <h2 className="section-title">
        Achievements that mark <br/>
        <span className="gradient-text" style={{fontSize:'50px'}}>progress</span>
      </h2>
      
      <div className="ach-grid">
        {achievements.map((item, index) => (
          <div className="ach-card" key={index}>
            <div className="ach-watermark">{item.id}</div>
            <div className="ach-icon">
              {item.icon}
            </div>
            <h4 className="ach-title">{item.title}</h4>
            <p className="ach-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}