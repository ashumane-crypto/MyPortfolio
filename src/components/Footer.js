
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="logo">
        AM<span>.</span>
      </a>
      <p>Designed and built with React.</p>
      <a href="#home" className="back-to-top">
        Back to top ↑
      </a>
      <p className="copyright">
        © {new Date().getFullYear()} Ashwini Mane
      </p>
    </footer>
  );
}

export default Footer;
