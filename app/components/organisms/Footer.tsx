import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 mt-5 text-center text-secondary">
      <div className="container">
        <div className="mb-2">
          © {new Date().getFullYear()} Chanakya Sharma. All rights reserved.
        </div>
        <div>
          <a href="chanakyasharma31@gmail.com" className="text-accent me-3" aria-label="Email">
            <i className="bi bi-envelope"></i> Email
          </a>
          <a href="https://www.linkedin.com/in/chanakya-sharma-5327291" className="text-accent me-3" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/chanakyas03" className="text-accent" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;