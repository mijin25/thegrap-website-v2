'use client';

import React from 'react';

const FooterSection: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-header">
          <h2>
            We shape moments,
            <br />
            build connections,
            <br />
            and create what matters.
          </h2>
          
          <div className="footer-cta">
            <button className="btn-large">
              <span>Let's connect</span>
              <img src="/assets/icon_arrow-right.svg" alt="Arrow" />
            </button>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-info">
            <p>©2025. All right reserved</p>
            <div className="footer-links">
              <a href="#">Instagram</a>
              <a href="#">Behance</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;