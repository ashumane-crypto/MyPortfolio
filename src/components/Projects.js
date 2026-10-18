import React from 'react';

export default function Projects() {
  const projects = [
    {
      num: "01", type: "FULL STACK + AI", title: "AI-Based Smart Farming Assistant",
      desc: "A responsive application for sugarcane farmers with secure authentication, real-time data management, and an AI chatbot for crop recommendations.",
      tech: ["Python", "React.js", "Node.js", "Firebase"]
    },
    {
      num: "02", type: "HEALTHCARE PLATFORM", title: "Medicine Tracker",
      desc: "A medicine management system in development, designed around REST APIs, authentication, CRUD workflows, and relational data for patients.",
      tech: ["Python", "FastAPI", "React.js", "PostgreSQL"]
    },
    {
      num: "03", type: "MACHINE LEARNING", title: "Stock Price Prediction System",
      desc: "A machine learning application using preprocessing, feature engineering, exploratory analysis, and regression models evaluated with MAE and RMSE.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"]
    }
  ];

  return (
    <section id="projects">
      <style>{`
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;}
        
        .project-card {
          background: rgba(128,128,128,0.03); border: 1px solid rgba(128,128,128,0.1);
          border-radius: 12px; padding: 2.5rem; display: flex; flex-direction: column;
        }
        
        .proj-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;}
        .proj-num { font-family: 'Playfair Display', serif; font-size: 32px; color: #7b61ff; font-style: italic;}
        .proj-type { font-size: 10px; letter-spacing: 1px; opacity: 0.6; }
        
        .project-card h3 { font-family: 'Playfair Display', serif; font-size: 24px; margin-bottom: 1rem; line-height: 1.3;}
        .project-card p { font-size: 13px; line-height: 1.6; opacity: 0.7; margin-bottom: 2rem; flex-grow: 1;}
        
        .proj-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 2rem;}
        .proj-tag { font-size: 11px; padding: 4px 10px; border-radius: 12px; border: 1px solid rgba(128,128,128,0.2); }
        
        .proj-links { border-top: 1px solid rgba(128,128,128,0.1); padding-top: 1.5rem; display: flex; flex-direction: column; gap: 1rem;}
        .proj-links a { color: inherit; text-decoration: none; font-size: 13px; display: flex; justify-content: space-between; opacity: 0.7; transition: opacity 0.2s;}
        .proj-links a:hover { opacity: 1; color: #7b61ff;}
      `}</style>

      <div className="section-subtitle">SELECTED WORK</div>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <div className="proj-top">
              <span className="proj-num">{proj.num}</span>
              <span className="proj-type">{proj.type}</span>
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <div className="proj-tags">
              {proj.tech.map((t, i) => <span className="proj-tag" key={i}>{t}</span>)}
            </div>
            <div className="proj-links">
              <a href="#github">GitHub profile ↗</a>
              <a href="#demo">Live demo placeholder ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}