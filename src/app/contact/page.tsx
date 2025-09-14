import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Contact - The Grap',
  description: 'The Grap과 함께 프로젝트를 시작하세요. 브랜딩, 웹 디자인, 디지털 마케팅 서비스에 대한 문의를 환영합니다.',
}

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="min-h-screen bg-black text-white pt-20">
        {/* 히어로 섹션 */}
        <section className="hero-section py-24 px-8">
          <div className="container max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-primary font-medium text-white mb-8">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
              프로젝트에 대해 이야기하고 싶으시다면 언제든 연락주세요. 
              브랜드의 잠재력을 최대한 발휘할 수 있도록 도와드리겠습니다.
            </p>
          </div>
        </section>

        {/* 연락처 정보 섹션 */}
        <section className="contact-info-section py-24 px-8">
          <div className="container max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* 연락처 정보 */}
              <div>
                <h2 className="text-3xl font-primary font-medium text-white mb-8">
                  Get In Touch
                </h2>
                
                <div className="space-y-8">
                  <div className="contact-item">
                    <h3 className="text-lg font-primary font-medium text-primary-500 mb-2">
                      이메일
                    </h3>
                    <a 
                      href="mailto:hello@thegrap.com" 
                      className="text-white hover:text-primary-500 transition-colors"
                    >
                      hello@thegrap.com
                    </a>
                  </div>
                  
                  <div className="contact-item">
                    <h3 className="text-lg font-primary font-medium text-primary-500 mb-2">
                      전화
                    </h3>
                    <a 
                      href="tel:+82-2-1234-5678" 
                      className="text-white hover:text-primary-500 transition-colors"
                    >
                      +82-2-1234-5678
                    </a>
                  </div>
                  
                  <div className="contact-item">
                    <h3 className="text-lg font-primary font-medium text-primary-500 mb-2">
                      주소
                    </h3>
                    <p className="text-white">
                      서울특별시 강남구 테헤란로 123<br />
                      The Grap Building 5층
                    </p>
                  </div>
                  
                  <div className="contact-item">
                    <h3 className="text-lg font-primary font-medium text-primary-500 mb-2">
                      소셜 미디어
                    </h3>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="text-white hover:text-primary-500 transition-colors"
                      >
                        Instagram
                      </a>
                      <a 
                        href="#" 
                        className="text-white hover:text-primary-500 transition-colors"
                      >
                        Behance
                      </a>
                      <a 
                        href="#" 
                        className="text-white hover:text-primary-500 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 문의 폼 */}
              <div>
                <h2 className="text-3xl font-primary font-medium text-white mb-8">
                  Send Message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-primary font-medium text-white mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="이름을 입력하세요"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-primary font-medium text-white mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                        placeholder="이메일을 입력하세요"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-primary font-medium text-white mb-2">
                      회사명
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="회사명을 입력하세요"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-primary font-medium text-white mb-2">
                      관심 서비스
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">서비스를 선택하세요</option>
                      <option value="digital-experience">Digital Experience</option>
                      <option value="performance-business">Performance Business</option>
                      <option value="creative-visuals">Creative Visuals</option>
                      <option value="consulting">컨설팅</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-primary font-medium text-white mb-2">
                      메시지 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="프로젝트에 대해 자세히 설명해주세요"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-large group justify-center"
                  >
                    <span className="btn-text">메시지 보내기</span>
                    <div className="btn-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12.0039H20" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M13 5L20.0036 12L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="faq-section py-24 px-8 bg-gray-900">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-4xl font-primary font-medium text-white mb-16 text-center">
              자주 묻는 질문
            </h2>
            
            <div className="space-y-6">
              <div className="faq-item bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-primary font-medium text-white mb-3">
                  프로젝트 진행 기간은 얼마나 걸리나요?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  프로젝트의 규모와 복잡도에 따라 다르지만, 일반적으로 웹사이트 프로젝트는 4-8주, 
                  브랜딩 프로젝트는 6-12주 정도 소요됩니다.
                </p>
              </div>
              
              <div className="faq-item bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-primary font-medium text-white mb-3">
                  프로젝트 비용은 어떻게 산정되나요?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  프로젝트의 범위, 복잡도, 기간을 고려하여 맞춤형 견적을 제공합니다. 
                  상담을 통해 정확한 비용을 안내해드립니다.
                </p>
              </div>
              
              <div className="faq-item bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-primary font-medium text-white mb-3">
                  프로젝트 진행 과정은 어떻게 되나요?
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  기획 → 디자인 → 개발 → 테스트 → 런칭의 단계로 진행되며, 
                  각 단계마다 고객과의 소통을 통해 피드백을 반영합니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
