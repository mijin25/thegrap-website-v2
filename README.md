# The Grap - Next.js Portfolio

현대적인 크리에이티브 에이전시 포트폴리오 웹사이트를 Next.js + React + TypeScript로 개발했습니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: GSAP
- **Font**: PP Neue Montreal, Kakao Small Sans

## ✨ 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **GSAP 애니메이션**: 부드럽고 인터랙티브한 애니메이션
- **SEO 최적화**: Next.js의 내장 SEO 기능 활용
- **성능 최적화**: 이미지 최적화, 폰트 최적화
- **접근성**: WCAG 가이드라인 준수

## 🛠️ 개발 환경 설정

### 1. Node.js 설치
```bash
# Node.js 18.x 이상 필요
node --version
npm --version
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📁 프로젝트 구조

```
thegrap-nextjs/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css     # 글로벌 스타일
│   │   ├── layout.tsx      # 루트 레이아웃
│   │   └── page.tsx        # 홈페이지
│   └── components/         # React 컴포넌트
│       └── HeroCarousel.tsx
├── public/                 # 정적 파일
│   ├── fonts/             # 웹폰트
│   └── assets/            # 이미지, 비디오
├── tailwind.config.js     # Tailwind 설정
├── next.config.js         # Next.js 설정
└── tsconfig.json          # TypeScript 설정
```

## 🎨 디자인 시스템

### 색상
- **Primary**: #ccff00 (라임 그린)
- **Background**: #000000 (검정)
- **Text**: #ffffff (흰색)

### 타이포그래피
- **Primary Font**: PP Neue Montreal (영문)
- **Secondary Font**: Kakao Small Sans (한글)

### 간격 시스템
8px 기반 그리드 시스템 사용

## 🚀 배포

### Vercel 배포 (권장)
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 수동 빌드
```bash
npm run build
npm run start
```

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🔧 개발 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 실행
```

## 📄 라이센스

MIT License
