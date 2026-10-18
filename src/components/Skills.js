import React from 'react';

export default function Skills() {
  const skillSets = [
    { title: "Programming", icon: "</>", skills: ["Python", "JavaScript", "SQL"] },
    { title: "Frontend", icon: "⚛", skills: ["React.js", "HTML5", "CSS3"] },
    { title: "Backend", icon: "⚙", skills: ["FastAPI", "Node.js", "REST APIs"] },
    { title: "Database & Tools", icon: "🗄", skills: ["PostgreSQL", "MySQL", "Firebase", "Git", "GitHub", "VS Code"] }
  ];

  return (
    <section id="skills">
      <style>{`
        .skills-header { margin-bottom: 3rem; }
        .skills-title { font-family: 'Playfair Display', serif; font-size: 48px; }
        
        .skills-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;
        }
        .skill-card {
          background: rgba(128,128,128,0.05); border: 1px solid rgba(128,128,128,0.1);
          border-radius: 12px; padding: 2rem; transition: transform 0.2s;
        }
        .skill-card:hover { transform: translateY(-5px); border-color: #7b61ff; }
        
        .icon-box {
          width: 40px; height: 40px; border-radius: 8px; background: rgba(123,97,255,0.1);
          display: flex; justify-content: center; align-items: center;
          color: #7b61ff; font-size: 18px; margin-bottom: 1.5rem;
        }
        
        .skill-card h3 { font-size: 18px; margin-bottom: 1.5rem; font-weight: 500;}
        .tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag {
          font-size: 11px; padding: 5px 12px; border-radius: 15px;
          background: rgba(128,128,128,0.1); border: 1px solid rgba(128,128,128,0.05);
        }
      `}</style>

      <div className="skills-header">
        <div className="section-subtitle">TECHNICAL TOOLKIT</div>
        <h2 className="skills-title">Skills built for <span className="gradient-text">full-stack work</span></h2>
        <p style={{opacity:0.6, marginTop:'1rem'}}>A practical toolkit for building responsive interfaces, reliable APIs, and data-driven applications.</p>
      </div>

      <div className="skills-grid">
        {skillSets.map((set, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-box">{set.icon}</div>
            <h3>{set.title}</h3>
            <div className="tags">
              {set.skills.map((skill, i) => (
                <span className="tag" key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}