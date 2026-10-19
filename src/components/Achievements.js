
import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      id: '01',
      title: 'District-Level Winner',
      desc: 'Secured 1st place at the PixelFusion District-Level Technical Event for innovative problem-solving and development.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      ),
      linkLabel: 'View on LinkedIn',
      link: 'https://lnkd.in/p/deh9TUdA'
    },
    {
      id: '02',
      title: 'Completed Internships',
      desc: 'Successfully completed Web Development and Python with AI internships, gaining hands-on industry experience.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      linkLabel: 'View LinkedIn Profile',
      link: 'https://www.linkedin.com/in/ashwini-mane05/'
    },
    {
      id: '03',
      title: 'Full Stack & AI Projects',
      desc: 'Designed and developed full-stack applications and AI models focused on practical problems using Python, web technologies, and data-driven solutions.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      linkLabel: 'Explore My Github',
      link: 'https://github.com/ashumane-crypto'
    }
  ];

  return (
    <section id="achievements">
      <style>{`
        @keyframes achSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes achGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(123, 97, 255, 0);
          }
          50% {
            box-shadow: 0 0 22px rgba(123, 97, 255, 0.10);
          }
        }

        .ach-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
          transition: transform 0.3s ease,
                      border-color 0.3s ease,
                      box-shadow 0.3s ease;
          animation: achSlideUp 0.6s ease both;
        }

        .ach-card:nth-child(1) { animation-delay: 0.1s; }
        .ach-card:nth-child(2) { animation-delay: 0.25s; }
        .ach-card:nth-child(3) { animation-delay: 0.4s; }

        .ach-card:hover {
          transform: translateY(-8px);
          border-color: rgba(123, 97, 255, 0.5);
          box-shadow: 0 15px 35px rgba(123, 97, 255, 0.12);
        }

        .ach-watermark {
          position: absolute;
          top: 10px;
          right: 15px;
          font-family: 'Playfair Display', serif;
          font-size: 120px;
          font-weight: 600;
          color: rgba(123, 97, 255, 0.05);
          line-height: 1;
          pointer-events: none;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .ach-card:hover .ach-watermark {
          transform: scale(1.1) translateX(-5px);
          color: rgba(123, 97, 255, 0.11);
        }

        .ach-icon {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background: rgba(123, 97, 255, 0.1);
          color: #8b75ff;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease,
                      background 0.3s ease,
                      color 0.3s ease;
        }

        .ach-card:hover .ach-icon {
          background: #7b61ff;
          color: white;
          transform: scale(1.08) rotate(-5deg);
        }

        .ach-title {
          font-size: 22px;
          font-weight: 600;
          margin: 0 0 1rem;
          position: relative;
          z-index: 1;
          line-height: 1.4;
          color: inherit;
        }

        .ach-desc {
          font-size: 15px;
          opacity: 0.78;
          line-height: 1.8;
          position: relative;
          z-index: 1;
          margin: 0;
        }

        .ach-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 1.5rem;
          padding: 11px 15px;
          border: 1px solid rgba(123, 97, 255, 0.4);
          border-radius: 9px;
          background: rgba(123, 97, 255, 0.09);
          color: #a997ff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          position: relative;
          z-index: 2;
          transition: background 0.25s ease,
                      color 0.25s ease,
                      transform 0.25s ease,
                      border-color 0.25s ease;
        }

        .ach-link:hover {
          background: #7b61ff;
          color: #fff;
          border-color: #7b61ff;
          transform: translateY(-3px);
        }

        .ach-link svg {
          transition: transform 0.25s ease;
        }

        .ach-link:hover svg {
          transform: translate(2px, -2px);
        }

        @media (max-width: 768px) {
          .ach-grid {
            grid-template-columns: 1fr;
            gap: 1.3rem;
            margin-top: 2rem;
          }

          .ach-card {
            padding: 2rem;
          }

          .ach-title {
            font-size: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ach-card {
            animation: none;
            transition: none;
          }

          .ach-card:hover,
          .ach-card:hover .ach-icon,
          .ach-link:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="section-subtitle">RECOGNITION</div>

      <h2 className="section-title">
        Achievements that mark <br />
        <span
          className="gradient-text"
          style={{ fontSize: '50px' }}
        >
          progress
        </span>
      </h2>

      <div className="ach-grid">
        {achievements.map((item) => (
          <article className="ach-card" key={item.id}>
            <div className="ach-watermark">{item.id}</div>

            <div className="ach-icon">
              {item.icon}
            </div>

            <h4 className="ach-title">{item.title}</h4>

            <p className="ach-desc">{item.desc}</p>

            <a
              className="ach-link"
              href={
                item.link.startsWith('YOUR_')
                  ? 'https://www.linkedin.com/'
                  : item.link
              }
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.linkLabel} - ${item.title}`}
            >
              {item.linkLabel}

              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
