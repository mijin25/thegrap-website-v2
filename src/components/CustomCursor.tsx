'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const text = textRef.current

    if (!cursor || !text) return

    // 마우스 위치 추적
    let mouseX = 0
    let mouseY = 0

    // 마우스 이동 이벤트 - Revenant 방식
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // 직접 CSS transform 사용 (Revenant 방식)
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
    }

    // 애니메이션 루프 제거 - 마우스 이벤트에서 즉시 처리

    // 일반 호버 가능한 요소들 (버튼, 링크, 네비게이션)
    const hoverableElements = document.querySelectorAll('a, button, .navbar-link')
    
    // 프로젝트 카드 요소들
    const projectCards = document.querySelectorAll('.project-card')
    
    // 히어로 네비게이션 요소들 (화살표 버튼)
    const heroNavElements = document.querySelectorAll('.hero-slide-left, .hero-slide-right')

    // 기본 호버 효과 - 초고속 최적화
    const handleDefaultHover = () => {
      cursor.style.transition = 'width 0.15s ease-out, height 0.15s ease-out'
      cursor.style.width = '2rem'
      cursor.style.height = '2rem'
    }

    // 뷰 커서 효과 (프로젝트 카드) - 초고속 최적화
    const handleViewCursor = () => {
      // 블렌드 모드 즉시 해제
      cursor.style.mixBlendMode = 'normal'
      
      // 텍스트 visibility 즉시 설정
      text.style.visibility = 'visible'
      
      // 클래스 추가 (CSS visibility 제어)
      cursor.classList.add('cursor-view-active')
      
      // CSS transition으로 즉시 처리 (GSAP 없이)
      cursor.style.transition = 'width 0.2s ease-out, height 0.2s ease-out'
      cursor.style.width = '7rem'
      cursor.style.height = '7rem'
      
      // 텍스트는 약간의 지연 후 표시
      setTimeout(() => {
        text.style.transition = 'opacity 0.15s ease-out'
        text.style.opacity = '1'
      }, 100)
    }

    // 네비게이션 커서 효과 (히어로 화살표) - 초고속 최적화
    const handleNavCursor = () => {
      // 블렌드 모드 즉시 해제
      cursor.style.mixBlendMode = 'normal'
      
      // 커서 확대
      cursor.style.transition = 'width 0.2s ease-out, height 0.2s ease-out'
      cursor.style.width = '4rem'
      cursor.style.height = '4rem'
      
      // 화살표 아이콘 표시
      const icon = cursor.querySelector('.cursor-icon') as HTMLElement
      if (icon) {
        setTimeout(() => {
          icon.style.transition = 'opacity 0.15s ease-out'
          icon.style.opacity = '1'
        }, 50)
      }
      
      cursor.classList.add('cursor-nav-active')
    }

    // 커서 리셋 - 초고속 최적화
    const resetCursor = () => {
      // 텍스트/아이콘 즉시 숨김
      text.style.transition = 'opacity 0.1s ease-out'
      text.style.opacity = '0'
      
      const icon = cursor.querySelector('.cursor-icon') as HTMLElement
      if (icon) {
        icon.style.transition = 'opacity 0.1s ease-out'
        icon.style.opacity = '0'
      }
      
      // 커서 축소
      cursor.style.transition = 'width 0.15s ease-out, height 0.15s ease-out'
      cursor.style.width = '1rem'
      cursor.style.height = '1rem'
      
      // 애니메이션 완료 후 클래스 제거 및 블렌드 모드 복원
      setTimeout(() => {
        cursor.classList.remove('cursor-view-active', 'cursor-nav-active')
        // 블렌드 모드 복원
        cursor.style.mixBlendMode = 'difference'
        // 텍스트 visibility 숨김
        text.style.visibility = 'hidden'
        // transition 초기화
        cursor.style.transition = ''
        text.style.transition = ''
        if (icon) icon.style.transition = ''
      }, 150)
    }

    // 이벤트 리스너 등록
    document.addEventListener('mousemove', handleMouseMove)
    
    // 일반 호버 요소들
    hoverableElements.forEach(element => {
      element.addEventListener('mouseenter', handleDefaultHover)
      element.addEventListener('mouseleave', resetCursor)
    })
    
    // 프로젝트 카드들
    projectCards.forEach(element => {
      element.addEventListener('mouseenter', handleViewCursor)
      element.addEventListener('mouseleave', resetCursor)
    })
    
    // 히어로 네비게이션 요소들
    heroNavElements.forEach(element => {
      element.addEventListener('mouseenter', handleNavCursor)
      element.addEventListener('mouseleave', resetCursor)
    })

    // 마우스 이벤트 리스너 등록
    document.addEventListener('mousemove', handleMouseMove)

    // 초기 커서 숨김
    gsap.set(cursor, { opacity: 0 })
    gsap.set(text, { opacity: 0 })

    // 마우스 움직임 감지 시 커서 표시
    const showCursor = () => {
      gsap.to(cursor, {
        opacity: 1,
        duration: 0.3
      })
    }

    document.addEventListener('mousemove', showCursor, { once: true })

    // 정리 함수
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      hoverableElements.forEach(element => {
        element.removeEventListener('mouseenter', handleDefaultHover)
        element.removeEventListener('mouseleave', resetCursor)
      })
      projectCards.forEach(element => {
        element.removeEventListener('mouseenter', handleViewCursor)
        element.removeEventListener('mouseleave', resetCursor)
      })
      heroNavElements.forEach(element => {
        element.removeEventListener('mouseenter', handleNavCursor)
        element.removeEventListener('mouseleave', resetCursor)
      })
    }
  }, [])

  return (
    <div 
      ref={cursorRef}
      className="cursor-default"
    >
      <span ref={textRef} className="cursor-text">View</span>
      <div className="cursor-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M12 8L20 16L12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}