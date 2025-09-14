'use client'

import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

// 프로젝트 데이터 타입 정의
interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  year: string
  link: string
  tags: string[]
}

// 프로젝트 데이터
const projects: Project[] = [
  {
    id: 1,
    title: "2025 Lee Gikwang Solo Concert HK",
    description: "K-POP 솔로 콘서트 브랜딩 및 디지털 마케팅 캠페인을 기획하고 실행했습니다. 아시아 전역의 팬들과 아티스트를 연결하는 감각적인 경험을 제공했습니다.",
    image: "/assets/work/2025-lee-gikwang-solo-concert-hk_00-hero.jpg",
    category: "Performance Business",
    year: "2025",
    link: "#",
    tags: ["Branding", "Digital Marketing", "Event Planning"]
  },
  {
    id: 2,
    title: "ENT Website Builder",
    description: "엔터테인먼트 업계를 위한 웹사이트 빌더 플랫폼을 개발했습니다. 직관적인 인터페이스와 강력한 기능으로 아티스트들이 쉽게 자신만의 웹사이트를 만들 수 있도록 했습니다.",
    image: "/assets/work/ent-website-builder_00-hero.webp",
    category: "Digital Experience",
    year: "2024",
    link: "#",
    tags: ["Web Development", "UI/UX Design", "Platform"]
  },
  {
    id: 3,
    title: "Opily Website",
    description: "혁신적인 디지털 플랫폼의 웹사이트를 디자인하고 개발했습니다. 현대적이고 사용자 친화적인 인터페이스로 브랜드의 혁신성을 효과적으로 전달했습니다.",
    image: "/assets/work/opily-website_00-hero.webp",
    category: "Digital Experience",
    year: "2024",
    link: "#",
    tags: ["Web Design", "Brand Identity", "User Experience"]
  },
  {
    id: 4,
    title: "Samsung Referral Program",
    description: "삼성의 리퍼럴 프로그램을 위한 디지털 캠페인을 기획하고 실행했습니다. 브랜드의 가치를 전달하면서 사용자 참여를 극대화하는 전략을 수립했습니다.",
    image: "/assets/work/samsung-referral-program_00-hero.webp",
    category: "Creative Visuals",
    year: "2024",
    link: "#",
    tags: ["Campaign", "Visual Design", "Digital Marketing"]
  },
  {
    id: 5,
    title: "SK SKON",
    description: "SK SKON의 브랜드 아이덴티티와 디지털 경험을 디자인했습니다. 브랜드의 고유한 특성을 시각적으로 표현하고 사용자와의 연결을 강화했습니다.",
    image: "/assets/work/sk-skon_00-hero.webp",
    category: "Creative Visuals",
    year: "2024",
    link: "#",
    tags: ["Brand Identity", "Visual Design", "Digital Experience"]
  }
]

export default function WorkPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="min-h-screen bg-black text-white pt-20">
        {/* 히어로 섹션 */}
        <section className="hero-section py-24 px-8">
          <div className="container max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-primary font-medium text-white mb-8">
              Our Work
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              브랜딩, 웹 디자인, 디지털 마케팅 분야에서의 다양한 프로젝트들을 확인해보세요.
            </p>
          </div>
        </section>

        {/* 프로젝트 필터 */}
        <section className="filter-section py-8 px-8 border-b border-gray-800">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4">
              <button className="filter-btn active px-6 py-2 bg-primary-500 text-black font-primary font-medium rounded-full">
                All
              </button>
              <button className="filter-btn px-6 py-2 bg-gray-800 text-white font-primary font-medium rounded-full hover:bg-gray-700 transition-colors">
                Digital Experience
              </button>
              <button className="filter-btn px-6 py-2 bg-gray-800 text-white font-primary font-medium rounded-full hover:bg-gray-700 transition-colors">
                Performance Business
              </button>
              <button className="filter-btn px-6 py-2 bg-gray-800 text-white font-primary font-medium rounded-full hover:bg-gray-700 transition-colors">
                Creative Visuals
              </button>
            </div>
          </div>
        </section>

        {/* 프로젝트 그리드 */}
        <section className="projects-section py-24 px-8">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="project-card group cursor-pointer"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-[4/3] mb-6">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  </div>
                  
                  <div className="project-info">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-primary-500 font-primary font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-400 font-secondary">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-primary font-medium text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 font-secondary leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 text-sm font-secondary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="cta-section py-24 px-8 bg-gray-900">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-primary font-medium text-white mb-8">
              프로젝트를 시작하고 싶으신가요?
            </h2>
            <p className="text-lg text-gray-400 mb-12">
              브랜드의 잠재력을 최대한 발휘할 수 있도록 도와드리겠습니다.
            </p>
            <button className="btn btn-large group">
              <span className="btn-text">프로젝트 문의하기</span>
              <div className="btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12.0039H20" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M13 5L20.0036 12L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </section>
      </main>
    </>
  )
}
