
import React from 'react';

export default function Contact() {
  const email = 'ashumane2005@gmail.com';

  // Opens Gmail with your email already filled in.
  const gmailLink =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  return (
    <section id="contact" className="contact-section">
      <style>{`
        @keyframes contactSlideUp {
          from {
            opacity: 0;
            transform: translateY(35px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes contactGlow {
          0%, 100% {
            opacity: 0.45;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.85;
            transform: translate(-50%, -50%) scale(1.15);
          }
        }

        @keyframes contactButtonIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-section {
          padding: 6rem 8% 8rem;
          box-sizing: border-box;
        }

        .contact-container {
          text-align: center;
          max-width: 850px;
          margin: 0 auto;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 5rem 3rem;
          position: relative;
          isolation: isolate;
          overflow: hidden;
          box-sizing: border-box;
          animation: contactSlideUp 0.8s cubic-bezier(.2,.7,.2,1) both;
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        /* Subtle animated purple light */
        .contact-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 320px;
          height: 320px;
          background: radial-gradient(
            circle,
            rgba(123, 97, 255, 0.18) 0%,
            rgba(123, 97, 255, 0.04) 45%,
            transparent 72%
          );
          z-index: -1;
          pointer-events: none;
          animation: contactGlow 5s ease-in-out infinite;
        }

        /* Decorative border highlight */
        .contact-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 12%;
          width: 76%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(123, 97, 255, 0.75),
            transparent
          );
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .contact-container:hover {
          transform: translateY(-7px);
          border-color: rgba(123, 97, 255, 0.55);
          box-shadow:
            0 20px 55px rgba(123, 97, 255, 0.12),
            0 0 25px rgba(123, 97, 255, 0.05);
        }

        .contact-content {
          position: relative;
          z-index: 1;
        }

        .contact-subtitle {
          font-size: 12px;
          color: #9b85ff;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .contact-subtitle::before,
        .contact-subtitle::after {
          content: '';
          width: 20px;
          height: 1px;
          background: #7b61ff;
          opacity: 0.7;
        }

        .contact-title {
          font-family: 'Playfair Display', serif;
          font-size: 48px;
          line-height: 1.2;
          margin: 0 0 1.5rem;
        }

        .contact-desc {
          font-size: 16px;
          opacity: 0.8;
          line-height: 1.8;
          margin: 0 auto 2.5rem;
          max-width: 650px;
        }

        .contact-buttons {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .contact-btn {
          padding: 14px 30px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid transparent;
          cursor: pointer;
          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          animation: contactButtonIn 0.6s ease both;
        }

        .contact-btn:nth-child(1) {
          animation-delay: 0.25s;
        }

        .contact-btn:nth-child(2) {
          animation-delay: 0.4s;
        }

        .contact-btn svg {
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .contact-btn:hover svg {
          transform: scale(1.12);
        }

        .contact-btn:focus-visible {
          outline: 2px solid #a997ff;
          outline-offset: 4px;
        }

        .btn-email {
          background: #7b61ff;
          color: #ffffff;
          box-shadow: 0 5px 18px rgba(123, 97, 255, 0.22);
        }

        .btn-email:hover {
          background: #6a4ff0;
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(123, 97, 255, 0.38);
        }

        .btn-linkedin {
          background: transparent;
          border-color: var(--border-color);
          color: inherit;
        }

        .btn-linkedin:hover {
          background: rgba(123, 97, 255, 0.08);
          border-color: #7b61ff;
          transform: translateY(-4px);
          box-shadow: 0 8px 22px rgba(123, 97, 255, 0.1);
        }

        .contact-email {
          font-size: 13px;
          opacity: 0.65;
          letter-spacing: 0.5px;
          margin: 0;
          transition: opacity 0.3s ease;
        }

        .contact-container:hover .contact-email {
          opacity: 0.95;
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 5% 5rem;
          }

          .contact-container {
            padding: 3rem 1.5rem;
            border-radius: 20px;
          }

          .contact-title {
            font-size: 34px;
          }

          .contact-desc {
            font-size: 14px;
          }

          .contact-buttons {
            gap: 0.9rem;
          }

          .contact-btn {
            width: 100%;
            padding: 13px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-container,
          .contact-btn {
            animation: none;
          }

          .contact-container::before {
            animation: none;
          }

          .contact-container,
          .contact-btn,
          .contact-btn svg {
            transition: none;
          }
        }
      `}</style>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-subtitle">
            LET'S CONNECT
          </div>

          <h2 className="contact-title">
            Have an opportunity or an idea
            <br />
            <span className="gradient-text">
              worth building?
            </span>
          </h2>

          <p className="contact-desc">
            I'm open to opportunities, collaborations,
            and meaningful projects where I can contribute, learn,
            and grow as a Python Full Stack Developer. Have an idea
            or an opportunity in mind? Let's connect!
          </p>

          <div className="contact-buttons">
            {/* Opens Gmail with your address in the To field */}
            <a
              href={gmailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn btn-email"
              aria-label="Email Ashwini using Gmail"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Email Me
              <span aria-hidden="true">↗</span>
            </a>

            {/* Opens your LinkedIn profile */}
            <a
              href="https://www.linkedin.com/in/ashwini-mane05/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn btn-linkedin"
              aria-label="Visit Ashwini's LinkedIn profile"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <p className="contact-email">
            {email}
          </p>
        </div>
      </div>
    </section>
  );
}
