
import React from 'react';
import profilePic from '../assets/Profile.png';
import resumePdf from "../assets/Ashwini_Mane_FullStackResume.pdf";

export default function Home() {
  const firstName = 'Ashwini';
  const lastName = 'Mane';

  return (
    <section className="hero" id="home">
      <style>{`
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes nameReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
            filter: blur(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes photoReveal {
          from {
            opacity: 0;
            transform: translateX(35px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes photoFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes borderGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(123, 97, 255, 0.10);
          }
          50% {
            box-shadow: 0 0 38px rgba(123, 97, 255, 0.23);
          }
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.45; }
        }

        .hero {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 6rem 8%;
          min-height: 90vh;
          gap: 4rem;
          box-sizing: border-box;
          overflow: hidden;
        }

        .hero-content {
          flex: 1.2;
          max-width: 700px;
          min-width: 0;
          animation: heroFadeUp 0.8s ease both;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 11px;
          border: 1px solid var(--border-color);
          margin-bottom: 2rem;
          letter-spacing: 1px;
          background: var(--card-bg);
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.1s;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          margin-right: 8px;
          animation: dotPulse 2s ease infinite;
        }

        .greeting {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          font-style: italic;
          margin: 0 0 0.5rem;
          opacity: 0;
          animation: heroFadeUp 0.7s ease forwards;
          animation-delay: 0.2s;
        }

        .name {
          font-family: 'Playfair Display', serif;
          font-size: 68px;
          line-height: 1.12;
          margin: 0 0 1rem;
          letter-spacing: -1.5px;
        }

        .name-part {
          display: inline-block;
          opacity: 0;
          animation: nameReveal 0.75s cubic-bezier(.2,.7,.2,1) forwards;
        }

        .name-first {
          animation-delay: 0.35s;
        }

        .name-last {
          animation-delay: 0.75s;
        }

        .role {
          font-size: 24px;
          font-weight: 500;
          margin: 0 0 1.5rem;
          opacity: 0;
          animation: heroFadeUp 0.7s ease forwards;
          animation-delay: 1s;
        }

        .desc {
          font-size: 15px;
          line-height: 1.8;
          opacity: 0;
          margin: 0 0 2.5rem;
          text-align: justify;
          animation: heroFadeUp 0.7s ease forwards;
          animation-delay: 1.15s;
        }

        .btn-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          opacity: 0;
          animation: heroFadeUp 0.7s ease forwards;
          animation-delay: 1.3s;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.25s ease,
                      transform 0.25s ease,
                      border-color 0.25s ease,
                      box-shadow 0.25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 1px solid transparent;
          box-sizing: border-box;
        }

        .btn-primary {
          background: #7b61ff;
          color: #ffffff !important;
        }

        .btn-primary:hover {
          background: #6a4ff0;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(123, 97, 255, 0.25);
        }

        .btn-outline {
          background: transparent;
          border-color: var(--border-color);
          color: inherit;
        }

        .btn-outline:hover {
          background: var(--card-bg);
          border-color: #7b61ff;
          transform: translateY(-3px);
        }

        /* Vertical portrait frame */
        .hero-graphic {
          flex: 0.8;
          min-width: 280px;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          animation: photoReveal 0.9s ease forwards;
          animation-delay: 0.5s;
        }

        .image-wrapper {
          position: relative;
          width: 340px;
          height: 460px;
          padding: 10px;
          box-sizing: border-box;
          border-radius: 28px;
          background: linear-gradient(
            145deg,
            rgba(123, 97, 255, 0.30),
            rgba(59, 130, 246, 0.12),
            rgba(123, 97, 255, 0.20)
          );
          border: 1px solid rgba(123, 97, 255, 0.5);
          animation: borderGlow 4s ease-in-out infinite;
        }

        .image-wrapper::before {
          content: '';
          position: absolute;
          inset: -12px;
          border: 1px dashed rgba(123, 97, 255, 0.35);
          border-radius: 34px;
          pointer-events: none;
          animation: frameRotate 30s linear infinite;
        }

        @keyframes frameRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .image-wrapper::after {
          content: '';
          position: absolute;
          width: 75px;
          height: 75px;
          top: -20px;
          right: -20px;
          border-top: 3px solid #8b75ff;
          border-right: 3px solid #8b75ff;
          border-radius: 0 18px 0 0;
          pointer-events: none;
        }

        .profile-img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          object-fit: cover;
          object-position: center top;
          background-color: var(--card-bg);
          border: 3px solid var(--bg-dark);
          box-sizing: border-box;
        }

        body.light-mode .profile-img {
          border-color: #f4f6fb;
        }

        @media (max-width: 1200px) {
          .hero {
            padding-left: 5%;
            padding-right: 5%;
            gap: 3rem;
          }

          .image-wrapper {
            width: 300px;
            height: 420px;
          }

          .name {
            font-size: 58px;
          }
        }

        @media (max-width: 900px) {
          .hero {
            flex-direction: column-reverse;
            text-align: center;
            padding: 4rem 7%;
            gap: 3rem;
          }

          .hero-content {
            width: 100%;
          }

          .hero-graphic {
            min-width: 0;
          }

          .name {
            font-size: 52px;
          }

          .role {
            font-size: 21px;
          }

          .desc {
            text-align: center;
          }

          .btn-group {
            justify-content: center;
          }

          .image-wrapper {
            width: 280px;
            height: 380px;
          }
        }

        @media (max-width: 480px) {
          .hero {
            padding: 3rem 5%;
          }

          .name {
            font-size: 43px;
            letter-spacing: -1px;
          }

          .greeting {
            font-size: 21px;
          }

          .role {
            font-size: 19px;
          }

          .desc {
            font-size: 14px;
            text-align: left;
          }

          .image-wrapper {
            width: min(260px, 78vw);
            height: 350px;
          }

          .btn-group {
            gap: 0.75rem;
          }

          .btn {
            padding: 11px 17px;
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-content,
          .badge,
          .greeting,
          .name-part,
          .role,
          .desc,
          .btn-group,
          .hero-graphic {
            animation: none;
            opacity: 1;
            transform: none;
            filter: none;
          }

          .dot,
          .image-wrapper,
          .image-wrapper::before {
            animation: none;
          }

          .btn {
            transition: none;
          }
        }
      `}</style>

      <div className="hero-content">
        <div className="badge">
          <span className="dot"></span>
          B.TECH CSE · GRADUATING 2027
        </div>

        <p className="greeting">Hello, I'm</p>

        <h1 className="name">
          <span className="name-part name-first">{firstName}</span>{' '}
          <span className="name-part name-last gradient-text">
            {lastName}
          </span>
        </h1>

        <h2 className="role">Python Full Stack Developer</h2>

        <p className="desc">
          Aspiring Python Full Stack Developer with hands-on experience in
          building web applications using Python, FastAPI, React.js, SQL,
          PostgreSQL, and Firebase. Familiar with REST API development,
          authentication, database design, CRUD operations, and responsive
          web development. Passionate about solving real-world problems
          through clean, maintainable code and continuously learning modern
          software engineering practices.
        </p>

        <div className="btn-group">
          <a href="#projects" className="btn btn-primary">
            View Projects ↓
          </a>

          <a
            href={resumePdf}
            download="Ashwini_Mane_FullStackResume.pdf"
            className="btn btn-outline"
          >
            Download Resume ⬇
          </a>

          <a
            href="https://github.com/ashumane-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/ashwini-mane05/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-graphic">
        <div className="image-wrapper">
          <img
            src={profilePic}
            alt="Ashwini Mane - Python Full Stack Developer"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
}
