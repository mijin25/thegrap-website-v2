import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Grap - Creative Agency',
  description: 'The Grap은 혁신적인 크리에이티브 에이전시입니다. 브랜딩, 웹 디자인, 디지털 마케팅 서비스를 제공합니다.',
  keywords: '크리에이티브 에이전시, 브랜딩, 웹 디자인, 디지털 마케팅, UI/UX 디자인',
  authors: [{ name: 'The Grap' }],
  robots: 'index, follow',
  
  // Open Graph 메타데이터
  openGraph: {
    title: 'The Grap - Creative Agency',
    description: '혁신적인 크리에이티브 에이전시 The Grap',
    type: 'website',
    url: 'https://thegrap.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Grap Creative Agency',
      },
    ],
  },
  
  // Twitter Card 메타데이터
  twitter: {
    card: 'summary_large_image',
    title: 'The Grap - Creative Agency',
    description: '혁신적인 크리에이티브 에이전시 The Grap',
    images: ['/twitter-image.jpg'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ccff00',
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        {/* 폰트 preload */}
        <link
          rel="preload"
          href="/assets/fonts/KakaoSmallSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/PPNeueMontreal-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} fonts-loading`}>
        <ThemeProvider>
          {/* 커스텀 커서 */}
          <CustomCursor />
          
          {/* 네비게이션 바 */}
          <Navbar />
          
          {/* 메인 콘텐츠 */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
