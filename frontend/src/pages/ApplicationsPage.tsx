import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Earth Zoom AI 应用案例页面
 * 展示Earth Zoom AI在各个领域的实际应用案例
 */
const ApplicationsPage = () => {
  // SEO优化 - 设置页面标题和描述
  useEffect(() => {
    document.title = 'Earth Zoom AI Applications - Use Cases for Education, Marketing & Creative AI Videos';
    
    // 更新meta描述
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore Earth Zoom AI applications across education, marketing, and creative industries. Discover real use cases, success stories, and innovative implementations of our AI video generation technology.');
    }

    // 添加Article结构化数据
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Earth Zoom AI Applications - Real-World Use Cases for AI Video Generation",
      "description": "Explore comprehensive applications of Earth Zoom AI across education, marketing, and creative industries. Discover success stories, implementation strategies, and transformative use cases of revolutionary AI video generation technology.",
      "image": {
        "@type": "ImageObject",
        "url": "https://earthzoomai.org/images/earth-zoom/applications/ai-video-applications.jpg",
        "width": 1200,
        "height": 630,
        "caption": "Earth Zoom AI Applications Across Industries"
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
        "@id": "https://earthzoomai.org/applications"
      },
      "articleSection": "Applications",
      "keywords": ["earth zoom ai applications", "ai video use cases", "educational technology", "marketing videos", "creative ai tools", "video generation applications"],
      "wordCount": 2200,
      "inLanguage": "en-US",
      "isFamilyFriendly": true,
      "educationalUse": ["Case Study", "Business Strategy", "Professional Development"],
      "learningResourceType": "Case Studies",
      "about": [
        {
          "@type": "Thing",
          "name": "Educational Technology",
          "description": "AI video applications in education and learning"
        },
        {
          "@type": "Thing", 
          "name": "Marketing Technology",
          "description": "Video marketing and brand storytelling applications"
        },
        {
          "@type": "Thing",
          "name": "Creative Tools",
          "description": "AI-powered creative video generation for artists"
        }
      ],
      "mentions": [
        {
          "@type": "EducationalOrganization",
          "name": "Educational Institutions",
          "description": "Universities and schools using Earth Zoom AI"
        },
        {
          "@type": "Corporation",
          "name": "Marketing Agencies",
          "description": "Brands leveraging AI video technology"
        }
      ],
      "hasPart": [
        {
          "@type": "Article",
          "headline": "Educational Technology Applications",
          "description": "How Earth Zoom AI transforms learning experiences"
        },
        {
          "@type": "Article",
          "headline": "Marketing Video Success Stories",
          "description": "Case studies of viral marketing campaigns"
        },
        {
          "@type": "Article",
          "headline": "Creative AI Art Applications",
          "description": "Artistic and creative uses of zoom technology"
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
          "name": "Home",
          "item": "https://earthzoomai.org"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "AI Video Applications",
          "item": "https://earthzoomai.org/applications"
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
        if (script.textContent?.includes('"@type": "Article"') && script.textContent?.includes('Earth Zoom AI Applications')) {
          script.remove();
        }
        if (script.textContent?.includes('"@type": "BreadcrumbList"') && script.textContent?.includes('AI Video Applications')) {
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
            <Link to="/" className="text-earth-blue hover:text-earth-blue/80 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">AI Video Applications</span>
          </div>
        </div>
      </nav>
      
      {/* Hero区域 */}
      <section className="relative bg-gradient-to-br from-cosmic-purple via-earth-blue to-solar-gold py-20 overflow-hidden">
        <div className="absolute inset-0 bg-stars opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-stellar-silver mb-6">
              AI Video Applications
              <span className="text-gradient bg-gradient-to-r from-solar-gold to-stellar-silver bg-clip-text text-transparent block">
                Infinite Possibilities
              </span>
            </h1>
            <p className="text-xl text-stellar-silver/90 mb-8">
              Explore Earth Zoom AI's revolutionary applications in education, marketing, creative arts, and scientific research
            </p>
          </div>
        </div>
      </section>

      {/* 应用领域概览 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">AI Video Generation Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Earth Zoom AI <Link to="/technology" className="text-earth-blue hover:text-earth-blue/80 underline">technology</Link> is transforming visual expression across multiple industries with revolutionary video generation capabilities. Learn about our <Link to="/concept" className="text-cosmic-purple hover:text-cosmic-purple/80 underline">core technology concepts</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 教育科普 */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-earth-blue/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-earth-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">Educational Technology</h3>
              <p className="text-gray-600 mb-4">Intuitive teaching for geography, astronomy, biology and more subjects</p>
              <div className="text-2xl font-bold text-earth-blue">95%</div>
              <div className="text-sm text-gray-500">Learning improvement</div>
            </div>

            {/* 营销推广 */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-cosmic-purple/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-cosmic-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">Marketing Video Creation</h3>
              <p className="text-gray-600 mb-4">Brand storytelling and viral content generation</p>
              <div className="text-2xl font-bold text-cosmic-purple">300%</div>
              <div className="text-sm text-gray-500">Engagement increase</div>
            </div>

            {/* 艺术创作 */}
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-solar-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-solar-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-space-dark mb-4">Creative AI Art</h3>
              <p className="text-gray-600 mb-4">New media art and visual installations</p>
              <div className="text-2xl font-bold text-solar-gold">∞</div>
              <div className="text-sm text-gray-500">Creative possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-20 bg-gradient-to-b from-earth-blue/5 to-cosmic-purple/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-dark mb-6">AI Video Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real case studies demonstrating Earth Zoom AI technology's powerful potential and impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 案例1 */}
            <div className="card p-8">
              <div className="bg-earth-blue text-white px-4 py-2 rounded-full inline-block text-sm font-medium mb-4">
                Educational Technology
              </div>
              <h3 className="text-2xl font-bold text-space-dark mb-4">Urban Planning Education Revolution</h3>
              <p className="text-gray-600 mb-6">
                A prestigious university's geography department adopted Earth Zoom AI technology, starting from dormitory window views and gradually zooming to Earth's global perspective, helping students intuitively understand geographical scale relationships.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-earth-blue">85%</div>
                  <div className="text-sm text-gray-600">Engagement increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-earth-blue">92%</div>
                  <div className="text-sm text-gray-600">Comprehension improvement</div>
                </div>
              </div>
            </div>

            {/* 案例2 */}
            <div className="card p-8">
              <div className="bg-cosmic-purple text-white px-4 py-2 rounded-full inline-block text-sm font-medium mb-4">
                Marketing Videos
              </div>
              <h3 className="text-2xl font-bold text-space-dark mb-4">Global Brand Marketing Miracle</h3>
              <p className="text-gray-600 mb-6">
                An international coffee brand utilized Earth Zoom AI to showcase their journey from coffee beans to global supply chain, achieving viral social media success with compelling video content.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cosmic-purple">2.5M</div>
                  <div className="text-sm text-gray-600">Video views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cosmic-purple">450%</div>
                  <div className="text-sm text-gray-600">Share rate increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-20 bg-gradient-to-br from-earth-blue via-cosmic-purple to-space-dark text-stellar-silver">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join the Earth Zoom AI Revolution
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Bring unprecedented visual impact to your projects with AI video generation technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/technology" 
              className="btn-primary bg-gradient-to-r from-solar-gold to-earth-blue text-space-dark hover:from-solar-gold/90 hover:to-earth-blue/90 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn Technology
            </Link>
            
            <Link 
              to="/resources" 
              className="btn-secondary bg-transparent border-2 border-stellar-silver text-stellar-silver hover:bg-stellar-silver/10 px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Get Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage; 