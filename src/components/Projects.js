import React from 'react';

// Import your project images here
import farmingImg from '../assets/Farming.png';
import medicineImg from '../assets/Medicine.png';
import stockImg from '../assets/Stock.png';

export default function Projects() {
  const projects = [
    {
      num: "01", 
      type: "FULL STACK + AI", 
      title: "AI-Based Smart Farming Assistant",
      desc: "A responsive application for sugarcane farmers with secure authentication, real-time data management, and an AI chatbot for crop recommendations.",
      tech: ["Python", "React.js", "Node.js", "Firebase"],
      image: farmingImg,
      github: "https://github.com/ashumane-crypto", // Replace with actual repo link
      live: "#" // Replace with actual live link
    },
    {
      num: "02", 
      type: "HEALTHCARE PLATFORM", 
      title: "Medicine Tracker",
      desc: "A medicine management system in development, designed around REST APIs, authentication, CRUD workflows, and relational data for patients.",
      tech: ["Python", "FastAPI", "React.js", "PostgreSQL"],
      image: medicineImg,
      github: "https://github.com/ashumane-crypto", 
      live: "#"
    },
    {
      num: "03", 
      type: "MACHINE LEARNING", 
      title: "Stock Price Prediction System",
      desc: "A machine learning application using preprocessing, feature engineering, exploratory analysis, and regression models evaluated with MAE and RMSE.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      image: stockImg,
      github: "https://github.com/ashumane-crypto", 
      live: "#"
    }
  ];

  return (
    <section id="projects">
      <style>{`
        .projects-header { margin-bottom: 3rem; }
        .projects-title { 
          font-family: 'Inter', sans-serif; 
          font-size: 48px; 
          font-weight: 700;
          margin-bottom: 1rem;
        }
        .projects-subtitle {
          font-size: 18px;
          opacity: 0.7;
          max-width: 700px;
          line-height: 1.6;
        }

        .projects-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
          gap: 2.5rem; 
          margin-top: 3rem;
        }
        
        .project-card {
          background: #0f0f13; /* Dark background matching your image */
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px; 
          overflow: hidden; /* Keeps the image inside the rounded corners */
          display: flex; 
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        body.light-mode .project-card {
          background: #ffffff;
          border-color: rgba(0,0,0,0.08);
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(123,97,255,0.4);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        /* Image Section */
        .project-image-container {
          width: 100%;
          height: 220px;
          overflow: hidden;
          position: relative;
          border-bottom: 1px solid rgba(128,128,128,0.1);
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05); /* Zoom effect on hover */
        }

        /* Content Section */
        .project-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-title { 
          font-family: 'Inter', sans-serif;
          font-size: 24px; 
          font-weight: 700;
          margin-bottom: 1rem; 
          line-height: 1.3;
          color: var(--text-color);
        }

        .project-desc { 
          font-size: 15px; 
          line-height: 1.6; 
          opacity: 0.7; 
          margin-bottom: 1.5rem; 
          flex-grow: 1;
          color: var(--text-color);
        }
        
        /* Tech Tags */
        .proj-tags { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 0.5rem; 
          margin-bottom: 2rem;
        }

        .proj-tag { 
          font-size: 13px; 
          padding: 6px 12px; 
          border-radius: 8px; 
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-color);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        body.light-mode .proj-tag {
          background: rgba(0,0,0,0.03);
          border-color: rgba(0,0,0,0.1);
        }

        /* Footer Links (Live & GitHub) */
        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(128,128,128,0.1);
          padding-top: 1.5rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--text-color);
          font-size: 14px;
          font-weight: 500;
          opacity: 0.8;
          transition: all 0.2s ease;
        }

        .project-link:hover {
          opacity: 1;
          color: #7b61ff;
        }

        .project-link svg {
          width: 18px;
          height: 18px;
        }

        @media (max-width: 768px) {
          .projects-title { font-size: 36px; }
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">
          Here are some of the projects I'm proud of. Each one was a unique challenge and a great learning experience.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card" key={idx}>
            
            {/* Project Image */}
            <div className="project-image-container">
              <img src={proj.image} alt={proj.title} className="project-image" />
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              
              <div className="proj-tags">
                {proj.tech.map((t, i) => (
                  <span className="proj-tag" key={i}>
                    {/* Adding a subtle dot before each tag for aesthetics */}
                    <span style={{color: '#7b61ff'}}>•</span> {t}
                  </span>
                ))}
              </div>
              
              <div className="project-footer">
                <a href={proj.live} target="_blank" rel="noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  Live Demo
                </a>
                
                <a href={proj.github} target="_blank" rel="noreferrer" className="project-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Source Code
                </a>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}