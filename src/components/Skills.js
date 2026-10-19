import React from 'react';

export default function Skills() {
  const skillSets = [
    { 
      title: "Programming", 
      subtitle: "Your main programming languages",
      headerIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
      skills: [
        { 
          name: "Python", 
          icon: <svg viewBox="0 0 24 24" fill="#3776AB"><path d="M12 2C9.79 2 8 3.79 8 6V8H6C3.79 8 2 9.79 2 12V18C2 20.21 3.79 22 6 22H12C14.21 22 16 20.21 16 18V16H18C20.21 16 22 14.21 22 12V6C22 3.79 20.21 2 18 2H12ZM12 4C12.55 4 13 4.45 13 5C13 5.55 12.55 6 12 6C11.45 6 11 5.55 11 5C11 4.45 11.45 4 12 4ZM6 10H8V12H6V10ZM12 20H6C4.9 20 4 19.1 4 18V16H8V18C8 19.1 8.9 20 10 20H12ZM18 14H16V12H18V14ZM18 10H16V6C16 4.9 15.1 4 14 4H10V2H14C16.21 2 18 3.79 18 6V10ZM11 18C10.45 18 10 17.55 10 17C10 16.45 10.45 16 11 16C11.55 16 12 16.45 12 17C12 17.55 11.55 18 11 18Z"/></svg> 
        },
        { 
          name: "JavaScript", 
          icon: <svg viewBox="0 0 24 24" fill="#F7DF1E"><path d="M0 0h24v24H0V0zm22.034 18.758l-1.89 1.11c-.56.325-.975.521-1.284.598-.363.093-.768.106-1.153-.012-.583-.177-1.13-.63-1.13-1.485 0-1.002.855-1.491 1.858-1.491.596 0 1.278.227 1.823.653l1.776-1.05c-1.012-1.423-2.373-2.108-4.14-1.827-1.197.19-2.148 1.002-2.148 2.429 0 1.874 1.482 2.57 3.395 2.57.63 0 1.333-.112 2.003-.479l1.88-1.11-1.11-1.906zm-7.54 1.323h-2.247V7.223h2.247v12.858z"/></svg> 
        },
        { 
          name: "SQL", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="#00758F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> 
        }
      ]
    },
    { 
      title: "Frontend Development", 
      subtitle: "Technologies used to build website interfaces",
      headerIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
      skills: [
        { 
          name: "React.js", 
          icon: <svg viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB"><circle cx="0" cy="0" r="2.05"/><g stroke="#61DAFB" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg> 
        },
        { 
          name: "HTML5", 
          icon: <svg viewBox="0 0 24 24" fill="#E34F26"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> 
        },
        { 
          name: "CSS3", 
          icon: <svg viewBox="0 0 24 24" fill="#1572B6"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg> 
        },
        { 
          name: "Bootstrap", 
          icon: <svg viewBox="0 0 24 24" fill="#7952B3"><path d="M11.99 0C5.37 0 0 5.37 0 12s5.37 12 11.99 12C18.63 24 24 18.63 24 12S18.63 0 11.99 0zm3.14 16.54c-.26.39-.64.71-1.13.95-.5.24-1.1.36-1.82.36-.82 0-1.5-.14-2.06-.42-.56-.28-.97-.7-1.24-1.24-.27-.55-.4-1.21-.4-1.99V9.5h1.69v4.7c0 .59.13 1.05.38 1.38.25.33.65.5 1.18.5.39 0 .71-.08.97-.25.25-.17.43-.41.54-.72.11-.31.16-.71.16-1.2V9.5h1.69v4.84c0 1.05-.2 1.89-.62 2.2zM6.84 14.38h1.45c.15.7.48 1.25.99 1.63.51.38 1.2.57 2.08.57.37 0 .68-.04.92-.12.24-.08.42-.19.54-.34.12-.14.18-.32.18-.53 0-.25-.1-.47-.3-.65-.2-.18-.58-.34-1.14-.49l-1.47-.4c-.9-.25-1.57-.6-2.01-1.06-.43-.46-.65-1.01-.65-1.65 0-.52.14-.99.42-1.39.28-.4.67-.71 1.18-.93.5-.22 1.09-.33 1.75-.33.68 0 1.28.12 1.81.36.53.24.94.58 1.24 1.04.3.45.46.98.48 1.58h-1.43c-.05-.54-.25-.96-.6-1.26-.35-.3-.84-.45-1.47-.45-.44 0-.79.08-1.05.23-.26.15-.39.37-.39.66 0 .23.1.43.29.6.19.17.55.33 1.08.47l1.29.34c.93.24 1.6.58 2.04.99.44.42.66.96.66 1.63 0 .54-.15 1.03-.45 1.45z"/></svg> 
        }
      ]
    },
    { 
      title: "Backend Development", 
      subtitle: "For Python-based application development",
      headerIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>,
      skills: [
        { 
          name: "FastAPI", 
          icon: <svg viewBox="0 0 24 24" fill="#05998b"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.166 5.387a.761.761 0 0 1 .38.155.753.753 0 0 1 .245.862l-1.887 5.033h3.265c.364 0 .621.339.533.688l-2.638 10.442c-.098.388-.673.387-.785-.003l-2.426-8.39h-2.68c-.31 0-.544-.282-.485-.586l1.987-9.415a.754.754 0 0 1 .49-.576l3.99-1.39z"/></svg> 
        },
        { 
          name: "REST APIs", 
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="#7b61ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> 
        },
        { 
          name: "Node.js", 
          icon: <svg viewBox="0 0 24 24" fill="#339933"><path d="M12 0l-10.5 6v12L12 24l10.5-6V6L12 0zm-1.5 17.5v-6l-3-1.5v6l3 1.5zm4.5-2.25v-6l-3-1.5v6l3 1.5z"/></svg> 
        }
      ]
    },
    { 
      title: "Database & Tools", 
      subtitle: "Data storage, development and version control",
      headerIcon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
      skills: [
        { 
          name: "MySQL", 
          icon: <svg viewBox="0 0 24 24" fill="#00758F"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c2.1 0 3.9.9 3.9 2s-1.8 2-3.9 2-3.9-.9-3.9-2 1.8-2 3.9-2zm-5.4 8.4c.3 2.1 2.7 3.6 5.4 3.6s5.1-1.5 5.4-3.6c.3 2.1-.9 4.2-2.7 5.1v2.1c0 1.1-1.2 2.1-2.7 2.1s-2.7-1-2.7-2.1v-2.1c-1.8-.9-3-3-2.7-5.1z"/></svg> 
        },
        { 
          name: "PostgreSQL", 
          icon: <svg viewBox="0 0 24 24" fill="#336791"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.3 18.4c-1.3 1-3.1 1.6-5.2 1.6s-3.9-.6-5.2-1.6c-1.4-1.1-2.2-2.6-2.2-4.3 0-2.4 2.2-4.4 5.2-5.3V7.4c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1v1.4c3 .9 5.2 2.9 5.2 5.3 0 1.7-.8 3.2-2.2 4.3z"/></svg> 
        },
        { 
          name: "Firebase", 
          icon: <svg viewBox="0 0 24 24" fill="#FFCA28"><path d="M23.9 18.2L16.4 1.2c-.2-.5-.7-.9-1.2-.9s-1 .4-1.2.9l-4.3 9.2-3.1-2.8c-.3-.3-.7-.3-1-.1L.4 15.9c-.3.3-.4.7-.2 1.1l3.5 7.4c.2.4.6.6 1 .6h15c.4 0 .8-.2 1-.6l3.2-6.2z"/></svg> 
        },
        { 
          name: "Git", 
          icon: <svg viewBox="0 0 24 24" fill="#F05032"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/></svg> 
        },
        { 
          name: "GitHub", 
          icon: <svg viewBox="0 0 24 24" fill="#FFFFFF" style={{ fill: 'var(--text-color)' }}><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> 
        },
        { 
          name: "VS Code", 
          icon: <svg viewBox="0 0 24 24" fill="#007ACC"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg> 
        }
      ]
    }
  ];

  return (
    <section id="skills">
      <style>{`
        .skills-header { margin-bottom: 3rem; }
        .skills-title { font-family: 'Playfair Display', serif; font-size: 48px; }
        
        .skills-grid {
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); 
          gap: 1.5rem;
        }
        
        .skill-card {
          background: var(--card-bg); 
          border: 1px solid var(--border-color);
          border-radius: 16px; 
          padding: 2.5rem 2rem; 
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          animation: slideUpFade 0.6s ease forwards;
          opacity: 0;
        }

        .skill-card:nth-child(1) { animation-delay: 0.1s; }
        .skill-card:nth-child(2) { animation-delay: 0.2s; }
        .skill-card:nth-child(3) { animation-delay: 0.3s; }
        .skill-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .skill-card:hover { 
          transform: translateY(-8px); 
          border-color: rgba(123,97,255,0.5); 
          box-shadow: 0 15px 35px rgba(123,97,255,0.1);
        }
        
        .icon-box {
          width: 50px; 
          height: 50px; 
          border-radius: 12px; 
          background: rgba(123,97,255,0.1);
          display: flex; 
          justify-content: center; 
          align-items: center;
          color: #7b61ff; 
          margin-bottom: 1.2rem;
          transition: all 0.3s ease;
        }

        .skill-card:hover .icon-box {
          transform: scale(1.1) rotate(5deg);
          background: #7b61ff;
          color: #ffffff;
          box-shadow: 0 5px 15px rgba(123,97,255,0.3);
        }
        
        .skill-card h3 { 
          font-size: 20px; 
          margin-bottom: 0.4rem; 
          font-weight: 600;
        }

        .skill-subtitle {
          font-size: 13px;
          opacity: 0.6;
          margin-bottom: 2rem;
          line-height: 1.4;
          flex-grow: 1; 
        }
        
        .tech-icons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: auto;
        }

        .tech-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          transition: transform 0.2s ease;
        }

        .tech-item:hover {
          transform: translateY(-3px);
        }

        .tech-icon-wrapper {
          width: 45px;
          height: 45px;
          border-radius: 10px;
          background: rgba(128,128,128,0.05); 
          border: 1px solid rgba(128,128,128,0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .tech-item:hover .tech-icon-wrapper {
          background: rgba(123,97,255,0.1);
          border-color: rgba(123,97,255,0.3);
        }

        .tech-icon-wrapper svg {
          width: 24px;
          height: 24px;
        }

        .tech-name {
          font-size: 11px;
          opacity: 0.7;
          font-weight: 500;
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
            <div className="icon-box">
              {set.headerIcon}
            </div>
            <h3>{set.title}</h3>
            <p className="skill-subtitle">{set.subtitle}</p>
            
            <div className="tech-icons">
              {set.skills.map((skill, i) => (
                <div className="tech-item" key={i}>
                  <div className="tech-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="tech-name">{skill.name}</span>
                </div>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}