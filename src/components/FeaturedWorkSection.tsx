'use client';

import React from 'react';

const FeaturedWorkSection: React.FC = () => {
  return (
    <>
      {/* 패럴랙스 텍스트 */}
      <div className="featured-work-text-section">
        <div className="parallax-huge-text">
          <div className="huge-text-wrapper">
            <h2 className="huge-text">Featured Work Featured Work Featured Work Featured Work Featured Work Featured Work</h2>
          </div>
        </div>
      </div>
      
      {/* 피처드 워크 그리드 */}
      <section className="featured-work-grid-section">
        <div className="project-cards-container">
          <div className="featured-work-grid">
            {/* 프로젝트 카드 1 */}
            <div className="project-card project-card-large">
              <div 
                className="project-cover" 
                style={{ backgroundImage: `url('/assets/work/sk-skon_00-hero.webp')` }} 
              />
              <div className="project-info">
                <div className="project-name-and-tags">
                  <h3 className="project-name">SKON 2.0 App</h3>
                  <p className="project-tags">UI/UX, App, Groupware, Illustation</p>
                </div>
                <div className="project-year">( 2023 )</div>
              </div>
            </div>
            
            {/* 프로젝트 카드 2 */}
            <div className="project-card">
              <div 
                className="project-cover" 
                style={{ backgroundImage: `url('/assets/work/ent-website-builder_00-hero.webp')` }} 
              />
              <div className="project-info">
                <div className="project-name-and-tags">
                  <h3 className="project-name">Entertainment Website Builder</h3>
                  <p className="project-tags">CMS, AI</p>
                </div>
                <div className="project-year">( 2025 )</div>
              </div>
            </div>
            
            {/* 프로젝트 카드 3 */}
            <div className="project-card">
              <div 
                className="project-cover" 
                style={{ backgroundImage: `url('/assets/work/2025-lee-gikwang-solo-concert-hk_00-hero.jpg')` }} 
              />
              <div className="project-info">
                <div className="project-name-and-tags">
                  <h3 className="project-name">2025 LEE GIKWANG SOLO CONCERT [OBSESSED] IN HONGKONG</h3>
                  <p className="project-tags">Kpop Agency, Show, Performance</p>
                </div>
                <div className="project-year">( 2025 )</div>
              </div>
            </div>
            
            {/* 프로젝트 카드 4 */}
            <div className="project-card">
              <div 
                className="project-cover" 
                style={{ backgroundImage: `url('/assets/work/opily-website_00-hero.webp')` }} 
              />
              <div className="project-info">
                <div className="project-name-and-tags">
                  <h3 className="project-name">Ophily Brand Website</h3>
                  <p className="project-tags">Shopping Mall, Cafe 24</p>
                </div>
                <div className="project-year">( 2024 )</div>
              </div>
            </div>
            
            {/* 프로젝트 카드 5 */}
            <div className="project-card">
              <div 
                className="project-cover" 
                style={{ backgroundImage: `url('/assets/work/samsung-referral-program_00-hero.webp')` }} 
              />
              <div className="project-info">
                <div className="project-name-and-tags">
                  <h3 className="project-name">Samsung EPP Referral Program</h3>
                  <p className="project-tags">Visual Identity, Advertising</p>
                </div>
                <div className="project-year">( 2024 )</div>
              </div>
            </div>
          </div>
          
          {/* All Projects 버튼 */}
          <div className="all-projects-button-container">
            <button className="btn btn-large">
              <span className="btn-text">All Projects</span>
              <div className="btn-icon">
                <img src="/assets/icon_arrow-right.svg" alt="Arrow" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedWorkSection;