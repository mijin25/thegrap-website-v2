/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages를 위한 정적 내보내기 설정
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  // 성능 최적화
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // GitHub Pages를 위한 basePath 설정
  basePath: process.env.NODE_ENV === 'production' ? '/thegrap-website-v2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/thegrap-website-v2' : '',
}

module.exports = nextConfig
