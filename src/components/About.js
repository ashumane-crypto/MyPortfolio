
import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <p className="eyebrow">01 / ABOUT ME</p>
      <h2 className="section-title">
        Turning curiosity into <span>working solutions.</span>
      </h2>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I'm a final-year B.Tech Computer Science and Engineering student
            interested in building useful software with Python, JavaScript,
            databases and modern web technologies.
          </p>
          <p>
            My learning journey includes data analysis, machine learning,
            frontend development and backend fundamentals. I enjoy learning
            by building projects and solving practical problems.
          </p>
          <p>
            My current goal is to grow into a Python developer who can build
            complete applications and integrate AI capabilities where they
            genuinely help users.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">⌘</div>
          <h3>My approach</h3>
          <p>Understand the problem. Design a solution. Build, test and improve.</p>
          <div className="about-tags">
            <span>Problem Solving</span>
            <span>Continuous Learning</span>
            <span>Practical Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
