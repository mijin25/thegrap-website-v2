'use client'

import { useState, useEffect } from 'react'

// 슬라이드 데이터 타입 정의
interface Slide {
  id: number
  headline: string
  backgroundImage: string
  mobileBackgroundImage: string
  videoUrl?: string
  mediaType: 'video' | 'image'
}

// 슬라이드 데이터
const slides: Slide[] = [
  {
    id: 1,
    headline: 'Imagine more create better',
    backgroundImage: '/assets/hero-background-desktop.jpg',
    mobileBackgroundImage: '/assets/hero-background-mobile.jpg',
    videoUrl: '/assets/hero-video-1-desktop.mp4',
    mediaType: 'video'
  },
  {
    id: 2,
    headline: 'Design with purpose',
    backgroundImage: '/assets/hero-background-desktop-2.jpg',
    mobileBackgroundImage: '/assets/hero-background-mobile-2.jpg',
    videoUrl: '/assets/hero-video-2-desktop.mp4',
    mediaType: 'video'
  },
  {
    id: 3,
    headline: 'Build connections',
    backgroundImage: '/assets/hero-background-desktop-3.jpg',
    mobileBackgroundImage: '/assets/hero-background-mobile-3.jpg',
    mediaType: 'image'
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // 자동 슬라이드 전환
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // 이전 슬라이드
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // 다음 슬라이드
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section id="home" className="hero-carousel-section" aria-label="메인 히어로 슬라이드쇼">
      {/* 캐러셀 컨테이너 */}
      <div className="hero-carousel-container" role="region" aria-label="슬라이드쇼 컨테이너">
        {/* 히어로 슬라이드 영역 (3등분 구조) */}
        <button 
          className="hero-slide-area hero-slide-left" 
          data-direction="prev" 
          aria-label="이전 슬라이드"
          type="button"
          onClick={prevSlide}
        />
        <div className="hero-slide-area hero-slide-center" 
             data-direction="none" 
             aria-hidden="true">
        </div>
        <button 
          className="hero-slide-area hero-slide-right" 
          data-direction="next" 
          aria-label="다음 슬라이드"
          type="button"
          onClick={nextSlide}
        />

        {/* 슬라이드들 */}
        {slides.map((slide, index) => (
          <article 
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            data-slide={slide.id} 
            data-media-type={slide.mediaType}
            aria-label={`슬라이드 ${slide.id}: ${slide.headline}`}
          >
            {/* 배경 이미지 */}
            <div 
              className="hero-slide-background" 
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              aria-hidden="true"
            />

            {/* 영상 배경 (비디오 슬라이드인 경우) */}
            {slide.mediaType === 'video' && slide.videoUrl && (
              <div className="hero-slide-video" aria-hidden="true">
                <video autoPlay muted loop playsInline aria-label="배경 영상">
                  <source src={slide.videoUrl} type="video/mp4" media="(min-width: 768px)" />
                  <source src={slide.videoUrl} type="video/mp4" media="(max-width: 767px)" />
                </video>
              </div>
            )}

            {/* 슬라이드 콘텐츠 */}
            <header className="hero-slide-content">
              <h1 className="hero-headline">{slide.headline}</h1>
              <div className="hero-cta-pagination-block">
                <div className="hero-cta-container">
                  <a href="#about" className="btn btn-small" aria-label="더 알아보기">
                    <span className="btn-text">Learn More</span>
                    <div className="btn-icon" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 12.0039H20" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M13 5L20.0036 12L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </a>
                </div>
                <nav className="hero-pagination" aria-label="슬라이드 네비게이션">
                  <span className="pagination-current" aria-current="page">{currentSlide + 1}</span>
                  <span className="pagination-divider" aria-hidden="true">/</span>
                  <span className="pagination-total">{slides.length}</span>
                </nav>
              </div>
            </header>
          </article>
        ))}
      </div>
    </section>
  )
}