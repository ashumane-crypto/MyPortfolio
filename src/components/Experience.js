import React, { useState } from 'react';

import webCertificate from '../assets/Infoyashonand_Certificate.jpg';
import pythonCertificate from '../assets/EWB_Python_AI_Certificate.jpg';

export default function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const internships = [
    {
      role: 'Web Developer Intern',
      company: 'Infoyashonand Private Limited, Sangli',
      type: 'On-site',
      icon: '💻',
      period: 'Internship',
      certificate: webCertificate,
      certificateName: 'Web Developer Internship Certificate',
      description: [
        'Worked on website development and responsive user interfaces.',
        'Collaborated on implementing website features and improving the user experience.'
      ]
    },
    {
      role: 'Python with AI Intern',
      company: 'EWB Edutech Private Limited',
      type: 'Remote',
      icon: '🤖',
      period: 'Internship',
      certificate: pythonCertificate,
      certificateName: 'Python with AI Internship Certificate',
      description: [
        'Worked with Python programming and data processing tasks.',
        'Explored AI-based solutions and developed practical programming skills.'
      ]
    }
  ];

  return (
    <section id="experience">
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* NEW ANIMATIONS FOR MODAL */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        #experience {
          padding-top: 2rem;
          padding-bottom: 3rem;
        }

        .exp-header {
          margin-bottom: 3rem;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 3rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 11px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            #7b61ff,
            rgba(123, 97, 255, 0.08)
          );
        }

        .exp-card {
          position: relative;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
          animation: slideUpFade 0.6s ease forwards;
        }

        .exp-card:nth-child(2) {
          animation-delay: 0.15s;
        }

        .exp-card:hover {
          transform: translateX(5px);
          border-color: rgba(123, 97, 255, 0.5);
        }

        .timeline-dot {
          position: absolute;
          left: -3rem;
          top: 2rem;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-dark);
          border: 2px solid #7b61ff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 11px;
          z-index: 2;
          box-shadow: 0 0 10px rgba(123, 97, 255, 0.25);
        }

        body.light-mode .timeline-dot {
          background: #f4f6fb;
        }

        .exp-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .exp-title-group h3 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 0.5rem;
          color: inherit;
        }

        .exp-company {
          font-size: 14px;
          color: #7b61ff;
          font-weight: 500;
          margin: 0;
          line-height: 1.6;
        }

        .exp-badge {
          font-size: 11px;
          padding: 5px 12px;
          border-radius: 20px;
          background: rgba(123, 97, 255, 0.1);
          color: #7b61ff;
          border: 1px solid rgba(123, 97, 255, 0.2);
          white-space: nowrap;
        }

        .exp-desc {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin: 1.5rem 0;
          padding: 0;
        }

        .exp-desc li {
          font-size: 14px;
          opacity: 0.8;
          line-height: 1.7;
          list-style: none;
          position: relative;
          padding-left: 1.5rem;
        }

        .exp-desc li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #7b61ff;
          font-size: 17px;
          top: -2px;
        }

        .exp-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .proof-label {
          font-size: 12px;
          opacity: 0.7;
        }

        .certificate-btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border: 1px solid #7b61ff;
          border-radius: 8px;
          background: rgba(123, 97, 255, 0.1);
          color: #9b88ff;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .certificate-btn:hover {
          background: rgba(123, 97, 255, 0.2);
          transform: translateY(-2px);
        }

        .certificate-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.82);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1.25rem;
          overflow-y: auto;
          /* Add fade animation to background */
          animation: fadeIn 0.3s ease forwards;
        }

        .certificate-dialog {
          width: 100%;
          max-width: 850px;
          max-height: 92vh;
          overflow-y: auto;
          background: var(--card-bg, #171717);
          border: 1px solid var(--border-color, #333);
          border-radius: 16px;
          padding: 1.25rem;
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.4);
          /* Add scale pop animation to the box */
          animation: scaleUp 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .certificate-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .certificate-modal-header h3 {
          font-size: 17px;
          margin: 0 0 0.4rem;
        }

        .certificate-modal-header p {
          font-size: 12px;
          opacity: 0.7;
          margin: 0;
        }

        .certificate-close {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          border: 1px solid var(--border-color, #444);
          border-radius: 8px;
          background: transparent;
          color: inherit;
          font-size: 22px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .certificate-close:hover {
          background: rgba(123, 97, 255, 0.1);
          color: #7b61ff;
        }

        .certificate-image {
          display: block;
          width: 100%;
          height: auto;
          max-height: 65vh;
          object-fit: contain;
          background: #fff;
          border-radius: 8px;
        }

        .certificate-modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .certificate-link {
          display: inline-block;
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 8px;
          background: #7b61ff;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          transition: background 0.2s;
        }

        .certificate-link:hover {
          background: #6a4ff0;
        }

        .certificate-note {
          font-size: 12px;
          opacity: 0.65;
          line-height: 1.6;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .timeline {
            padding-left: 1.5rem;
          }

          .timeline::before {
            left: -5px;
          }

          .timeline-dot {
            left: -2.1rem;
            width: 18px;
            height: 18px;
            top: 1.5rem;
          }

          .exp-card {
            padding: 1.25rem;
          }

          .exp-top {
            flex-direction: column;
          }

          .exp-footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .certificate-btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .exp-card, .certificate-modal, .certificate-dialog {
            animation: none !important;
          }

          .exp-card,
          .certificate-btn {
            transition: none;
          }
        }
      `}</style>

      <div className="exp-header">
        <div className="section-subtitle">EXPERIENCE</div>
        <h2 className="section-title">
          My professional journey{' '}
          <span className="gradient-text">
            and hands-on experience
          </span>
        </h2>
      </div>

      <div className="timeline">
        {internships.map((intern, index) => (
          <article className="exp-card" key={`${intern.company}-${index}`}>
            <div className="timeline-dot" aria-hidden="true">
              {intern.icon}
            </div>

            <div className="exp-top">
              <div className="exp-title-group">
                <h3>{intern.role}</h3>
                <p className="exp-company">{intern.company}</p>
              </div>

              <span className="exp-badge">{intern.type}</span>
            </div>

            <ul className="exp-desc">
              {intern.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="exp-footer">
              <span className="proof-label">
                📄 Internship certificate
              </span>

              <button
                type="button"
                className="certificate-btn"
                onClick={() => setSelectedCertificate(intern)}
              >
                <span aria-hidden="true">↗</span>
                View Certificate
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
          role="presentation"
        >
          <div
            className="certificate-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="certificate-modal-header">
              <div>
                <h3 id="certificate-title">
                  {selectedCertificate.certificateName}
                </h3>
                <p>{selectedCertificate.company}</p>
              </div>

              <button
                type="button"
                className="certificate-close"
                aria-label="Close certificate"
                onClick={() => setSelectedCertificate(null)}
              >
                ×
              </button>
            </div>

            <img
              className="certificate-image"
              src={selectedCertificate.certificate}
              alt={selectedCertificate.certificateName}
            />

            <div className="certificate-modal-actions">
              <a
                className="certificate-link"
                href={selectedCertificate.certificate}
                target="_blank"
                rel="noreferrer"
              >
                Open Full Size ↗
              </a>
            </div>

            <p className="certificate-note">
              Certificate provided for reference. For formal verification,
              please contact the issuing organization.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}