import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TwitterEmbeds from '../components/TwitterEmbeds';
import AdBanner from '../components/AdBanner';
import GoogleAdSenseBanner from '../components/GoogleAdSenseBanner';

/**
 * Earth Zoom AI 网站首页组件
 * 展示Earth Zoom AI技术的概念、应用和核心价值
 * 包含Hero区域、技术特色、应用场景、工作原理和FAQ等区块
 */
const HomePage = () => {
  const { t } = useTranslation();
  
  // FAQ结构化数据
  React.useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Earth Zoom AI technology?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Earth Zoom AI is a revolutionary artificial intelligence platform that transforms any static image into dynamic zoom-out videos, seamlessly transitioning from micro-scale details to a cosmic Earth perspective. Our proprietary 4-layer AI architecture analyzes images, plans optimal zoom paths, generates intermediate content, and synthesizes professional-quality videos automatically."
          }
        },
        {
          "@type": "Question",
          "name": "How can I achieve the best zoom effects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For optimal results, use high-resolution images (1920x1080 or higher) with clear subjects and good composition. Our AI performs best with images that have distinct focal points, rich details, and contrasting elements. Avoid heavily compressed or blurry images. The system automatically analyzes lighting, composition, and subject matter to determine the most visually compelling zoom trajectory."
          }
        },
        {
          "@type": "Question",
          "name": "What image formats and specifications are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We support JPG, PNG, WebP, and TIFF formats with file sizes up to 50MB. Recommended resolution: 1920x1080 minimum, 4K preferred. The platform outputs videos in 1080p, 4K, or 8K resolution (plan-dependent) with H.264/H.265 encoding. Processing maintains original aspect ratios and supports both landscape and portrait orientations."
          }
        },
        {
          "@type": "Question",
          "name": "Which industries benefit most from Earth Zoom AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Education: Universities report 95% higher student engagement. Marketing: Brands achieve 300% better social media performance. Creative Arts: Artists explore new narrative dimensions. Scientific Research: Visualize scale relationships. Media Production: Create viral content. Architecture: Present spatial context effectively."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use generated videos commercially?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! All Earth Zoom AI generated videos come with full commercial usage rights. Use them for marketing campaigns, educational content, social media posts, presentations, and commercial projects. Enterprise plans include extended licensing for broadcast and distribution. You retain ownership of your source images and generated videos. No attribution required, though we appreciate it."
          }
        },
        {
          "@type": "Question",
          "name": "How long does video processing take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Processing times vary by complexity and quality settings: 1080p: 2-5 minutes, 4K: 5-12 minutes, 8K: 15-25 minutes. Our GPU-accelerated infrastructure ensures 99.7% uptime with priority processing for Professional and Enterprise subscribers. Batch processing available for multiple videos with additional time savings."
          }
        },
        {
          "@type": "Question",
          "name": "What are the pricing plans and limitations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Free Tier: 10 videos/month, 1080p quality, watermark included. Professional ($99/month): 1000 videos, 4K quality, no watermark, priority support. Enterprise ($999/month): Unlimited videos, 8K quality, custom branding, dedicated support, API access. Educational institutions receive 50% discount."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer API access and integrations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Our RESTful API supports real-time video generation with webhook notifications. Available SDKs: Python, Node.js, PHP, Java. Pre-built integrations: WordPress, Shopify, Adobe Creative Suite, Canva. Rate limits: 100 requests/hour (Professional), unlimited (Enterprise). Comprehensive documentation, code samples, and sandbox environment included."
          }
        },
        {
          "@type": "Question",
          "name": "How secure is my data and content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enterprise-grade security with SOC 2 Type II compliance. All uploads encrypted with AES-256. Processing occurs in secure, isolated environments. Data automatically deleted after 30 days unless saved. GDPR compliant with EU data residency options. No AI training on user content. Optional private cloud deployment available for Enterprise customers."
          }
        },
        {
          "@type": "Question",
          "name": "What support and training resources are available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Comprehensive support ecosystem: 24/7 live chat, video tutorials, technical documentation, community forum, and webinar training sessions. Professional plans include email support with 4-hour response time. Enterprise customers get dedicated account managers, custom training sessions, and direct engineering support. Extensive knowledge base with 100+ articles and use case examples."
          }
        }
      ]
    };

    // 添加到页面head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    // 清理函数
    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('"@type": "FAQPage"')) {
          script.remove();
        }
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Hero区域 - Earth Zoom AI主题 */}
      <section className="relative bg-gradient-to-br from-earth-blue via-space-dark to-cosmic-purple py-24 overflow-hidden">
        {/* 星空背景效果 */}
        <div className="absolute inset-0 bg-stars opacity-30"></div>
        {/* 渐变光晕效果 */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-cosmic-purple/20 to-space-dark/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* 左侧内容区 */}
            <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
              {/* 品牌标识 */}
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img 
                  src="/images/earth-zoom/icons/earth-zoom-logo.svg" 
                  alt="Earth Zoom AI" 
                  className="h-16 mr-4"
                />
                <div className="text-left">
                  <h1 className="text-5xl lg:text-7xl font-bold text-gradient bg-gradient-to-r from-solar-gold via-stellar-silver to-solar-gold bg-clip-text text-transparent leading-tight">
                    Earth Zoom AI
                  </h1>
                  <p className="text-2xl lg:text-3xl font-semibold text-cosmic-purple">Video Generator</p>
                </div>
              </div>
              
              {/* 主标题和描述 */}
              <h2 className="text-3xl lg:text-4xl font-bold text-stellar-silver leading-tight mb-6">
                Revolutionary AI Video Generator for 
                <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent">Cosmic Zoom Effects</span>
              </h2>
              
              <p className="text-xl text-stellar-silver/90 mb-8 max-w-lg mx-auto lg:mx-0">
                Transform any image into stunning Earth zoom-out videos using artificial intelligence. Create viral content, educational materials, and marketing videos with our revolutionary <Link to="/technology" className="text-solar-gold hover:text-solar-gold/80 underline">zoom effect generator technology</Link>.
              </p>
              
              {/* 核心亮点标签 */}
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-earth-blue/20 border border-earth-blue rounded-full text-stellar-silver text-sm font-medium">
                  🌍 Infinite Zoom Technology
                </span>
                <span className="px-4 py-2 bg-cosmic-purple/20 border border-cosmic-purple rounded-full text-stellar-silver text-sm font-medium">
                  🚀 AI Video Creation
                </span>
                <span className="px-4 py-2 bg-solar-gold/20 border border-solar-gold rounded-full text-stellar-silver text-sm font-medium">
                  ✨ Viral Content Generator
                </span>
              </div>
              
              {/* 行动按钮组 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/concept" 
                  className="btn-primary bg-gradient-to-r from-earth-blue to-cosmic-purple text-stellar-silver hover:from-earth-blue/90 hover:to-cosmic-purple/90 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="flex items-center justify-center">
                    <img src="/images/earth-zoom/ui-icons/play-button.svg" alt="" className="w-5 h-5 mr-2" />
                    Explore Features
                  </span>
                </Link>
                <Link 
                  to="/applications" 
                  className="btn-secondary bg-transparent border-2 border-stellar-silver text-stellar-silver hover:bg-stellar-silver/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    <img src="/images/earth-zoom/ui-icons/arrow-right.svg" alt="" className="w-5 h-5 mr-2" />
                    View Applications
                  </span>
                </Link>
              </div>
            </div>
            
            {/* 右侧视觉展示区 */}
            <div className="lg:w-1/2 relative">
              {/* 主要展示图片 */}
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                {/* 外层光晕效果 */}
                <div className="absolute -inset-8 bg-gradient-to-r from-earth-blue/30 via-cosmic-purple/30 to-solar-gold/30 rounded-full blur-2xl animate-pulse"></div>
                
                {/* 地球图像 */}
                <div className="relative z-10 bg-gradient-to-br from-space-dark to-earth-blue rounded-full p-8 shadow-2xl">
                  <img 
                    src="/images/earth-zoom/icons/earth-globe.svg" 
                    alt="Earth Zoom AI 概念展示" 
                    className="w-full max-w-md mx-auto animate-float"
                  />
                </div>
                
                {/* 缩放层级指示器 */}
                <div className="absolute top-4 right-4 bg-space-dark/80 backdrop-blur-sm rounded-lg p-3 border border-cosmic-purple/50">
                  <div className="flex items-center space-x-2">
                    <img src="/images/earth-zoom/icons/zoom-out.svg" alt="" className="w-6 h-6" />
                    <span className="text-stellar-silver text-sm font-medium">∞ 层级缩放</span>
                  </div>
                </div>
                
                {/* 装饰性星点 */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-solar-gold rounded-full animate-twinkle"></div>
                <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-stellar-silver rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-16 right-16 w-1 h-1 bg-cosmic-purple rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
          
          {/* 数据统计展示 */}
          <div className="mt-16 pt-8 border-t border-stellar-silver/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-solar-gold mb-2">∞</div>
                <div className="text-stellar-silver/80 text-sm">Zoom Levels</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-earth-blue mb-2">100+</div>
                <div className="text-stellar-silver/80 text-sm">Use Cases</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cosmic-purple mb-2">AI</div>
                <div className="text-stellar-silver/80 text-sm">Powered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-stellar-silver mb-2">4K</div>
                <div className="text-stellar-silver/80 text-sm">HD Quality</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 底部渐变遮罩 */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-stellar-silver/10 to-transparent"></div>
      </section>
      
      {/* Google 广告位 */}
      <GoogleAdSenseBanner />
      
      {/* Earth Zoom AI 核心特色 */}
      <section className="py-20 bg-gradient-to-b from-white to-earth-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-space-dark mb-6">
              Why Choose 
              <span className="text-gradient bg-gradient-to-r from-earth-blue to-cosmic-purple bg-clip-text text-transparent">Earth Zoom AI</span>
            </h2>
                          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Experience the future of AI video generation with revolutionary zoom out effects. Our <Link to="/technology" className="text-earth-blue hover:text-earth-blue/80 underline">artificial intelligence technology</Link> transforms any image into stunning cosmic perspective videos for <Link to="/applications" className="text-cosmic-purple hover:text-cosmic-purple/80 underline">education, marketing, and creative applications</Link>.
              </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 特色1 - 无限缩放技术 */}
            <div className="group card p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-earth-blue/50 bg-white">
              <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-earth-blue/20 transition-colors">
                <img src="/images/earth-zoom/icons/zoom-out.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-space-dark">Revolutionary Zoom Technology</h3>
              <p className="text-gray-600 text-center">
                Advanced AI algorithms enable infinite zoom capabilities, creating seamless transitions from any starting point to Earth's cosmic perspective with unprecedented visual continuity.
              </p>
            </div>
            
            {/* 特色2 - AI智能处理 */}
            <div className="group card p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-cosmic-purple/50 bg-white">
              <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-cosmic-purple/20 transition-colors">
                <svg className="w-8 h-8 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-space-dark">AI Video Generation</h3>
              <p className="text-gray-600 text-center">
                Advanced artificial intelligence automatically analyzes and completes zoom paths, ensuring optimal visual quality and logical coherence at every level for perfect video creation.
              </p>
            </div>
            
            {/* 特色3 - 社交媒体爆款 */}
            <div className="group card p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-solar-gold/50 bg-white">
              <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-solar-gold/20 transition-colors">
                <img src="/images/earth-zoom/ui-icons/share.svg" alt="" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-space-dark">Viral Content Creation</h3>
              <p className="text-gray-600 text-center">
                Unique visual impact ensures high engagement and sharing rates on social media platforms, making it a powerful tool for marketing campaigns and educational content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Earth Zoom AI 应用场景 */}
      <section className="py-20 bg-gradient-to-br from-space-dark/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-space-dark mb-6">Applications & Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From educational content to marketing campaigns, from creative art to scientific research, Earth Zoom AI brings revolutionary visual expression possibilities to every industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 应用场景1 - 教育科普 */}
            <div className="group card p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-earth-blue/50 bg-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 bg-earth-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-earth-blue/20 transition-colors">
                <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-space-dark">教育科普</h3>
              <p className="text-gray-600 text-center">
                将抽象的地理、天文概念转化为直观的视觉体验，帮助学生更好地理解尺度关系和空间概念，提升学习效果。
              </p>
            </div>
            
            {/* 应用场景2 - 营销创意 */}
            <div className="group card p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-cosmic-purple/50 bg-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 bg-cosmic-purple rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-cosmic-purple/20 transition-colors">
                <svg className="w-8 h-8 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-space-dark">营销创意</h3>
              <p className="text-gray-600 text-center">
                为品牌创造令人印象深刻的视觉故事，通过独特的缩放效果传达品牌理念，在社交媒体上获得病毒式传播。
              </p>
            </div>
            
            {/* 应用场景3 - 艺术创作 */}
            <div className="group card p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-solar-gold/50 bg-white relative overflow-hidden">
              <div className="absolute top-4 right-4 w-10 h-10 bg-solar-gold rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-solar-gold/20 transition-colors">
                <svg className="w-8 h-8 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 text-space-dark">艺术创作</h3>
              <p className="text-gray-600 text-center">
                为艺术家和创作者提供全新的创作媒介，探索微观与宏观之间的哲学思考，创造具有深度内涵的视觉艺术作品。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/applications" 
              className="btn-primary bg-gradient-to-r from-earth-blue to-cosmic-purple text-stellar-silver hover:from-earth-blue/90 hover:to-cosmic-purple/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              探索更多应用场景
            </Link>
          </div>
        </div>
      </section>
      
      {/* Earth Zoom AI 工作原理 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-space-dark mb-6">技术原理</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              了解<Link to="/concept" className="text-earth-blue hover:text-earth-blue/80 underline">Earth Zoom AI核心概念</Link>如何通过先进的人工智能算法，将任意图像转换为令人震撼的地球缩放视觉体验。探索我们的<Link to="/technology" className="text-cosmic-purple hover:text-cosmic-purple/80 underline">技术架构详情</Link>。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 原理步骤1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-earth-blue/20 transition-colors">
                <svg className="w-10 h-10 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-space-dark">图像分析</h3>
              <p className="text-gray-600 text-sm">
                AI算法深度分析输入图像的内容、构图和视觉元素，识别最佳的缩放起点。
              </p>
            </div>
            
            {/* 原理步骤2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-cosmic-purple/20 transition-colors">
                <svg className="w-10 h-10 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-space-dark">路径规划</h3>
              <p className="text-gray-600 text-sm">
                智能规划从当前图像到地球全景的最佳缩放路径，确保视觉连贯性和逻辑性。
              </p>
            </div>
            
            {/* 原理步骤3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-solar-gold/20 transition-colors">
                <svg className="w-10 h-10 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-space-dark">层级生成</h3>
              <p className="text-gray-600 text-sm">
                AI生成中间层级的图像内容，填补缩放过程中的视觉空白，创造平滑过渡。
              </p>
            </div>
            
            {/* 原理步骤4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-stellar-silver/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-stellar-silver/20 transition-colors">
                <svg className="w-10 h-10 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-space-dark">视频合成</h3>
              <p className="text-gray-600 text-sm">
                将所有层级整合为流畅的缩放视频，优化播放效果和视觉冲击力。
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/technology" 
              className="btn-secondary bg-transparent border-2 border-earth-blue text-earth-blue hover:bg-earth-blue/10 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              深入了解技术原理
            </Link>
          </div>
        </div>
      </section>
      
      {/* 常见问题 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-space-dark mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive answers about Earth Zoom AI technology, features, pricing, and implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* FAQ问题1 - 技术概念 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-earth-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">?</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">What is Earth Zoom AI technology?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Earth Zoom AI is a revolutionary artificial intelligence platform that transforms any static image into dynamic zoom-out videos, seamlessly transitioning from micro-scale details to a cosmic Earth perspective. Our proprietary 4-layer AI architecture analyzes images, plans optimal zoom paths, generates intermediate content, and synthesizes professional-quality videos automatically.
              </p>
            </div>
            
            {/* FAQ问题2 - 使用优化 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-cosmic-purple rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">How can I achieve the best zoom effects?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                For optimal results, use high-resolution images (1920x1080 or higher) with clear subjects and good composition. Our AI performs best with images that have distinct focal points, rich details, and contrasting elements. Avoid heavily compressed or blurry images. The system automatically analyzes lighting, composition, and subject matter to determine the most visually compelling zoom trajectory.
              </p>
            </div>
            
            {/* FAQ问题3 - 技术规格 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-solar-gold rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">⚙️</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">What image formats and specifications are supported?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We support JPG, PNG, WebP, and TIFF formats with file sizes up to 50MB. Recommended resolution: 1920x1080 minimum, 4K preferred. The platform outputs videos in 1080p, 4K, or 8K resolution (plan-dependent) with H.264/H.265 encoding. Processing maintains original aspect ratios and supports both landscape and portrait orientations.
              </p>
            </div>
            
            {/* FAQ问题4 - 行业应用 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-stellar-silver rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">Which industries benefit most from Earth Zoom AI?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong>Education:</strong> Universities report 95% higher student engagement. <strong>Marketing:</strong> Brands achieve 300% better social media performance. <strong>Creative Arts:</strong> Artists explore new narrative dimensions. <strong>Scientific Research:</strong> Visualize scale relationships. <strong>Media Production:</strong> Create viral content. <strong>Architecture:</strong> Present spatial context effectively.
              </p>
            </div>
            
            {/* FAQ问题5 - 商业使用 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-earth-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">©</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">Can I use generated videos commercially?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Yes! All Earth Zoom AI generated videos come with full commercial usage rights. Use them for marketing campaigns, educational content, social media posts, presentations, and commercial projects. Enterprise plans include extended licensing for broadcast and distribution. You retain ownership of your source images and generated videos. No attribution required, though we appreciate it.
              </p>
            </div>
            
            {/* FAQ问题6 - 处理时间 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-cosmic-purple rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">⏱️</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">How long does video processing take?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Processing times vary by complexity and quality settings: <strong>1080p:</strong> 2-5 minutes, <strong>4K:</strong> 5-12 minutes, <strong>8K:</strong> 15-25 minutes. Our GPU-accelerated infrastructure ensures 99.7% uptime with priority processing for Professional and Enterprise subscribers. Batch processing available for multiple videos with additional time savings.
              </p>
            </div>
            
            {/* FAQ问题7 - 定价计划 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-solar-gold rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">💰</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">What are the pricing plans and limitations?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong>Free Tier:</strong> 10 videos/month, 1080p quality, watermark included. <strong>Professional ($99/month):</strong> 1000 videos, 4K quality, no watermark, priority support. <strong>Enterprise ($999/month):</strong> Unlimited videos, 8K quality, custom branding, dedicated support, API access. Educational institutions receive 50% discount.
              </p>
            </div>
            
            {/* FAQ问题8 - API和集成 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-stellar-silver rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">🔌</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">Do you offer API access and integrations?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Yes! Our RESTful API supports real-time video generation with webhook notifications. Available SDKs: Python, Node.js, PHP, Java. Pre-built integrations: WordPress, Shopify, Adobe Creative Suite, Canva. Rate limits: 100 requests/hour (Professional), unlimited (Enterprise). Comprehensive documentation, code samples, and sandbox environment included.
              </p>
            </div>
            
            {/* FAQ问题9 - 数据安全 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-earth-blue rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">How secure is my data and content?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade security with SOC 2 Type II compliance. All uploads encrypted with AES-256. Processing occurs in secure, isolated environments. Data automatically deleted after 30 days unless saved. GDPR compliant with EU data residency options. No AI training on user content. Optional private cloud deployment available for Enterprise customers.
              </p>
            </div>
            
            {/* FAQ问题10 - 技术支持 */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 rounded-xl bg-white">
              <div className="flex items-start mb-4">
                <div className="w-8 h-8 bg-cosmic-purple rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-white text-sm font-bold">💬</span>
                </div>
                <h3 className="text-xl font-bold text-space-dark">What support and training resources are available?</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive support ecosystem: 24/7 live chat, video tutorials, technical documentation, community forum, and webinar training sessions. Professional plans include email support with 4-hour response time. Enterprise customers get dedicated account managers, custom training sessions, and direct engineering support. Extensive knowledge base with 100+ articles and use case examples.
              </p>
            </div>
          </div>
          
          {/* FAQ底部行动区域 */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-space-dark mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our expert team is ready to help you understand how Earth Zoom AI can transform your content creation workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/resources" 
                className="btn-primary bg-gradient-to-r from-earth-blue to-cosmic-purple text-white hover:from-earth-blue/90 hover:to-cosmic-purple/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Documentation
              </Link>
              <button className="btn-secondary bg-transparent border-2 border-earth-blue text-earth-blue hover:bg-earth-blue/10 px-8 py-3 rounded-full font-medium transition-all duration-300">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* 广告横幅 */}
      <AdBanner />
      
      {/* 用户Twitter反馈 */}
      <TwitterEmbeds />
      
      {/* 相关资源链接区域 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">Explore Earth Zoom AI Ecosystem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources, tools, and documentation to help you succeed with AI video generation
            </p>
          </div>
          
          {/* 主要页面链接 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Link to="/concept" className="group card p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-earth-blue/50 bg-white">
              <div className="w-12 h-12 bg-earth-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-earth-blue/20 transition-colors">
                <svg className="w-6 h-6 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-2 group-hover:text-earth-blue transition-colors">Technology Concept</h3>
              <p className="text-gray-600 text-sm">Understand the core AI video generation technology and innovation principles</p>
            </Link>

            <Link to="/applications" className="group card p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-cosmic-purple/50 bg-white">
              <div className="w-12 h-12 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-cosmic-purple/20 transition-colors">
                <svg className="w-6 h-6 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-2 group-hover:text-cosmic-purple transition-colors">Use Cases & Applications</h3>
              <p className="text-gray-600 text-sm">Real-world success stories across education, marketing, and creative industries</p>
            </Link>

            <Link to="/technology" className="group card p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-solar-gold/50 bg-white">
              <div className="w-12 h-12 bg-solar-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-solar-gold/20 transition-colors">
                <svg className="w-6 h-6 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-2 group-hover:text-solar-gold transition-colors">Technical Architecture</h3>
              <p className="text-gray-600 text-sm">Deep dive into AI algorithms, system design, and implementation details</p>
            </Link>

            <Link to="/resources" className="group card p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-stellar-silver/50 bg-white">
              <div className="w-12 h-12 bg-stellar-silver/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-stellar-silver/20 transition-colors">
                <svg className="w-6 h-6 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-space-dark mb-2 group-hover:text-stellar-silver transition-colors">Developer Resources</h3>
              <p className="text-gray-600 text-sm">API documentation, SDKs, code samples, and technical support</p>
            </Link>
          </div>

          {/* 新增博客链接 */}
          <div className="flex justify-center mb-16">
            <Link to="/blog" className="group card p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 rounded-xl hover:border-earth-blue/50 bg-white max-w-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-earth-blue/20 transition-colors">
                  <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-space-dark mb-3 group-hover:text-earth-blue transition-colors">Earth Zoom AI Blog</h3>
                <p className="text-gray-600 text-sm">Latest insights on AI video technology, industry trends, and innovation updates</p>
              </div>
            </Link>
          </div>

          {/* 外部资源和工具链接 */}
          <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-space-dark mb-4">Additional Resources & Tools</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore external resources, industry insights, and complementary tools that enhance your Earth Zoom AI experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 行业洞察 */}
              <div className="card p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-earth-blue/10 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-space-dark">Industry Insights</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link to="/blog" className="hover:text-earth-blue">• AI Video Technology Trends</Link></li>
                  <li><a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" target="_blank" rel="noopener noreferrer" className="hover:text-earth-blue">• McKinsey AI Economic Impact Report</a></li>
                  <li><a href="https://arxiv.org/search/?query=video+generation&searchtype=all" target="_blank" rel="noopener noreferrer" className="hover:text-earth-blue">• Latest AI Video Research Papers</a></li>
                  <li><a href="https://venturebeat.com/ai/" target="_blank" rel="noopener noreferrer" className="hover:text-earth-blue">• VentureBeat AI News</a></li>
                </ul>
              </div>

              {/* 开发工具 */}
              <div className="card p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-cosmic-purple/10 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-space-dark">Development Tools</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://github.com/openai/CLIP" target="_blank" rel="noopener noreferrer" className="hover:text-cosmic-purple">• OpenAI CLIP for Image Analysis</a></li>
                  <li><a href="https://ffmpeg.org/" target="_blank" rel="noopener noreferrer" className="hover:text-cosmic-purple">• FFmpeg Video Processing</a></li>
                  <li><a href="https://opencv.org/" target="_blank" rel="noopener noreferrer" className="hover:text-cosmic-purple">• OpenCV Computer Vision</a></li>
                  <li><a href="https://huggingface.co/models?pipeline_tag=image-to-video" target="_blank" rel="noopener noreferrer" className="hover:text-cosmic-purple">• Hugging Face AI Models</a></li>
                </ul>
              </div>

              {/* 学习资源 */}
              <div className="card p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-solar-gold/10 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-space-dark">Learning Resources</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://www.coursera.org/learn/deep-learning" target="_blank" rel="noopener noreferrer" className="hover:text-solar-gold">• Deep Learning Specialization</a></li>
                  <li><a href="https://www.youtube.com/c/MachineLearningExplained" target="_blank" rel="noopener noreferrer" className="hover:text-solar-gold">• ML YouTube Tutorials</a></li>
                  <li><a href="https://paperswithcode.com/task/video-generation" target="_blank" rel="noopener noreferrer" className="hover:text-solar-gold">• Papers With Code: Video Generation</a></li>
                  <li><a href="https://distill.pub/" target="_blank" rel="noopener noreferrer" className="hover:text-solar-gold">• Distill Interactive ML Explanations</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 号召性用语 */}
      <section className="py-20 bg-gradient-to-br from-earth-blue via-cosmic-purple to-space-dark text-stellar-silver relative overflow-hidden">
        {/* 背景星空效果 */}
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            准备体验
            <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent">无限缩放</span>
            的奇迹？
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            加入数千位创作者的行列，探索从微观到宏观的无限视觉可能性。让Earth Zoom AI为您开启全新的视觉创作之旅。
          </p>
          
          {/* 行动按钮组 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/concept" 
              className="btn-primary bg-gradient-to-r from-solar-gold to-earth-blue text-space-dark hover:from-solar-gold/90 hover:to-earth-blue/90 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              开始探索技术概念
            </Link>
            
            <Link 
              to="/resources" 
              className="btn-secondary bg-transparent border-2 border-stellar-silver text-stellar-silver hover:bg-stellar-silver/10 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              获取开发资源
            </Link>
          </div>
          
          {/* 装饰性元素 */}
          <div className="mt-12 flex justify-center space-x-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-solar-gold mb-1">∞</div>
              <div className="text-sm">无限可能</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-earth-blue mb-1">AI</div>
              <div className="text-sm">智能驱动</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cosmic-purple mb-1">4K</div>
              <div className="text-sm">超高清质量</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
