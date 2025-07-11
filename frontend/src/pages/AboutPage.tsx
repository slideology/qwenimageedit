import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Earth Zoom AI 关于我们页面
 * 介绍Earth Zoom AI的使命、团队和技术理念
 */
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero区域 */}
      <section className="relative bg-gradient-to-br from-earth-blue via-cosmic-purple to-stellar-silver py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              关于我们
              <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent block">
                探索无限视野
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              我们是一群充满激情的技术创新者，致力于用AI技术重新定义视觉体验的边界，
              让每个人都能探索从微观到宏观的无限世界。
            </p>
          </div>
        </div>
      </section>

      {/* 我们的故事 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-space-dark mb-6">我们的故事</h2>
              <p className="text-xl text-gray-600">
                从一个大胆的想法到革命性的技术突破
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-space-dark mb-6">突破视觉边界</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Earth Zoom AI诞生于一个简单而又深刻的观察：人类对视觉尺度的理解往往受限于我们的观察工具。
                  我们想象着，如果能够创造一种技术，让任何图像都能无缝扩展到地球乃至宇宙的视角，
                  那将为教育、艺术和科学带来怎样的变革？
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  2024年，我们的团队开始了这一挑战。通过结合最前沿的AI技术、计算机视觉和深度学习算法，
                  我们开发出了世界上第一个能够实现真正"无限缩放"的AI系统。
                </p>
                <blockquote className="border-l-4 border-earth-blue pl-6 italic text-gray-600">
                  "我们相信，最好的技术应该能够拓展人类的感知边界，而不仅仅是模仿现实。"
                  <cite className="block mt-2 text-sm font-medium text-space-dark">- Earth Zoom AI 创始团队</cite>
                </blockquote>
              </div>
              
              <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
                <div className="text-center">
                  <img 
                    src="/images/earth-zoom/icons/earth-globe.svg" 
                    alt="Earth Zoom AI愿景" 
                    className="w-32 h-32 mx-auto mb-6 animate-float"
                  />
                  <h3 className="text-xl font-bold text-space-dark mb-4">技术里程碑</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">概念验证</span>
                      <span className="text-earth-blue font-medium">2024年3月</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">核心算法突破</span>
                      <span className="text-cosmic-purple font-medium">2024年8月</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">平台发布</span>
                      <span className="text-solar-gold font-medium">2025年1月</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 我们的使命 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-space-dark mb-6">我们的使命</h2>
            <p className="text-xl text-gray-600 mb-12">
              通过AI技术革新视觉体验，让每个人都能探索从微观到宏观的无限世界
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* 使命1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-space-dark mb-3">教育革新</h3>
                <p className="text-gray-600 text-sm">让抽象的概念变得直观可见，提升学习效果</p>
              </div>

              {/* 使命2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-space-dark mb-3">创意启发</h3>
                <p className="text-gray-600 text-sm">为艺术家和创作者提供全新的表达维度</p>
              </div>

              {/* 使命3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V5a2 2 0 00-2 2H8a2 2 0 00-2-2V4m8 2h4l-4 7H12l4-7h4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-space-dark mb-3">科学研究</h3>
                <p className="text-gray-600 text-sm">助力科学可视化和数据呈现的创新</p>
              </div>

              {/* 使命4 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-stellar-silver/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-10 h-10 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-space-dark mb-3">技术普及</h3>
                <p className="text-gray-600 text-sm">让先进技术为更多人所用，促进数字平等</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-space-dark mb-6">核心团队</h2>
              <p className="text-xl text-gray-600">
                来自全球顶尖科技公司和研究机构的专家团队
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 团队成员1 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-earth-blue to-cosmic-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">AI</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-2">AI研发团队</h3>
                <p className="text-cosmic-purple font-medium mb-3">人工智能专家</p>
                <p className="text-gray-600 text-sm">
                  来自斯坦福、MIT等顶尖院校的AI研究员，专精计算机视觉和深度学习领域
                </p>
              </div>

              {/* 团队成员2 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cosmic-purple to-solar-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">UX</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-2">设计团队</h3>
                <p className="text-solar-gold font-medium mb-3">用户体验专家</p>
                <p className="text-gray-600 text-sm">
                  拥有丰富互联网产品设计经验，致力于让复杂技术变得简单易用
                </p>
              </div>

              {/* 团队成员3 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-solar-gold to-earth-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white text-2xl font-bold">DEV</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-2">工程团队</h3>
                <p className="text-earth-blue font-medium mb-3">技术架构师</p>
                <p className="text-gray-600 text-sm">
                  来自Google、Apple等科技巨头的资深工程师，构建稳定可扩展的技术架构
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-space-dark mb-6">我们的价值观</h2>
              <p className="text-xl text-gray-600">
                指导我们前进的核心理念
              </p>
            </div>

            <div className="space-y-8">
              {/* 价值观1 */}
              <div className="card p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-space-dark mb-3">创新突破</h3>
                  <p className="text-gray-600">
                    我们永远追求技术的边界突破，不满足于现状，勇于挑战看似不可能的目标。
                    每一次创新都是为了让技术更好地服务于人类的需求。
                  </p>
                </div>
              </div>

              {/* 价值观2 */}
              <div className="card p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-space-dark mb-3">用户至上</h3>
                  <p className="text-gray-600">
                    我们始终将用户需求放在第一位，致力于创造真正有价值的产品体验。
                    技术的复杂性应该隐藏在简洁易用的界面之后。
                  </p>
                </div>
              </div>

              {/* 价值观3 */}
              <div className="card p-8 flex items-start space-x-6">
                <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-space-dark mb-3">开放共享</h3>
                  <p className="text-gray-600">
                    我们相信知识和技术的力量在于分享。通过开放的态度和合作精神，
                    我们希望与全球的开发者、研究者和创作者共同推进技术进步。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-20 bg-gradient-to-br from-space-dark via-cosmic-purple to-earth-blue text-stellar-silver">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            加入我们的
            <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent">探索之旅</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            无论您是开发者、设计师、研究者还是创作者，我们都欢迎您加入Earth Zoom AI的生态圈，
            一起探索视觉技术的无限可能。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/resources" 
              className="btn-primary bg-gradient-to-r from-solar-gold to-earth-blue text-space-dark hover:from-solar-gold/90 hover:to-earth-blue/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              获取开发资源
            </Link>
            
            <Link 
              to="/applications" 
              className="btn-secondary bg-transparent border-2 border-stellar-silver text-stellar-silver hover:bg-stellar-silver/10 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              查看应用案例
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
