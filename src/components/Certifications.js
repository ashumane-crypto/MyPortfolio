import React from 'react';

export default function Certifications() {
  const certs = [
    { id: "01", title: "Python", issuer: "GeeksforGeeks" },
    { id: "02", title: "Web Development Internship", issuer: "Provider not supplied" },
    { id: "03", title: "Generative AI", issuer: "Outskill" },
    { id: "04", title: "Cloud Computing", issuer: "Google Cloud" },
    { id: "05", title: "Data Science & ML Internship", issuer: "YBI Foundation" }
  ];

  return (
    <section id="certifications">
      <style>{`
        .cert-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 3rem;}
        .cert-card {
          background: rgba(128,128,128,0.03); border: 1px solid rgba(128,128,128,0.1);
          border-radius: 12px; padding: 1.5rem; display: flex; align-items: center; gap: 1.5rem;
        }
        .cert-id { font-size: 12px; opacity: 0.5; width: 20px;}
        .cert-icon { width: 40px; height: 40px; border-radius: 8px; background: rgba(123,97,255,0.1); display:flex; justify-content:center; align-items:center; color:#7b61ff;}
        .cert-info h4 { font-size: 16px; margin-bottom: 4px; font-weight: 500;}
        .cert-info p { font-size: 12px; opacity: 0.6;}
        
        @media (max-width: 768px) { .cert-grid { grid-template-columns: 1fr; } }
      `}</style>
      
      <div className="section-subtitle">CONTINUOUS LEARNING</div>
      <h2 className="section-title">Certifications & <span className="gradient-text">training</span></h2>
      
      <div className="cert-grid">
        {certs.map((cert, i) => (
          <div className="cert-card" key={i}>
            <div className="cert-id">{cert.id}</div>
            <div className="cert-icon">🎓</div>
            <div className="cert-info">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}