import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Earth Zoom AI 资源支持页面
 * 提供开发资源、文档、API接口等支持信息
 */
const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero区域 */}
      <section className="relative bg-gradient-to-br from-solar-gold via-earth-blue to-cosmic-purple py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stellar-silver mb-6">
              开发资源
              <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent block">
                全面支持
              </span>
            </h1>
            <p className="text-xl text-stellar-silver/90 mb-8">
              获取完整的开发文档、API接口、示例代码和技术支持，
              快速集成Earth Zoom AI到您的项目中。
            </p>
          </div>
        </div>
      </section>

      {/* 资源分类 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">开发资源</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从API文档到示例代码，为开发者提供全面的技术支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* API文档 */}
            <div className="card p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">API文档</h3>
              <p className="text-gray-600 mb-6">详细的RESTful API文档和GraphQL接口说明</p>
              <button className="btn-primary bg-earth-blue text-white px-6 py-2 rounded-full hover:bg-earth-blue/90 transition-all duration-300">
                查看文档
              </button>
            </div>

            {/* SDK下载 */}
            <div className="card p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/images/earth-zoom/ui-icons/download.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">SDK下载</h3>
              <p className="text-gray-600 mb-6">支持Python、JavaScript、Java等多种开发语言</p>
              <button className="btn-primary bg-cosmic-purple text-white px-6 py-2 rounded-full hover:bg-cosmic-purple/90 transition-all duration-300">
                下载SDK
              </button>
            </div>

            {/* 示例代码 */}
            <div className="card p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">示例代码</h3>
              <p className="text-gray-600 mb-6">丰富的代码示例和最佳实践指南</p>
              <button className="btn-primary bg-solar-gold text-white px-6 py-2 rounded-full hover:bg-solar-gold/90 transition-all duration-300">
                获取示例
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 快速开始 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">快速开始</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              三个步骤即可开始使用Earth Zoom AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 步骤1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-earth-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-4">注册账号</h3>
                <p className="text-gray-600 mb-6">创建开发者账号，获取API密钥</p>
                <div className="bg-gray-100 rounded-lg p-4 text-left">
                  <code className="text-sm text-gray-800">
                    curl -X POST<br/>
                    https://api.earthzoom.ai/register<br/>
                    -d "email=your@email.com"
                  </code>
                </div>
              </div>

              {/* 步骤2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-cosmic-purple rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-4">安装SDK</h3>
                <p className="text-gray-600 mb-6">通过包管理器安装SDK</p>
                <div className="bg-gray-100 rounded-lg p-4 text-left">
                  <code className="text-sm text-gray-800">
                    npm install earth-zoom-ai<br/>
                    # 或<br/>
                    pip install earth-zoom-ai
                  </code>
                </div>
              </div>

              {/* 步骤3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-solar-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-4">开始使用</h3>
                <p className="text-gray-600 mb-6">调用API生成第一个视频</p>
                <div className="bg-gray-100 rounded-lg p-4 text-left">
                  <code className="text-sm text-gray-800">
                    import EarthZoomAI<br/>
                    client = EarthZoomAI(api_key)<br/>
                    video = client.generate(image)
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术支持 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">技术支持</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专业团队为您提供全方位技术支持
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 文档中心 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-space-dark mb-2">文档中心</h3>
              <p className="text-gray-600 text-sm">完整的开发文档和教程</p>
            </div>

            {/* 社区论坛 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m0 0V8a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h4z" />
                </svg>
              </div>
              <h3 className="font-bold text-space-dark mb-2">社区论坛</h3>
              <p className="text-gray-600 text-sm">与其他开发者交流讨论</p>
            </div>

            {/* 在线客服 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-space-dark mb-2">在线客服</h3>
              <p className="text-gray-600 text-sm">7×24小时技术支持</p>
            </div>

            {/* 企业服务 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-stellar-silver/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-space-dark mb-2">企业服务</h3>
              <p className="text-gray-600 text-sm">定制化解决方案</p>
            </div>
          </div>
        </div>
      </section>

      {/* 定价方案 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">定价方案</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              灵活的定价方案满足不同规模的项目需求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 免费版 */}
            <div className="card p-8 text-center">
              <h3 className="text-xl font-bold text-space-dark mb-4">免费版</h3>
              <div className="text-3xl font-bold text-earth-blue mb-6">$0<span className="text-lg text-gray-500">/月</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  每月10次调用
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  1080p视频质量
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  基础技术支持
                </li>
              </ul>
              <button className="w-full btn-primary bg-gray-200 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-300 transition-all duration-300">
                免费试用
              </button>
            </div>

            {/* 专业版 */}
            <div className="card p-8 text-center border-cosmic-purple/50 relative">
              <div className="absolute top-4 right-4 bg-cosmic-purple text-white text-xs px-2 py-1 rounded-full">推荐</div>
              <h3 className="text-xl font-bold text-space-dark mb-4">专业版</h3>
              <div className="text-3xl font-bold text-cosmic-purple mb-6">$99<span className="text-lg text-gray-500">/月</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  每月1000次调用
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  4K视频质量
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  优先技术支持
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  商业使用授权
                </li>
              </ul>
              <button className="w-full btn-primary bg-cosmic-purple text-white px-6 py-3 rounded-full hover:bg-cosmic-purple/90 transition-all duration-300">
                立即订阅
              </button>
            </div>

            {/* 企业版 */}
            <div className="card p-8 text-center">
              <h3 className="text-xl font-bold text-space-dark mb-4">企业版</h3>
              <div className="text-3xl font-bold text-solar-gold mb-6">定制<span className="text-lg text-gray-500">价格</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  无限次调用
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  8K视频质量
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  专属技术支持
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  定制化开发
                </li>
              </ul>
              <button className="w-full btn-primary bg-solar-gold text-white px-6 py-3 rounded-full hover:bg-solar-gold/90 transition-all duration-300">
                联系销售
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-20 bg-gradient-to-br from-cosmic-purple via-earth-blue to-solar-gold text-stellar-silver">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            开始您的Earth Zoom AI之旅
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            立即获取开发资源，构建下一代视觉应用
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/concept" 
              className="btn-primary bg-gradient-to-r from-solar-gold to-earth-blue text-space-dark hover:from-solar-gold/90 hover:to-earth-blue/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              了解核心概念
            </Link>
            
            <button className="btn-secondary bg-transparent border-2 border-stellar-silver text-stellar-silver hover:bg-stellar-silver/10 px-8 py-3 rounded-full font-medium transition-all duration-300">
              免费注册API
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage; 