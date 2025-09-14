'use client';

import React from 'react';

const WhatWeDoSection: React.FC = () => {
  return (
    <section className="what-we-do-section">
      <div className="container">
        <div className="section-header">
          <div className="section-caption">( What We Do )</div>
          <div className="section-title">
            We design with purpose, creating experiences that move hearts and inspire change. Every detail is an opportunity to connect and create meaning.
          </div>
        </div>
        
        <div className="section-content">
          <div className="content-spacer"></div>
          <div className="content-en">
            We provide a diverse range of services, including brand identity and strategy, UI/UX design, web publishing, motion design, campaign planning, and creative direction. Every project is designed to showcase your brand's essence and engage your audience in meaningful ways.
          </div>
          <div className="content-kr">
            우리는 브랜드 아이덴티티와 전략, UI/UX 디자인, 웹 퍼블리싱, 모션 디자인, 캠페인 기획, 크리에이티브 디렉션 등 폭넓은 서비스를 제공합니다. 모든 프로젝트는 브랜드의 본질을 효과적으로 드러내고, 고객과의 깊이 있는 소통을 추구합니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;