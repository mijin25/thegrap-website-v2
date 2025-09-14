'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // 컴포넌트 마운트 확인
  useEffect(() => {
    setMounted(true);
  }, []);

  // 스크롤 감지 및 네비게이션 상태 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // 현재 섹션 감지
      const sections = ['about', 'work', 'designers', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || 'about');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 메뉴 클릭 핸들러 (스크롤 이동 제거)
  const handleMenuClick = () => {
    // 현재는 페이지 이동 없이 클릭 이벤트만 처리
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* 로고 */}
                 <div className="navbar-brand">
                   <Link href="/" className="navbar-logo" onClick={handleMenuClick}>
                     <img src="/assets/logo.svg" alt="The Grap" />
                   </Link>
                 </div>
          
          {/* 데스크톱 메뉴와 액션 버튼들 */}
          <div className="navbar-right">
            <div className="navbar-links">
              <button 
                className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                <span className="navbar-link-text">
                  <span className="navbar-link-text-inner">About</span>
                  <span className="navbar-link-text-inner">About</span>
                </span>
              </button>
              <button 
                className={`navbar-link ${activeSection === 'work' ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                <span className="navbar-link-text">
                  <span className="navbar-link-text-inner">Work</span>
                  <span className="navbar-link-text-inner">Work</span>
                </span>
              </button>
              <button 
                className={`navbar-link ${activeSection === 'designers' ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                <span className="navbar-link-text">
                  <span className="navbar-link-text-inner">All by Designers</span>
                  <span className="navbar-link-text-inner">All by Designers</span>
                </span>
              </button>
              <button 
                className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                <span className="navbar-link-text">
                  <span className="navbar-link-text-inner">Contact</span>
                  <span className="navbar-link-text-inner">Contact</span>
                </span>
              </button>
            </div>
            
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label={mounted && theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
            >
              {mounted && theme === 'light' ? (
                <img src="/assets/icon_dark-mode.svg" alt="다크모드로 전환" />
              ) : (
                <img src="/assets/icon_light-mode.svg" alt="라이트모드로 전환" />
              )}
            </button>
            
            {/* 모바일 메뉴 버튼 */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="메뉴 토글"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* 모바일 메뉴 오버레이 */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu">
            <div className="mobile-menu-links">
              <button 
                className={`mobile-menu-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                About
              </button>
              <button 
                className={`mobile-menu-link ${activeSection === 'work' ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                Work
              </button>
              <button 
                className={`mobile-menu-link ${activeSection === 'designers' ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                All by Designers
              </button>
              <button 
                className={`mobile-menu-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={handleMenuClick}
              >
                Contact
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;