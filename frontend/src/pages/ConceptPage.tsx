import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Earth Zoom AI 概念说明页面
 * 详细介绍Earth Zoom AI技术的核心概念和价值
 */
const ConceptPage = () => {
  // SEO优化 - 设置页面标题和描述
  useEffect(() => {
    document.title = 'Earth Zoom AI Concept - Revolutionary AI Video Technology | Infinite Zoom Effects';
    
    // 更新meta描述
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover the revolutionary Earth Zoom AI concept - advanced artificial intelligence technology that creates infinite zoom effects from any image to cosmic Earth perspective. Learn about our breakthrough video generation technology.');
    }

    // 添加Article结构化数据
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Earth Zoom AI Technology Concept - Revolutionary AI Video Generation",
      "description": "Comprehensive guide to Earth Zoom AI concept, exploring how artificial intelligence creates infinite zoom effects from micro to cosmic perspective with breakthrough video generation technology.",
      "image": {
        "@type": "ImageObject",
        "url": "https://earthzoomai.org/images/earth-zoom/concept/ai-technology-concept.jpg",
        "width": 1200,
        "height": 630,
        "caption": "Earth Zoom AI Technology Concept Visualization"
      },
      "author": {
        "@type": "Organization",
        "name": "Earth Zoom AI Team",
        "url": "https://earthzoomai.org"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Earth Zoom AI",
        "logo": {
          "@type": "ImageObject",
          "url": "https://earthzoomai.org/images/earth-zoom/logos/earth-zoom-ai-logo.png",
          "width": 400,
          "height": 120
        }
      },
      "datePublished": "2024-01-14T00:00:00Z",
      "dateModified": "2024-01-14T12:00:00Z",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://earthzoomai.org/concept"
      },
      "articleSection": "Technology",
      "keywords": ["earth zoom ai", "ai video generator", "infinite zoom", "artificial intelligence", "video generation", "cosmic perspective", "technology concept"],
      "wordCount": 2500,
      "inLanguage": "en-US",
      "isFamilyFriendly": true,
      "educationalUse": ["Research", "Learning", "Professional Development"],
      "learningResourceType": "Guide",
      "about": [
        {
          "@type": "Thing",
          "name": "Artificial Intelligence",
          "description": "Advanced AI algorithms for video generation"
        },
        {
          "@type": "Thing", 
          "name": "Video Technology",
          "description": "Revolutionary zoom-out video effects"
        },
        {
          "@type": "Thing",
          "name": "Computer Vision",
          "description": "Image analysis and processing technology"
        }
      ],
      "mentions": [
        {
          "@type": "SoftwareApplication",
          "name": "Earth Zoom AI Platform",
          "applicationCategory": "MultimediaApplication"
        }
      ]
    };

    // 添加到页面head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(script);

    // 添加面包屑导航结构化数据
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "首页",
          "item": "https://earthzoomai.org"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "技术概念",
          "item": "https://earthzoomai.org/concept"
        }
      ]
    };

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // 清理函数
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('"@type": "Article"') && script.textContent?.includes('Earth Zoom AI Technology Concept')) {
          script.remove();
        }
        if (script.textContent?.includes('"@type": "BreadcrumbList"') && script.textContent?.includes('技术概念')) {
          script.remove();
        }
      });
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* 面包屑导航 */}
      <nav className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-earth-blue hover:text-earth-blue/80 transition-colors">首页</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">技术概念</span>
          </div>
        </div>
      </nav>
      
      {/* Hero区域 */}
      <section className="relative bg-gradient-to-br from-earth-blue via-space-dark to-cosmic-purple py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stellar-silver mb-6">
              Earth Zoom AI
              <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent block">
                Technology Concept
              </span>
            </h1>
            <p className="text-xl text-stellar-silver/90 mb-8">
              Experience unprecedented AI video generation with infinite zoom capabilities. 
              Earth Zoom AI opens the gateway to limitless visual storytelling and cosmic perspective creation.
            </p>
            
            <div className="flex justify-center">
              <img 
                src="/images/earth-zoom/icons/earth-globe.svg" 
                alt="Earth Zoom AI概念" 
                className="w-32 h-32 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 核心概念解释 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">What is Earth Zoom AI Video Generator?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earth Zoom AI is revolutionary <Link to="/technology" className="text-earth-blue hover:text-earth-blue/80 underline">artificial intelligence technology</Link> that creates continuous zoom sequences from any starting point, ultimately revealing Earth's magnificent cosmic perspective through advanced video generation algorithms. Explore real-world <Link to="/applications" className="text-cosmic-purple hover:text-cosmic-purple/80 underline">applications and use cases</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-space-dark mb-6">AI Video Generation Technology</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-earth-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-dark mb-2">Intelligent Image Analysis</h4>
                    <p className="text-gray-600">Advanced AI algorithms analyze image content, composition, and visual features to identify optimal zoom starting points and paths for video generation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-cosmic-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-dark mb-2">Seamless Transition Creation</h4>
                    <p className="text-gray-600">Through advanced AI models, generate intermediate level image content ensuring visual coherence throughout the zoom video process.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-solar-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-space-dark mb-2">Earth Perspective Integration</h4>
                    <p className="text-gray-600">Finally integrate all levels into Earth's space perspective, creating stunning visual impact effects for ultimate cosmic zoom videos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-earth-blue/10 to-cosmic-purple/10 rounded-2xl p-8">
              <div className="text-center">
                <img 
                  src="/images/earth-zoom/icons/zoom-out.svg" 
                  alt="缩放概念" 
                  className="w-24 h-24 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-space-dark mb-4">Infinite Zoom Video Levels</h3>
                <p className="text-gray-600 mb-6">
                  From pixel-level details to cosmic scale perspectives, Earth Zoom AI creates theoretically infinite zoom levels for stunning video effects.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-earth-blue">10²</div>
                    <div className="text-sm text-gray-500">米级</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cosmic-purple">10⁶</div>
                    <div className="text-sm text-gray-500">公里级</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-solar-gold">∞</div>
                    <div className="text-sm text-gray-500">无限级</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 视觉原理展示 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">AI Video Technology Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Earth Zoom AI breaks through traditional visual limitations to create unprecedented zoom out video experiences with artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 传统缩放 */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Traditional Zoom</h3>
              <p className="text-gray-600 mb-4">Limited zoom capabilities</p>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 bg-gray-400 rounded" style={{width: '30%'}}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">缩放能力限制</p>
            </div>

            {/* AI增强缩放 */}
            <div className="card p-8 text-center border-earth-blue/50">
              <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/images/earth-zoom/icons/zoom-in.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">AI Enhanced Zoom</h3>
              <p className="text-gray-600 mb-4">Intelligent content completion</p>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 bg-earth-blue rounded" style={{width: '70%'}}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">显著提升缩放范围</p>
            </div>

            {/* Earth Zoom AI */}
            <div className="card p-8 text-center border-cosmic-purple/50 relative overflow-hidden">
              <div className="absolute top-2 right-2 bg-solar-gold text-white text-xs px-2 py-1 rounded-full">NEW</div>
              <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/images/earth-zoom/icons/earth-globe.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">Earth Zoom AI</h3>
              <p className="text-gray-600 mb-4">Infinite zoom possibilities</p>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-2 bg-gradient-to-r from-cosmic-purple to-solar-gold rounded" style={{width: '100%'}}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">突破一切限制</p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心价值主张 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">Core Value Propositions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earth Zoom AI is not just a technology, but a revolutionary visual language and creative expression platform for AI video generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-3">Breakthrough Innovation</h3>
              <p className="text-gray-600 text-sm">Revolutionary visual technology opening new possibilities for content creation and AI video generation</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-3">Educational Technology</h3>
              <p className="text-gray-600 text-sm">Intuitive scale concept demonstration, enhancing geography and astronomy learning effectiveness</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <img src="/images/earth-zoom/ui-icons/share.svg" alt="" className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-3">Marketing Video Power</h3>
              <p className="text-gray-600 text-sm">Powerful visual impact enhancing brand communication effectiveness and user engagement rates</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-stellar-silver/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-10 h-10 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-3">Creative AI Expression</h3>
              <p className="text-gray-600 text-sm">Providing artists with new creative mediums and expression dimensions through AI video technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-20 bg-gradient-to-br from-space-dark to-cosmic-purple text-stellar-silver">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore
            <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent">Infinite Perspectives</span>
            ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover Earth Zoom AI applications and technical implementation to begin your visual innovation journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/applications" 
              className="btn-primary bg-gradient-to-r from-solar-gold to-earth-blue text-space-dark hover:from-solar-gold/90 hover:to-earth-blue/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Applications
            </Link>
            
            <Link 
              to="/technology" 
              className="btn-secondary bg-transparent border-2 border-stellar-silver text-stellar-silver hover:bg-stellar-silver/10 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Learn Technology
            </Link>
          </div>
        </div>
      </section>

      {/* 相关页面推荐 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-space-dark mb-4">继续探索Earth Zoom AI</h2>
            <p className="text-gray-600">深入了解更多技术细节和实际应用</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Link to="/applications" className="group card p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl hover:border-cosmic-purple/50 bg-white">
              <div className="w-12 h-12 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cosmic-purple/20 transition-colors">
                <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-2 group-hover:text-cosmic-purple transition-colors">Real Applications</h3>
              <p className="text-gray-600 text-sm">Discover how Earth Zoom AI transforms education, marketing, and creative projects</p>
            </Link>

            <Link to="/technology" className="group card p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl hover:border-solar-gold/50 bg-white">
              <div className="w-12 h-12 bg-solar-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-solar-gold/20 transition-colors">
                <svg className="w-6 h-6 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-2 group-hover:text-solar-gold transition-colors">Technical Deep Dive</h3>
              <p className="text-gray-600 text-sm">Explore the 4-layer AI architecture and advanced algorithms behind the magic</p>
            </Link>

            <Link to="/resources" className="group card p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl hover:border-stellar-silver/50 bg-white">
              <div className="w-12 h-12 bg-stellar-silver/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-stellar-silver/20 transition-colors">
                <svg className="w-6 h-6 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-2 group-hover:text-stellar-silver transition-colors">Developer Resources</h3>
              <p className="text-gray-600 text-sm">Access API documentation, SDKs, and code samples to integrate Earth Zoom AI</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConceptPage; 