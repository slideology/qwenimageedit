import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import LiveEditor from '../components/LiveEditor';
import ShowcaseGrid from '../components/ShowcaseGrid';
import ProcessFlow from '../components/ProcessFlow';

/**
 * Qwen Image Edit Single Page Application Homepage
 * Integrates all features: Hero, Features, Showcase, Reviews, FAQ
 * Reference structure from https://qwenimageedit.app/
 */
const HomePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  
  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // 滚动进入视口动画
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));
    
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  // FAQ结构化数据
  React.useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does Qwen Image Edit perform semantic editing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Qwen Image Edit uses advanced artificial intelligence to understand image semantics and perform precise edits. Our AI model analyzes context, preserves character consistency, and enables text editing, object manipulation, and style transfer with professional-quality results."
          }
        },
        {
          "@type": "Question",
          "name": "What types of images work best with Qwen Image Edit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For optimal results, use high-resolution images with clear subjects and good composition. Images with distinct elements, readable text, and well-defined objects work best for semantic and appearance editing. We support JPG, PNG, WebP formats up to 50MB."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Qwen Image Edit different from other image editing tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike traditional image editors, Qwen Image Edit uses advanced AI to understand image semantics and perform intelligent edits. Our technology automatically handles character consistency, precise text editing, and style transfer while maintaining visual coherence."
          }
        },
        {
          "@type": "Question",
          "name": "How can I optimize my content for different platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Qwen Image Edit offers optimized export options for all major platforms: high-resolution outputs for print, web-optimized formats for digital use, and custom dimensions. All outputs maintain perfect quality and original image characteristics."
          }
        },
        {
          "@type": "Question",
          "name": "How does Qwen Image Edit handle data privacy and security?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain enterprise-grade security with SOC 2 Type II compliance. All uploads are encrypted with AES-256, processed in secure environments, and automatically deleted after 30 days. We're GDPR compliant with EU data residency options."
          }
        },
        {
          "@type": "Question",
          "name": "What support resources does Qwen Image Edit provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer comprehensive support including 24/7 live chat, video tutorials, technical documentation, community forum, and webinar training sessions. Professional plans include dedicated support with 4-hour response time."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => {
        if (script.textContent?.includes('"@type": "FAQPage"')) {
          script.remove();
        }
      });
    };
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative py-32 pt-40 overflow-hidden min-h-screen flex items-center">
        {/* 背景效果 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/images/earth-zoom/backgrounds/stars-texture.png')] opacity-20"></div>
        
        {/* 视差背景效果 */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        
        {/* 动态背景粒子效果 */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* 主标题 */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight animate-fade-in">
              Qwen Image Edit
            </h1>
              
            {/* 副标题 */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              Edit your images like never before with Qwen Image Edit. Leverage AI for seamless text editing, visual transformations, and artistic style enhancements.
              </p>
              
            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
              <a href="#live-editor" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
                Start Editing
              </a>
              <a href="#showcase" className="bg-transparent border-2 border-gray-400 text-gray-300 hover:bg-gray-800 hover:border-gray-300 px-10 py-5 rounded-xl font-semibold text-xl transition-all duration-300">
                View Features
              </a>
            </div>
            
            {/* 特色标签 */}
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{animationDelay: '0.9s'}}>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-all duration-300">
                <span className="text-purple-400 mr-2">🎨</span>
                Semantic Editing
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-all duration-300">
                <span className="text-blue-400 mr-2">✏️</span>
                Text Editing
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-all duration-300">
                <span className="text-cyan-400 mr-2">🔄</span>
                View Synthesis
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 text-gray-300 hover:bg-gray-700/50 transition-all duration-300">
                <span className="text-green-400 mr-2">🎭</span>
                Style Transfer
              </div>
            </div>

            {/* 用户统计和头像展示 */}
            <div className="mt-16 animate-fade-in" style={{animationDelay: '1.2s'}}>
              <div className="flex flex-col items-center">
                {/* 用户头像组 */}
                <div className="flex -space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white font-bold">
                    L
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white font-bold">
                    +
                  </div>
                </div>
                <p className="text-gray-400 text-lg">
                  Trusted by over <span className="text-white font-semibold">100K creators</span> and professionals worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 底部滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Showcase Section */}
      <section id="showcase" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              See It In Action
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Check out these amazing transformations created with our AI
              </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-on-scroll">
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/showcase/showcase-001.webp" 
                  alt="Character Consistency - Dynamic editing while preserving IP identity"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Character Consistency</h3>
              <p className="text-gray-400">Dynamic editing while preserving IP identity</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/showcase/showcase-002.webp" 
                  alt="Novel View Generation - Seamless perspective transformations"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Novel View Generation</h3>
              <p className="text-gray-400">Seamless perspective transformations</p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/images/showcase/showcase-003.webp" 
                  alt="Precision Removal - Intelligent object removal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Precision Removal</h3>
              <p className="text-gray-400">Intelligent object removal</p>
            </div>
          </div>
                </div>
      </section>
      
      {/* Showcase Section - 9大功能展示 */}
      <ShowcaseGrid />
      
      {/* 广告区域 */}
      <section className="py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <div id="container-a7371640e16748925b59f8e00271b8ec" className="w-full max-w-4xl"></div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="relative py-24 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
              Transform Your Images with Qwen Image Edit
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              Experience the next generation of AI image editing with our comprehensive suite of professional features. From advanced semantic understanding to precise appearance editing, Qwen Image Edit provides everything you need to create stunning visual content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* AI-Powered Processing */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 animate-on-scroll">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">🤖</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">AI-Powered Processing</h3>
              <p className="text-gray-400 leading-relaxed">
                Qwen Image Edit leverages cutting-edge artificial intelligence to understand and edit your images semantically. Our advanced neural networks comprehend context, characters, and visual elements to perform precise edits while maintaining consistency. Experience the power of machine learning in every edit.
              </p>
            </div>
            
            {/* Real-Time Rendering */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">⚡</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">Real-Time Rendering</h3>
              <p className="text-gray-400 leading-relaxed">
                Watch your image edits come to life in real-time. Our optimized processing pipeline delivers results in under 60 seconds, without compromising on quality. Perfect for content creators who need quick turnaround times while maintaining professional standards.
              </p>
            </div>
            
            {/* Advanced Satellite Integration */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">🛰️</div>
              </div>
                              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Advanced Semantic Understanding</h3>
              <p className="text-gray-400 leading-relaxed">
                Seamlessly integrate new elements into your images using our proprietary technology. Qwen Image Edit understands context, lighting, and visual coherence to create ultra-realistic edits that maintain perfect consistency across all modifications.
              </p>
            </div>
            
            {/* Customizable Effects */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">🎨</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">Customizable Effects</h3>
              <p className="text-gray-400 leading-relaxed">
                Take control of your creative vision with extensive customization options. Adjust zoom speed, transition styles, atmospheric effects, time-of-day lighting, cloud coverage, and camera movements. Create unique and engaging content that stands out on any platform.
              </p>
            </div>
            
            {/* Multi-Platform Export */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">📱</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-400 transition-colors">Multi-Platform Export</h3>
              <p className="text-gray-400 leading-relaxed">
                Share your edited images everywhere with our optimized export options. Whether it's high-resolution prints, web-optimized formats, or custom dimensions for specific platforms, Qwen Image Edit ensures your images look perfect in every context.
              </p>
            </div>
            
            {/* Enterprise-Grade Security */}
            <div className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-all duration-300 border border-gray-700 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 animate-on-scroll" style={{animationDelay: '0.5s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-3xl">🔒</div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">Enterprise-Grade Security</h3>
              <p className="text-gray-400 leading-relaxed">
                Trust in our robust security infrastructure to protect your content. With end-to-end encryption, secure cloud processing, and automatic data cleanup, your creative assets are always safe. We maintain strict compliance with global privacy regulations and industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reviews Section */}
      <section id="reviews" className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands of creators who have transformed their content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* User Review 1 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  SC
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">Sarah Chen</h3>
                  <p className="text-gray-400 text-sm">Social Media Creator</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The Earth zoom out effect transformed my content! My TikTok views increased by 300% after using this AI tool. Absolutely phenomenal results."
              </p>
            </div>
            
            {/* User Review 2 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">Michael Rodriguez</h3>
                  <p className="text-gray-400 text-sm">Professional Photographer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As a professional photographer, I'm amazed by the quality. The 4K output is crystal clear and the depth mapping is incredibly accurate."
              </p>
            </div>
            
            {/* User Review 3 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  ET
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">Emma Thompson</h3>
                  <p className="text-gray-400 text-sm">Marketing Expert</p>
                </div>
              </div>
              <p className="text-gray-300">
                "This tool has become essential for our marketing campaigns. The quick processing time and professional results are exactly what we needed."
              </p>
            </div>
            
            {/* User Review 4 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                  DK
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">David Kim</h3>
                  <p className="text-gray-400 text-sm">Video Producer</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The cinematic quality of the zoom transitions is mind-blowing. It's like having a professional VFX team at your fingertips."
              </p>
            </div>
            
            {/* User Review 5 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  LW
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">Lisa Wang</h3>
                  <p className="text-gray-400 text-sm">Content Creator</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Our engagement rates skyrocketed after incorporating these effects. The ease of use and quick rendering make it perfect for daily content."
              </p>
            </div>
            
            {/* User Review 6 */}
            <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 animate-on-scroll" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  JA
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-white">James Anderson</h3>
                  <p className="text-gray-400 text-sm">YouTuber</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Finally, a tool that delivers professional results without the complexity. The AI understanding of depth and perspective is remarkable."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Live Editor Section - Qwen Image Edit 在线编辑器 */}
      <LiveEditor />
      
      {/* Process Flow Section - 4步操作流程 */}
      <ProcessFlow />
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 relative bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Qwen Image Edit
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Everything You Need to Know About Qwen Image Edit's Advanced Semantic & Appearance Image Editing
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What is Qwen Image Edit?",
                answer: "Qwen Image Edit is an advanced AI-powered image editing tool built on the 20B Qwen-Image model. It enables both semantic and appearance editing capabilities, including text editing, style transfer, and object manipulation."
              },
              {
                question: "What types of image editing can Qwen Image Edit perform?",
                answer: "The system supports semantic editing (IP creation, object rotation, style transfer), appearance editing (adding/removing elements while preserving other regions), precise text editing in both English and Chinese, and novel view synthesis up to 180 degrees."
              },
              {
                question: "How does Qwen Image Edit maintain character consistency during edits?",
                answer: "The system utilizes advanced semantic understanding to preserve visual semantics and character consistency, even when most pixels differ from the original image. This enables the effortless creation of IP content variations."
              },
              {
                question: "Can Qwen Image Edit handle both English and Chinese text editing?",
                answer: "Yes, Qwen Image Edit supports bilingual text editing, allowing precise addition, deletion, and modification of text in both languages while maintaining original font characteristics and styling."
              },
              {
                question: "What is chained editing, and how does it work?",
                answer: "Chained editing is a step-by-step approach that allows for the progressive correction and refinement of complex images. It enables users to make targeted modifications and achieve precise results through iterative editing processes."
              },
              {
                question: "How does the appearance editing feature work?",
                answer: "Appearance editing allows users to add, remove, or modify specific elements while keeping other regions of the image unchanged. This ensures environmental consistency and attention to detail."
              },
              {
                question: "What view synthesis capabilities does Qwen Image Edit offer?",
                answer: "The system can rotate objects up to 180 degrees, allowing users to view different perspectives and the back sides of objects, while maintaining structural consistency throughout the transformation."
              },
              {
                question: "Can Qwen Image Edit perform artistic style transfers?",
                answer: "Yes, Qwen Image Edit can transform images into various artistic styles, including Studio Ghibli and other aesthetic approaches, while preserving essential features and maintaining visual integrity."
              },
              {
                question: "How does Qwen Image Edit compare to other image editing tools?",
                answer: "Qwen Image Edit achieves state-of-the-art performance across multiple public benchmarks, combining advanced semantic understanding with precise appearance control to deliver professional-grade results."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-4 bg-gray-800 rounded-xl animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 hover:bg-gray-700 transition-colors rounded-xl"
                >
                  <h3 className="text-lg font-semibold text-white flex items-center justify-between">
                    {faq.question}
                    <span className="text-2xl text-gray-400 transition-transform duration-300" style={{transform: openFAQ === index ? 'rotate(45deg)' : 'rotate(0deg)'}}>
                      +
                    </span>
                  </h3>
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
              </div>
                )}
              </div>
            ))}
          </div>
                </div>
      </section>

      {/* 底部广告区域 */}
      <section className="py-8 bg-gray-900/20">
        <div className="container mx-auto px-4 flex justify-center">
          <div id="container-a7371640e16748925b59f8e00271b8ec" className="w-full max-w-4xl"></div>
        </div>
      </section>

      {/* 在页面底部添加订阅区块 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <NewsletterSubscribe />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
