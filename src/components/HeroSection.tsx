'use client';

import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Imagine more create better",
      background: "/assets/hero-background-desktop.jpg"
    },
    {
      title: "Design with purpose",
      background: "/assets/hero-background-desktop-2.jpg"
    },
    {
      title: "Build connections",
      background: "/assets/hero-background-desktop-3.jpg"
    }
  ];

  // 자동 슬라이드 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5초마다 전환

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="hero-slide-background" 
              style={{ backgroundImage: `url('${slide.background}')` }} 
            />
            
            <div className="hero-slide-content">
              <div className="hero-headline">
                <h1 className="hero-title">{slide.title}</h1>
              </div>
              
              <div className="hero-cta-pagination-block">
                <button className="hero-cta">
                  <span>Learn More</span>
                  <img src="/assets/icon_arrow-right.svg" alt="Arrow" />
                </button>
                
                <div className="hero-pagination">
                  <span className="pagination-current">{currentSlide + 1}</span>
                  <span className="pagination-divider">/</span>
                  <span className="pagination-total">{slides.length}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;