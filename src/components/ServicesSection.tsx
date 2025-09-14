'use client';

import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Services</h2>
      </div>
      
      <div className="services-list">
        {/* 서비스 아이템 1 - Digital Experience */}
        <div className="service-item service-item-highlight">
          <div className="service-category">Digital Experience</div>
          <div className="service-content">
            <h3>Intuitive and Seamless Experiences</h3>
            <p>We design intuitive interfaces and seamless user experiences by deeply analyzing user behavior and needs, all based on proven design principles. Our work maximizes usability, satisfaction, and and engagement.</p>
          </div>
        </div>
        
        {/* 서비스 아이템 2 - Performance Business */}
        <div className="service-item">
          <div className="service-category">Performance Business</div>
          <div className="service-content">
            <h3>Connecting Artists and Fans</h3>
            <p>We plan and execute K-POP concerts, fan meetings, and brand collaborations across Asia. By partnering with local promoters, media, and venues, we ensure flawless on-site execution. Our team also expands performance IP through metaverse events and digital platforms, creating sensory connections between artists and fans.</p>
          </div>
        </div>
        
        {/* 서비스 아이템 3 - Creative Visuals */}
        <div className="service-item">
          <div className="service-category">Creative Visuals</div>
          <div className="service-content">
            <h3>Visualizing Brand Identity</h3>
            <p>Through various media like logos, album designs, packaging, and digital content, we clearly visualize a brand's unique character and emotions. Our designs are built on a foundation of solid structure, aesthetic quality, and compelling storytelling to craft a distinct brand image.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;