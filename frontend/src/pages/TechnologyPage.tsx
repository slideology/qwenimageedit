import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Earth Zoom AI 技术原理页面
 * 详细解释Earth Zoom AI的技术实现和工作原理
 */
const TechnologyPage = () => {
  // SEO优化 - 设置页面标题和描述
  useEffect(() => {
    document.title = 'Earth Zoom AI Technology - Advanced AI Video Generation Architecture & Algorithms';
    
    // 更新meta描述
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover Earth Zoom AI advanced technology architecture. Learn about our revolutionary AI algorithms, 4-layer technical stack, and breakthrough video generation principles that create infinite zoom effects.');
    }

    // 添加Article结构化数据
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "Earth Zoom AI Technology Architecture - Advanced AI Video Generation Algorithms",
      "description": "Deep dive into Earth Zoom AI's revolutionary technology architecture. Explore our 4-layer AI system, advanced algorithms, video generation principles, and breakthrough innovations in artificial intelligence video creation.",
      "image": {
        "@type": "ImageObject",
        "url": "https://earthzoomai.org/images/earth-zoom/technology/ai-architecture.jpg",
        "width": 1200,
        "height": 630,
        "caption": "Earth Zoom AI Technology Architecture Diagram"
      },
      "author": {
        "@type": "Organization",
        "name": "Earth Zoom AI Research Team",
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
        "@id": "https://earthzoomai.org/technology"
      },
      "articleSection": "Technology",
      "keywords": ["earth zoom ai technology", "ai algorithms", "video generation", "machine learning", "computer vision", "ai architecture", "technical implementation"],
      "wordCount": 3000,
      "inLanguage": "en-US",
      "isFamilyFriendly": true,
      "educationalUse": ["Technical Learning", "Research", "Professional Development"],
      "learningResourceType": "Technical Documentation",
      "proficiencyLevel": "Advanced",
      "about": [
        {
          "@type": "Thing",
          "name": "Machine Learning Architecture",
          "description": "4-layer AI system for video generation"
        },
        {
          "@type": "Thing", 
          "name": "Computer Vision Algorithms",
          "description": "Advanced image analysis and processing"
        },
        {
          "@type": "Thing",
          "name": "Video Synthesis Technology",
          "description": "AI-powered video generation and rendering"
        }
      ],
      "mentions": [
        {
          "@type": "SoftwareApplication",
          "name": "Earth Zoom AI Platform",
          "applicationCategory": "MultimediaApplication"
        },
        {
          "@type": "ComputerLanguage",
          "name": "Python",
          "description": "Primary development language"
        },
        {
          "@type": "ComputerLanguage",
          "name": "TensorFlow",
          "description": "Machine learning framework"
        }
      ],
      "hasPart": [
        {
          "@type": "TechArticle",
          "headline": "Image Analysis Layer",
          "description": "Deep learning algorithms for image content analysis"
        },
        {
          "@type": "TechArticle",
          "headline": "Path Planning Layer",
          "description": "AI algorithms for optimal zoom path calculation"
        },
        {
          "@type": "TechArticle",
          "headline": "Content Generation Layer",
          "description": "Generative AI for intermediate level creation"
        },
        {
          "@type": "TechArticle",
          "headline": "Video Synthesis Layer",
          "description": "High-performance rendering and video compilation"
        }
      ],
      "dependencies": [
        "TensorFlow",
        "PyTorch", 
        "OpenCV",
        "CUDA Toolkit"
      ],
      "programmingLanguage": ["Python", "JavaScript", "C++"],
      "runtime": ["GPU Acceleration", "Cloud Computing"],
      "operatingSystem": ["Linux", "Windows", "macOS"]
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
          "name": "Home",
          "item": "https://earthzoomai.org"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Technology",
          "item": "https://earthzoomai.org/technology"
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
        if (script.textContent?.includes('"@type": "TechArticle"') && script.textContent?.includes('Earth Zoom AI Technology Architecture')) {
          script.remove();
        }
        if (script.textContent?.includes('"@type": "BreadcrumbList"') && script.textContent?.includes('AI Technology')) {
          script.remove();
        }
      });
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero区域 */}
      <section className="relative bg-gradient-to-br from-space-dark via-cosmic-purple to-solar-gold py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stellar-silver mb-6">
              AI Technology
              <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent block">
                Advanced Algorithms
              </span>
            </h1>
            <p className="text-xl text-stellar-silver/90 mb-8">
              Explore Earth Zoom AI core technology architecture and discover how AI breaks through traditional visual limitations to create infinite zoom possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* 技术架构 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">AI Video Generation Architecture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earth Zoom AI employs multi-layered AI models working in coordination to achieve seamless visual transitions from micro to macro perspectives
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-space-dark mb-6">四层技术栈</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-earth-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-space-dark mb-2">图像分析层</h4>
                    <p className="text-gray-600">深度学习算法分析输入图像的内容、构图、纹理和语义信息，确定最佳缩放起点。</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cosmic-purple rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-space-dark mb-2">路径规划层</h4>
                    <p className="text-gray-600">AI算法计算从起点到地球视角的最优缩放路径，确保视觉连贯性和故事性。</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-solar-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-space-dark mb-2">内容生成层</h4>
                    <p className="text-gray-600">生成式AI模型创造中间层级的图像内容，填补缩放过程中的视觉空白。</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-stellar-silver rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-space-dark mb-2">视频合成层</h4>
                    <p className="text-gray-600">高性能渲染引擎将所有层级整合，生成流畅的4K质量缩放视频。</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-earth-blue/5 to-cosmic-purple/5 rounded-2xl p-8">
              <div className="text-center">
                <img 
                  src="/images/earth-zoom/icons/zoom-out.svg" 
                  alt="技术架构" 
                  className="w-32 h-32 mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-space-dark mb-4">AI模型协同</h3>
                <p className="text-gray-600 mb-6">
                  多个专业AI模型协同工作，每个模型专注于特定的技术环节，确保最佳效果。
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-earth-blue">15+</div>
                    <div className="text-xs text-gray-500">AI模型</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-cosmic-purple">99.9%</div>
                    <div className="text-xs text-gray-500">精度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术特性 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">技术特性</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              先进的AI技术特性确保Earth Zoom AI在各种场景下都能提供卓越的视觉体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 智能分析 */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">智能分析</h3>
              <p className="text-gray-600 mb-4">自动识别图像内容和最佳缩放起点</p>
              <div className="text-2xl font-bold text-earth-blue">&lt; 1s</div>
              <div className="text-sm text-gray-500">分析速度</div>
            </div>

            {/* 无缝生成 */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">无缝生成</h3>
              <p className="text-gray-600 mb-4">AI生成中间层级确保视觉连贯性</p>
              <div className="text-2xl font-bold text-cosmic-purple">∞</div>
              <div className="text-sm text-gray-500">缩放层级</div>
            </div>

            {/* 高质量输出 */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">高质量输出</h3>
              <p className="text-gray-600 mb-4">4K分辨率流畅视频渲染</p>
              <div className="text-2xl font-bold text-solar-gold">4K</div>
              <div className="text-sm text-gray-500">视频质量</div>
            </div>
          </div>
        </div>
      </section>

      {/* 工作流程 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">工作流程</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从输入到输出，了解Earth Zoom AI的完整工作流程
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* 步骤1 */}
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-earth-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-space-dark mb-2">图像输入与预处理</h3>
                  <p className="text-gray-600">用户上传图像，系统进行格式转换、质量优化和尺寸标准化处理。</p>
                </div>
                <div className="flex-shrink-0 w-24 h-24 bg-earth-blue/10 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* 步骤2 */}
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-cosmic-purple rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-space-dark mb-2">AI深度分析</h3>
                  <p className="text-gray-600">计算机视觉算法分析图像内容、识别关键对象、确定语义信息和最佳缩放路径。</p>
                </div>
                <div className="flex-shrink-0 w-24 h-24 bg-cosmic-purple/10 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* 步骤3 */}
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-solar-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-space-dark mb-2">智能内容生成</h3>
                  <p className="text-gray-600">生成式AI模型创建多个缩放层级的中间图像，确保从局部到全球的无缝过渡。</p>
                </div>
                <div className="flex-shrink-0 w-24 h-24 bg-solar-gold/10 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* 步骤4 */}
              <div className="flex items-center space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-stellar-silver rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-space-dark mb-2">视频渲染输出</h3>
                  <p className="text-gray-600">高性能渲染引擎将所有层级合成为流畅的4K质量视频，完成最终输出。</p>
                </div>
                <div className="flex-shrink-0 w-24 h-24 bg-stellar-silver/10 rounded-lg flex items-center justify-center">
                  <svg className="w-12 h-12 text-stellar-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 技术优势 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">技术优势</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              相比传统方法，Earth Zoom AI在多个维度实现了技术突破
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-space-dark mb-6">传统方法 vs Earth Zoom AI</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">缩放能力</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">传统: 10x</div>
                    <div className="text-sm font-bold text-earth-blue">AI: ∞</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">处理时间</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">传统: 数小时</div>
                    <div className="text-sm font-bold text-earth-blue">AI: 分钟级</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">视觉质量</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">传统: 中等</div>
                    <div className="text-sm font-bold text-earth-blue">AI: 4K超清</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">自动化程度</span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">传统: 手工</div>
                    <div className="text-sm font-bold text-earth-blue">AI: 全自动</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-space-dark mb-6">性能指标</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>处理速度</span>
                    <span className="font-bold text-earth-blue">95%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-earth-blue rounded" style={{width: '95%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>视觉质量</span>
                    <span className="font-bold text-cosmic-purple">98%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-cosmic-purple rounded" style={{width: '98%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>智能识别</span>
                    <span className="font-bold text-solar-gold">99%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-solar-gold rounded" style={{width: '99%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>用户满意度</span>
                    <span className="font-bold text-stellar-silver">97%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-stellar-silver rounded" style={{width: '97%'}}></div>
                  </div>
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
            体验前沿AI技术
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            了解更多技术细节，探索Earth Zoom AI的无限应用可能
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/applications" 
              className="btn-primary bg-gradient-to-r from-solar-gold to-earth-blue text-space-dark hover:from-solar-gold/90 hover:to-earth-blue/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              查看应用案例
            </Link>
            
            <Link 
              to="/resources" 
              className="btn-secondary bg-transparent border-2 border-stellar-silver text-stellar-silver hover:bg-stellar-silver/10 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              获取技术资源
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage; 