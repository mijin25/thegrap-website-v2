import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'About - The Grap',
  description: 'The Grap에 대해 더 자세히 알아보세요. 우리의 미션, 비전, 그리고 팀에 대한 정보를 확인할 수 있습니다.',
}

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="min-h-screen bg-black text-white pt-20">
        {/* 히어로 섹션 */}
        <section className="hero-section py-24 px-8">
          <div className="container max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-primary font-medium text-white mb-8">
              About The Grap
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              혁신적인 크리에이티브 에이전시로서 브랜딩, 웹 디자인, 디지털 마케팅 서비스를 제공합니다.
            </p>
          </div>
        </section>

        {/* 미션 섹션 */}
        <section className="mission-section py-24 px-8 bg-gray-900">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-primary font-medium text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed mb-6">
                  우리는 브랜드의 본질을 파악하고, 이를 시각적으로 표현하여 고객과의 깊이 있는 소통을 추구합니다.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  모든 프로젝트는 브랜드의 고유한 특성을 반영하며, 사용자 경험을 최우선으로 고려합니다.
                </p>
              </div>
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-primary font-medium text-white mb-4">
                  핵심 가치
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-400">창의적 혁신</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-400">사용자 중심 설계</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-400">품질 우선</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-gray-400">협업과 소통</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 팀 섹션 */}
        <section className="team-section py-24 px-8">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-4xl font-primary font-medium text-white mb-16 text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 팀 멤버 카드들 */}
              <div className="team-member bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-primary font-medium text-white mb-2 text-center">
                  Creative Director
                </h3>
                <p className="text-gray-400 text-center">
                  브랜드 아이덴티티와 크리에이티브 디렉션을 담당합니다.
                </p>
              </div>
              
              <div className="team-member bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-primary font-medium text-white mb-2 text-center">
                  UI/UX Designer
                </h3>
                <p className="text-gray-400 text-center">
                  사용자 경험과 인터페이스 디자인을 담당합니다.
                </p>
              </div>
              
              <div className="team-member bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-primary font-medium text-white mb-2 text-center">
                  Developer
                </h3>
                <p className="text-gray-400 text-center">
                  웹 개발과 기술 구현을 담당합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
