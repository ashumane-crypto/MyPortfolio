import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <style>{`
        /* Animations */
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(59, 130, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }

        .main-footer {
          /* Fixed: Reduced top padding from 8rem to 5rem to remove extra space */
          padding: 5rem 8% 3rem 8%;
          border-top: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: var(--bg-color);
          overflow: hidden;
        }

        /* The Huge Name Section */
        .footer-hero {
          width: 100%;
          /* Fixed: Reduced margin bottom from 5rem to 3rem */
          margin-bottom: 3rem;
          animation: slideUpFade 1s ease-out forwards;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-location {
          font-size: 0.85rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          opacity: 0.5;
          margin-bottom: 1.5rem;
          font-weight: 600;
          color: var(--text-color);
        }

        .footer-name {
          font-family: 'Inter', sans-serif;
          font-size: clamp(3rem, 10vw, 8rem); /* Responsive giant text */
          font-weight: 900;
          text-transform: uppercase;
          line-height: 1;
          letter-spacing: -2px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1vw;
          flex-wrap: wrap;
        }

        /* Two-Tone Colors */
        .text-blue {
          color: #3b82f6; /* Vibrant Blue */
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.2); /* Subtle glow */
        }

        .text-purple {
          color: #a78bfa; /* Soft Purple/Lavender */
          text-shadow: 0 0 20px rgba(167, 139, 250, 0.2);
        }

        /* The glowing blue dot */
        .glowing-dot {
          width: 14px;
          height: 14px;
          background-color: #3b82f6;
          border-radius: 50%;
          display: inline-block;
          animation: pulseDot 2s infinite;
          margin: 0 1.5rem;
        }

        /* Bottom Copyright Bar */
        .footer-bottom {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          font-size: 0.85rem;
          opacity: 0.5;
          flex-wrap: wrap;
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          animation: slideUpFade 1s ease-out 0.3s forwards;
          opacity: 0; /* Starts hidden for animation */
        }

        .footer-bottom .separator {
          font-size: 1.2rem;
          line-height: 1;
        }

        .highlight-text {
          color: #7b61ff;
          font-weight: 600;
          opacity: 1;
        }

        @media (max-width: 768px) {
          .main-footer { padding: 3rem 5% 2rem 5%; }
          .footer-bottom {
            flex-direction: column;
            gap: 0.8rem;
          }
          .footer-bottom .separator {
            display: none;
          }
          .footer-name {
            letter-spacing: 0px;
            gap: 0.5rem;
          }
          .glowing-dot {
            width: 10px;
            height: 10px;
            margin: 0 0.5rem;
          }
        }
      `}</style>

      {/* Middle Section: Huge Name */}
      <div className="footer-hero">
        <div className="footer-location">FULL STACK ENGINEER · Maharashtra, INDIA</div>
        <div className="footer-name">
          <span className="text-blue">ASHWINI</span> 
          <span className="glowing-dot"></span> 
          <span className="text-purple">MANE</span>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        <span>© 2026 Ashwini Mane</span>
        <span className="separator">·</span>
        <span>All rights reserved</span>
        <span className="separator">·</span>
        <span>Turning ideas into <span className="highlight-text">scalable products</span></span>
      </div>
    </footer>
  );
}