
import React, { useEffect, useState } from 'react';

import pythonCert from '../assets/Python.jpg';
import sqlCert from '../assets/SQL.jpg';
import webCert from '../assets/Infoyashonand_Certificate.jpg';
import pythonAiCert from '../assets/EWB_Python_AI_Certificate.jpg';
import genAiCert from '../assets/Gen_AI.jpg';
import htmlCssCert from '../assets/HTML and CSS.jpg';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      id: '01',
      title: 'Python',
      issuer: 'GeeksforGeeks',
      image: pythonCert
    },
    {
      id: '02',
      title: 'SQL',
      issuer: 'Infosys Springboard',
      image: sqlCert
    },
    {
      id: '03',
      title: 'Web Development Internship',
      issuer: 'Infoyashonand, Sangli',
      image: webCert
    },
    {
      id: '04',
      title: 'Python with AI Intern',
      issuer: 'EWB Edutech Pvt Ltd',
      image: pythonAiCert
    },
    {
      id: '05',
      title: 'Generative AI',
      issuer: 'Outskill',
      image: genAiCert
    },
    {
      id: '06',
      title: 'HTML & CSS',
      issuer: 'IBM',
      image: htmlCssCert
    }
  ];

  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedCert(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <section id="certifications">
      <style>{`
        @keyframes certFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes certModalIn {
          from {
            opacity: 0;
            transform: translateY(18px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.8rem;
          margin-top: 3rem;
        }

        .cert-card {
          min-width: 0;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 1.6rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          transition: transform 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
          animation: certFadeUp 0.55s ease both;
        }

        .cert-card:nth-child(1) { animation-delay: 0.05s; }
        .cert-card:nth-child(2) { animation-delay: 0.12s; }
        .cert-card:nth-child(3) { animation-delay: 0.19s; }
        .cert-card:nth-child(4) { animation-delay: 0.26s; }
        .cert-card:nth-child(5) { animation-delay: 0.33s; }
        .cert-card:nth-child(6) { animation-delay: 0.40s; }

        .cert-card:hover {
          transform: translateY(-6px);
          border-color: rgba(123, 97, 255, 0.55);
          box-shadow: 0 14px 35px rgba(123, 97, 255, 0.10);
        }

        .cert-id {
          color: #8b75ff;
          font-size: 14px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .cert-icon {
          width: 58px;
          height: 58px;
          border-radius: 15px;
          background: rgba(123, 97, 255, 0.12);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #8b75ff;
          flex-shrink: 0;
          transition: transform 0.3s ease,
                      background 0.3s ease,
                      color 0.3s ease;
        }

        .cert-card:hover .cert-icon {
          background: #7b61ff;
          color: white;
          transform: rotate(-4deg) scale(1.06);
        }

        .cert-info {
          flex: 1;
          min-width: 0;
        }

        .cert-info h4 {
          font-size: 17px;
          margin: 0 0 6px;
          font-weight: 600;
          line-height: 1.4;
          overflow-wrap: anywhere;
          color: inherit;
        }

        .cert-info p {
          font-size: 14px;
          margin: 0;
          color: #a78bfa;
          font-weight: 500;
          line-height: 1.5;
        }

        .cert-view-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 14px;
          padding: 9px 12px;
          border: 1px solid rgba(123, 97, 255, 0.45);
          border-radius: 8px;
          background: rgba(123, 97, 255, 0.09);
          color: #a99aff;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.25s ease,
                      color 0.25s ease,
                      transform 0.25s ease;
        }

        .cert-view-btn:hover {
          background: #7b61ff;
          color: white;
          transform: translateY(-2px);
        }

        .cert-view-btn:focus-visible,
        .cert-close:focus-visible,
        .cert-open-link:focus-visible {
          outline: 2px solid #a99aff;
          outline-offset: 3px;
        }

        .cert-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(5, 5, 12, 0.84);
          backdrop-filter: blur(9px);
          animation: certBackdropIn 0.2s ease;
        }

        @keyframes certBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cert-modal {
          width: 100%;
          max-width: 850px;
          max-height: 92vh;
          overflow-y: auto;
          padding: 22px;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 18px;
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
          animation: certModalIn 0.25s ease both;
        }

        .cert-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          margin-bottom: 18px;
        }

        .cert-modal-eyebrow {
          font-size: 11px;
          color: #9b83ff;
          letter-spacing: 2px;
          margin-bottom: 8px;
        }

        .cert-modal-title {
          font-size: 20px;
          line-height: 1.4;
          margin: 0 0 5px;
          color: inherit;
        }

        .cert-modal-issuer {
          font-size: 13px;
          opacity: 0.7;
          margin: 0;
        }

        .cert-close {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          background: transparent;
          color: inherit;
          font-size: 23px;
          cursor: pointer;
          flex-shrink: 0;
          transition: background 0.2s ease;
        }

        .cert-close:hover {
          background: rgba(123, 97, 255, 0.15);
        }

        .cert-image-wrap {
          padding: 10px;
          border-radius: 12px;
          background: rgba(127, 127, 127, 0.07);
          border: 1px solid var(--border-color);
        }

        .cert-preview-image {
          display: block;
          width: 100%;
          max-height: 62vh;
          object-fit: contain;
          border-radius: 7px;
          background: white;
        }

        .cert-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 17px;
        }

        .cert-modal-note {
          font-size: 12px;
          opacity: 0.65;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }

        .cert-open-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 15px;
          background: #7b61ff;
          color: white;
          text-decoration: none;
          border-radius: 9px;
          font-size: 13px;
          font-weight: 600;
          transition: background 0.2s ease;
        }

        .cert-open-link:hover {
          background: #6749ed;
        }

        @media (max-width: 1100px) {
          .cert-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.2rem;
          }

          .cert-card {
            padding: 1.3rem;
          }
        }

        @media (max-width: 650px) {
          .cert-grid {
            grid-template-columns: 1fr;
            margin-top: 2rem;
          }

          .cert-card {
            gap: 1rem;
            padding: 1.2rem;
          }

          .cert-info h4 {
            font-size: 16px;
          }

          .cert-modal-backdrop {
            padding: 10px;
          }

          .cert-modal {
            padding: 15px;
            max-height: 95vh;
          }

          .cert-modal-title {
            font-size: 17px;
          }

          .cert-modal-footer {
            align-items: stretch;
            flex-direction: column;
          }

          .cert-open-link {
            width: 100%;
            box-sizing: border-box;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cert-card,
          .cert-modal-backdrop,
          .cert-modal {
            animation: none;
          }

          .cert-card,
          .cert-icon,
          .cert-view-btn {
            transition: none;
          }
        }
      `}</style>

      <div className="section-subtitle">CONTINUOUS LEARNING</div>

      <h2 className="section-title">
        Certifications &amp;{' '}
        <span className="gradient-text">training</span>
      </h2>

      <div className="cert-grid">
        {certs.map((cert) => (
          <article className="cert-card" key={cert.id}>
            <div className="cert-id">{cert.id}</div>

            <div className="cert-icon" aria-hidden="true">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>

            <div className="cert-info">
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>

              <button
                type="button"
                className="cert-view-btn"
                onClick={() => setSelectedCert(cert)}
              >
                View Certificate <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedCert && (
        <div
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="cert-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="cert-modal-header">
              <div>
                <div className="cert-modal-eyebrow">
                  CERTIFICATE PREVIEW
                </div>

                <h3 className="cert-modal-title" id="cert-modal-title">
                  {selectedCert.title}
                </h3>

                <p className="cert-modal-issuer">
                  Issued by {selectedCert.issuer}
                </p>
              </div>

              <button
                type="button"
                className="cert-close"
                aria-label="Close certificate preview"
                onClick={() => setSelectedCert(null)}
              >
                ×
              </button>
            </div>

            <div className="cert-image-wrap">
              <img
                className="cert-preview-image"
                src={selectedCert.image}
                alt={`${selectedCert.title} certificate issued by ${selectedCert.issuer}`}
              />
            </div>

            <div className="cert-modal-footer">
              <p className="cert-modal-note">
                Certificate displayed for reference. Verification details
                depend on the issuing organization.
              </p>

              <a
                className="cert-open-link"
                href={selectedCert.image}
                target="_blank"
                rel="noreferrer"
              >
                Open Full Size ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
